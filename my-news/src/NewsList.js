import react, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sample = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage: "https://via.placeholder.com/160",
// };

function NewsList({ category }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const queryString = category === "" ? "" : `&category=${category}`;

        const response = await axios.get(
          //   `https://newsapi.org/v2/top-headlines?country=kr&apiKey=f2d43a1e4c3c46bd8f95574937bbb881&category=${category}`
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=bc51f2b5411d4cee80544a3261024959${queryString}`
        );
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [category]);

  return (
    <NewsItemBlock>
      {/* <NewsItem article={sample}></NewsItem>
      <NewsItem article={sample}></NewsItem>
      <NewsItem article={sample}></NewsItem> */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsItemBlock>
  );
}

export default NewsList;
