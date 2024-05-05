import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCardContextType } from "../context/CartProvider";

const useCart = (): UseCardContextType => {
    return useContext(CartContext)
    // exav
}

export default useCart
