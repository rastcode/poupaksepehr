import React from "react";
import Head from "next/head";

function SeoHead({ title, description, path, ogTitle, ogDescription, ogImage }) {
  const siteUrl = "https://yoursite.com"; // URL سایت خود را وارد کنید
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || "/default-image.jpg"} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || "/default-image.jpg"} />
      {/* سایر تگ‌های SEO که به آن نیاز دارید */}
    </Head>
  );
}

export default SeoHead;
