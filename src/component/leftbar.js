import React from 'react';
import '../css/leftbar.css';

// 2. 공통 - left menu part code

const leftmenu = () => {
    return(
        // left menu bar
        <div className = 'leftmenu-box'>
          {/* for you menu box */}
          <div className = 'for-you-box'>For You</div>
          {/* my highlights menu box */}
          <div className = 'my-highlights-box'>My Highlights</div>
          {/* more menu box */}
          <div className = 'more-box'>More</div>
          {/* upgrade button box */}
          <div className = 'upgrade-box'>Upgrade</div>
        </div>
    );
};

export default leftmenu;