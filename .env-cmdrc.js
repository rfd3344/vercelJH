module.exports = {
  base: {
    // this is a common envrioment variables shared between all env
    // https://create-react-app.dev/docs/advanced-configuration/

    PORT: 3344,
    NEXT_PUBLIC_BUILD_TIME: Date(),

    NEXT_PUBLIC_GITHUB_API: 'https://api.github.com/repos',
    NEXT_PUBLIC_GITHUB_RAW: 'https://raw.githubusercontent.com',

  },

  // for Facebook and Google Login
  // Dev only, https://localhost:3001/
  https: {
    HTTPS: true,
    PORT: 3345,
  },
  dev: {
    NEXT_PUBLIC_STAGE: 'dev',

    // MONGODB_URI: 'mongodb+srv://admin:admin@cluster0.lph5oow.mongodb.net/next?retryWrites=true&w=majority'

  },

  prod: {
    NEXT_PUBLIC_STAGE: 'prod',
    GENERATE_SOURCEMAP: false, // diabled create source map

    // MONGODB_URI: 'mongodb+srv://admin:admin@cluster0.lph5oow.mongodb.net/next?retryWrites=true&w=majority'

  },
};
