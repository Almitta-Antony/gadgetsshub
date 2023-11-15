import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createProduct = createAsyncThunk(
    "createProduct",
    async (data, {rejectWithValue}) => {
        console.log("data", data);
        const response = await fetch(
            "https://6550a52b7d203ab6626e0400.mockapi.io/Crud",
         {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        );


        try {
            const result = await response.json();
            return result;
        }catch (error) {
            return rejectWithValue(error);
        }
    }
    );


//read action 

export const showProduct = createAsyncThunk(
    "showProduct",
     async (args,{ rejectWithValue }) => {
        const response = await fetch(
            "https://6550a52b7d203ab6626e0400.mockapi.io/Crud"
            );
        try {
            const result = await response.json()
            console.log(result);
            return result;
        }catch (error) {
            return rejectWithValue(error)
        }
    })



    //delete action

    export const deleteProduct = createAsyncThunk(
        "deleteProduct",
         async (id,{ rejectWithValue }) => {
            const response = await fetch(
                `https://6550a52b7d203ab6626e0400.mockapi.io/Crud/${id}`,
                {
                    method: "DELETE", 
                }
                );
            try {
                const result = await response.json()
                console.log(result);
                return result;
            }catch (error) {
                return rejectWithValue(error)
            }
        })

        //update action
export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (data, { rejectWithValue }) => {
      console.log("updated data", data);
      const response = await fetch(
        `https://6550a52b7d203ab6626e0400.mockapi.io/Crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
    

export const productDetail = createSlice({
    name: 'productDetail',
    initialState: {
        products: [],
        loading: false,
        error: null,
        searchData:[]
    },

    reducers:{
        searchProduct:(state,action)=>{
        state.searchData=action.payload
        }
    },
    extraReducers: {
        [createProduct.pending]: (state) => {
            state.loading = true;
        },
        [createProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.products.push(action.payload)
        },
        [createProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [showProduct.pending]: (state) => {
            state.loading = true;
        },
        [showProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.products=action.payload
        }, 
        [showProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [deleteProduct.pending]: (state) => {
            state.loading = true;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.loading = false;
            const {id}=action.payload
            if(id){
                state.products=state.products.filter((i)=>i.id !== id)
            }
            console.log("delete action",action.payload);
            
        }, 
        [deleteProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [updateProduct.pending]: (state) => {
            state.loading = true;
          },
          [updateProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = state.products.map((i) =>
              i.id === action.payload.id ? action.payload : i
            );
          },
          [updateProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
          },


    }

})

export default productDetail.reducer;

export const {searchProduct}=productDetail.actions