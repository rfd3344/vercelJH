module.exports = {
  base: {
    // this is a common environment variables shared between all env
    // https://create-react-app.dev/docs/advanced-configuration/

    PORT: 3344,
    NEXT_PUBLIC_BUILD_TIME: new Date().toLocaleString('en-US', { timeZone: "Australia/Sydney" }),

    NEXT_PUBLIC_VERCEL_SERVER: 'https://rfd3344.vercel.app',
    NEXT_PUBLIC_GITHUB_API: 'https://api.github.com/repos',
    NEXT_PUBLIC_GITHUB_RAW: 'https://raw.githubusercontent.com',

    NEXT_PUBLIC_MONGO_USERNAME: 'admin',
    NEXT_PUBLIC_MONGO_PASSWORD: 'admin',
    NEXT_PUBLIC_MONGO_DATABASE: 'vercelDb',
    PERCY_TOKEN: 'web_e84292824c3ec9d9b49e41d5c4dcc3f3e425d57773165fc997b1b82e45b14092',

    NEXT_PUBLIC_SANITY_PROJECT_ID: 'mmv3d3wi',
    NEXT_PUBLIC_SANITY_DATASET: 'production',

  },

  // https: {
  //   HTTPS: true,
  //   PORT: 3345,
  // },
  dev: {
    NEXT_PUBLIC_STAGE: 'dev',

  },

  prod: {
    NEXT_PUBLIC_STAGE: 'prod',
    GENERATE_SOURCEMAP: false, // disabled create source map

  },
};
