import { useState } from "react";
import axios from 'axios';
import {Root2} from '../Types/Data';

export const Form = () => {

    const [data, setData] = useState<Root2 | null>();
    const [name, setName] = useState('');
  
    let api = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        axios.get(api)
        .then(response => {
          console.log(response.data[0]);
          setData(response.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            />
            <button type="submit">Pesquisar</button>
      </form>
    )
}