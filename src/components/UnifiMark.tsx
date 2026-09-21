import { withBasePath } from '@/src/content/unifiAssets';

/** Small unifi.id wordmark for cards that describe Unifi.id's own role. */
export default function UnifiMark({ className = 'h-5' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={withBasePath('/unifi-assets/logo.png')}
      alt="unifi.id"
      className={`${className} w-auto brightness-[0.2]`}
    />
  );
}
