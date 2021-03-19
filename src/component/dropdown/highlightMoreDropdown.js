import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/dropdown/highlightMoreDropdown.css';

const highlightMoreDropdown = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default highlightMoreDropdown;