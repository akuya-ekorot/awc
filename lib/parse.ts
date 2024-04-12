import { parseArgs } from "util";

export default function parse() {
  try {
    const { values, positionals } = parseArgs({
      allowPositionals: true,
      options: {
        c: {
          type: "boolean",
        },
        l: {
          type: "boolean",
        },
        w: {
          type: "boolean",
        },
        m: {
          type: "boolean",
        },
      },
    });
    return { data: { values, positionals }, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
