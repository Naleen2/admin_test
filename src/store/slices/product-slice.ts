import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export type Product = {
    id: string
    name: string;
    description: string;
    stockCount: number,
    price: number,
    image: string,
    categories: string[]
}

type ProductState = {
    products: Product[];
};

const initialState: ProductState = {
    products: [
            {
                id : "1",
                name: "HP 100",
                description: "HP Laptop",
                stockCount: 10,
                price: 1500,
                image: "https://3jnrp8-5173.csb.app/src/assets/students.jpg",
                categories: []
            },
            {
                id : "2",
                name: "Laptop",
                description: "HP 200",
                stockCount: 10,
                price: 1500,
                image: "https://3jnrp8-5173.csb.app/src/assets/students.jpg",
                categories: []
            }
    ],
};

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        createNewProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
        },
        editExistingProduct(state, action: PayloadAction<Product>) {
            const indexToEdit = state.products.findIndex(item => item.id === action.payload.id);
            const updatedProducts = [...state.products];
            updatedProducts[indexToEdit] = {
                ...updatedProducts[indexToEdit],
                ...action.payload,
            };
            return {
                ...state,
                products: updatedProducts,
            };
        }
    }
});


export const { createNewProduct, editExistingProduct } = productSlice.actions;
