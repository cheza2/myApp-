import React, { useState } from "react";

export const Header = () => {
    


    const [num, setNum] = useState(0);


    return (
        <div>
            <h3>{num}</h3>
            <button onClick={() => setNum(num + 1)}>inc</button>
            <button onClick={() => setNum(num - 1)}>dec</button>
        </div>
    );
}