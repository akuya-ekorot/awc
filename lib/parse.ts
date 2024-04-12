import { parseArgs } from "util";

export default function parse(args: string[]) {
  try {
    const { values } = parseArgs({
      args,
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
    return { data: { values }, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
