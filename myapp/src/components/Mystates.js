import { useState } from "react";

export default function Statedemo(props){
    const [count, setCount] = useState(0);
        return(
            <div className="something">
                <h2> Count: {count}</h2>
                <button onClick = {() => setCount(count - 1)}>
                    Decrement
                </button>

                <button onClick = {() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        );
    }

