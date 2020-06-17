import React from 'react';

import './SearchDropdownContent.css';
import classnames from 'classnames';

import TopicButton from '../TopicButton/TopicButton';

function SearchDropdownContent({ className, topics }) {
  return (
    <div className={classnames('search-dropdown-content', className)}>
      <p className="search-dropdown-content__title">hi</p>
      <div>
        {
          topics.map(each =>
            (<TopicButton
              key={each.name}
              className="search-dropdown-content__topic-button"
              title={each.name}
              imageUrl={each.image}
            />))
        }
      </div>
    </div>
  );
}

export default SearchDropdownContent;
