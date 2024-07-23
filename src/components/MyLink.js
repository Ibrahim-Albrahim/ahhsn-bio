import React from 'react';
import '../assets/scss/MyLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faStore, faPhone, faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons'

function MyLink() {
    const links = [
        { text: 'Store Location | موقع الفرع في الاحساء', icon: faLocationArrow, href: 'https://maps.app.goo.gl/JrwWThxRtZ37GdxP6' },
        { text: 'AHHSN Shop | متجر احسن', icon: faStore, href: 'https://shop.ahhsn.com/Ar' },
        { text: 'Call Us | اتصل بنا', icon: faPhone, href: 'tel:0503727124' },
        { text: 'Add Us in Contacts | اضفنا في جهات الاتصال', icon: faUser, href: 'https://ahhsn.com/business-cards/AHHSN-shop/' },
        // { text: 'Whatsapp | واتساب',                        icon: faWhatsapp,       href: 'https://wa.me/966503727124' },
        // { text: 'Instagram | انستقرام',                     icon: faInstagram,      href: 'http://instagram.com/ahhsnshop' },
        // { text: 'Snapchat | سنابشات',                       icon: faSnapchatSquare, href: 'https://www.snapchat.com/add/ahhsnshop' },
        // { text: 'TikTok | تيك توك',                         icon: faTiktok,         href: 'https://www.tiktok.com/@ahhsnshop' },
        // { text: 'Twitter | تويتر',                          icon: faTwitter,        href: 'https://twitter.com/ahhsnshop' },
        // { text: 'AHHSN Blog | مدونة احسن', icon: faWordpress, href: 'https://ahhsn.com/' },
        // { text: "Blog's Instagram | انستقرام المدونة", icon: faInstagram, href: 'http://instagram.com/ahhsncom' },
    ]
    return <div>
        {links.map(link =>
            <a className="my-link" href={link.href} key={links.indexOf(link)} target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon className={link.icon + ' fa-icons'} icon={link.icon} />
                <span>{link.text}</span>
            </a>
        )}
        <div className='blog-links'>
            <a className="my-link" href='http://instagram.com/ahhsncom' key='blog_site' target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon className='faInstagram fa-icons' icon={faInstagram} />
                <span>Blog's Instagram | انستقرام المدونة</span>
            </a>
            <a className="my-link" href='https://ahhsn.com/' key='blog_site' target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon className='faWordpress fa-icons' icon={faWordpress} />
                <span>AHHSN Blog | مدونة احسن</span>
            </a>
        </div>
    </div>



}

export default MyLink;
