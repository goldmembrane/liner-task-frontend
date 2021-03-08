import React from 'react';
import '../css/header.css';

// 1. 공통 - header part code

const header = () => {
    return(
        <div className = 'header-box'>
            {/* logo box */}
            <div className = 'logo'></div>
            {/* search bar box */}
            <div className = 'searchbar-box'>
                <div className = 'searchbar'>
                    <input 
                    className = 'search' 
                    type = 'text'
                    placeholder = 'Search on LINER'/>
                </div>
            </div>
            {/* collection right buttons */}
            <div className = 'right-button-box'>
                {/* notification icon box */}
                <div className = 'notification'></div>
                {/* convert PDF button box */}
                <div className = 'convert-PDF-button'>PDF</div>
            </div>
        </div>
    );
};

export default header;