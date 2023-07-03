import { useLoaderData, useOutletContext, useParams } from "react-router-dom";


export default function DetailedPage () {
    const books = useLoaderData();
    let { id } = useParams();
    id -= 1;

    return (
        <div className="detailPage">
            <div className="upper">
                <img className="cardImageInner" src={books[id].image.src} alt={books[id].image.alt}></img>
                <div className="baseInfo">
                    <h1 id="titleInner">{books[id].title}</h1>
                    <h2 id="authorInner">{books[id].author}</h2>
                </div>
            </div>
            <div className="lower">
                <h1>Description:</h1>
                <h2>{books[id].description}</h2>
            </div>
        </div>
    )
}