import React from 'react';
import '../css/relevantPage.css';
import MoreDropdown from './dropdown/moreDropdown.js';
import ShareModal from './modals/shareModal.js';

const RelevantPage = (props) => {

    const { openState, toOpen, toClose } = props;
    return (
        <React.Fragment>
            <div className = 'main-relevant-box'>
                <div className = 'relevant-content-box'>
                    <div className = 'relevant-title-box'>
                    <button className = 'relevant-title'>How to Remember What You Read</button>
                    </div>
                    <div className = 'relevant-content'>Why is it that some people seem to be able to read a book once and remember every detail of it for life, while others struggle to recall even the title a few days after putting down a book?
                    </div>
                    <div className = 'relevant-photo'></div>
                    <div className = 'relevant-address'>fs.blog</div>
                    <div className = 'relevant-button-box'>
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

export default RelevantPage;