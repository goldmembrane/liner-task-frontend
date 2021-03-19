import React, { useState } from 'react';
import LeftMenu from './leftMenu.js';
import RightRecommend from './rightRecommend.js';
import RightRelevant from './rightRelevant.js';
import MainContentsBox from './mainContentsBox.js';
import HighlightTab from './highlightTab.js';
import MainDetailTab from './mainDetailTab.js';
import HighlightDetailTab from './highlightDetailTab.js';
import '../css/main.css';
import { fakeData } from '../fakeData.js';


// left menu bar와 main contents, right contents를 담기 위한 main component

const Main = () => {

  const items = fakeData;

  const [ selectedItem, setSelectedItem ] = useState(null);

  const changeCurrentDetail = (item) => {
    setSelectedItem(item);
  }
  
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
  const [ isFullOpen, setIsFullOpen ] = useState(false);
  const [ isSummaryOpen, setIsSummaryOpen ] = useState(false);
  
  // share button을 누르면 isOpen state를 변경시키는 함수
  const openShareModal = () => {
    setIsOpen(true);
  }
  
  const openFullModal = () => {
    setIsFullOpen(true);
  }
  
  const openSummaryModal = () => {
    setIsSummaryOpen(true);
  }
  
  // share modal이 열리면, 닫기 위해 state를 변경시키는 함수
  const closeShareModal = () => {
    setIsOpen(false);
  }
  
  const closeFullModal = () => {
    setIsFullOpen(false);
  }
  
  const closeSummaryModal = () => {
    setIsSummaryOpen(false);
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
  
  const listItem = items.map(item => 
    <MainContentsBox openState = {isOpen} toOpen = {openShareModal} toClose = {closeShareModal} detail = {changeToDetail} item = {item} change = {changeCurrentDetail}/> )

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
                <React.Fragment>
                  <div className = 'main-headline-box'>
                    <div className = 'main-headline'>For You</div>
                    <div className = 'language'>language</div>
                    <div className = 'main-description'>Picked by LINER, just for you</div>
                  </div>
                  {listItem}
                </React.Fragment>
              )
            }else {
              return (
                <React.Fragment>
                  <div className = 'main-detail-button-box'>
                    <button className = 'back-to-main' onClick = {changeToReturn}></button>
                    <div className = 'main-detail-save-button'></div>
                    <div className = 'main-detail-share-button'></div>
                    <div className = 'main-detail-more-button'></div>
                  </div>
                  <MainDetailTab openState = {isOpen} toOpen = {openShareModal} toClose = {closeShareModal} item = {selectedItem} data = {items}/>
                </React.Fragment>
              )
            }
          } else if ( isSelect === 'highlight' ) {
            if ( detail === false ) {
              return (
                <HighlightTab fullOpenState = {isFullOpen} summaryOpenState = {isSummaryOpen} toFullOpen = {openFullModal} toFullClose = {closeFullModal} toSummaryOpen = {openSummaryModal} toSummaryClose = {closeSummaryModal} detail = {changeToDetail}/>
              )
            }else {
              return (
                <HighlightDetailTab back = {changeToReturn} />
              )
            }
          }
        })()}
        {/* right recommend box */}
        <div className = 'right-recommend-box'>
          {detail === false ? <RightRecommend /> : <RightRelevant />}
        </div>
      </div>
  )
};

export default Main;