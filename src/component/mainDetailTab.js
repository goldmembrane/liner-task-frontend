import React from 'react';
import '../css/mainDetailTab.css';
import RelevantPage from './relevantPage.js';

// detail tab 화면 구성 코드 - main version

const MainDetailTab = (props) => {

    const { openState, toOpen, toClose, back } = props;

    return (
        <React.Fragment>
            <div className = 'main-detail-big-wrap-box'>
                <div className = 'main-detail-button-box'>
                    <button className = 'back-to-main' onClick = {back}></button>
                    <div className = 'main-detail-save-button'></div>
                    <div className = 'main-detail-share-button'></div>
                    <div className = 'main-detail-more-button'></div>
                </div>
                <div className = 'main-detail-photo-box'></div>
                <div className = 'main-detail-wrap-box'>
                    <div className = 'main-detail-header-box'>
                        <div className = 'main-detail-tags-box'>
                            <div className = 'main-detail-tags'>
                                #david foster wallace
                            </div>
                            <div className = 'main-detail-tags'>
                                #education
                            </div>
                            <div className = 'main-detail-tags'>
                                #marcus aurelius
                            </div>
                            <div className = 'main-detail-tags'>
                                #nicholas carr
                            </div>
                            <div className = 'main-detail-tags'>
                                #reading
                            </div>
                        </div>
                        <div className = 'main-detail-title'>
                            How to Remember What You Read
                        </div>
                        <div className = 'main-detail-address'>fs.blog</div>
                    </div>
                    <div className = 'main-detail-contents-box'>
                        <div className = 'main-detail-contents'>
                        Why is it that some people seem to be able to read a book once and remember every detail of it for life, while others struggle to recall even the title a few days after putting down a book?
                        </div>
                        <div className = 'main-detail-highlighter'>
                            Highlighted by LINER
                        </div>
                    </div>
                    <a href = ' ' className = 'main-detail-view-original-button'>View Original</a>
                    <div className = 'main-detail-footer-box'>
                        <div className = 'description-box'>
                            <div className = 'description-label'>Description</div>
                            <div className = 'description'>
                            The benefits of reading are negated if you don't remember what you read. This article discusses a tested system to increase retention.
                            </div>
                        </div>
                        <div className = 'authors-box'>
                            <div className = 'authors-label'>Authors</div>
                            <div className = 'authors'>
                            https://www.facebook.com/FarnamStreet/
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelevantPage openState = {openState} open = {toOpen} close = {toClose} />
        </React.Fragment>
    );
};

export default MainDetailTab;