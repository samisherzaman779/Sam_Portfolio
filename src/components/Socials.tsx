import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const socials = [
    { Icon: <FaGithub />, path: "https://github.com/samikhan1622" }, 
    { Icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sami-sherzaman/" },
    { Icon: <FaInstagram />, path: "https://www.instagram.com/webdevelopersami2024/" },
    { Icon: <FaYoutube />, path: "https://www.youtube.com/@samisherzaman2698" },
];

type SocialsProps = {
    containerStyles: string;
    iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
    return (
        <div className={`${containerStyles} flex items-center justify-center gap-4`}>
            {socials.map((items, index) => {
                return (
                    <Link 
                        key={index} 
                        href={items.path} 
                        className={`${iconStyles} flex items-center justify-center`}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {items.Icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
