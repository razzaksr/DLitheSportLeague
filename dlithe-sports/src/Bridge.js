import axios from 'axios'

const url="http://localhost:8080"

export const inserting=async(obj)=>{
    const t=await axios.post(`${url}/add`,obj)
    return t;
}

//export {inserting}