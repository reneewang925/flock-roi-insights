import type { SVGProps } from "react";

export function KlaraFarmLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="KlaraFarm"
      {...props}
    >
      <path
        d="M4 24 20 8l12 10L44 8l16 16"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 25c7 10 16 15 27 15s20-5 27-15c-7-6-16-9-27-9S12 19 5 25Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M16 19v15m0-7 8-8m-8 8 8 8M48 19h-9v16m0-8h8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="27" r="8" fill="currentColor" />
      <circle cx="32" cy="27" r="4" fill="var(--color-background)" />
      <path
        d="m32 19 3.5 3.5M40 27l-4.5 3.5M32 35l-3.5-4.5M24 27l4.5-3.5"
        stroke="var(--color-background)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}