export default function BookCard ({books}) {
    
    const list = [];

  books.forEach((item, index) => {
    list.push(
      <div className="card" key={index}>
        <img className="cardImage" src={item.image.src} alt={item.image.alt}/>
        <div className="cardTitle">{item.title}</div>
        <div className="cardDesc">{item.description}</div>
        <div className="options">
            <button className="favorite">Make Favorite?</button>
            <button className="showReviews">Show Reviews</button>
        </div>
      </div>
    );
  });

  return list;
}
