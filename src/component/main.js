import React, { useState } from 'react';
import LeftMenu from './leftMenu.js';
import RightRecommend from './rightRecommend.js';
import ForYouTab from './forYouTab.js';
import HighlightTab from './highlightTab.js';
import MainDetailTab from './mainDetailTab.js';
import '../css/main.css';


// left menu bar와 main contents, right contents를 담기 위한 main component

const Main = () => {

  // tab을 누르면 그 tab에 맞는 화면 표시하는 state
  const [ isSelect, setIsSelect ] = useState('forYou');

  // highlight tab을 누르면, isSelect state를 highlight로 변경하는 함수
  const changeToHighlight = () => {
    setIsSelect('highlight');
  }

  // more tab을 누르면, isSelect state를 more로 변경하는 함수
  const changeToMore = () => {
    setIsSelect('more');
  }

  // for you tab을 누르면, isSelect state를 forYou로 변경하는 함수
  const changeToForYou = () => {
    setIsSelect('forYou');
  }

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

  // title를 click하면 detail page로 넘기기 위한 state 
  const [ detail, setDetail ] = useState(false);

  // title를 click하면 detail state를 변경시키는 함수
  const changeToDetail = () => {
    setDetail(true);
  }

  // detail state를 false로 변경시키는 함수
  const changeToReturn = () => {
    setDetail(false);
  }

  return(
      <div className = 'main-wrap-box'>
        {/* left menu bar */}
        <div className = 'leftmenu-box'>
          <LeftMenu selected = {isSelect} forYou = {changeToForYou} highlight = {changeToHighlight} more = {changeToMore} back = {changeToReturn}/>
        </div>
        {/* main contents box */}
        {(() => {
          if (isSelect === 'forYou') {
            if (detail === false) {
              return (
                <ForYouTab openState = {isOpen} toOpen = {openShareModal} toClose = {closeShareModal} detail = {changeToDetail} />
              )
            }else {
              return (
                <MainDetailTab back = {changeToReturn}/>
              )
            }
          }
        })()}
        {isSelect === 'highlight' && <HighlightTab />}
        {/* right recommend box */}
        <div className = 'right-recommend-box'>
          <RightRecommend />
        </div>
      </div>
  )
};

export default Main;