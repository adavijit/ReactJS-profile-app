import pic1 from "../images/male_photo.jpeg";
import pic2 from "../images/female_photo.jpeg";


export const Picture = (props) =>{
    const pic = (props.gender === 'male')? 
     <img src={pic1} style={{"width" : "20px", "height" : "20px"}}/> :
     <img src={pic2} style={{"width" : "20px", "height" : "20px"}}/>
   return pic;
       
        
}