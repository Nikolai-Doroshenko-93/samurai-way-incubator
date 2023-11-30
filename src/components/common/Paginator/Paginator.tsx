import React, {useState} from "react";
import s from "../../common/Paginator/Paginator.module.css"



let Paginator = ( props: any) => {
    let portionSize = 10
    let pagesCount = Math.ceil((props.totalItemsCount / props.pageSize))
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize

    return <div className={s.pagesUl}>
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber -1)}}>Prev</button>}
            <div className={s.pageNumberContainer}>
                {
                    pages
                        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                        .map(p => {
                        return <div className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                            onClick={(e) => {props.onPageChanged(p)}}
                        >{p}</div>
                    })}
            </div>
        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

        </div>
}
export default Paginator