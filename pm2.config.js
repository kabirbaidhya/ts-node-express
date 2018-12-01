module.exports = {
  apps: [
    {
      name: "api",
      // If boss is used for deployment, set the script path to: current/dist/index.js
      script: "dist/index.js",
      // For your standalone pm2 based deployment, you can set script to dist/index.js
      cwd: process.env.PWD,
      instances: process.env.APP_INSTANCES || 2,
    },
  ],
};
