import "./App.css";
import { useRef, useState } from "react";

function App() {
  // input 제어를 위한 useRef
  const imgRef = useRef(null);
  const [imgList, setImgList] = useState([]);

  console.log(imgList);

  function Image(idx) {
    return (
      <div className="img-item" key={imgList + idx}>
        <img src={imgList} alt=""></img>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="main">
        <div
          className="add-button"
          onClick={() => {
            imgRef.current.click();
          }}
        >
          +
        </div>
        <input
          className="file-upload-input"
          type="file"
          ref={imgRef}
          onChange={(event) => {
            // console.log(event.currentTarget.value);
            // setImgList([...imgList, event.currentTarget.value]);

            // fakePath 문제 발생
            // const val = event.currentTarget.value;
            // setImgList((prev) => {
            //   return [...prev, val];
            // });
            console.log(event.currentTarget.files[0]);
            const file = event.currentTarget.files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onloadend = (e) => {
              console.log(e.target.result);
              setImgList((prev) => {
                return [...prev, e.target.result];
              });
            }; // 읽어들이기만 하면 바로 실행
            event.currentTarget.value = "";
          }}
        />
        <div className="main-text">Choose Image</div>
        <div className="gallery">
          {imgList.map((img, idx) => (
            <div className="img-item" key={img + idx}>
              <img src={img} alt=""></img>
            </div>
            // <div>
            //   <Image key={img + idx} src={img} idx={idx}></Image>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
