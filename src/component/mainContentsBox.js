import React from 'react';
import MoreDropdown from './dropdown/moreDropdown.js';
import ShareModal from './modals/shareModal.js';
import '../css/mainContentsBox.css';

// main contents(for you tab 한정) 화면을 구성하는 코드

const MainContentsBox = (props) => {

    const { openState, toOpen, toClose, detail } = props;

    return (
        <React.Fragment>
            <div className = 'main-headline-box'>
                <div className = 'main-headline'>For You</div>
                <div className = 'language'>language</div>
                <div className = 'main-description'>Picked by LINER, just for you</div>
            </div>
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
                    <button className = 'interest-title' onClick = {detail}>How to Remember What You Read</button>
                    </div>
                    <div className = 'interest-content'>Why is it that some people seem to be able to read a book once and remember every detail of it for life, while others struggle to recall even the title a few days after putting down a book?
                    </div>
                    <div className = 'interest-photo'></div>
                    <div className = 'interest-address'>fs.blog</div>
                    <div className = 'interest-button-box'>
                        <div className = 'save-button-box'></div>
                        <button className = 'share-button-box' onClick = {toOpen}></button>
                        <MoreDropdown />
                        {/* load share modal */}
                        <ShareModal open = {openState} close = {toClose} ></ShareModal>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainContentsBox;