import { type Options } from "tsup";

const config: Options = {
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  splitting: true,
  format: ["cjs", "esm"],
  minify: "terser",
  clean: true,
};

export default config;
