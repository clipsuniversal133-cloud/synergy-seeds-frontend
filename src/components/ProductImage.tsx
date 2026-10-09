import type { CropCategory } from '@/types';
import { productCardImages } from '@/lib/images';

const categoryLabels: Record<CropCategory, string> = {
  chilli: 'Chilli',
  cucumber: 'Cucumber',
  tomato: 'Tomato',
  brinjal: 'Brinjal',
  'sweet-corn': 'Sweet Corn',
};

interface ProductImageProps {
  imageRef: string;
  alt: string;
  category: CropCategory;
  className?: string;
  size?: 'card' | 'detail' | 'thumb';
}

/**
 * Displays a product image. Since official product photos are not yet available,
 * this renders a real crop photograph as the visual. The imageRef field on each
 * product is preserved for future use when official packaging photos are supplied.
 */
export function ProductImage({ imageRef, alt, category, className = '', size = 'card' }: ProductImageProps) {
  const imageUrl = productCardImages[category];

  const sizeClasses = {
    card: 'h-52 w-full',
    detail: 'h-full w-full min-h-[380px]',
    thumb: 'h-16 w-16',
  };

  if (!imageUrl) {
    return (
      <div
        className={`relative flex items-center justify-center bg-botanical ${sizeClasses[size]} ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {categoryLabels[category]}
        </span>
        <span className="sr-only">Image ref: {imageRef}</span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`object-cover ${sizeClasses[size]} ${className}`}
      loading={size === 'thumb' ? undefined : 'lazy'}
    />
  );
}
