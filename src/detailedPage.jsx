import { redirect, useLoaderData, useOutletContext, useParams, Navigate } from "react-router-dom";

export default function DetailedPage () {
    const books = useLoaderData();
    let { id } = useParams();
    let flag = false;
    let index = 0;
    // id -= 1;
    loop: for(let i = 0; i < books.length; i++){
        if(books[i].id == id) {
            flag = true;
            index = i;
            break loop;
        }
    }

    if(!flag) {
        return <Navigate to='/' />
    }

    
    return (
        <div className="detailPage">
            <div className="upper">
                <img className="cardImageInner" src={books[index].image.src} alt={books[index].image.alt}></img>
                <div className="baseInfo">
                    <h1 id="titleInner">{books[index].title}</h1>
                    <h2 id="authorInner">{books[index].author}</h2>
                </div>
            </div>
            <div className="lower">
                <h1>Description:</h1>
                <h2>{books[index].description}</h2>
            </div>
        </div>
    )
}