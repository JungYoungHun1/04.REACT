import request from "./request";

const getImages = async () => {
  const data = await request(
    "https://pixabay.com/api/?key=27684584-fa266ed6b08561df8a5d02867&q=summer"
  );
  return data;
};

export default getImages;
