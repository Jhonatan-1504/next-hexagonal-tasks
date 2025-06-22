export interface Task {
  id: string;
  title: string;
  description: string;
}

export function ensureId(id: string){
  if (id.length === 0 || id === null) throw new Error("task Id is required");
}

export function ensureTitleLength(title: string) {
  if (title.length < 3) throw new Error("Title must more 3 character");
}
