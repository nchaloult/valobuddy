import { User } from "@/types";
import { Link } from "@inertiajs/react";

interface HeaderProps {
  user?: User;
}
export default function Header({ user }: HeaderProps) {
  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-neutral-900">
      <Link
        href="/"
        className="font-['Space_Mono'] hover:underline hover:text-red-500"
      >
        ValoBuddy
      </Link>
      {user ? (
        // TODO: Make the username a dropdown with options to view their profile,
        // sign out, etc.
        <div className="flex space-x-6 text-sm">
          <p>
            <span className="text-xs italic text-neutral-400">
              Signed in as{" "}
            </span>
            <span className="font-['Space_Mono'] uppercase">{user.name}</span>
          </p>
          <Link
            as="button"
            href={route("logout")}
            method="post"
            className="font-['Space_Mono'] hover:underline"
          >
            SIGN OUT
          </Link>
        </div>
      ) : (
        <div className="flex space-x-6 text-sm">
          <Link
            href={route("register")}
            className="font-['Space_Mono'] hover:underline"
          >
            SIGN UP
          </Link>
          <Link
            href={route("login")}
            className="font-['Space_Mono'] hover:underline"
          >
            LOG IN
          </Link>
        </div>
      )}
    </nav>
  );
}
