import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { VideoContainer } from "../components/VideoContainer";

export function Home() {
  const { slug } = useParams<{ slug: string }>();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex flex-1">
        {slug ? (
          <VideoContainer lessonSlug={slug} />
        ) : (
          <div className="flex-1"></div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
