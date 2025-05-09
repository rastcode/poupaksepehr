import LandingPage from "../LandingPage";
import { ContentProvider } from "@/contex/ContentContext";

export const metadata = {
  title: "بوپاك سپهر | خدمات الاستشارة وتقييم القيمة",
  description:
    "بوپاك سپهر يقدم خدمات الاستشارة المهنية وتقييم القيمة والإجابة على الأسئلة الشائعة باللغة العربية.",
  keywords:
    "الاستشارة, الخدمات, تقييم القيمة, الخبراء, الأسئلة الشائعة, اتصل بنا",
  alternates: {
    canonical: "https://poupaksepehr.com/ar",
    languages: {
      fa: "https://poupaksepehr.com/fa",
      en: "https://poupaksepehr.com/en",
      ar: "https://poupaksepehr.com/ar",
    },
  },
};

export default function Page() {
  return (
    <ContentProvider initialLanguage="ar">
      <LandingPage />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "بوپاك سپهر",
          url: "https://poupaksepehr.com/ar",
          logo: "https://poupaksepehr.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+98-938-905-9097",
            contactType: "Customer Service",
            areaServed: "AE",
            availableLanguage: ["Arabic"],
          },
          sameAs: [
            "https://www.instagram.com/poupaksepehr/profilecard/?igsh=YXB3amFqNml4OWxo",
            "https://t.me/poupaksepehr",
          ],
        })}
      </script>
    </ContentProvider>
  );
}
