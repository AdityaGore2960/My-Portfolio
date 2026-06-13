import { Twitter, Dribbble, Linkedin, Github, } from "lucide-react";

// Custom SVG icons for Behance and Vimeo (not in lucide-react)
const BehanceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-label="Behance"
  >
    <path d="M7.5 11.5c.97 0 1.75-.78 1.75-1.75S8.47 8 7.5 8H4v3.5h3.5zm.25 1.5H4V17h3.75c1.1 0 2-.9 2-2s-.9-2-2-2zM14.5 9c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.5 0 2.82-.83 3.5-2.06h-1.8c-.37.63-1.02 1.06-1.7 1.06-1.1 0-2-.78-2.2-1.8H18c.03-.22.05-.45.05-.7 0-2.21-1.57-4-3.55-4zm-2.2 3.3c.2-1 1.1-1.8 2.2-1.8 1.1 0 2 .8 2.2 1.8h-4.4zM15.5 6h-3v1.5h3V6z" />
  </svg>
);

const VimeoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-label="Vimeo"
  >
    <path d="M21.97 8.09c-.09 1.96-1.46 4.65-4.12 8.07C15.1 19.72 12.77 21.5 10.9 21.5c-1.14 0-2.1-1.05-2.9-3.16l-1.58-5.8C5.76 10.43 5.12 9.38 4.43 9.38c-.15 0-.68.32-1.6.95l-.96-1.24c1.02-.9 2.02-1.79 3-2.7 1.35-1.17 2.37-1.79 3.04-1.85 1.6-.15 2.58.94 2.96 3.27.4 2.5.68 4.06.83 4.66.46 2.1 1 3.14 1.5 3.14.42 0 1.07-.67 1.93-2 .87-1.33 1.33-2.35 1.38-3.06.12-1.16-.33-1.74-1.38-1.74-.49 0-1 .11-1.53.34.88-3.38 3.08-5.03 6.32-4.93l-.03.04c2.63.07 3.89 1.78 3.79 4.83z" />
  </svg>
);

const Leetcode = ({ size = 16 }: { size?: number | string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-label="Leetcode">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0 0 5.076 5.266 5.266 0 0 0 1.209 2.104l3.854 4.126 5.406 5.788a1.374 1.374 0 1 0 2.012-1.876l-5.406-5.788-3.854-4.126a2.532 2.532 0 0 1 0-3.328l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0zm5.109 5.788L14.738 9.914l3.854 4.126a2.532 2.532 0 0 1 0 3.328l-3.854 4.126 3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 2.012-1.876l-5.406-5.788-3.854-4.126a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0 0-5.076 5.266 5.266 0 0 0-1.209-2.104l-3.854-4.126 3.854-4.126L23.96 4.35a1.374 1.374 0 1 0-2.012-1.876l-3.356 3.314z" />
  </svg>
);

const socialLinks = [
  { icon: Github, label: "Github", href: "https://github.com/AdityaGore2960" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-gore-370897333" },
  { icon: Leetcode, label: "Leetcode", href: "https://leetcode.com/u/thisisadityagore30/" },
];

export default function SocialSidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col items-center gap-6 py-8"
      aria-label="Social media links"
    >
      {/* Logo */}
      <div className="mb-4 select-none">
        <span className="font-serif text-3xl font-black text-charcoal leading-none">
          A
        </span>
        <span className="font-serif text-3xl font-black text-accent leading-none -ml-0.5">
          G
        </span>
      </div>

      {/* Thin vertical line */}
      <div className="w-px h-8 bg-light-gray" />

      {/* Social icons */}
      <ul className="flex flex-col items-center gap-5">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="text-light-gray hover:text-accent transition-colors duration-200 block hover:-translate-y-0.5 transition-transform"
            >
              <Icon size={16} />
            </a>
          </li>
        ))}
      </ul>

      {/* Thin vertical line */}
      <div className="w-px h-8 bg-light-gray" />
    </aside>
  );
}
