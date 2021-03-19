import React from 'react';
import '../css/mainDetailTab.css';
import RelevantPage from './relevantPage.js';

// detail tab 화면 구성 코드 - main version

const MainDetailTab = (props) => {

    const { openState, toOpen, toClose, item, data } = props;

    return (
        <React.Fragment>
            <div className = 'main-detail-big-wrap-box'>
                <img className = 'main-detail-photo-box' src = {item.snippet.image} alt = ''></img>
                <div className = 'main-detail-wrap-box'>
                    <div className = 'main-detail-header-box'>
                        <div className = 'main-detail-tags-box'>
                            <div className = 'main-detail-tags'>{item.snippet.tags.tagName}</div>
                        </div>
                        <div className = 'main-detail-title'>
                            {item.snippet.title}
                        </div>
                        <div className = 'main-detail-address'>{item.snippet.address}</div>
                    </div>
                    <div className = 'main-detail-contents-box'>
                        <div className = 'main-detail-contents'>
                            {item.snippet.description}
                        </div>
                        <div className = 'main-detail-highlighter'>
                            Highlighted by LINER
                        </div>
                    </div>
                    <a href = {item.snippet.url} className = 'main-detail-view-original-button'>View Original</a>
                    <div className = 'main-detail-footer-box'>
                        <div className = 'description-box'>
                            <div className = 'description-label'>Description</div>
                            <div className = 'description'>
                            {item.snippet.line}
                            </div>
                        </div>
                        <div className = 'authors-box'>
                            <div className = 'authors-label'>Authors</div>
                            <div className = 'authors'>
                            {item.snippet.author}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data.map(i => <RelevantPage openState = {openState} open = {toOpen} close = {toClose} item = {i}/>)}
        </React.Fragment>
    );
};

export default MainDetailTab;