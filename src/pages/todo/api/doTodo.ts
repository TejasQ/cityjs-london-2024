import type { APIRoute } from "astro";
import { appendFile, mkdir, readFile, stat, writeFile } from "fs/promises";
import { eventStoreDirectory } from "../../../util";
import { join } from "path";
import type { Event } from "../types";

export const POST: APIRoute = async ({ request, redirect }) => {
  const body: Event = await request.json();
  const eventStore = join(eventStoreDirectory, "events.jsonl");
  try {
    await stat(eventStore);
  } catch {
    await mkdir(eventStoreDirectory, { recursive: true });
    await writeFile(eventStore, "", "utf-8");
  }

  await appendFile(eventStore, JSON.stringify(body) + "\n", "utf-8");

  return redirect("/todo");
};
