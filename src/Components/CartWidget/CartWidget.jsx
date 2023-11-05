import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
    const [count, setCount] = useState(0);
    return (
        <>     
            <FontAwesomeIcon icon={faShoppingCart} style={{}
} />
            <span>({count})</span>
             </>
    );
};