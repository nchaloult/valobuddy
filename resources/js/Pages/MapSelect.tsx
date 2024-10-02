import { PageProps } from "@/types";
import Header from "@/Components/Header";
import abyss from "@/../images/maps/abyss.webp";
import ascent from "@/../images/maps/ascent.webp";
import bind from "@/../images/maps/bind.webp";
import breeze from "@/../images/maps/breeze.webp";
import fracture from "@/../images/maps/fracture.webp";
import haven from "@/../images/maps/haven.webp";
import icebox from "@/../images/maps/icebox.webp";
import lotus from "@/../images/maps/lotus.webp";
import pearl from "@/../images/maps/pearl.webp";
import split from "@/../images/maps/split.webp";
import sunset from "@/../images/maps/sunset.webp";
import { Link } from "@inertiajs/react";

type Map = {
  name: string;
  image: string;
};

function MapSelector() {
  const maps: Map[] = [
    { name: "abyss", image: abyss },
    { name: "ascent", image: ascent },
    { name: "bind", image: bind },
    { name: "breeze", image: breeze },
    { name: "fracture", image: fracture },
    { name: "haven", image: haven },
    { name: "icebox", image: icebox },
    { name: "lotus", image: lotus },
    { name: "pearl", image: pearl },
    { name: "split", image: split },
    { name: "sunset", image: sunset },
  ];

  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {maps.map((map, i) => (
        <Link
          key={map.name}
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

export default function MapSelect({ auth }: PageProps) {
  return (
    <div className="flex flex-col h-svh">
      <Header user={auth.user} />

      <main className="grow justify-center items-center p-6 lg:p-16">
        <MapSelector />
      </main>
    </div>
  );
}
