import { pad } from "./pad";

export function handleOutput({
  path,
  lines,
  words,
  chars,
  bytes,
}: {
  path: string;
  lines?: number | null;
  words?: number | null;
  chars?: number | null;
  bytes?: number | null;
}) {
  let maxLen: number = Math.max(
    bytes?.toString().length ?? 0,
    chars?.toString().length ?? 0,
    words?.toString().length ?? 0,
    lines?.toString().length ?? 0,
  );

  let outputString = path;

  if (bytes) {
    outputString = `${bytes} ${outputString}`;
  }

  if (chars) {
    outputString = pad(outputString, chars, maxLen);
  }

  if (words) {
    outputString = pad(outputString, words, maxLen);
  }

  if (lines) {
    outputString = pad(outputString, lines, maxLen);
  }

  Bun.write(Bun.stdout, outputString + "\n");
}
