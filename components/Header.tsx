'use client';

import Link from 'next/link';
import { useMemo, useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
  disabled?: boolean;
};

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const lastScrollY = useRef(0);

  // Hide header on scroll down, show on scroll up.
  // Uses window/document scrollTop + a small delta threshold to avoid jitter.
  useEffect(() => {
    let ticking = false;

    const getScrollTop = () =>
      window.scrollY ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0;

    const update = () => {
      const latest = getScrollTop();
      setIsScrolled(latest > 50);

      // On mobile/tablet (hamburger menu), keep the header visible.
      // Hiding it on scroll makes navigation inaccessible further down the page.
      const isMobileViewport = window.innerWidth < 1280; // matches Tailwind's xl breakpoint
      if (isMobileViewport) {
        setIsHeaderVisible(true);
        lastScrollY.current = latest;
        ticking = false;
        return;
      }

      const delta = latest - lastScrollY.current;

      if (latest < 10) {
        setIsHeaderVisible(true);
      } else if (delta > 1 && latest > 80) {
        // scrolling down
        setIsHeaderVisible(false);
      } else if (delta < -1) {
        // scrolling up
        setIsHeaderVisible(true);
      }

      lastScrollY.current = latest;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // init
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Close mobile menu when header hides
  useEffect(() => {
    if (!isHeaderVisible && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isHeaderVisible, isMobileMenuOpen]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on outside click (hamburger view)
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks: NavLink[] = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
      href: '/platform/overview',
      label: 'Cortex Platform',
      children: [
        { href: '/platform/overview', label: 'Platform Overview' },
      ],
    },
    {
      href: '/solutions/hub',
      label: 'Solutions',
      children: [
        { href: '/solutions/hub', label: 'Solutions Hub' },
        { href: '/solutions/fireguard', label: 'FireGuard Platform' },
        { href: '/solutions/insurelink', label: 'InsureLink' },
      ],
    },
    {
      href: '/sectors',
      label: 'Sectors',
      children: [
        { href: '/sectors/education', label: 'Education' },
        { href: '/sectors/corporate', label: 'Corporate' },
        { href: '/sectors/public-sector', label: 'Public sector' },
        { href: '#', label: 'Healthcare (Coming soon)', disabled: true },
        { href: '#', label: 'Residential (Coming soon)', disabled: true },
      ],
    },
    {
      href: '/roles/ceo',
      label: 'Your roles',
      children: [
        { href: '/roles/ceo', label: 'CEO' },
        { href: '/roles/cfo', label: 'CFO' },
        { href: '/roles/coo', label: 'COO' },
        { href: '/roles/esg-lead', label: 'ESG Lead' },
        { href: '/roles/facilities', label: 'Facilities Manager' },
        { href: '/roles/fire-safety-lead', label: 'Fire Safety Lead' },
        { href: '/roles/security-head', label: 'Security Head' },
      ],
    },
    {
      href: '/energy/hub',
      label: 'Energy Solutions',
      children: [
        { href: '/energy/hub', label: 'Energy Hub' },
        { href: '/energy/technology', label: 'Our Technology' },
        { href: '/energy/carbon-reporting', label: 'Carbon Reporting' },
        { href: '/energy/funding-options', label: 'Funding Options' },
        { href: '/energy/monitoring', label: 'Energy Monitoring' },
        { href: '/energy/the-energy-trap', label: 'The Energy Trap' },
        { href: '/energy/energy-club', label: 'Unifi.id Energy Club' },
        { href: '/energy/contact', label: 'Energy Contact' },
      ],
    },
    { href: '/partners', label: 'Partners' },
    { href: '/news', label: 'News & Blog' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact Us' },
  ], []);

  // Header is black if it's not the home page OR if it's scrolled on the home page
  const isBlackHeader = !isHomePage || isScrolled;

  return (
    <m.header
      ref={headerRef}
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -140 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isBlackHeader 
          ? 'bg-black border-b border-black/5 py-3' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-10">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-1 mr-6">
            <Link href="/" className="inline-flex items-center">
              <img
                src={(() => {
                  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
                  return `${base}/unifi-assets/logo.png`.replace(/\/\/+/, '/');
                })()}
                alt="Unifi.id"
                className={`transition-all duration-500 ${isBlackHeader ? 'h-8 lg:h-10' : 'h-10 lg:h-12'} w-auto brightness-0 invert`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Visible on xl screens and up (1280px). */}
          <nav className="hidden xl:flex items-center gap-2 2xl:gap-4 flex-1 justify-end min-w-0 ml-10">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} link={link} isMobile={false} />
            ))}
            
            {/* Book a Demo Button */}
            <Link
              href="/book-demo"
              className="px-4 2xl:px-6 py-2 rounded-sm font-bold text-[10px] 2xl:text-xs uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-gray-900 transition-all duration-300 whitespace-nowrap flex-shrink-0 ml-2"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Hamburger Menu Button - Visible on screens smaller than xl (1280px) */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`xl:hidden p-2 text-white hover:bg-white/10 rounded transition-colors z-10 relative flex-shrink-0`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible on screens smaller than xl when hamburger is open */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden border-t w-full shadow-lg transition-all duration-500 max-h-[calc(100vh-88px)] overflow-y-auto ${
          isBlackHeader 
            ? 'bg-black border-white/20' 
            : 'bg-white/10 backdrop-blur-md border-black/5'
        }`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <NavLinkItem
                  key={`mobile-${link.href}`}
                  link={link}
                  isMobile={true}
                  isBlackHeader={isBlackHeader}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
              ))}
              <Link
                href="/book-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-8 py-3 mt-2 rounded-sm font-bold text-sm uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-gray-900 transition-all duration-300 text-left cursor-pointer active:opacity-90"
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </m.header>
  );
}

function NavLinkItem({
  link,
  isMobile,
  isBlackHeader,
  onNavigate,
}: {
  link: NavLink;
  isMobile?: boolean;
  isBlackHeader?: boolean;
  onNavigate?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasChildren = link.children && link.children.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (hasChildren) setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      if (hasChildren) setIsDropdownOpen(false);
    }
  };

  const handleMobileClick = (e: React.MouseEvent) => {
    if (isMobile && hasChildren) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleDesktopClick = (_e: React.MouseEvent) => {
    // Desktop dropdowns open on hover. Clicking should behave like a normal link.
    // (No preventDefault here.)
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <Link
          href={link.href}
          onClick={(e) => {
            handleMobileClick(e);
            if (!hasChildren) onNavigate?.();
          }}
          className={`block w-full py-3 px-4 text-base font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
            'text-white'
          } hover:bg-white/20 active:bg-white/30`}
        >
          {link.label}
        </Link>
        {hasChildren && isDropdownOpen && (
          <div className="pl-6 py-2 bg-black/20">
            {link.children?.map((childLink) => (
              <Link
                key={`${childLink.href}-${childLink.label}`}
                href={childLink.disabled ? '#' : childLink.href}
                onClick={(e) => {
                  if (childLink.disabled) {
                    e.preventDefault();
                    return;
                  }
                  onNavigate?.();
                }}
                className={`block w-full py-2 px-4 text-sm rounded transition-colors ${
                  childLink.disabled
                    ? 'text-white/35 cursor-not-allowed pointer-events-none select-none'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-disabled={childLink.disabled ? true : undefined}
              >
                {childLink.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <Link
        href={link.href}
        onClick={handleDesktopClick}
        className="relative py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-white whitespace-nowrap flex-shrink-0 cursor-pointer"
      >
        {link.label}
        {hasChildren && (
          <span
            className="ml-1 inline-block transition-transform duration-200"
            style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}
          >
            &#9660;
          </span>
        )}

        {/* Hover underline (CSS-based, more reliable than state) */}
        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      </Link>

      {/* Dropdown opens on hover */}
      {hasChildren ? (
        <div
          className={`absolute top-full left-0 pt-2 z-[60] transition-all duration-150 ease-out ${
            isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none'
          } group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
        >
          <div className="w-56 bg-black border border-black/5 rounded-md shadow-xl overflow-hidden">
            {link.children?.map((childLink) => (
              <Link
                key={`${childLink.href}-${childLink.label}`}
                href={childLink.disabled ? '#' : childLink.href}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  childLink.disabled
                    ? 'text-white/35 cursor-not-allowed pointer-events-none select-none'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                onClick={(e) => {
                  if (childLink.disabled) {
                    e.preventDefault();
                    return;
                  }
                  setIsDropdownOpen(false);
                }}
                aria-disabled={childLink.disabled ? true : undefined}
              >
                {childLink.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
