#!/usr/bin/env bun

import { countBytes } from "./lib/c";
import { handleOutput } from "./lib/handleOutput";
import { countLines } from "./lib/l";
import { countCharacters } from "./lib/m";
import parse from "./lib/parse";
import { countWords } from "./lib/w";

const { data, error } = parse();

//TODO: Handle error and absent data

if (error) {
  console.error(error);
}

if (data?.positionals.length === 0) {
  //TODO: Read from stdin
} else {
  const filePath = data?.positionals[0]!;

  //TODO: Streamline calls. Only call necessary functions
  const { lines } = await countLines(filePath);
  const { words } = await countWords(filePath);
  const { chars } = await countCharacters(filePath);
  const { size } = await countBytes(filePath);

  const { values } = data!;

  if (!values.l && !values.w && !values.m && !values.c) {
    handleOutput({
      path: filePath,
      lines,
      words,
      bytes: size,
    });
  } else {
    handleOutput({
      path: filePath,
      lines: data!.values.l ? lines : null,
      words: data!.values.w ? words : null,
      chars: data!.values.m ? chars : null,
      bytes: data!.values.c ? size : null,
    });
  }
}
