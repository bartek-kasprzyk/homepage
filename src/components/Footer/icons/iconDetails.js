import { FooterIcon } from "../styled";
import { ReactComponent as Github_black } from "./Github_black.svg";
import { ReactComponent as Facebook_black } from "./Facebook_black.svg";
import { ReactComponent as Linkedin_black } from "./Linkedin_black.svg";
import { ReactComponent as Instagram_black } from "./Instagram_black.svg";

export const details = [
    {
        Icon: FooterIcon(Github_black),
        name: 'GitHub',
        url: 'https://github.com/bartek-kasprzyk',
    },
    {
        Icon: FooterIcon(Facebook_black),
        name: 'Facebook',
        url: 'https://www.facebook.com/bartek.kasprzyk.967',
    },
    {
        Icon: FooterIcon(Linkedin_black),
        name: 'LinkedIn',
        url: 'https://pl.linkedin.com/bkasprzyk',
    },
    {
        Icon: FooterIcon(Instagram_black),
        name: 'Instagram',
        url: 'https://www.instagram.com/delta.boye/',
    },
]