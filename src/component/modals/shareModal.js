import React from 'react';
import '../../css/shareModal.css';

const ShareModal = (props) => {
    const { open, close } = props;
  return(
    <div className = {open ? 'open-modal share-modal-wrap' : 'share-modal-wrap'}>
        {open ? ( 
        <div className = 'share-modal-box'>
            <div className = 'share-modal-title-box'>
                <h2>Share Origin Page</h2>
                <button className = 'share-modal-close' onClick = {close}>X</button>
            </div>
            <div className = 'share-modal-content-box'>
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

export default ShareModal;