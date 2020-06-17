import React from 'react';

import './TopicButton.css';
import classnames from 'classnames';

function TopicButton({ imageUrl, title, className }) {
  return (
    <div className={classnames('topic-button', className)}>
      <img src={imageUrl} />
      <p>{title}</p>
    </div>
  );
}

export default TopicButton;
