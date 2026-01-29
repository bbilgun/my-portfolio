import Fb from "../assets/images/fb.svg";
import Insta from "../assets/images/insta.svg";
import Git from "../assets/images/git.svg";

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61551679342680",
    icon: Fb,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/bbilgun_/",
    icon: Insta,
  },
  {
    label: "GitHub",
    url: "https://github.com/bbilgun",
    icon: Git,
  },
];
