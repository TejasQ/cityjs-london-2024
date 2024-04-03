import type { APIRoute } from "astro";
import { appendFile, mkdir, readFile, stat, writeFile } from "fs/promises";
import { eventStoreDirectory } from "../../../util";
import { join } from "path";
import type { Event } from "../types";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const eventStore = join(eventStoreDirectory, "events.jsonl");
  try {
    await stat(eventStore);
  } catch {
    await mkdir(eventStoreDirectory, { recursive: true });
    await writeFile(eventStore, "", "utf-8");
  }

  const id = formData.get("id").toString();
  const todo: Event = {
    type: "DELETE_TODO",
    payload: { id },
  };
  await appendFile(eventStore, JSON.stringify(todo) + "\n", "utf-8");

  return redirect("/todo");
};
