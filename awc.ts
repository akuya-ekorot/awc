#!/usr/bin/env bun

import { countBytes } from "./lib/c";
import { countLines } from "./lib/l";
import { countCharacters } from "./lib/m";
import parse from "./lib/parse";
import { countWords } from "./lib/w";

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

if (data?.values.w) {
  const { words, error } = await countWords(data.values.w);

  if (error) {
    Bun.write(Bun.stderr, error + "\n");
  } else {
    Bun.write(Bun.stdout, String(words) + "\n");
  }
}

if (data?.values.m) {
  const { chars, error } = await countCharacters(data.values.m);

  if (error) {
    Bun.write(Bun.stderr, error + "\n");
  } else {
    Bun.write(Bun.stdout, String(chars) + "\n");
  }
}
