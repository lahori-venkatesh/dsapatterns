import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X } from 'lucide-react';

interface Enrollment {
  id: string;
  name: string;
  country: string;
  timestamp: number;
}

const MOCK_ENROLLMENTS: Enrollment[] = [
  { id: '1', name: 'Raj Kumar', country: 'India', timestamp: Date.now() - 120000 },
  { id: '2', name: 'Priya Sharma', country: 'India', timestamp: Date.now() - 180000 },
  { id: '3', name: 'Amit Patel', country: 'India', timestamp: Date.now() - 240000 },
  { id: '4', name: 'Sneha Reddy', country: 'India', timestamp: Date.now() - 300000 },
  { id: '5', name: 'Vikram Singh', country: 'India', timestamp: Date.now() - 360000 },
  { id: '6', name: 'Anjali Gupta', country: 'India', timestamp: Date.now() - 420000 },
  { id: '7', name: 'Rahul Verma', country: 'India', timestamp: Date.now() - 480000 },
  { id: '8', name: 'Neha Kapoor', country: 'India', timestamp: Date.now() - 540000 },
  { id: '9', name: 'Arjun Desai', country: 'India', timestamp: Date.now() - 600000 },
  { id: '10', name: 'Pooja Iyer', country: 'India', timestamp: Date.now() - 660000 },
];

export const LiveEnrollments: React.FC<{ isPremium: boolean }> = ({ isPremium }) => {
  const [currentEnrollment, setCurrentEnrollment] = useState<Enrollment | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const currentIndexRef = useRef(0);

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
    if (isPremium || enrollments.length === 0) {
      console.log('LiveEnrollments: Not showing - isPremium:', isPremium, 'enrollments:', enrollments.length);
      return;
    }

    console.log('LiveEnrollments: Starting animation cycle');

    const showNextEnrollment = () => {
      setIsVisible(false);

      setTimeout(() => {
        const enrollment = enrollments[currentIndexRef.current];
        console.log('Showing enrollment:', enrollment);
        setCurrentEnrollment(enrollment);
        setIsVisible(true);

        currentIndexRef.current = (currentIndexRef.current + 1) % enrollments.length;
      }, 500);
    };

    showNextEnrollment();

    const interval = setInterval(() => {
      showNextEnrollment();
    }, 8000);

    return () => {
      console.log('LiveEnrollments: Cleaning up');
      clearInterval(interval);
    };
  }, [isPremium, enrollments]);

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

  if (isPremium) {
    console.log('LiveEnrollments: Hidden for premium users');
    return null;
  }

  if (!currentEnrollment) {
    console.log('LiveEnrollments: No current enrollment yet');
    return null;
  }

  console.log('LiveEnrollments: Rendering with visibility:', isVisible);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
      style={{ maxWidth: '320px' }}
    >
      <div className="bg-gradient-to-r from-emerald-500/95 to-teal-600/95 backdrop-blur-md border border-emerald-400/30 rounded-xl shadow-2xl">
        <div className="relative p-3">
          <button
            onClick={handleClose}
            className="absolute top-1.5 right-1.5 p-0.5 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5 text-white" />
          </button>

          <div className="flex items-start gap-2.5">
            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-white" />
            </div>

            <div className="flex-1 pr-5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-white font-bold text-sm">
                  {currentEnrollment.name}
                </span>
                <span className="text-emerald-100 text-xs">from {currentEnrollment.country}</span>
              </div>

              <p className="text-white text-xs font-medium mb-0.5">
                upgraded to <span className="font-bold">Premium!</span>
              </p>

              <p className="text-emerald-100 text-[11px]">
                {getTimeAgo(currentEnrollment.timestamp)}
              </p>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-white/20 rounded-b-xl overflow-hidden">
          <div
            className="h-full bg-white"
            style={{
              animation: isVisible ? 'progress 6s linear forwards' : 'none'
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
