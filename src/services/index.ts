import axios from "axios";

export const getJoke=async ()=>{
    const chuckNorrisAPI = 'https://api.chucknorris.io/jokes/random';

 return await axios.get(chuckNorrisAPI)
      .then((response) => {
        const fact = response.data.value;
        return fact;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
export const getFacts=async ()=>{
    const facts:string[]=[];
    for(let i=0;i<10;i++){
        facts.push(await getJoke())
    }
    return facts;
}