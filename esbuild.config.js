const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src-cli/torytis-create-app.ts"],
  target: ['es5', 'es6', 'es2017'],
  bundle: true,
  sourcemap: false,
  minify: true,
  format: 'cjs',
  platform: 'node',
  outfile: "bin/torytis-create-app.js",
  external: ['esbuild'],
  treeShaking: true,
  plugins: [],
});