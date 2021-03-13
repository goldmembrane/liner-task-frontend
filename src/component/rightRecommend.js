import React from 'react';
import '../css/rightRecommend.css';

// right part에 recommend contents를 구성하는 코드

const RightRecommend = () => {
    return(
        <React.Fragment>
            {/* recommend keyword box */}
            <div className = 'trending-keywords-box'>
                <div className = 'trending-keywords-title'>Trending Keywords</div>
                <div className = 'trending-keywords-tags'>#video</div>
                <div className = 'trending-keywords-tags'>#free</div>
                <div className = 'trending-keywords-tags'>#news</div>
                <div className = 'trending-keywords-tags'>#sharing</div>
                <div className = 'trending-keywords-tags'>#upload</div>
                <div className = 'trending-keywords-tags'>#camera phone</div>
                <div className = 'trending-keywords-tags'>#video phone</div>
                <div className = 'trending-keywords-tags'>#politics</div>
                <div className = 'trending-keywords-tags'>#business</div>
                <div className = 'trending-keywords-tags'>#coronavirus</div>
                <div className = 'trending-keywords-tags'>#technology</div>
                <div className = 'trending-keywords-tags'>#ncbi</div>
            </div>
            {/* recommend page box */}
            <div className = 'trending-pages-box'>
                <div className = 'trending-pages-title'>Trending Pages</div>
                <div className = 'trending-pages-list'></div>
            </div>
        </React.Fragment>
    );
};

export default RightRecommend;