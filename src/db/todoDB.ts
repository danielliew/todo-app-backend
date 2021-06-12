interface Todo {
  id: string;
  title: string;
  body?: string;
}

export class FakeTodoDb {
  store: Todo[] = [];

  constructor() {}

  select(id: string | undefined) {
    if (id === undefined) return this.store;
    const find = this.store.filter((s) => s.id === id);
    return find.length ? find : [];
  }

  insert(t: Todo) {
    try {
      this.store.push(t);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  update(t: Todo, id: string) {
    try {
      let success = false;
      this.store = this.store.map((s) => {
        if (s.id === id) {
          success = true;
          return t;
        }
        return s;
      });
      return { success };
    } catch (error) {
      return { success: false };
    }
  }

  delete(id: string) {
    try {
      let success = false;
      this.store = this.store.filter((s) => {
        if (s.id === id) {
          success = true;
          return false;
        }
        return true;
      });
      return { success };
    } catch (error) {
      return { success: false };
    }
  }
}
