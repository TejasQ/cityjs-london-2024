import type { Event } from "../types";

export const listTodos = (events: Event[]) => {
  let todos = [];

  for (const event of events) {
    switch (event.type) {
      case "CREATE_TODO": {
        todos.push(event.payload);
        break;
      }

      case "DELETE_TODO": {
        todos = todos.filter((t) => t.id !== event.payload.id);
        break;
      }

      case "DO_TODO": {
        todos.find((t) => t.id === event.payload.id).isDone = true;
        break;
      }

      case "UNDO_TODO": {
        todos.find((t) => t.id === event.payload.id).isDone = false;
        break;
      }
    }
  }

  return todos;
};
