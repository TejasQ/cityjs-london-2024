import type { Event } from "../types";

export const paginate = (e: MouseEvent) => {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }

  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }

  if (e.target.id !== "paginator") {
    return;
  }

  window.location.href = "/todo/?debug=true&until=" + e.target.value;
};
