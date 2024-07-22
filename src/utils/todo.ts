export function getTodoId(path: string) {
    const id = path.split("/").pop();
    return id;
}
