import React, { useState } from 'react';
import ShareModal from './modals/shareModal.js';
import '../css/main.css';


// left menu bar와 main contents, right contents를 담기 위한 main component

const Main = () => {

  // share button을 누르면 modal이 표시되게 하는 state
  const [ isOpen, setIsOpen ] = useState(false);

  // share button을 누르면 isOpen state를 변경시키는 함수
  const openShareModal = () => {
    setIsOpen(true);
  }

  // share modal이 열리면, 닫기 위해 state를 변경시키는 함수
  const closeShareModal = () => {
    setIsOpen(false);
  }

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
        {/* for you main contents box */}
        <div className = 'main-interests-box'>
          <div className = 'interests-content-box'>
            <div className = 'interest-tag-box'>
              <div className = 'interest-tag'>#david foster wallace</div>
              <div className = 'interest-tag'>#education</div>
              <div className = 'interest-tag'>#marcus aurelius</div>
              <div className = 'interest-tag'>#nicholas carr</div>
              <div className = 'interest-tag'>#reading</div>
            </div>
            <div className = 'interest-title-box'>
              <a href = '' className = 'interest-title'>How to Remember What You Read</a>
            </div>
            <div className = 'interest-content'>Why is it that some people seem to be able to read a book once and remember every detail of it for life, while others struggle to recall even the title a few days after putting down a book?
</div>
            <div className = 'interest-photo'></div>
            <div className = 'interest-address'>fs.blog</div>
            <div className = 'interest-button-box'>
              <div className = 'save-button-box'></div>
              <button className = 'share-button-box' onClick = {openShareModal}></button>
              <div className = 'more-button-box'></div>
              {/* load share modal */}
              <ShareModal open = {isOpen} close = {closeShareModal} ></ShareModal>
            </div>
          </div>
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

export default Main;