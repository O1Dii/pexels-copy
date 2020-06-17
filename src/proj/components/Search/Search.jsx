import React, { useRef, useState } from 'react';

import './Search.css';
import classnames from 'classnames';
import useOnClickOutside from '../../utils/OnClickOutside';

import SearchDropdownContent from '../SearchDropdownContent/SearchDropdownContent';

function Search({ className, topics }) {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const onSearchChange = ({ target: {value} }) => {
    setSearchText(value);
  };

  const onSearchClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className={classnames('search', className)}>
      <input
        type="text"
        className={classnames('search__input', className)}
        value={searchText}
        onClick={onSearchClick}
        onChange={onSearchChange}
      />
      <div className={classnames('search__content', {
        search__content_open: isOpen,
      })}
      >
        <SearchDropdownContent className="search__dropdown-content" topics={topics} />
      </div>
    </div>
  );
}

export default Search;
