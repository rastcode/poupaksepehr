module.exports = {
  siteUrl: "https://poupaksepehr.com",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://poupaksepehr.com/fa", hreflang: "fa" },
    { href: "https://poupaksepehr.com/en", hreflang: "en" },
    { href: "https://poupaksepehr.com/ar", hreflang: "ar" },
  ],
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/secret-page"], // صفحات خاص برای عدم ایندکس (در صورت نیاز)
};
