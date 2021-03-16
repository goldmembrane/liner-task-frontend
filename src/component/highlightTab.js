import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/highlightTab.css';

// highlight tab 화면 구성 코드

const HighlightTab = () => {

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
            <div className = 'highlight-box'>
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
                    <DropdownButton id = 'page-dropdown-button' title = 'Pages'>
                        <div className = 'page-option-box'>
                            <Dropdown.Header className = 'page-label'>
                                View as
                            </Dropdown.Header>
                            <Dropdown.Item className = 'page-option' as = 'button'>
                                Pages
                            </Dropdown.Item>
                            <Dropdown.Item className = 'page-option' as = 'button'>
                                Highlights
                            </Dropdown.Item>
                        </div>
                    </DropdownButton>
                    <DropdownButton id = 'filter-button'>
                        <div className = 'filter-option-box'>
                            <Dropdown.Header className = 'filter-tags'>
                                Color Filter
                                <div className = 'reset-button'>Reset</div>
                            </Dropdown.Header>
                            <Dropdown.Item className = 'filter' as = 'button'>
                                <span className = 'color-image-1'></span>
                                Yellow
                            </Dropdown.Item>
                            <Dropdown.Item className = 'filter' as = 'button'>
                                <span className = 'color-image-2'></span>
                                Mint
                            </Dropdown.Item>
                            <Dropdown.Item className = 'filter' as = 'button'>
                                <span className = 'color-image-3'></span>
                                Orange
                            </Dropdown.Item>
                            <Dropdown.Item className = 'filter' as = 'button'>
                                <span className = 'color-image-4'></span>
                                Violet
                            </Dropdown.Item>
                            <Dropdown.Item className = 'filter' as = 'button'>
                                <span className = 'color-image-5'></span>
                                Blue
                            </Dropdown.Item>
                            <Dropdown.Item className = 'filter' as = 'button'>
                                <span className = 'color-image-6'></span>
                                Pink
                            </Dropdown.Item>
                        </div>
                    </DropdownButton>
                    <button className = 'search-button' onClick = {searchOn}></button>
                </div>}
                <div className = 'highlight-contents-box'>
                    <div className = 'highlight-contents-title'>How to Remember What You Read</div>
                    <div className = 'highlight-contents-photo'>
                        <div className = 'check-box'></div>
                    </div>
                    <div className = 'highlight-contents-address'>fs.blog | Mar 16, 2021</div>
                    <div className = 'highlight-contents-button-box'>
                        <DropdownButton id = 'highlight-contents-share-button'>
                            <div className = 'share-option-box'>
                                <Dropdown.Item className = 'share-option' as = 'button'>
                                    <span className = 'full-highlight'></span>
                                    Full text with highlights
                                </Dropdown.Item>
                                <Dropdown.Item className = 'share-option' as = 'button'>
                                    <span className = 'summary-highlight'></span>
                                    Highlight summary
                                </Dropdown.Item> 
                            </div>
                        </DropdownButton>
                        <DropdownButton id = 'highlight-contents-more-button'>
                            <div className = 'highlight-more-option-box'>
                                <Dropdown.Item className = 'more-highlight-option' as = 'button'>
                                    <span className = 'export-button'></span>
                                    Export
                                </Dropdown.Item>
                                <Dropdown.Item className = 'more-highlight-option' as = 'button'>
                                    <span className = 'edit-button'></span>
                                    Edit Title
                                </Dropdown.Item>
                                <Dropdown.Item className = 'more-highlight-option' as = 'button'>
                                    <span className = 'original-button'></span>
                                    View Original
                                </Dropdown.Item>
                                <Dropdown.Item className = 'more-highlight-option' as = 'button'>
                                    <span className = 'trash-button'></span>
                                    Move to trash
                                </Dropdown.Item>
                            </div>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HighlightTab;