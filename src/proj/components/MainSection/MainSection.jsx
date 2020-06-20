import React, {useState} from 'react';

import './MainSection.css';
import classnames from 'classnames';

import InfiniteScroll from 'react-infinite-scroll-component';

function MainSection({ className, loadPhotosConsecutive, photos }) {
  // Тут тяжело делать колонки, как у них. На это надо время, надеюсь, ты с этим сама справишься)

  const [counter, setCounter] = useState(2);

  const nextPhotos = () => {
    loadPhotosConsecutive(counter);
    setCounter(counter + 1);
  };

  console.log(photos);

  return (
    <div className={classnames('main-section', className)}>

      <InfiniteScroll
        next={nextPhotos}
        hasMore={true}
        loader={<p>Загрузка...</p>}
        endMessage={<p>Нет постов</p>}
        dataLength={photos.length}>
        <div className="main-section__containers-container">
          <div className="main-section__container">
            {photos.map(each => <img key={each.id} src={each.src.tiny} />)}
          </div>
        </div>
      </InfiniteScroll>

    </div>
  );
}

export default MainSection;
