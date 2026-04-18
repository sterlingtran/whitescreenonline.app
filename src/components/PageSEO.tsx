import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  /** Pass structured data objects — renders as <script type="application/ld+json"> */
  jsonLd?: object | object[];
}

export function PageSEO({
  title,
  description,
  canonical = 'https://www.whitescreenonline.app/',
  ogImage = 'https://www.whitescreenonline.app/og-image.svg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  jsonLd,
}: PageSEOProps) {
  const normalizeText = (value: string) =>
    value
      .replaceAll('\u2014', '-')
      .replaceAll('\u2013', '-')
      .replaceAll('\u2192', '->')
      .replaceAll('\u2728', '')
      .replaceAll('\u2764\ufe0f', 'love')
      .replaceAll('\u00a9', '(c)');

  const safeTitle = normalizeText(title);
  const safeDescription = normalizeText(description);

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
