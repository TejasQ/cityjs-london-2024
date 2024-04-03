import type { Event } from "../types";

export const doTodo = (e: MouseEvent) => {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }

  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }

  e.preventDefault();
  if (e.target.className.includes("todo-item")) {
    const event: Event = {
      type: e.target.checked ? "DO_TODO" : "UNDO_TODO",
      payload: {
        id: e.target.dataset.id,
      },
    };

    fetch("/todo/api/doTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }).then(() => window.location.reload());
  }
};
