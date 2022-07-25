import React, {useState} from "react";
import style from "./Paginator.module.css";

let Paginator = (props) => {

    const {totalUsersCount,currentPage,pageSize,onPageChange, portionSize} = props


    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1 ;
    let rightPortionPageNumber = portionNumber * portionSize  ;


    return (
        <div className={style.pages}>
            Prev{ portionNumber > 1 &&
            <button className={style.button_prev} onClick={() => {setPortionNumber(portionNumber-1)}}/>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span className={currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 onPageChange(p)
                             }}>{p}</span>
            })}
            { portionCount > portionNumber &&
            <button className={style.button_next} onClick={() => { setPortionNumber(portionNumber + 1)} }/>} Next
        </div>
    )
}

export default Paginator