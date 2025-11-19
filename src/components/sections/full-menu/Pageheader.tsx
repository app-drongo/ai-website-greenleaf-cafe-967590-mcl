'use client';

import React from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonHref?: string;
  badge?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Pageheader({
  title = 'Our Full Menu',
  subtitle = 'Discover our complete selection of organic, farm-to-table dishes crafted with love and the finest local ingredients.',
  breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Menu' }],
  showBackButton = true,
  backButtonText = 'Back to Home',
  backButtonHref = '/',
  badge = 'Fresh Daily',
  backgroundImage = '/api/placeholder/1920/600',
  className = '',
}: PageHeaderProps) {
  const navigate = useSmartNavigation();

  return (
    <section className={`relative bg-background border-b border-border ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index === 0 && <Home className="w-4 h-4 mr-2" aria-hidden="true" />}
                {crumb.href ? (
                  <button
                    onClick={() => navigate(crumb.href!)}
                    className="hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm px-1 py-0.5"
                    data-editable-href={`breadcrumb-${index}-href`}
                    data-href={crumb.href}
                  >
                    <span data-editable={`breadcrumb-${index}-label`}>{crumb.label}</span>
                  </button>
                ) : (
                  <span
                    className="text-foreground font-medium"
                    data-editable={`breadcrumb-${index}-label`}
                  >
                    {crumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Back Button */}
        {showBackButton && (
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => navigate(backButtonHref)}
              className="bg-background/50 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              data-editable-href="backButtonHref"
              data-href={backButtonHref}
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              <span data-editable="backButtonText">{backButtonText}</span>
            </Button>
          </div>
        )}

        {/* Header Content */}
        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <div className="mb-4">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                <span data-editable="badge">{badge}</span>
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
            <span data-editable="title">{title}</span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              <span data-editable="subtitle">{subtitle}</span>
            </p>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10 hidden lg:block">
          <div className="w-32 h-32 border-2 border-primary rounded-full" />
          <div className="w-24 h-24 border-2 border-accent rounded-full mt-4 ml-8" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
