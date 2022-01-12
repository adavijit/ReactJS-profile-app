import axios from 'axios';
const baseUrl =`https://gorest.co.in/public/v1/users`;
export const getAllData = async () =>{
    const response = await axios.get(baseUrl);
    console.log(response.data);
    return response.data;
}


/* https://gorest.co.in/public/v1/users/id 

send this `id` param to get specific user data based on id

*/
export const getOneProfileData = async (id) =>{
    const response = await axios.get(`${baseUrl}/${id}`);
    console.log(response.data);
    return response.data;
}