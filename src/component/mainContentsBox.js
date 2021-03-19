import React from 'react';
import MoreDropdown from './dropdown/moreDropdown.js';
import ShareModal from './modals/shareModal.js';
import '../css/mainContentsBox.css';

// main contents(for you tab 한정) 화면을 구성하는 코드

const MainContentsBox = (props) => {

    const { openState, toOpen, toClose, detail, item, change } = props;

    return (
        <React.Fragment>
            
            <div className = 'main-interests-box'>
                <div className = 'interests-content-box'>
                    <div className = 'interest-tag-box'>
                        <div className = 'interest-tag'>{item.snippet.tags.tagName}</div>
                    </div>
                    <div className = 'interest-title-box'>
                    <button className = 'interest-title' onClick = {() => {change(item); detail()}}>{item.snippet.title}</button>
                    </div>
                    <div className = 'interest-content'>{item.snippet.description}</div>
                    <img className = 'interest-photo' src = {item.snippet.image} alt = ''></img>
                    <div className = 'interest-address'>{item.snippet.address}</div>
                    <div className = 'interest-button-box'>
                        <div className = 'save-button-box'></div>
                        <button className = 'share-button-box' onClick = {toOpen}></button>
                        <MoreDropdown />
                        {/* load share modal */}
                        <ShareModal open = {openState} close = {toClose} address = {item.snippet.url}></ShareModal>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainContentsBox;