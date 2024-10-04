import { PageProps } from "@/types";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";
import Breadcrumbs from "@/Components/Breadcrumbs";

type Props = {
  map: string;
  agent: string;
};
export default function AgentSelect({ auth, map, agent }: PageProps & Props) {
  return (
    <div className="flex flex-col h-svh">
      <Header user={auth.user} />

      <div className="p-4 bg-neutral-900">
        <Breadcrumbs map={map} />
      </div>

      <main className="flex grow text-6xl font-['Druk_Wide_Bold']">
        <div className="w-full grid grid-cols-2">
          <Link
            href={route("vods.index", { map, agent })}
            className="group flex justify-center items-center hover:bg-green-400 transition"
          >
            <span className="bg-gradient-to-b from-neutral-300 to-white text-transparent bg-clip-text group-hover:text-white transition">
              VODS
            </span>
          </Link>
          <Link
            href={route("strats.index", { map, agent })}
            className="group flex justify-center items-center hover:bg-red-500 transition"
          >
            <span className="bg-gradient-to-b from-neutral-300 to-white text-transparent bg-clip-text group-hover:text-white transition">
              STRATS
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
