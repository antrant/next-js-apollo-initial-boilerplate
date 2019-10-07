const nextRuntimeDotenv = require('next-runtime-dotenv');

// This is to public env variables we want to use in both server and client side
const withConfig = nextRuntimeDotenv({
  // path: '.env',
  public: [
    'APP_NAME',
  ],
});

module.exports = withConfig({
  // Your Next.js config.
});
