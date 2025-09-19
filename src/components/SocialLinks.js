import '../assets/scss/SocialLinks.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSnapchat, faTiktok, faXTwitter, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'

function SocialLinks() {
    const links = [
        {title:'تواصل واتساب', icon: faWhatsapp,         href: 'https://wa.me/966503727124' },
        {title:'الانستجرام', icon: faInstagram,        href: 'http://instagram.com/ahhsnshop' },
        {title:'سناب شات', icon: faSnapchat,   href: 'https://www.snapchat.com/add/ahhsnshop' },
        {title:'تيك توك', icon: faTiktok,           href: 'https://www.tiktok.com/@ahhsnshop' },
        {title:'اكس تويتر', icon: faXTwitter,          href: 'https://twitter.com/ahhsnshop' },
        {title:'تيليجرام', icon: faTelegram,          href: 'https://t.me/ahhsnshop' },
    ]


    return (
        <div className="social-links">
            {links.map(link =>
                <a className="link" title={link.title} href={link.href} key={links.indexOf(link)} target="_blank" rel='noopener noreferrer'>
                    <FontAwesomeIcon className={link.icon + ' fa-icons'} icon={link.icon} />
                </a>
            )}
        </div>
    )
};

export default SocialLinks;