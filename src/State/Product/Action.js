import axios from "axios";

import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "./ActionType.js";
import {API_BASE_URL, api} from "../../config/apiConfig.js";
import { mens_kurta } from "../../Data/Men/men_kurta.js";
import { ConsoleLine } from "mdi-material-ui";

export const findProducts = (reqData) => async (dispatch) => {
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
// 
  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
    const { data } = await api.get(
      `api/products?category=${category}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}&minDiscount=${minDiscount}`
    );

    console.log("product data- ", data);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload:error
    });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST }); 
  const {productId}=reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("products by  id : ", data);
    dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS,payload: data,});
  } catch (error) {
    console.log("hello");
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload:error
    });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { data } = await api.post(
      `${API_BASE_URL}api/admin/products/`,
      product
    );


    console.log("created product -----",data)
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });

    console.log("created product ", data);
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload: error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const { data } = await api.put(
      `${API_BASE_URL}/api/admin/products/${product.productId}`,
      product
    );
console.log("update product ",data)
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  console.log("delete product action",productId)
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    let {data}=await api.delete(`/api/admin/products/${productId}`);

   
    console.log("delete product ",data)
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });

    

    console.log("product delte ",data)
  } catch (error) {
    console.log("catch error ",error)
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
