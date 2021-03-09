import React from 'react';
import '../css/main.css';

// left menu bar와 main contents, right contents를 담기 위한 main component

const main = () => {
  return(
      <div className = 'main-wrap-box'>
        {/* left menu bar */}
        <div className = 'leftmenu-box'>
          {/* for you menu box */}
          <div className = 'for-you-box'>For You</div>
          {/* my highlights menu box */}
          <div className = 'my-highlights-box'>My Highlights</div>
          {/* more menu box */}
          <div className = 'more-box'>More</div>
          {/* upgrade button box */}
          <div className = 'upgrade-box'>Upgrade</div>
        </div>
        {/* right recommend box */}
        <div className = 'right-recommend-box'>
            {/* recommend keyword box */}
            <div className = 'trending-keywords-box'>
                <div className = 'trending-keywords-title'>Trending Keywords</div>
                <div className = 'trending-keywords-tags'></div>
            </div>
            {/* recommend page box */}
            <div className = 'trending-pages-box'>
                <div className = 'trending-pages-title'>Trending Pages</div>
                <div className = 'trending-pages-list'></div>
            </div>
        </div>
      </div>
  )
};

export default main;