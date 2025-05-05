import LandingPage from "@/pages/(landing)/LandingPage";
import { ContentProvider } from "../contex/ContentContext";
export default function Home() {
  return (
    <div className=" max-w-screen-lg">
       <ContentProvider>
       <LandingPage />
       </ContentProvider>
      
    </div>
  );
}
