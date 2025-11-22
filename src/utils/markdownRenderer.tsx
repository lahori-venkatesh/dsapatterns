import React from 'react';

export const renderMarkdown = (markdown: string): JSX.Element => {
  // If content contains HTML tags, render as HTML
  if (markdown.includes('<h1>') || markdown.includes('<h2>') || markdown.includes('<h3>') ||
      markdown.includes('<div') || markdown.includes('<table') || markdown.includes('<pre')) {
    return (
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: markdown }}
        style={{
          color: '#e5e7eb',
          lineHeight: '1.6'
        }}
      />
    );
  }
  const lines = markdown.split('\n');
  const elements: JSX.Element[] = [];
  let currentList: any[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLanguage = '';
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="mb-4 ml-4 space-y-2">
          {currentList.map((item: any, i) => (
            <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-2">
              <span className={`${item.iconColor || 'text-blue-400'} mt-1 font-bold`}>
                {item.icon || '•'}
              </span>
              <span className="flex-1">{item.content || item}</span>
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushCodeBlock = () => {
    if (codeBlockContent.length > 0) {
      elements.push(
        <pre key={`code-${key++}`} className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto border border-gray-700">
          <code className="text-sm text-gray-200 font-mono">
            {codeBlockContent.join('\n')}
          </code>
        </pre>
      );
      codeBlockContent = [];
      codeBlockLanguage = '';
    }
  };

  lines.forEach((line, index) => {
    // Handle code blocks
    if (line.trim().match(/^```/)) {
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
        codeBlockLanguage = line.trim().replace(/```/, '');
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // H1
    if (line.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={`h1-${key++}`} className="text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b-2 border-blue-500">
          {line.replace('# ', '')}
        </h1>
      );
      return;
    }

    // H2
    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${key++}`} className="text-2xl font-semibold text-gray-100 mt-6 mb-3 pb-2 border-b border-gray-600">
          {line.replace('## ', '')}
        </h2>
      );
      return;
    }

    // H3
    if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${key++}`} className="text-xl font-semibold text-gray-200 mt-5 mb-2">
          {line.replace('### ', '')}
        </h3>
      );
      return;
    }

    // H4
    if (line.startsWith('#### ')) {
      flushList();
      elements.push(
        <h4 key={`h4-${key++}`} className="text-lg font-medium text-gray-300 mt-4 mb-2">
          {line.replace('#### ', '')}
        </h4>
      );
      return;
    }

    // HR
    if (line.trim() === '---') {
      flushList();
      elements.push(
        <hr key={`hr-${key++}`} className="my-6 border-gray-600" />
      );
      return;
    }

    // Lists
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      let content = line.trim().replace(/^[-*] /, '');
      let icon = '•';
      let iconColor = 'text-blue-400';

      // Check for checkmark/cross at start
      if (content.startsWith('✅')) {
        icon = '✓';
        iconColor = 'text-green-400';
        content = content.replace(/^✅\s*/, '');
      } else if (content.startsWith('❌')) {
        icon = '✗';
        iconColor = 'text-red-400';
        content = content.replace(/^❌\s*/, '');
      } else {
        // Remove other leading emoji/symbols
        content = content.replace(/^[⏱️💻🎯📝🛠️🏢🎮🚀📊💡🔗📖🧭💬⏰🎨📚🎓📞☑️✔️▫️▪️◾◽]+\s*/, '');
      }

      // Parse bold and inline code
      const parsed = parseInlineFormatting(content);
      currentList.push({ content: parsed, icon, iconColor });
      return;
    }

    // Numbered lists
    if (line.trim().match(/^\d+\.\s/)) {
      flushList();
      const content = line.trim().replace(/^\d+\.\s/, '');
      const parsed = parseInlineFormatting(content);
      if (currentList.length === 0) {
        elements.push(<div key={`num-list-start-${key++}`} className="mb-4" />);
      }
      elements.push(
        <div key={`num-item-${key++}`} className="text-gray-300 mb-2 ml-4">
          <span className="font-semibold mr-2">{line.trim().match(/^(\d+\.)/)?.[0]}</span>
          {parsed}
        </div>
      );
      return;
    }

    // Empty line
    if (line.trim() === '') {
      flushList();
      if (elements.length > 0) {
        elements.push(<div key={`space-${key++}`} className="h-2" />);
      }
      return;
    }

    // Regular paragraph
    flushList();
    const parsed = parseInlineFormatting(line.trim());
    if (parsed) {
      elements.push(
        <p key={`p-${key++}`} className="text-gray-300 mb-3 leading-relaxed">
          {parsed}
        </p>
      );
    }
  });

  flushList();
  flushCodeBlock();

  return <div className="space-y-1">{elements}</div>;
};

const parseInlineFormatting = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let current = '';
  let i = 0;
  let partKey = 0;

  // Clean up text - remove leading emojis and clean quotes
  text = text.replace(/^[⏱️💻🎯📝🛠️🏢🎮🚀📊💡🔗✅❌📖🧭💬⏰🎨📚🎓📞]+\s*/, '');

  while (i < text.length) {
    // Bold **text**
    if (text.slice(i, i + 2) === '**') {
      if (current) {
        parts.push(<span key={`text-${partKey++}`}>{current}</span>);
        current = '';
      }
      const endIndex = text.indexOf('**', i + 2);
      if (endIndex !== -1) {
        const boldText = text.slice(i + 2, endIndex);
        parts.push(
          <strong key={`bold-${partKey++}`} className="font-semibold text-white">
            {boldText}
          </strong>
        );
        i = endIndex + 2;
        continue;
      }
    }

    // Inline code `code`
    if (text[i] === '`' && text[i - 1] !== '\\') {
      if (current) {
        parts.push(<span key={`text-${partKey++}`}>{current}</span>);
        current = '';
      }
      const endIndex = text.indexOf('`', i + 1);
      if (endIndex !== -1) {
        const codeText = text.slice(i + 1, endIndex);
        parts.push(
          <code key={`code-${partKey++}`} className="bg-gray-800 px-2 py-0.5 rounded text-blue-300 text-sm font-mono">
            {codeText}
          </code>
        );
        i = endIndex + 1;
        continue;
      }
    }

    // Handle quotes - render as italic blue text without quotes
    if (text[i] === '"') {
      const endIndex = text.indexOf('"', i + 1);
      if (endIndex !== -1) {
        if (current) {
          parts.push(<span key={`text-${partKey++}`}>{current}</span>);
          current = '';
        }
        const quotedText = text.slice(i + 1, endIndex);
        parts.push(
          <span key={`quote-${partKey++}`} className="italic text-blue-200">
            {quotedText}
          </span>
        );
        i = endIndex + 1;
        continue;
      }
    }

    current += text[i];
    i++;
  }

  if (current) {
    parts.push(<span key={`text-${partKey++}`}>{current}</span>);
  }

  return parts.length > 0 ? <>{parts}</> : <span>{text}</span>;
};
