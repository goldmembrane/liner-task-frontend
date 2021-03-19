import React from 'react';
import '../../css/modal/fullTextShareModal.css';

const FullTextShareModal = (props) => {
    const { open, close } = props;

    return (
        <div className = {open ? 'open-modal full-text-share-modal-wrap' : 'full-text-share-modal-wrap'}>
        {open ? ( 
        <div className = 'full-text-share-modal-box'>
            <div className = 'full-text-share-modal-title-box'>
                <h2>Share Full Text with Highlights</h2>
                <button className = 'full-text-share-modal-close' onClick = {close}>X</button>
            </div>
            <div className = 'label'>Anyone with link can view this page with highlights.</div>
            <div className = 'full-text-share-modal-content-box'>
                <div className = 'social-icons-box'>
                    <div className = 'icon facebook'></div>
                    <div className = 'icon twitter'></div>
                    <div className = 'icon linkdin'></div>
                    <div className = 'icon messenger'></div>
                    <div className = 'icon line'></div>
                    <div className = 'icon mail'></div>
                </div>
                <div className = 'copy-address-box'>
                    <div className = 'address'>https://fs.blog/2017/10/how-to-remember-what-you-read</div>
                    <div className = 'copy-button'>Copy</div>
                </div>
            </div>
        </div>) : null}
    </div>
    );
};

export default FullTextShareModal;