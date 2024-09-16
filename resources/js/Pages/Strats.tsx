import { useState } from "react";
import { Link } from "@inertiajs/react";
import CreateActionButton from "@/Components/CreateActionButton";

// TODO: Type props.
export default function Strats({ strats }) {
  const [filteredStrats, setFilteredStrats] = useState(strats);

  function updateFilteredStrats(query: string) {
    const newFilteredStrats = strats.filter((strat) =>
      strat.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredStrats(newFilteredStrats);
  }

  return (
    <>
      <CreateActionButton />

      <header className="flex flex-col space-y-2 z-10 sticky top-0 p-4 w-full bg-neutral-900/95 shadow-lg shadow-neutral-200/5">
        <span className="text-neutral-400 text-sm font-['Space_Mono'] scale-y-110 uppercase">
          TODO: Breadcrumbs go here.
        </span>
        <h1 className="text-5xl font-['Druk_Wide_Bold']">STRATS</h1>
        <form className="flex space-x-2 [&>*]:text-sm font-['Space_Mono']">
          <input
            type="search"
            placeholder="Search by title..."
            aria-label="Search strats"
            autoFocus
            onChange={(e) => updateFilteredStrats(e.target.value)}
            className="grow text-neutral-200 uppercase placeholder:text-neutral-400 bg-neutral-700 border-2 border-neutral-600 outline-none hover:bg-neutral-600 hover:border-neutral-500 focus:ring-0 focus:bg-neutral-600 focus:border-neutral-400 transition-all duration-200"
          />
          <button
            type="submit"
            className="px-5 py-3 text-white border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200"
          >
            SEARCH
          </button>
        </form>
      </header>

      <main className="flex flex-col px-16 py-4">
        {filteredStrats.map((strat) => (
          <Link
            href={route("strats.show", {
              map: "foo",
              agent: "bar",
              id: strat.id,
            })}
            className="p-4 bg-neutral-800 text-white hover:bg-stone-700"
          >
            <h2 className="mb-2">{strat.title}</h2>
            {/* TODO: Make this dynamic. */}
            <h3 className="text-sm">Last updated: 3 days ago</h3>
            <h4 className="text-xs text-neutral-400 italic">
              (on {strat.updated_at})
            </h4>
          </Link>
        ))}
      </main>
    </>
  );
}
