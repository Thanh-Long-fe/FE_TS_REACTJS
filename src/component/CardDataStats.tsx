import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp ? 'text-green-500' : levelDown ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          {rate}

          {levelUp && (
            <svg
              className="w-4 h-4 text-green-500"
              viewBox="0 0 10 11"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M5 0L10 5L9 5.84L5 1.45L1 5.84L0 5L5 0Z" />
            </svg>
          )}
          {levelDown && (
            <svg
              className="w-4 h-4 text-red-500"
              viewBox="0 0 10 11"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M5 11L0 6L0.91 5.16L5 9.55L9.09 5.16L10 6L5 11Z" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
