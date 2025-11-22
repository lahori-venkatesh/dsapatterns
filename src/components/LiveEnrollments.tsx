import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

interface Enrollment {
  id: string;
  name: string;
  country: string;
  timestamp: number;
}

const MOCK_ENROLLMENTS: Enrollment[] = [
  { id: '1', name: 'Raj K.', country: 'India', timestamp: Date.now() - 120000 },
  { id: '2', name: 'Sarah M.', country: 'USA', timestamp: Date.now() - 180000 },
  { id: '3', name: 'Ahmed S.', country: 'UAE', timestamp: Date.now() - 240000 },
  { id: '4', name: 'Priya R.', country: 'India', timestamp: Date.now() - 300000 },
  { id: '5', name: 'David L.', country: 'UK', timestamp: Date.now() - 360000 },
  { id: '6', name: 'Maria G.', country: 'Brazil', timestamp: Date.now() - 420000 },
  { id: '7', name: 'Yuki T.', country: 'Japan', timestamp: Date.now() - 480000 },
  { id: '8', name: 'Chen W.', country: 'China', timestamp: Date.now() - 540000 },
  { id: '9', name: 'Emma B.', country: 'Canada', timestamp: Date.now() - 600000 },
  { id: '10', name: 'Luis P.', country: 'Mexico', timestamp: Date.now() - 660000 },
];

export const LiveEnrollments: React.FC<{ isPremium: boolean }> = ({ isPremium }) => {
  const [currentEnrollment, setCurrentEnrollment] = useState<Enrollment | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('premium_enrollments');
    if (stored) {
      setEnrollments(JSON.parse(stored));
    } else {
      localStorage.setItem('premium_enrollments', JSON.stringify(MOCK_ENROLLMENTS));
      setEnrollments(MOCK_ENROLLMENTS);
    }
  }, []);

  useEffect(() => {
    if (isPremium || enrollments.length === 0) return;

    const showNextEnrollment = () => {
      setIsVisible(false);

      setTimeout(() => {
        const enrollment = enrollments[currentIndex];
        setCurrentEnrollment(enrollment);
        setIsVisible(true);

        setCurrentIndex((prev) => (prev + 1) % enrollments.length);
      }, 500);
    };

    const hideNotification = () => {
      setIsVisible(false);
    };

    showNextEnrollment();

    const showInterval = setInterval(showNextEnrollment, 8000);
    const hideTimeout = setTimeout(hideNotification, 6000);

    return () => {
      clearInterval(showInterval);
      clearTimeout(hideTimeout);
    };
  }, [isPremium, enrollments, currentIndex]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const getTimeAgo = (timestamp: number) => {
    const minutes = Math.floor((Date.now() - timestamp) / 60000);
    if (minutes < 1) return 'just now';
    if (minutes === 1) return '1 minute ago';
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  if (isPremium || !currentEnrollment) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-emerald-500/95 to-teal-600/95 backdrop-blur-md border border-emerald-400/30 rounded-2xl shadow-2xl max-w-sm">
        <div className="relative p-4">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1 pr-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-bold text-base">
                  {currentEnrollment.name}
                </span>
                <span className="text-emerald-100 text-sm">from {currentEnrollment.country}</span>
              </div>

              <p className="text-white text-sm font-medium mb-1">
                just upgraded to <span className="font-bold">Lifetime Premium!</span> 🎉
              </p>

              <p className="text-emerald-100 text-xs">
                {getTimeAgo(currentEnrollment.timestamp)}
              </p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="text-white/90 text-xs text-center font-medium">
              Join {enrollments.length}+ users with lifetime access
            </p>
          </div>
        </div>

        <div className="h-1 bg-white/20 rounded-b-2xl overflow-hidden">
          <div
            className="h-full bg-white animate-progress"
            style={{
              animation: 'progress 6s linear forwards'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
