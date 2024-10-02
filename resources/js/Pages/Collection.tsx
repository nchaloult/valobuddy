import { PageProps } from "@/types";
import Header from "@/Components/Header";
import MapSelector from "@/Components/MapSelector";

export default function Collection({ auth }: PageProps) {
  return (
    <div className="flex flex-col h-svh">
      <Header user={auth.user} />

      <main className="grow justify-center items-center p-6 lg:p-16">
        <MapSelector />
      </main>
    </div>
  );
}
