import React from 'react';
import '../assets/scss/MyLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faStore, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function MyLink() {
    const links = [
        { text: 'Store Location | موقع الفرع في الاحساء',                   icon: faLocationArrow,          href: 'https://maps.app.goo.gl/JrwWThxRtZ37GdxP6' },
        { text: 'AHHSN Shop | متجر احسن',                   icon: faStore,          href: 'https://shop.ahhsn.com/Ar' },
        { text: 'Call Us | اتصل بنا',                       icon: faPhone,          href: 'tel:0503727124' },
        // { text: 'Whatsapp | واتساب',                        icon: faWhatsapp,       href: 'https://wa.me/966503727124' },
        // { text: 'Instagram | انستقرام',                     icon: faInstagram,      href: 'http://instagram.com/ahhsnshop' },
        // { text: 'Snapchat | سنابشات',                       icon: faSnapchatSquare, href: 'https://www.snapchat.com/add/ahhsnshop' },
        // { text: 'TikTok | تيك توك',                         icon: faTiktok,         href: 'https://www.tiktok.com/@ahhsnshop' },
        // { text: 'Twitter | تويتر',                          icon: faTwitter,        href: 'https://twitter.com/ahhsnshop' },
        { text: 'AHHSN Blog | مدونة احسن',                  icon: faWordpress,      href: 'https://ahhsn.com/' },
        { text: "Blog's Instagram | انستقرام المدونة",     icon: faInstagram,      href: 'http://instagram.com/ahhsncom' },
    ]
    return (
        links.map(link =>
            <a className="my-link" href={link.href} key={links.indexOf(link)} target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon className={link.icon + ' fa-icons'} icon={link.icon} />
                <span>{link.text}</span>
            </a>
        )
    );
}

export default MyLink;
