import React from 'react';
import '../css/rightRelevant.css';

const RightRelevant = () => {
    return (
        <React.Fragment>
            {/* recommend keyword box */}
            <div className = 'relevant-keywords-box'>
                <div className = 'relevant-keywords-title'>Relevant Keywords</div>
                <div className = 'relevant-keywords-tags'>#video</div>
                <div className = 'relevant-keywords-tags'>#free</div>
                <div className = 'relevant-keywords-tags'>#news</div>
                <div className = 'relevant-keywords-tags'>#sharing</div>
                <div className = 'relevant-keywords-tags'>#upload</div>
                <div className = 'relevant-keywords-tags'>#camera phone</div>
                <div className = 'relevant-keywords-tags'>#video phone</div>
                <div className = 'relevant-keywords-tags'>#politics</div>
                <div className = 'relevant-keywords-tags'>#business</div>
                <div className = 'relevant-keywords-tags'>#coronavirus</div>
                <div className = 'relevant-keywords-tags'>#technology</div>
                <div className = 'relevant-keywords-tags'>#ncbi</div>
            </div>
            {/* recommend page box */}
            <div className = 'relevant-pages-box'>
                <div className = 'relevant-pages-title'>Relevant Pages</div>
                <div className = 'relevant-pages-list'></div>
            </div>
        </React.Fragment>
    );
};

export default RightRelevant;