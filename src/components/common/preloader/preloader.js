import preLoader from "../../../assets/img/preloader.gif";
import React from "react";



let Preloader = (props) => {
    return(
        <div className=".preloader__wrap">
             <img src={preLoader} />
        </div>
    )
}

export default Preloader