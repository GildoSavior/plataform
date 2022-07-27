import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { VideoContainer } from "../components/VideoContainer";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex flex-1">
        <VideoContainer /> 
        <Sidebar />
      </main>
    </div>
  );
}
