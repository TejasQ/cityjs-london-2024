export type Event =
  | {
      type: "CREATE_TODO";
      payload: {
        label: string;
        id: string;
      };
    }
  | {
      type: "DELETE_TODO";
      payload: {
        id: string;
      };
    }
  | {
      type: "DO_TODO";
      payload: {
        id: string;
      };
    }
  | {
      type: "UNDO_TODO";
      payload: {
        id: string;
      };
    };
