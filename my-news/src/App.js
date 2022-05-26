import "./App.css";
import axios from "axios";
import NewsList from "./NewsList";
import Categories from "./Categories";
import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
function App() {
  const { categoryValue } = useParams();
  console.log(categoryValue);
  const [category, setCategory] = useState("");
  const selectCategory = useCallback((category) => setCategory(category), []);
  // const getData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apikey=f2d43a1e4c3c46bd8f95574937bbb881"
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    // <div>
    //   <button onClick={getData}>요청</button>
    // </div>
    <>
      <Categories
        // category={category}
        category={categoryValue}
        setCategory={setCategory}
        onClick={selectCategory}
      ></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default App;
