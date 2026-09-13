import Link, { type LinkProps } from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'blue' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  /** Analytics hooks read by AnalyticsProvider's delegated click listener. */
  'data-track-event'?: string;
  'data-track-tab'?: string;
  'data-track-sector'?: string;
  'data-track-service'?: string;
  'data-track-cta'?: string;
  'data-track-destination'?: string;
};

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonLinkProps) {
  const base =
    'inline-block font-medium rounded-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-unifi-blue/30 focus-visible:ring-offset-2';

  const sizeStyles: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  };

  const styles: Record<Variant, string> = {
    primary: 'bg-unifi-dark text-white hover:bg-black hover:translate-y-[-2px] hover:shadow-lg',
    secondary: 'border border-gray-200 text-unifi-dark hover:bg-unifi-light hover:translate-y-[-2px]',
    blue: 'bg-unifi-blue text-white hover:bg-[#1664a7] hover:translate-y-[-2px] hover:shadow-lg',
    outline: 'border border-current bg-transparent hover:bg-black/5 hover:translate-y-[-2px]',
  };

  return (
    <Link {...props} className={`${base} ${sizeStyles[size]} ${styles[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
