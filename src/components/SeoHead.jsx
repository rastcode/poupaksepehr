import React from "react";
import Head from "next/head";

function SeoHead({ title, description, path, ogTitle, ogDescription, ogImage }) {
  const siteUrl = "https://poupaksepehr.com"; // URL سایت خود را وارد کنید

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || "/amin1.png"} />
      <meta property="og:url" content={`${siteUrl}${path}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || "/default-image.jpg"} />

      <link rel="canonical" href={`${siteUrl}${path}`} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

export default SeoHead;
