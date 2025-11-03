import axios from "axios";

export async function getFashionTrends() {
  const url = "https://app.rakuten.co.jp/services/api/IchibaItemRanking/20170628";
  const params = {
    applicationId: process.env.RAKUTEN_APP_ID,
    genreId: "100371", // メンズファッション
    hits: 3
  };

  const res = await axios.get(url, { params });
  const items = res.data.Items.map(({ Item }) => 
    `👕 ${Item.rank}位: ${Item.itemName}\n💴 ${Item.itemPrice}円\n🔗 ${Item.itemUrl}`
  );

  return items.join("\n\n");
}
