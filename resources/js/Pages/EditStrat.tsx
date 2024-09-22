import { useState } from "react";
import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";
import MarkdownEditor from "@/Components/MarkdownEditor";
import { useForm } from "@inertiajs/react";
import { PageProps, Strat } from "@/types";

type Props = PageProps & { strat: Strat };
export default function EditStratPage({ strat }: Props) {
  const { setData, patch, errors } = useForm<{
    title?: string;
    attacker_side_notes?: string;
    defender_side_notes?: string;
  }>({});

  const [
    isDeleteConfirmationModalVisible,
    setIsDeleteConfirmationModalVisible,
  ] = useState(false);

  return (
    <div className="flex flex-col min-h-svh">
      <div className="grow">
        {isDeleteConfirmationModalVisible ? (
          <DeleteConfirmationModal
            stratId={strat.id}
            stratTitle={strat.title}
            handleCancel={() => setIsDeleteConfirmationModalVisible(false)}
          />
        ) : null}

        <header className="flex flex-col space-y-2 z-10 sticky top-0 p-4 w-full bg-neutral-900/95 shadow-lg shadow-neutral-200/5">
          <span className="text-neutral-400 text-sm font-['Space_Mono'] scale-y-110 uppercase">
            TODO: Breadcrumbs go here.
          </span>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Title"
              aria-label="Title"
              defaultValue={strat.title}
              onChange={(e) => setData("title", e.target.value)}
              className="grow px-3 py-0 text-5xl font-['Druk_Wide_Bold'] uppercase placeholder:text-neutral-400 bg-neutral-700 border-2 border-neutral-600 outline-none hover:bg-neutral-600 hover:border-neutral-500 focus:ring-0 focus:bg-neutral-600 focus:border-neutral-400 transition-all duration-200"
            />

            <button
              type="submit"
              onClick={() =>
                patch(
                  route("strats.update", {
                    map: "foo",
                    agent: "bar",
                    id: strat.id,
                  })
                )
              }
              className="px-5 py-3 text-white text-sm font-['Space_Mono'] border-2 border-neutral-700 bg-gradient-to-r from-red-600 to-neutral-900 from-50% to-50% bg-right-bottom bg-[length:201%_100%] outline-none hover:bg-left-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-left-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200"
            >
              SAVE
            </button>
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
            <MarkdownEditor
              initialContent={
                strat.attacker_side_notes ?? "<em>No content.</em>"
              }
              setContent={(newContent: string) =>
                setData("attacker_side_notes", newContent)
              }
            />
          </section>
          <section>
            <h2 className="mb-2 text-3xl font-['Druk_Wide_Bold'] text-neutral-400 uppercase">
              Defender Side
            </h2>
            <MarkdownEditor
              initialContent={
                strat.defender_side_notes ?? "<em>No content.</em>"
              }
              setContent={(newContent: string) =>
                setData("defender_side_notes", newContent)
              }
            />
          </section>
        </main>
      </div>

      <section className="flex justify-center py-4">
        <button
          onClick={() => setIsDeleteConfirmationModalVisible(true)}
          className="w-1/3 min-w-48 px-4 py-3 text-red-600 text-center text-sm font-['Space_Mono'] border-2 border-red-600 bg-gradient-to-t from-red-600 to-neutral-900 from-50% to-50% bg-top bg-[length:100%_200%] outline-none hover:bg-bottom hover:text-neutral-900 hover:border-red-500 focus:bg-bottom focus:text-neutral-900 focus:border-red-500 transition-all duration-200"
        >
          DELETE STRAT
        </button>
      </section>
    </div>
  );
}
