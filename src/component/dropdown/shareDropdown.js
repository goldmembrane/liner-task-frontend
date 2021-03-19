import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/dropdown/shareDropdown.css';
import FullTextShareModal from '../modals/fullTextShareModal.js';
import SummaryShareModal from '../modals/summaryShareModal.js';

const ShareDropdown = (props) => {

    const { full, summary, fullOpen, summaryOpen, fullClose, summaryClose } = props;

    return (
        <React.Fragment>
            <DropdownButton id = 'highlight-contents-share-button'>
                <div className = 'share-option-box'>
                    <Dropdown.Item className = 'share-option' as = 'button' onClick = {fullOpen}>
                        <span className = 'full-highlight'></span>
                        Full text with highlights
                    </Dropdown.Item>
                    <Dropdown.Item className = 'share-option' as = 'button' onClick = {summaryOpen}>
                        <span className = 'summary-highlight'></span>
                        Highlight summary
                    </Dropdown.Item> 
                </div>
            </DropdownButton>
            <FullTextShareModal open = {full} close = {fullClose} />
            <SummaryShareModal open = {summary} close = {summaryClose} />
        </React.Fragment>
    );
};

export default ShareDropdown;