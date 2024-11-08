import React, { useState, useEffect } from 'react';

interface TimeDiffProps {
  updatedAt: string;
}

const TimeDiff: React.FC<TimeDiffProps> = ({ updatedAt }) => {
  const [timeDiff, setTimeDiff] = useState<string>('');

  useEffect(() => {
    const compareDates = (dateString: string) => {
      const updatedDate = new Date(dateString);
      const currentDate = new Date();
      const diffMs = currentDate.getTime() - updatedDate.getTime();
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

      return `${diffHrs} h ${diffMins} m ${diffSecs} s ago`;
    };

    const interval = setInterval(() => {
      setTimeDiff(compareDates(updatedAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [updatedAt]);

  return (
    <span 
      className={`absolute bottom-4 right-4 transition-all ${timeDiff ? 'opacity-100' : 'opacity-0'}`} 
    >
      Last update: {timeDiff}
    </span>
  );
};

export default TimeDiff;