import type { ImgHTMLAttributes } from "react";
import logo from "@/assets/klara-farm-logo.png";

export function KlaraFarmLogo({ alt = "KlaraFarm", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={logo} alt={alt} {...props} />;
}