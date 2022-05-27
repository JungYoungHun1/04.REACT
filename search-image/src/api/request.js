// https://pixabay.com/api/?key=27684584-fa266ed6b08561df8a5d02867&q=sky
const request = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default request;
