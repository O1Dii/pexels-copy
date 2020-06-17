import React, {useEffect} from 'react';

import './HomePage.css';
import classnames from 'classnames';

import TopSection from '../TopSection/TopSection';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainSection from '../MainSection/MainSection';

function HomePage({ className, topSectionBackgroundImage, photos, getPhotos }) {
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className={classnames('home-page', className)}>
      <NavigationBar />
      <TopSection backgroundImageUrl={topSectionBackgroundImage} />
      <MainSection getPhotos={getPhotos} photos={photos} />
    </div>
  );
}

export default HomePage;
