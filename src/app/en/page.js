import LandingPage from "../LandingPage";
import { ContentProvider } from "@/contex/ContentContext";

export const metadata = {
  title: "Poupak Sepehr | Professional Consultation & Value Assessment",
  description:
    "Poupak Sepehr offers professional consultation services, value assessments, and answers to your frequently asked questions in English.",
  keywords:
    "Consultation, Services, Value Assessment, Experts, FAQ, Contact Us",
  alternates: {
    canonical: "https://yourdomain.com/en",
    languages: {
      fa: "https://poupaksepehr.com/fa",
      en: "https://poupaksepehr.com/en",
      ar: "https://poupaksepehr.com/ar",
    },
  },
};

export default function Page() {
  return (
    <ContentProvider initialLanguage="en">
      <LandingPage />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Poupak Sepehr",
          url: "https://poupaksepehr.com/en",
          logo: "https://poupaksepehr.com/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+98-938-905-9097",
            contactType: "Customer Service",
            areaServed: "Global",
            availableLanguage: ["English"],
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
