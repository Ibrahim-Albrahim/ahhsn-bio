import React from 'react'
import '../assets/scss/SocialLinks.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSnapchatSquare, faTiktok, faTwitter, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'

function SocialLinks() {
    const links = [
        { icon: faWhatsapp,         href: 'https://wa.me/966503727124' },
        { icon: faInstagram,        href: 'http://instagram.com/ahhsnshop' },
        { icon: faSnapchatSquare,   href: 'https://www.snapchat.com/add/ahhsnshop' },
        { icon: faTiktok,           href: 'https://www.tiktok.com/@ahhsnshop' },
        { icon: faTwitter,          href: 'https://twitter.com/ahhsnshop' },
        { icon: faTelegram,          href: 'https://t.me/ahhsnshop' },
    ]


    return (
        <div className="social-links">
            {links.map(link =>
                <a className="link" href={link.href} key={links.indexOf(link)} target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon className={link.icon + ' fa-icons'} icon={link.icon} />
                </a>
            )}
        </div>
    )
};

export default SocialLinks;