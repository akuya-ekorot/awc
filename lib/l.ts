export async function countLines(path: string) {
  const file = Bun.file(path);

  if (!(await file.exists())) {
    return { lines: null, error: `File ${path} doesn't exist` };
  }

  const content = await file.text();
  const lines = content.split("\n").length - 1;

  return { lines, error: null };
}
