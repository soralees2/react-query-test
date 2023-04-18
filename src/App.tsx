import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";
import { SectionOne } from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";
import "./components/style.css";

export default function App() {
  const queryClient = new QueryClient();
  const getSection = useMemo(() => {
    return (
      <QueryClientProvider client={queryClient}>
        <SectionTwo />
      </QueryClientProvider>
    );
  }, []);
  return (
    <>
      {/* Sample Component */}
      <div className="sectionWrap">
        {/* <SectionOne /> */}
        {getSection}
      </div>
    </>
  );
}
