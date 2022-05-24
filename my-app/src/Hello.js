import React from "react"
function Hello(props) {
    const {name, color, important} = props;

    console.log(props);
    // const name = "React";
    // const basic = {color: "red"}
    console.log(important);
    console.log(!{undefined});
    return (
        <div 
            style={{color}}
        >
            {important ? '!!' : null}
            {important || '?!'}
            Hello, {name}
        </div>
    )
}
Hello.defaultProps = {
    name : "name 기본값"
}
export default Hello;