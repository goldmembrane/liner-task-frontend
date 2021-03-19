import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/dropdown/pageDropdown.css';

const PageDropDown = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default PageDropDown;