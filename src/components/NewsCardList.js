import React from 'react';
import NewsCard from './NewsCard';

const NewsCardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <NewsCard
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default NewsCardList;