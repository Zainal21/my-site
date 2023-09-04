import axios from "axios";

const config = useRuntimeConfig();

const url = `https://api.raindrop.io/rest/v1/raindrops/${config.raindropCollectionId}`;

export default defineEventHandler(async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${config.raindropTestToken}`,
      },
    });

    const picks = response.data.items.map((item) => {
      return {
        cover: item.cover ?? "https://fakeimg.pl/100",
        title: item.title,
        url: item.link,
      };
    });

    return picks;
  } catch (error) {
    return error;
  }
});
