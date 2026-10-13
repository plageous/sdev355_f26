
export default function BookCard({title, author, pages, rating}) {

    //derived value                                
    const cleanTitle = title.toUpperCase();

    const bookRating = rating || 3;

    const ratingString = rating > 0 && <p>{"★".repeat(bookRating)}</p>;

    return (
        <article className="card">
            <h3 className="card-title">{cleanTitle}</h3>
            <p className="card-author">{author}</p>
            <p>Pages: {pages}</p>
            <p>{ratingString}</p>
            <span>Read carefully!</span>
        </article>
    )
}