import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SectionOne } from "./old/components/SectionOne";
import { SectionTwo } from "./old/components/SectionTwo";
import "./components/style.css";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      {/* Sample Component */}
      <div className="sectionWrap">
        <SectionOne />
        <QueryClientProvider client={queryClient}>
          <SectionTwo />
        </QueryClientProvider>
      </div>
    </>
  );
}
