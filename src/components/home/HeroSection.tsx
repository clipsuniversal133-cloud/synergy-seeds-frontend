import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sprout, Leaf } from 'lucide-react';
import { businessSettings } from '@/config/business';
import { heroImageUrl, heroImageAlt } from '@/lib/images';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="grid lg:grid-cols-2">
        {/* Text panel */}
        <div className="relative flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-24 lg:pr-16 lg:pl-12">
          {/* Subtle decorative element */}
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-leaf-100/40 lg:hidden" />

          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-600">
              <Leaf className="h-3.5 w-3.5" />
              Hybrid Seed Innovation
            </span>

            <h1 className="mt-5 font-display text-fluid-3xl font-extrabold leading-[1.08] text-forest-800 text-balance sm:text-fluid-4xl">
              Quality Seeds for
              <span className="block text-forest-500">Prosperous Farming</span>
            </h1>

            <p className="mt-5 max-w-md text-fluid-base leading-relaxed text-muted">
              Discover hybrid vegetable varieties developed to support farmers with
              crop-focused seed solutions for diverse agricultural needs across India.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/products" className="btn-primary">
                Explore Our Seeds
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/dealer-enquiry" className="btn-outline">
                Dealer Enquiry
              </Link>
              <a
                href={`tel:${businessSettings.phone.replace(/\s/g, '')}`}
                className="btn-ghost"
              >
                <Phone className="h-4 w-4" />
                Talk to Our Team
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5 font-medium text-forest-600">
                <Sprout className="h-4 w-4" />
                21 Hybrid Varieties
              </span>
              <span className="hidden sm:inline text-forest-200">|</span>
              <span>5 Crop Categories</span>
              <span className="hidden sm:inline text-forest-200">|</span>
              <span>Indore, Madhya Pradesh</span>
            </div>
          </div>
        </div>

        {/* Image panel */}
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          <img
            src={heroImageUrl}
            alt={heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-cream/30" />

          {/* Floating stat card */}
          <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-5 py-3.5 shadow-lift backdrop-blur-sm sm:bottom-7 sm:left-7">
            <p className="font-display text-2xl font-extrabold text-forest-700">21+</p>
            <p className="text-xs font-medium text-muted">Hybrid Varieties</p>
          </div>
        </div>
      </div>
    </section>
  );
}
