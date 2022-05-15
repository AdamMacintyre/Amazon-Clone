
export const initialState = {
    basket: [],
    user: null
};

//This is called a selector, this is highly used in professional settings
//This add the total in the basket

//"reduce"is very powerful. it is a function that maps through the basket then adds them
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);



const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, 
                    action.item],
            };
            
            case "EMPTY_BASKET":
                return {
                    ...state,
                    basket: []
                };

            case "REMOVE_FROM_BASKET":

                // This way you need different id's for the products
                //because if you remove the same product it will remove all of them
                //because they have the same id.
                // return {
                //     ...state,
                //     basket: state.basket.filter(item => item.id !==action.id)
                // }

                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];

                if (index>=0){
                    newBasket.splice(index, 1)

                } else {
                    console.warn(
                        `Can't remove product (id:${action.id}) as its not in basket!`
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }

                case "SET_USER":
                    return {
                        // this for remebering what user has in basket
                        //this listen to the dispatch
                        // spread operator is crucial for remebering what the user has in the state 
                        // "user: action.user" is what is in the dispatch in "App.js" under "user: authUser"
                        ...state,
                        user: action.user
                    }
                
            default:
                return state;
    }
};

export default reducer;