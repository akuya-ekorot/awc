import * as fs from "fs";

export function countBytes(resolvedPath: string) {
  try {
    const { size } = fs.statSync(resolvedPath);
    return { size, error: null };
  } catch (error) {
    return { size: null, error };
  }
}
