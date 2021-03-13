import React from 'react';
import '../css/leftMenu.css';

// left menu box를 구현하는 코드

const LeftMenu = () => {
    return(
        // for you menu box
        <React.Fragment>
            <div className = 'for-you-box'>For You</div>
            {/* my highlights menu box */}
            <div className = 'my-highlights-box'>My Highlights</div>
            {/* more menu box */}
            <div className = 'more-box'>More</div>
            {/* upgrade button box */}
            <div className = 'upgrade-box'>Upgrade</div>
        </React.Fragment>
    );
};

export default LeftMenu;