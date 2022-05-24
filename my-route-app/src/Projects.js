// import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

function Projects() {
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const x = searchParams.get("x");

  const [photos, setPhotos] = useState([]);
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("");
  let numCheck = [];
  // const usersData = getUsers()
  // usersData.then((response) => {
  //     console.log(response)
  //     console.log('-----------')
  // })

  const getData = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        // for (let index = 0; index < num; index++) {
        //     numCheck = [...numCheck, response.data[index]]
        // }
        numCheck = [...numCheck, response.data[num]];

        setPhotos(numCheck);
        setNum(num + 1);
        // setPhotos(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <button onClick={getData}>클릭</button>
        {photos.map((photo) => {
          return (
            <div>
              <div>
                {photo.id} {photo.email}
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
