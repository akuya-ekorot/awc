#!/usr/bin/env bun

import { countBytes } from "./lib/c";
import { countLines } from "./lib/l";
import parse from "./lib/parse";

const { data, error } = parse(process.argv.slice(2));

if (error) {
  console.error(error);
}

if (data?.values.c) {
  const { size, error } = await countBytes(data.values.c);

  if (error) {
    Bun.write(Bun.stderr, error + "\n");
  } else {
    Bun.write(Bun.stdout, String(size) + "\n");
  }
}

if (data?.values.l) {
  const { lines, error } = await countLines(data.values.l);

  if (error) {
    Bun.write(Bun.stderr, error + "\n");
  } else {
    Bun.write(Bun.stdout, String(lines) + "\n");
  }
}
