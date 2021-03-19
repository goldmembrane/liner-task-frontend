import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/dropdown/filterDropdown.css';

const FilterDropdown = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default FilterDropdown;