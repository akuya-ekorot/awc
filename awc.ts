#!/usr/bin/env bun

import { countBytes } from "./lib/c";
import parse from "./lib/parse";
import * as path from "path";

const { data, error } = parse(process.argv.slice(2));

if (error) {
  console.error(error);
}

if (data?.values.c) {
  const resolvedPath = path.resolve(data.values.c);
  const { size, error } = countBytes(resolvedPath);

  if (error) {
    console.error(error);
  } else {
    console.log(size);
  }
}
