export async function countBytes(resolvedPath: string) {
  const file = Bun.file(resolvedPath);

  if (!(await file.exists())) {
    return { size: null, error: `File ${resolvedPath} doesn't exits.` };
  }

  return { size: file.size, error: null };
}
