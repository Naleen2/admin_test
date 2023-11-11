import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export type Product = {
    id: string
    name: string;
    description: string;
    stockCount: number,
    price: number,
    image: string
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
                image: "https://3jnrp8-5173.csb.app/src/assets/students.jpg"
            },
            {
                id : "2",
                name: "Laptop",
                description: "HP 200",
                stockCount: 10,
                price: 1500,
                image: "https://3jnrp8-5173.csb.app/src/assets/students.jpg"
            }
    ],
};

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        createNewProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
        }
    }
});


export const { createNewProduct } = productSlice.actions;
