import React from 'react';
import '../assets/scss/MyLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSnapchatSquare, faTiktok, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faStore, faPhone } from '@fortawesome/free-solid-svg-icons'

function MyLink() {
    const links = [
        { text: 'AHHSN Shop | متجر احسن',   icon: faStore,          href: 'https://shop.ahhsn.com/Ar' },
        { text: 'Call Us | اتصل بنا',       icon: faPhone,          href: 'tel:0503727124' },
        { text: 'Whatsapp | واتساب',        icon: faWhatsapp,       href: 'https://wa.me/966503727124' },
        { text: 'Instagram | انستقرام',     icon: faInstagram,      href: 'http://instagram.com/ahhsnshop' },
        { text: 'Snapchat | سنابشات',       icon: faSnapchatSquare, href: 'https://www.snapchat.com/add/ahhsnshop' },
        { text: 'TikTok | تيك توك',         icon: faTiktok,         href: 'https://www.tiktok.com/@ahhsnshop' },
        { text: 'Twitter | تويتر',          icon: faTwitter,        href: 'https://twitter.com/ahhsnshop' },
    ]
    return (
        links.map(link =>
            <a className="my-link" href={link.href} key={links.indexOf(link)} target="_blank" rel='noreferrer'>
                <FontAwesomeIcon className={link.icon + ' fa-icons'} icon={link.icon} />
                <span>{link.text}</span>
            </a>
        )
    );
}

export default MyLink;
