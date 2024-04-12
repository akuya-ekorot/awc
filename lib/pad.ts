export function pad(
  outputString: string,
  value: number,
  maxLen: number,
): string {
  let pad = "";

  if (maxLen > value.toString().length) {
    const remainder = maxLen - value.toString().length;

    for (let i = 0; i < remainder; i++) {
      pad += " ";
    }
  }

  return `${pad}${value} ${outputString}`;
}
