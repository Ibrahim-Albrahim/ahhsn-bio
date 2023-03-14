import React from "react";
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/scss/Share.scss'

const Share = () => {
    const shareData = { title: "AHHSN Shop | متجر احسن" ,text: 'اعجبني متجر احسن ' ,url: window.location.href}
    const isIOS = () => { if (/iPad|iPhone|iPod/.test(navigator.userAgent)) ['title', 'text', 'url'].forEach(p => delete shareData[p]) }; // check if the system is IOS share the file only without title, text and url
    const sharePhoto = ()=>{
        if (!navigator.canShare) { alert(`Your browser doesn't support the Web Share API. Use Chrome browser`); return }; // check if the browser can't share
        isIOS();
        navigator.share(shareData);
    };
    return  <section className="share-section" onClick={sharePhoto}>
                <FontAwesomeIcon className='fa-icon fa-share' icon={faShareAlt} />
                <span className="tooltiptext tooltiptext-share">Share Me!</span>
            </section >
}
export default Share;