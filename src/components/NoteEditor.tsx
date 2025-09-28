import React, { useState, useEffect, useRef } from 'react';
import { X, Save, Tag, FileText, Pen, Eraser, Download, Upload, Palette, RotateCcw } from 'lucide-react';
import { useAppStore } from '../store';

export const NoteEditor: React.FC = () => {
  const { isNoteEditorOpen, closeNoteEditor, createNote, updateNote, editingNote, categories } = useAppStore();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [activeTab, setActiveTab] = useState<'text' | 'drawing'>('text');
  const [brushColor, setBrushColor] = useState('#3B82F6');
  const [brushRadius, setBrushRadius] = useState(3);
  const [drawingData, setDrawingData] = useState('');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [paths, setPaths] = useState<Array<{color: string, size: number, points: Array<{x: number, y: number}>}>>([]);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title || '');
      setContent(editingNote.content || '');
      setTags(editingNote.tags || []);
      setDrawingData(editingNote.drawingData || '');
    } else {
      // Auto-populate title with problem title if creating a new note for a problem
      const problemTitle = getProblemTitle();
      setTitle(problemTitle || '');
      setContent('');
      setTags([]);
      setDrawingData('');
    }
  }, [editingNote]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        setContext(ctx);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [activeTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context || !canvasRef.current) return;
    
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newPath = {
      color: brushColor,
      size: brushRadius,
      points: [{ x, y }]
    };
    
    setPaths(prev => [...prev, newPath]);
    
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = brushColor;
    context.lineWidth = brushRadius;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update current path
    setPaths(prev => {
      const newPaths = [...prev];
      const currentPath = newPaths[newPaths.length - 1];
      currentPath.points.push({ x, y });
      return newPaths;
    });
    
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (context) {
      context.beginPath();
    }
  };

  const handleSave = () => {
    if (!title || !title.trim()) {
      alert('Please enter a title for your note');
      return;
    }

    const noteData = {
      title: title.trim(),
      content: content.trim(),
      tags,
      drawingData: paths.length > 0 ? JSON.stringify(paths) : '',
      problemId: editingNote?.problemId || (window as any).currentProblemId,
      patternId: editingNote?.patternId,
      categoryId: editingNote?.categoryId,
    };

    console.log('Saving note with data:', noteData);

    if (editingNote && editingNote.id) {
      updateNote(editingNote.id, noteData);
    } else {
      createNote(noteData);
    }

    // Reset form
    setTitle('');
    setContent('');
    setTags([]);
    setPaths([]);
    setDrawingData('');

    closeNoteEditor();
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    }
  };

  const clearCanvas = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      setPaths([]);
    }
  };

  const undoCanvas = () => {
    if (paths.length > 0) {
      const newPaths = paths.slice(0, -1);
      setPaths(newPaths);
      redrawCanvas(newPaths);
    }
  };

  const redrawCanvas = (pathsToRedraw: typeof paths) => {
    if (!context || !canvasRef.current) return;
    
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    pathsToRedraw.forEach(path => {
      if (path.points.length > 0) {
        context.beginPath();
        context.strokeStyle = path.color;
        context.lineWidth = path.size;
        context.moveTo(path.points[0].x, path.points[0].y);
        
        path.points.forEach(point => {
          context.lineTo(point.x, point.y);
        });
        
        context.stroke();
      }
    });
  };

  const downloadDrawing = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = `${title || 'drawing'}.png`;
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  // Get problem title if editing a problem note
  const getProblemTitle = () => {
    if (!editingNote?.problemId) return null;
    
    for (const category of categories) {
      for (const pattern of category.patterns) {
        const problem = pattern.problems.find(p => p.id === editingNote.problemId);
        if (problem) return problem.title;
      }
    }
    return null;
  };

  const colors = [
    '#3B82F6', // Blue
    '#EF4444', // Red
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#8B5CF6', // Purple
    '#F97316', // Orange
    '#06B6D4', // Cyan
    '#84CC16', // Lime
    '#EC4899', // Pink
    '#000000', // Black
  ];

  if (!isNoteEditorOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {editingNote?.id ? 'Edit Note' : 'Create Note'}
              </h2>
              {getProblemTitle() && (
                <p className="text-sm text-gray-400">for {getProblemTitle()}</p>
              )}
            </div>
          </div>
          <button
            onClick={closeNoteEditor}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700/50 bg-gray-900/50">
          <button
            onClick={() => setActiveTab('text')}
            className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
              activeTab === 'text'
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            {activeTab === 'text' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            )}
            <FileText className="w-4 h-4 inline mr-2" />
            Text Notes
          </button>
          <button
            onClick={() => setActiveTab('drawing')}
            className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
              activeTab === 'drawing'
                ? 'text-purple-400 bg-purple-500/10'
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
            }`}
          >
            {activeTab === 'drawing' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            )}
            <Pen className="w-4 h-4 inline mr-2" />
            Drawing
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh]">
          {activeTab === 'text' ? (
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter note title..."
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  autoFocus
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Write your notes here... (Ctrl+Enter to save)"
                  rows={12}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 resize-none"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tags
                </label>
                <div className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    placeholder="Add a tag..."
                    className="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  />
                  <button
                    onClick={addTag}
                    className="flex items-center space-x-1 px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg transition-all duration-200 border border-purple-500/30"
                  >
                    <Tag className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-700/50 text-gray-300 border border-gray-600/50 rounded-full text-sm"
                    >
                      <span>{tag}</span>
                      <button
                        onClick={() => removeTag(tag)}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {/* Drawing Tools */}
              <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                {/* Color Palette */}
                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-gray-400" />
                  <div className="flex space-x-1">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setBrushColor(color)}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                          brushColor === color ? 'border-white scale-110' : 'border-gray-600 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Brush Size */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Size:</span>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={brushRadius}
                    onChange={(e) => setBrushRadius(Number(e.target.value))}
                    className="w-20"
                  />
                  <span className="text-sm text-gray-300 min-w-[2rem]">{brushRadius}px</span>
                </div>

                {/* Tools */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={undoCanvas}
                    className="flex items-center space-x-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-200 border border-blue-500/30"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Undo</span>
                  </button>
                  <button
                    onClick={clearCanvas}
                    className="flex items-center space-x-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-200 border border-red-500/30"
                  >
                    <Eraser className="w-4 h-4" />
                    <span>Clear</span>
                  </button>
                  <button
                    onClick={downloadDrawing}
                    className="flex items-center space-x-1 px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-all duration-200 border border-green-500/30"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Canvas */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-600/50">
                <canvas
                  ref={canvasRef}
                  width={window.innerWidth > 768 ? 700 : 300}
                  height={400}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="cursor-crosshair"
                />
              </div>

              <div className="text-center text-sm text-gray-400">
                💡 Tip: Use the drawing area to sketch diagrams, algorithms, or visual explanations
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-700/50 bg-gray-900/50">
          <button
            onClick={closeNoteEditor}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            <span>{editingNote?.id ? 'Update' : 'Save'} Note</span>
          </button>
        </div>
      </div>
    </div>
  );
};