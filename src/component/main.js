import React, { useState } from 'react';
import LeftMenu from './leftMenu.js';
import RightRecommend from './rightRecommend.js';
import ForYouTab from './forYouTab.js';
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
          <LeftMenu />
        </div>
        {/* for you main contents box */}
        <ForYouTab openState = {isOpen} toOpen = {openShareModal} toClose = {closeShareModal}/>
        {/* right recommend box */}
        <div className = 'right-recommend-box'>
          <RightRecommend />
        </div>
      </div>
  )
};

export default Main;