export async function countWords(path: string) {
  const file = Bun.file(path);

  if (!(await file.exists())) {
    return { words: null, error: `File ${path} doesn't exitst` };
  }

  const content = await file.text();
  const words = content.split(/\s+/).length - 1;

  return { words, error: null };
}
