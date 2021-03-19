import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/dropdown/moreDropdown.css';

const MoreDropDown = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default MoreDropDown;