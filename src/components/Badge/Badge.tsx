import React, { FC } from "react";

interface BadgeProps {
  text: string;
  bgColor: string;
  
  logo?: string;
  logoColor?: string;
}

const Badge: FC<BadgeProps> = ({ text, logo, bgColor, logoColor }) => {
  bgColor = bgColor.replace("#", "");
  logoColor = logoColor?.replace("#", "");
  if (logoColor && !logo) {
    throw new Error("You must provide a logo when using logoColor.");
  }
  let src = `https://img.shields.io/badge/${text}-${bgColor}?style=for-the-badge${logo ? `&logo=${logo}` : ""}${logoColor ? `&logoColor=${logoColor}` : ""}`;
  return <img src={src} alt={text} />;
};

export default Badge;
