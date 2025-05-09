import LandingPage from "@/pages/LandingPage";
import { ContentProvider } from "../contex/ContentContext";
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/fa");
  return (
    <div className=" max-w-screen-lg">
      <ContentProvider>
        <LandingPage />
      </ContentProvider>
    </div>
  );
}
