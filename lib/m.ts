import {} from "bun:ffi";

export async function countCharacters(path: string) {
  const file = Bun.file(path);

  if (!(await file.exists())) {
    return { chars: null, error: `File ${path} doesn't exist` };
  }

  const content = await file.text();
  const chars = content.length + (content.endsWith("\n") ? 1 : 0);

  return { chars, error: null };
}
