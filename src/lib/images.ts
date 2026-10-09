/**
 * Centralized image URLs for crop categories and hero imagery.
 * Images sourced from Pexels (license-free). Replace with official
 * product photography when available.
 */

export const heroImageUrl =
  'https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const heroImageAlt =
  'Indian farmers harvesting in lush green fields';

export const aboutImageUrl =
  'https://images.pexels.com/photos/20445181/pexels-photo-20445181.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const aboutImageAlt =
  'Indian farmer tending to a lush agricultural field under clear skies';

export const categoryImages: Record<string, { url: string; alt: string }> = {
  chilli: {
    url: 'https://images.pexels.com/photos/13382942/pexels-photo-13382942.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Vivid red chilli pepper nestled among lush green leaves',
  },
  cucumber: {
    url: 'https://images.pexels.com/photos/31737291/pexels-photo-31737291.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh cucumber growing on the vine with green leaves and yellow flowers',
  },
  tomato: {
    url: 'https://images.pexels.com/photos/36317349/pexels-photo-36317349.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Lush tomato plants with ripe red fruit hanging in a garden',
  },
  brinjal: {
    url: 'https://images.pexels.com/photos/35161341/pexels-photo-35161341.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Vibrant brinjal field under clear skies with healthy eggplant plants',
  },
  'sweet-corn': {
    url: 'https://images.pexels.com/photos/7877994/pexels-photo-7877994.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh yellow corn cobs on a rustic wooden surface',
  },
};

/**
 * Crop-specific imagery for product cards.
 * Since official product photos are not yet available, each product card
 * uses a real crop photograph as its visual. The imageRef field on each
 * product is kept for future use when official packaging photos are supplied.
 */
export const productCardImages: Record<string, string> = {
  chilli:
    'https://images.pexels.com/photos/14008249/pexels-photo-14008249.jpeg?auto=compress&cs=tinysrgb&w=600',
  cucumber:
    'https://images.pexels.com/photos/31737298/pexels-photo-31737298.jpeg?auto=compress&cs=tinysrgb&w=600',
  tomato:
    'https://images.pexels.com/photos/5451692/pexels-photo-5451692.jpeg?auto=compress&cs=tinysrgb&w=600',
  brinjal:
    'https://images.pexels.com/photos/35116491/pexels-photo-35116491.jpeg?auto=compress&cs=tinysrgb&w=600',
  'sweet-corn':
    'https://images.pexels.com/photos/15429114/pexels-photo-15429114.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export const dealerCtaImageUrl =
  'https://images.pexels.com/photos/28220703/pexels-photo-28220703.jpeg?auto=compress&cs=tinysrgb&w=1200';
