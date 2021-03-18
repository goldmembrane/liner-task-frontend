import React from 'react';
import '../css/highlightDetailTab.css';

// detail tab 화면 구성 코드 - highlight version

const HighlightDetailTab = (props) => {

    const { back } = props;

    return (
        <React.Fragment>
            <div className = 'highlight-detail-big-wrap-box'>
                <div className = 'highlight-detail-button-box'>
                    <button className = 'back-to-highlight' onClick = {back}></button>
                    <div className = 'highlight-detail-save-button'></div>
                    <div className = 'highlight-detail-share-button'></div>
                    <div className = 'highlight-detail-more-button'></div>
                </div>
                <div className = 'highlight-detail-photo-box'></div>
                <div className = 'highlight-detail-wrap-box'>
                    <div className = 'highlight-detail-header-box'>
                        <div className = 'highlight-detail-tags-box'>
                            <div className = 'highlight-detail-tags'>
                                #david foster wallace
                            </div>
                            <div className = 'highlight-detail-tags'>
                                #education
                            </div>
                            <div className = 'highlight-detail-tags'>
                                #marcus aurelius
                            </div>
                            <div className = 'highlight-detail-tags'>
                                #nicholas carr
                            </div>
                            <div className = 'highlight-detail-tags'>
                                #reading
                            </div>
                        </div>
                        <div className = 'highlight-detail-title'>
                            How to Remember What You Read
                        </div>
                        <div className = 'highlight-detail-address'>
                            fs.blog
                        </div>
                    </div>
                    <div className = 'highlight-detail-contents-box'>
                        <div className = 'highlight-detail-contents'>
                        Why is it that some people seem to be able to read a book once and remember every detail of it for life, while others struggle to recall even the title a few days after putting down a book?
                        </div>
                        <div className = 'highlight-detail-highlighter'>
                            Highlighted by LINER
                        </div>
                    </div>
                    <a href = ' ' className = 'highlight-detail-view-original-button'>View Original</a>
                    <div className = 'highlight-detail-footer-box'>
                        <div className = 'description-box'>
                            <div className = 'description-label'>Description</div>
                            <div className = 'description'>The benefits of reading are negated if you don't remember what you read. This article discusses a tested system to increase retention.</div>
                        </div>
                        <div className = 'authors-box'>
                            <div className = 'authors-label'>Authors</div>
                            <div className = 'authors'>https://www.facebook.com/FarnamStreet/</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HighlightDetailTab;