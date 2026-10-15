
export default function Name({fName, lName, middle, nickname}) {
    return (
        <article>
            <p>First: {fName}</p>
            <p>Middle: {middle}</p>
            <p>Last: {lName}</p>
            <p>Nickname: {nickname}</p>
        </article>
    )
}