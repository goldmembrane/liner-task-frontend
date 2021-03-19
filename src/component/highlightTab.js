import React, { useState } from 'react';
import PageDropdown from './dropdown/pageDropdown.js';
import FilterDropdown from './dropdown/filterDropdown.js';
import ShareDropdown from './dropdown/shareDropdown.js';
import HighlightMoreDropdown from './dropdown/highlightMoreDropdown.js';
import '../css/highlightTab.css';

// highlight tab 화면 구성 코드

const HighlightTab = (props) => {

    const { fullOpenState, summaryOpenState, toFullOpen, toFullClose, toSummaryOpen, toSummaryClose, detail } = props;

    // search button을 눌렀는지 확인하는 state
    const [ isPush, setIsPush ] = useState(false);

    // search button을 누르면 isPush를 true로 바꾸는 함수
    const searchOn = () => {
        setIsPush(true);
    }

    // search button을 누르면 isPush를 false로 바꾸는 함수

    const searchOff = () => {
        setIsPush(false);
    }

    return (
        <React.Fragment>
            <div className = 'highlight-headline-box'>
                <div className = 'highlight-headline'>
                    My Highlights
                </div>
                <div className = 'information'></div>
                <div className = 'highlight-state'>1 page, 0 highlights</div>
            </div>
            { isPush ? 
            <div className = 'highlight-button-box-search-mode'>
                <div className = 'highlight-page-dropdown-button'>Pages</div>
                <div className = 'highlight-search-bar'>
                    <input
                        className = 'highlight-search'
                        type = 'text'
                        placeholder = 'search my highlights'
                    />
                    <div className = 'highlight-search-button'></div>
                </div>
                <button className = 'cancel-button' onClick = {searchOff}>Cancel</button>
                <div className = 'search-options-button'>Search Options</div>
            </div> :
            <div className = 'highlight-button-box'>
                <div className = 'highlight-highlight-button'>Highlight</div>
                <div className = 'highlight-tag-button'>Tags</div>
                <PageDropdown />
                <FilterDropdown />
                <button className = 'search-button' onClick = {searchOn}></button>
            </div>}
            <div className = 'highlight-contents-box'>
                <div className = 'highlight-contents-title-box'>
                    <button className = 'highlight-contents-title' onClick = {detail}>How to Remember What You Read</button>
                    <div className = 'highlight-contents-photo'>
                        <div className = 'check-box'></div>
                    </div>
                </div>
                <div className = 'highlight-contents-footer-box'>
                    <div className = 'highlight-contents-address'>fs.blog | Mar 16, 2021</div>
                    <div className = 'highlight-contents-button-box'>
                        <ShareDropdown full = {fullOpenState} summary = {summaryOpenState} fullOpen = {toFullOpen} summaryOpen = {toSummaryOpen} fullClose = {toFullClose} summaryClose = {toSummaryClose}/>
                        <HighlightMoreDropdown />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HighlightTab;