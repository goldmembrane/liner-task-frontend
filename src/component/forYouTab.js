import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ShareModal from './modals/shareModal.js';
import '../css/forYouTab.css';

// main contents(for you tab 한정) 화면을 구성하는 코드

const ForYouTab = (props) => {

    const { openState, toOpen, toClose, detail } = props;

    return (
        <React.Fragment>
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
                        {/* more dropdown button */}
                        <DropdownButton id = 'more-button-box'>
                            <div className = 'more-option-box'>
                            <Dropdown.Item className = 'more-option' as = 'button'>
                                <span className = 'like-up-image'></span>
                                More pages like this
                            </Dropdown.Item>
                            <Dropdown.Item className = 'more-option' as = 'button'>
                                <span className = 'like-down-image'></span>
                                Fewer pages like this
                            </Dropdown.Item>
                            <Dropdown.Item className = 'more-option' as = 'button'>
                                <span className = 'hide-image'></span>
                                Hide this page
                            </Dropdown.Item>
                            </div>
                        </DropdownButton>
                        {/* load share modal */}
                        <ShareModal open = {openState} close = {toClose} ></ShareModal>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ForYouTab;