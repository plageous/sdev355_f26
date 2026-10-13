import { useState } from 'react';

export default function Dice({ sided }) {
    //use react state hook
    const [sideUp, setSideUp] = useState(1);
    const [rolls, setRolls] = useState([]);

    //event handler
    function handleClick() {
        const roll = Math.floor(Math.random() * sided) + 1;
        setSideUp(roll);

        //once I change state, the JSX below will be rerendered
        setRolls([...rolls, roll]);
    }

    return (
        <div>
            <h1>A {sided} dice!</h1>
            <p>The {sideUp} is up!</p>
            <button onClick={handleClick}>Roll me!</button>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px"}}>
                {rolls.length > 0 ? rolls.map((el, idx) => <p key={idx}>{el}</p>) : <p>No rolls made</p>}
            </div>
        </div>
    )
}