import { Config } from "ziggy-js";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
};

export interface StratForViewing {
  id: number;
  title: string;
  attacker_side_notes_html: string | null;
  defender_side_notes_html: string | null;
  created_at: string;
  updated_at: string;
}

export interface StratForEditing {
  id: number;
  title: string;
  attacker_side_notes: string | null;
  defender_side_notes: string | null;
  created_at: string;
  updated_at: string;
}
