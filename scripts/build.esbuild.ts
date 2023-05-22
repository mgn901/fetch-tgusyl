import { BuildOptions, build } from 'esbuild';
import copyPlugin from 'esbuild-copy-static-files';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const isDev = NODE_ENV === 'development';

const extensionBuildOptions: BuildOptions = {
  assetNames: 'assets/[name]',
  bundle: true,
  define: {
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  },
  entryPoints: [
    './src/webextension/background.ts',
    './src/webextension/offscreen.ts',
    './src/webextension/page.tsx',
  ],
  minify: !isDev,
  sourcemap: isDev,
  outdir: `./${NODE_ENV}/webextension`,
  target: ['chrome110', 'firefox110', 'edge110', 'safari14'],
  plugins: [
    copyPlugin({
      src: './src/webextension/static',
      dest: `./${NODE_ENV}/webextension`,
    }),
  ],
};

(async () => {
  await build(extensionBuildOptions);
})();
