import axios from 'axios'

const url="http://localhost:8080"

export const inserting=async(obj)=>{
    const t=await axios.post(`${url}/add`,obj)
    return t;
}

export const collecting=async()=>{
    const t = await axios.get(`${url}/`)
    return t;
}

export const enrolling=async(obj)=>{
    const t = await axios.post(`${url}/part`,obj)
    return t;
}

export const updating=async(word,obj)=>{
    const t = await axios.put(`${url}/up/${word}`,obj)
    return t;
}

export const onlyOne=async(num)=>{
    const t = await axios.get(`${url}/one/${num}`)
    return t;
}

//export {inserting}