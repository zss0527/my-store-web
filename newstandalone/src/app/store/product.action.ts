import { createAction, props } from "@ngrx/store"
import { Product } from "../model/product.model"

export const LOAD_PRODUCTS = '[procut] load products'
export const LOAD_PRODUCTS_SUCCESS = '[procut] load products success'
export const LOAD_PRODUCTS_FAIL = '[procut] load products fail'

export const loadProducts = createAction(LOAD_PRODUCTS)
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{ list: Product[] }>())
export const loadProductsFail = createAction(LOAD_PRODUCTS_FAIL, props<{ errormessage: string }>())