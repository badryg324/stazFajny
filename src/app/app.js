import {environment} from "../environments/environment.prod";


const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: environment.SLACK_BOT_TOKEN,
  signingSecret: environment.SLACK_SIGNING_SECRET
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
