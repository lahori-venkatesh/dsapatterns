import React, { memo, useMemo } from 'react';
import { Trophy, Target, Calendar, Zap, TrendingUp } from 'lucide-react';
import { useAppStore } from '../store';

export const StatsOverview: React.FC = memo(() => {
  const { getUserProgress } = useAppStore();
  
  // Memoized progress calculation
  const progress = useMemo(() => getUserProgress(), [getUserProgress]);

  // Memoized stats array for better performance
  const stats = useMemo(() => [
    {
      icon: TrendingUp,
      label: 'Problems Solved',
      value: progress.completedProblems,
      total: progress.totalProblems,
      color: 'blue'
    },
    {
      icon: Trophy,
      label: 'Completion Rate',
      value: progress.totalProblems > 0 ? Math.round((progress.completedProblems / progress.totalProblems) * 100) : 0,
      suffix: '%',
      color: 'emerald'
    },
    {
      icon: Zap,
      label: 'Current Streak',
      value: progress.streakDays,
      suffix: progress.streakDays === 1 ? ' day' : ' days',
      color: 'amber'
    },
    {
      icon: Calendar,
      label: 'Last Active',
      value: progress.lastActiveDate ? 'Today' : 'Never',
      color: 'purple'
    }
  ], [progress]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 relative z-10">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/70 transition-all duration-300 group relative overflow-hidden text-center"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
              stat.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
              stat.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
              stat.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-amber-600' :
              'bg-gradient-to-br from-purple-500 to-purple-600'
            }`}></div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className={`p-3 rounded-xl transition-all duration-200 group-hover:scale-110 ${
                stat.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' :
                stat.color === 'emerald' ? 'bg-emerald-500/20 border border-emerald-500/30' :
                stat.color === 'amber' ? 'bg-amber-500/20 border border-amber-500/30' :
                'bg-purple-500/20 border border-purple-500/30'
              }`}>
                <IconComponent className={`w-6 h-6 ${
                  stat.color === 'blue' ? 'text-blue-400' :
                  stat.color === 'emerald' ? 'text-emerald-400' :
                  stat.color === 'amber' ? 'text-amber-400' :
                  'text-purple-400'
                }`} />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-2 font-medium">{stat.label}</p>
                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                  {typeof stat.value === 'string' ? stat.value : stat.value.toLocaleString()}
                  {stat.total && ` / ${stat.total}`}
                  {stat.suffix && stat.suffix}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

StatsOverview.displayName = 'StatsOverview';