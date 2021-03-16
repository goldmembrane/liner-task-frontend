import React from 'react';
import '../css/leftMenu.css';

// left menu box를 구현하는 코드

const LeftMenu = (props) => {
    // main에서 받은 isSelect state 받아오기
    const { selected, forYou, highlight, more } = props;

    return(
        // for you menu box
        <React.Fragment>
            <button className = {selected === 'forYou' ? 'for-you-box selected' : 'for-you-box'} onClick = {forYou}>For You</button>
            {/* my highlights menu box */}
            <button className = {selected === 'highlight' ? 'my-highlights-box selected' : 'my-highlights-box'} onClick = {highlight}>My Highlights</button>
            {/* more menu box */}
            <button className = {selected === 'more' ? 'more-box selected' : 'more-box'} onClick = {more}>More</button>
            {/* upgrade button box */}
            <div className = 'upgrade-box'>Upgrade</div>
        </React.Fragment>
    );
};

export default LeftMenu;