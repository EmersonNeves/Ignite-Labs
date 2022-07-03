import { useParams } from "react-router-dom";
import { Header, Sidebar, Player } from "../components";
import { EventParams } from "../types/event-params";

export function Event() {

  const { slug } = useParams<{slug: string}>();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Player classSlug="abertura-do-evento-ignite-lab" /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
}
