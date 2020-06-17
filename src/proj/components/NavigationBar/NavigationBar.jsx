import React from 'react';

import './NavigationBar.css';
import classnames from 'classnames';

import Search from '../../containers/Search';

function NavigationBar({ className }) {
  return (
    <div className={classnames('navigation-bar', className)}>
      <a href=".">
        <img className="navigation-bar__icon" src="" />
        <p className="navigation-bar__title">Pexels</p>
      </a>
      <Search />
    </div>
  );
}

export default NavigationBar;
