module.exports = {
  base: {
    // this is a common environment variables shared between all env
    // https://create-react-app.dev/docs/advanced-configuration/

    PORT: 3344,
    NEXT_PUBLIC_BUILD_TIME: new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' }),

    NEXT_PUBLIC_EXPRESS_SERVER: 'https://express-jh.vercel.app',

    NEXT_PUBLIC_GITHUB_API: 'https://api.github.com/repos',
    NEXT_PUBLIC_GITHUB_RAW: 'https://raw.githubusercontent.com',

    NEXT_PUBLIC_MONGO_USERNAME: 'admin',
    NEXT_PUBLIC_MONGO_PASSWORD: 'admin',
    NEXT_PUBLIC_MONGO_DATABASE: 'vercelDb',
    PERCY_TOKEN: 'web_e84292824c3ec9d9b49e41d5c4dcc3f3e425d57773165fc997b1b82e45b14092',

    NEXT_PUBLIC_SANITY_PROJECT_ID: 'mmv3d3wi',
    NEXT_PUBLIC_SANITY_DATASET: 'production',

    NEXT_PUBLIC_OPENAI_KEY: 'rfd3344-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',

    NEXT_PUBLIC_SUPABASE_URL: 'https://lptzasniijvqdaztkxgc.supabase.co',
    NEXT_PUBLIC_SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdHphc25paWp2cWRhenRreGdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0ODUwNDAsImV4cCI6MjA1MjA2MTA0MH0.fC2xCTvu3Ba1SEOhHsjTElcO2Vxvl6wy_kXLud2YOEI',



  },

  // https: {
  //   HTTPS: true,
  //   PORT: 3345,
  // },
  dev: {
    NEXT_PUBLIC_STAGE: 'dev',

    NEXT_PUBLIC_VERCEL_SERVER: 'http://localhost:3344',
  },

  prod: {
    NEXT_PUBLIC_STAGE: 'prod',
    GENERATE_SOURCEMAP: false, // disabled create source map

    NEXT_PUBLIC_VERCEL_SERVER: 'https://rfd3344.vercel.app',
  },
};