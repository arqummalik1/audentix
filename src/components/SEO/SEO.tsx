import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

const DEFAULT_TITLE = 'Audentix - Premium Software Development';
const DEFAULT_DESCRIPTION = 'Audentix - Premium custom software development company specializing in AI, SaaS, and enterprise solutions';
const SITE_URL = 'https://www.audentix.com';

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = '/og-image.png', // Ensure you have a default OG image in public/
  type = 'website',
  keywords
}: SEOProps) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | Audentix`;
  const fullUrl = canonical ? canonical : typeof window !== 'undefined' ? window.location.href : SITE_URL;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Audentix" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}
