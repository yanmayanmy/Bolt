const { App } = require('@slack/bolt');
const path = require('path');
 
require('dotenv').config({
  path: path.resolve(__dirname, '../.env') 
});


const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// "hello" を含むメッセージをリッスンします
app.message('hello', async ({ message, say }) => {
  // イベントがトリガーされたチャンネルに say() でメッセージを送信します
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 8000);

  console.log('⚡️ Bolt app is running!');
})();
