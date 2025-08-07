import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image = "/Images/AK-Vision Systems Logo.png",
  url = "https://akvisionsystems.com",
  type = "website",
}) => {
  const siteTitle = "AK Vision Systems";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`https://akvisionsystems.com${image}`}
      />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://akvisionsystems.com${image}`}
      />

      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="CA" />
      <meta name="geo.placename" content="Canada" />
    </Helmet>
  );
};

export default SEO;
