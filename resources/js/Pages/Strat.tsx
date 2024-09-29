import { PageProps, StratForViewing } from "@/types";
import { Link } from "@inertiajs/react";

type Props = PageProps & { strat: StratForViewing };
export default function StratPage({ strat }: Props) {
  return (
    <>
      <header className="flex flex-col space-y-2 z-10 sticky top-0 p-4 w-full bg-neutral-900/95 shadow-lg shadow-neutral-200/5">
        <span className="text-neutral-400 text-sm font-['Space_Mono'] scale-y-110 uppercase">
          TODO: Breadcrumbs go here.
        </span>
        <div className="flex space-x-2">
          <h1 className="grow text-5xl font-['Druk_Wide_Bold'] uppercase truncate">
            {strat.title}
          </h1>

          <Link
            href={route("strats.edit", {
              map: "foo",
              agent: "bar",
              id: strat.id,
            })}
            as="button"
            type="button"
            className="px-5 py-3 text-white text-sm font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200"
          >
            EDIT
          </Link>
        </div>
        <div className="flex space-x-2">
          <div className="px-3 py-1 text-sm font-['Space_Mono'] bg-cyan-600 border-2 border-cyan-500">
            TAG ONE
          </div>
          <div className="px-3 py-1 text-sm font-['Space_Mono'] bg-red-500 border-2 border-red-400">
            TAG TWO
          </div>
          <div className="px-3 py-1 text-sm font-['Space_Mono'] bg-orange-700 border-2 border-orange-600">
            TAG THREE
          </div>
        </div>
      </header>

      <main className="grid grid-cols-2 gap-4 px-16 py-4">
        <section>
          <h2 className="mb-2 text-3xl font-['Druk_Wide_Bold'] text-neutral-400 uppercase">
            Attacker Side
          </h2>
          <article
            className="prose prose-invert prose-neutral prose-sm"
            dangerouslySetInnerHTML={{
              // TODO: Doing this "dangerouslySetInnerHTML" shit is scary af,
              // but it gives us more (easy) control of how this HTML is styled,
              // and it's only really vulnerable to one attack vector?
              //
              // Since this HTML is generated server-side (and sanitized pretty
              // well with Laravel's markdown() config options), we aren't at
              // risk of storing anything bad there. But whatever _is_ stored is
              // blindly inserted into the HTML we server-side-render and send
              // to the client. If an attacker were to gain write access to our
              // DB, they could write malicious HTML in the
              // attacker_side_notes_html or defender_side_notes_html column.
              //
              // I personally think we might have bigger problems if someone
              // can write to our DB: that DB is only available from other
              // machines in our VPS/virtual private network, so they'd have to
              // have gained access to one of those machines.

              // TODO: What to do when this is an empty string? _Should_ this
              // ever be allowed to be an empty string? (I kinda don't think
              // so...)
              __html: strat.attacker_side_notes_html,
            }}
          />
        </section>
        <section>
          <h2 className="mb-2 text-3xl font-['Druk_Wide_Bold'] text-neutral-400 uppercase">
            Defender Side
          </h2>
          <article
            className="prose prose-invert prose-neutral prose-sm"
            dangerouslySetInnerHTML={{
              // TODO: Doing this "dangerouslySetInnerHTML" shit is scary af,
              // but it gives us more (easy) control of how this HTML is styled,
              // and it's only really vulnerable to one attack vector?
              //
              // Since this HTML is generated server-side (and sanitized pretty
              // well with Laravel's markdown() config options), we aren't at
              // risk of storing anything bad there. But whatever _is_ stored is
              // blindly inserted into the HTML we server-side-render and send
              // to the client. If an attacker were to gain write access to our
              // DB, they could write malicious HTML in the
              // attacker_side_notes_html or defender_side_notes_html column.
              //
              // I personally think we might have bigger problems if someone
              // can write to our DB: that DB is only available from other
              // machines in our VPS/virtual private network, so they'd have to
              // have gained access to one of those machines.

              // TODO: What to do when this is an empty string? _Should_ this
              // ever be allowed to be an empty string? (I kinda don't think
              // so...)
              __html: strat.defender_side_notes_html,
            }}
          />
        </section>
      </main>
    </>
  );
}
