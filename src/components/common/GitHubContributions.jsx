import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

function GitHubContributions({ username = 'Kazuno0101' }) {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    color
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query, variables: { username } }),
        });

        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar;
        setContributions(calendar.weeks);
        setTotalContributions(calendar.totalContributions);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (GITHUB_TOKEN) {
      fetchContributions();
    } else {
      setError('GitHub token not configured');
      setLoading(false);
    }
  }, [username]);

  const getContributionColor = (count, isDark) => {
    if (count === 0) return isDark ? '#161b22' : '#ebedf0';
    if (count <= 3) return isDark ? '#0e4429' : '#9be9a8';
    if (count <= 6) return isDark ? '#006d32' : '#40c463';
    if (count <= 9) return isDark ? '#26a641' : '#30a14e';
    return isDark ? '#39d353' : '#216e39';
  };

  if (loading) {
    return (
      <div className="p-4 bg-white/60 dark:bg-steel/30 rounded-2xl">
        <div className="flex items-center justify-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coffee dark:border-cream"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white/60 dark:bg-steel/30 rounded-2xl">
        <p className="text-center text-steel dark:text-sage text-sm">Unable to load GitHub contributions</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white/60 dark:bg-steel/30 rounded-2xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-steel dark:text-sage">
          {totalContributions} contributions in the last year
        </span>
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-coffee dark:text-cream hover:underline"
        >
          @{username}
        </a>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex gap-[3px]" style={{ minWidth: 'max-content' }}>
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.contributionDays.map((day, dayIndex) => (
                <motion.div
                  key={day.date}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: weekIndex * 0.01 + dayIndex * 0.005 }}
                  className="w-[10px] h-[10px] rounded-sm cursor-pointer hover:ring-1 hover:ring-coffee dark:hover:ring-cream"
                  style={{ 
                    backgroundColor: getContributionColor(
                      day.contributionCount, 
                      document.documentElement.classList.contains('dark')
                    )
                  }}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 mt-3">
        <span className="text-xs text-steel dark:text-sage mr-1">Less</span>
        {[0, 3, 6, 9, 12].map((level) => (
          <div
            key={level}
            className="w-[10px] h-[10px] rounded-sm"
            style={{ 
              backgroundColor: getContributionColor(
                level, 
                document.documentElement.classList.contains('dark')
              )
            }}
          />
        ))}
        <span className="text-xs text-steel dark:text-sage ml-1">More</span>
      </div>
    </div>
  );
}

export default GitHubContributions;
