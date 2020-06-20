import React, {useEffect} from 'react';

import './HomePage.css';
import classnames from 'classnames';

import TopSection from '../TopSection/TopSection';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainSection from '../MainSection/MainSection';

function HomePage({ className, topSectionBackgroundImage, topic, photos, getPhotos, searchPhotos }) {
  const loadPhotosFunction = topic ? (...args) => searchPhotos(topic, ...args) : getPhotos;

  useEffect(() => {
    loadPhotosFunction();
  }, [topic]);

  return (
    <div className={classnames('home-page', className)}>
      <NavigationBar />
      <TopSection backgroundImageUrl={topSectionBackgroundImage} />
      <MainSection loadPhotosConsecutive={loadPhotosFunction} photos={photos} />
    </div>
  );
}

export default HomePage;
