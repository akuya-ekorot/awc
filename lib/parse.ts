import { parseArgs } from "util";

export default function parse(args: string[]) {
  try {
    const { values } = parseArgs({
      args,
      options: {
        c: {
          type: "string",
        },
      },
    });
    return { data: { values }, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
