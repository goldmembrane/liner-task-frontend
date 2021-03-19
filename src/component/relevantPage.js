import React from 'react';
import '../css/relevantPage.css';
import MoreDropdown from './dropdown/moreDropdown.js';
import ShareModal from './modals/shareModal.js';

const RelevantPage = (props) => {

    const { openState, toOpen, toClose, item } = props;
    return (
        <React.Fragment>
            <div className = 'main-relevant-box'>
                <div className = 'relevant-content-box'>
                    <div className = 'relevant-title-box'>
                    <button className = 'relevant-title'>{item.snippet.title}</button>
                    </div>
                    <div className = 'relevant-content'>{item.snippet.description}</div>
                    <img className = 'relevant-photo' src = {item.snippet.image} alt = ''></img>
                    <div className = 'relevant-address'>{item.snippet.address}</div>
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