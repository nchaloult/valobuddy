import { PageProps } from "@/types";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";

// Agent images: at the bottom of https://valorant.fandom.com/wiki/Agents
// Or from: https://www.valorantpicker.com/#/ (but these are PNGs)
import astra from "@/../images/agents/astra.webp";
import breach from "@/../images/agents/breach.webp";
import brimstone from "@/../images/agents/brimstone.webp";
import chamber from "@/../images/agents/chamber.webp";
import clove from "@/../images/agents/clove.webp";
import cypher from "@/../images/agents/cypher.webp";
import deadlock from "@/../images/agents/deadlock.webp";
import fade from "@/../images/agents/fade.webp";
import gekko from "@/../images/agents/gekko.webp";
import harbor from "@/../images/agents/harbor.webp";
import iso from "@/../images/agents/iso.webp";
import jett from "@/../images/agents/jett.webp";
import kayo from "@/../images/agents/kayo.webp";
import killjoy from "@/../images/agents/killjoy.webp";
import neon from "@/../images/agents/neon.webp";
import omen from "@/../images/agents/omen.webp";
import phoenix from "@/../images/agents/phoenix.webp";
import raze from "@/../images/agents/raze.webp";
import reyna from "@/../images/agents/reyna.webp";
import sage from "@/../images/agents/sage.webp";
import skye from "@/../images/agents/skye.webp";
import sova from "@/../images/agents/sova.webp";
import viper from "@/../images/agents/viper.webp";
import yoru from "@/../images/agents/yoru.webp";

type Agent = {
  name: string;
  image: string;
};

function AgentSelector() {
  const agents: Agent[] = [
    { name: "astra", image: astra },
    { name: "breach", image: breach },
    { name: "brimstone", image: brimstone },
    { name: "chamber", image: chamber },
    { name: "clove", image: clove },
    { name: "cypher", image: cypher },
    { name: "deadlock", image: deadlock },
    { name: "fade", image: fade },
    { name: "gekko", image: gekko },
    { name: "harbor", image: harbor },
    { name: "iso", image: iso },
    { name: "jett", image: jett },
    { name: "kayo", image: kayo },
    { name: "killjoy", image: killjoy },
    { name: "neon", image: neon },
    { name: "omen", image: omen },
    { name: "phoenix", image: phoenix },
    { name: "raze", image: raze },
    { name: "reyna", image: reyna },
    { name: "sage", image: sage },
    { name: "skye", image: skye },
    { name: "sova", image: sova },
    { name: "viper", image: viper },
    { name: "yoru", image: yoru },
  ];

  return (
    <div className="grid grid-cols-9">
      {agents.map((agent, i) => (
        <Link
          key={agent.name}
          href={route("collection.map", { map: map.name })}
          className="relative group overflow-hidden opacity-0 animate-rise-and-fade-in ring-2 ring-white/40 hover:ring-4 hover:ring-green-200 transition"
          style={{ animationDelay: `${0.03 * i}s` }}
        >
          <span className="z-10 absolute bottom-2 md:bottom-4 left-2 md:left-4 text-xl md:text-2xl font-['Druk_Wide_Bold'] uppercase bg-gradient-to-b from-neutral-300 to-white text-transparent bg-clip-text group-hover:text-white transition">
            {map.name}
          </span>
          <img
            src={map.image}
            alt={map.name}
            className="group-hover:scale-110 transition ease-out"
            draggable={false}
          />
        </Link>
      ))}
    </div>
  );
}

export default function AgentSelect({ auth }: PageProps) {
  return (
    <div className="flex flex-col h-svh">
      <Header user={auth.user} />

      <main className="grow justify-center items-center p-6 lg:p-16">
        <AgentSelector />
      </main>
    </div>
  );
}
