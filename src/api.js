import axios from 'axios';
const baseUrl =`https://gorest.co.in/public/v1/users`;
export const getAllData = async () =>{
    const response = await axios.get(baseUrl);
    console.log(response.data);
    return response.data;
}