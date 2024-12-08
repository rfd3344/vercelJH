module.exports = {
  base: {
    // this is a common envrioment variables shared between all env
    // https://create-react-app.dev/docs/advanced-configuration/

    PORT: 3344,
    NEXT_PUBLIC_BUILD_TIME: Date(),

  },

  // https: {
  //   HTTPS: true,
  //   PORT: 3345,
  // },
  dev: {
    NEXT_PUBLIC_STAGE: 'dev',

    NEXT_PUBLIC_GITHUB_API: 'https://api.github.com/repos',
    NEXT_PUBLIC_GITHUB_RAW: 'https://raw.githubusercontent.com',
    NEXT_PUBLIC_VERCEL_SERVER: 'https://rfd3344.vercel.app',
  },

  prod: {
    NEXT_PUBLIC_STAGE: 'prod',
    GENERATE_SOURCEMAP: false, // diabled create source map

    NEXT_PUBLIC_GITHUB_API: 'https://api.github.com/repos',
    NEXT_PUBLIC_GITHUB_RAW: 'https://raw.githubusercontent.com',
    NEXT_PUBLIC_VERCEL_SERVER: 'https://rfd3344.vercel.app',
  },
};
