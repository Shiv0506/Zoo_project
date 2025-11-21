import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimals } from '../slice/animalSlice';
export default function AnimalsList(){
 const d=useDispatch();
 const {list,loading}=useSelector(s=>s.animals);
 useEffect(()=>{d(fetchAnimals())},[]);
 if(loading) return <p>Loading...</p>;
 return (<div><h1>Animals</h1>{list.map(a=><p key={a.id}>{a.name}</p>)}</div>);
}