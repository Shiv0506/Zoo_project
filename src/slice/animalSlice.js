import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchAnimals = createAsyncThunk('animals/fetch', async()=>{
 const res = await axios.get('https://api.sampleapis.com/animals/animals');
 return res.data;
});
const slice=createSlice({
 name:'animals',
 initialState:{list:[],loading:false,error:null},
 extraReducers:(b)=>{
  b.addCase(fetchAnimals.pending,(s)=>{s.loading=true;});
  b.addCase(fetchAnimals.fulfilled,(s,a)=>{s.loading=false;s.list=a.payload;});
  b.addCase(fetchAnimals.rejected,(s)=>{s.loading=false;s.error="Error";});
 }
});
export default slice.reducer;