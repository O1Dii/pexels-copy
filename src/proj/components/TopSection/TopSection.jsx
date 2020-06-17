import React from 'react';

import Search from '../../containers/Search';

import './TopSection.css';

function TopSection({ backgroundImageUrl }) {
  return (
    <div className="top-section">
      <img className="top-section__background-image" src={backgroundImageUrl} />
      <h1 className="top-section__title">The world's first inclusive
        <span className="hero__title__free">
          <svg xmlns=" http: www.w3.org 2000 svg" viewBox=" 0 0 190 100" preserveAspectRatio="none">
            <rect fill=" #ef3d3b" width=" 190" height=" 16.67"></rect>
            <rect fill=" #ee6e26" y=" 16.67" width=" 190" height=" 16.67"></rect>
            <rect fill=" #fbc324" y=" 33.33" width=" 190" height=" 16.67"></rect>
            <rect fill=" #00a081" y=" 50" width=" 190" height=" 16.67"></rect>
            <rect fill=" #3d6db5" y=" 66.67" width=" 190" height=" 16.67"></rect>
            <rect fill=" #785ca7" y=" 83.33" width=" 190" height=" 16.67"></rect>
          </svg>
          <span className="hero__title__free__text">free</span>
        </span> stock photo & video library</h1>
      <Search className="top-section__search" />
    </div>
  );
}

export default TopSection;
