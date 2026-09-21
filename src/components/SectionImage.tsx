import Image from 'next/image';
import { withBasePath } from '@/src/content/unifiAssets';

type Props = {
  src: string;
  alt: string;
  /** Optional caption chip shown over the bottom-left of the image. */
  caption?: string;
  className?: string;
  aspectClassName?: string;
};

/** Photo panel used beside section copy on the service pages, matching the rounded image cards used elsewhere. */
export default function SectionImage({
  src,
  alt,
  caption,
  className = '',
  aspectClassName = 'aspect-[4/3]',
}: Props) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-unifi-blue/10 shadow-sm ${aspectClassName} ${className}`}>
      <Image src={withBasePath(src)} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      {caption ? (
        <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-unifi-dark shadow-sm backdrop-blur">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
