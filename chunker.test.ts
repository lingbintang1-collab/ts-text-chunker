import { chunk } from "./chunker.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("covers first and last", () => {
  const words = Array.from({ length: 100 }, (_, i) => i).join(" ");
  const pieces = chunk(words, 20, 5);
  assert.equal(pieces[0].split(" ")[0], "0");
  assert.equal(pieces.at(-1)!.split(" ").at(-1), "99");
});
