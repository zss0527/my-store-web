import { createReducer, on } from "@ngrx/store";
import { productState } from "./product.state";
import { loadProductsFail, loadProductsSuccess } from "./product.action";

const _productReducer = createReducer(productState,
    on(loadProductsSuccess, (state, action) => {
        return {
            ...state,
            list: action.list,
            errormessage: ''
        }
    }),
    on(loadProductsFail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    })

)