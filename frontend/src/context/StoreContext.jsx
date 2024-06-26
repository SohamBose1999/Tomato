import { createContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

     //const url = "http://localhost:4000"
     const url = "https://tomato-backend-v1-9viy.onrender.com"


    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const [loading,setLoading] = useState(false)



    const fetchFoodList = async () => {
        try {
            setLoading(true)
        const response = await axios.get(url + "/api/food/list");
        setLoading(false)
        return  setFoodList(response.data.data)
        }catch (error){
            setLoading(false)
            console.log(error)
        }
    }



    const addToCart = async (itemId) => {
        //console.log(cartItems,token)
        if (token) {
           const res =  await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
           //console.log(res)
        }
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }

    const getTotalCartAmount = () => {
        let total = 0;
    
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                if (!food_list || !Array.isArray(food_list)) {
                    console.error('food_list is not defined or not an array');
                    return NaN;
                }
    
                let itemInfo = food_list.find((product) => product._id === item);
                if (!itemInfo) {
                    console.warn(`No item found in food_list with _id: ${item}`);
                    continue;
                }
                if (typeof itemInfo.price !== 'number') {
                    console.warn(`Invalid price for item with _id: ${item}`);
                    continue;
                }
                total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    };
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])


    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: token });
        setCartItems(response.data.cartData);
        
    }


    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        loading
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;