import { TwitterApi } from "twitter-api-v2";
import { getFashionTrends } from "./scrapers/fetch_trends.js";

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET
});

async function main() {
  const trends = await getFashionTrends();
  const tweetText = `👔 今日のメンズファッショントレンドTOP3 👔\n\n${trends}\n\n#メンズファッション #トレンド #楽天`;

  await client.v2.tweet(tweetText);
  console.log("Tweeted:\n", tweetText);
}

main();
