type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.55 7.47L3.5 20.5l1.32-4.33A8.5 8.5 0 1 1 20.5 11.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.35 7.85c.2-.44.4-.45.7-.46h.58c.18 0 .36.07.45.3l.72 1.73c.08.2.04.38-.08.55l-.52.68c-.1.13-.1.3-.03.43.55 1.03 1.4 1.87 2.43 2.42.14.08.3.07.43-.03l.67-.52c.17-.13.36-.16.55-.08l1.73.72c.22.1.3.27.3.45v.58c0 .3-.02.5-.46.7-.43.2-1.46.45-2.75.05-1.3-.4-2.84-1.28-4.05-2.5-1.22-1.2-2.1-2.74-2.5-4.04-.4-1.29-.15-2.32.05-2.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
