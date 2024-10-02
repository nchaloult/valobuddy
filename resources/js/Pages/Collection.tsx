import { PageProps } from "@/types";
import Header from "@/Components/Header";

export default function Collection({ auth }: PageProps) {
  return (
    <>
      <Header user={auth.user} />

      <main>
        <p>Collection. Map selector goes here.</p>
      </main>
    </>
  );
}
