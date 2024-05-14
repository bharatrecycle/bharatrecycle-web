import React, { useState } from 'react';

const ReadMore = ({ text, maxLength = 1000, style }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p style={style}>{text}</p>;
  }

  return (
    <p style={style}>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
        {isExpanded ? ' Show Less' : ' Read More'}
      </span>
    </p>
  );
};

export default ReadMore;
