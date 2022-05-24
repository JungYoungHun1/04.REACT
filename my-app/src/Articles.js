import React, { useContext } from "react";
import { UseContext1 } from "./UseContext1";

    
const Articles = () => {
    const {company, setCompany} = useContext(UseContext1);
    const {color, setColor} = useContext(UseContext1);
    // const {back, setBack} = useContext(UseContext1);

    return (
        <article 
        className="article"
        style={{
			color: color
            
        }}>
            <h3>{company}에 오신것을 환영합니다</h3>
        </article>
    );
}

export default Articles;