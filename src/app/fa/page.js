import LandingPage from "@/app/LandingPage"; 
import { ContentProvider } from "@/contex/ContentContext";

export const metadata = {
  title: "پوپک سپهر | خدمات مشاوره تخصصی و ارزیابی ارزش",
  description:
    "پوپک سپهر ارائه‌دهنده خدمات مشاوره تخصصی، ارزیابی ارزش و پاسخگویی به سوالات متداول شما به زبان فارسی.",
  keywords:
    "مشاوره, خدمات مشاوره, ارزیابی ارزش, کارشناسان, سوالات متداول, تماس با ما",
  alternates: {
    canonical: "https://yourdomain.com/fa",
    languages: {
      fa: "https://yourdomain.com/fa",
      en: "https://yourdomain.com/en",
      ar: "https://yourdomain.com/ar",
    },
  },
};

export default function Page() {
  return (
    <ContentProvider initialLanguage="fa">
      <LandingPage />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "پوپک سپهر",
          url: "https://yourdomain.com/fa",
          logo: "https://yourdomain.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+98-912-000-0000",
            contactType: "Customer Service",
            areaServed: "IR",
            availableLanguage: ["Persian"],
          },
          sameAs: [
            "https://www.instagram.com/yourpage",
            "https://www.linkedin.com/company/yourpage",
          ],
        })}
      </script>
    </ContentProvider>
  );
}
