import { Link } from "@inertiajs/react";

type Props = {
  disabled?: boolean;
  map?: string;
  agent?: string;
  resourceType?: "vods" | "strats";
};
export default function Breadcrumbs({
  disabled,
  map,
  agent,
  resourceType,
}: Props) {
  if (disabled) {
    return (
      <div className="flex space-x-2 text-neutral-400 text-sm font-['Space_Mono'] scale-y-110 uppercase">
        <span className="cursor-default">Collection</span>
        {map ? (
          <>
            <span>&gt;</span>
            <span className="cursor-default">{map}</span>
          </>
        ) : null}
        {agent ? (
          <>
            <span>&gt;</span>
            <span className="cursor-default">{agent}</span>
          </>
        ) : null}
        {resourceType ? (
          <>
            <span>&gt;</span>
            <span className="cursor-default">{resourceType}</span>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <nav className="flex space-x-2 text-neutral-400 text-sm font-['Space_Mono'] scale-y-110 uppercase">
      <Link
        href={route("collection")}
        className="text-blue-500 hover:underline visited:text-purple-500"
      >
        Collection
      </Link>
      {map ? (
        <>
          <span>&gt;</span>
          <Link
            href={route("collection.map", { map })}
            className="text-blue-500 hover:underline visited:text-purple-500"
          >
            {map}
          </Link>
        </>
      ) : null}
      {agent ? (
        <>
          <span>&gt;</span>
          <Link
            href={route("collection.map.agent", {
              map,
              agent,
            })}
            className="text-blue-500 hover:underline visited:text-purple-500"
          >
            {agent}
          </Link>
        </>
      ) : null}
      {resourceType ? (
        <>
          <span>&gt;</span>
          <Link
            href={
              resourceType === "vods"
                ? route("vods.index", { map, agent })
                : route("strats.index", { map, agent })
            }
            className="text-blue-500 hover:underline visited:text-purple-500"
          >
            {resourceType}
          </Link>
        </>
      ) : null}
    </nav>
  );
}
