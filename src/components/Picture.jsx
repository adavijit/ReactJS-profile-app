import pic1 from "../images/male_photo.jpeg";
import pic2 from "../images/female_photo.jpeg";


export const Picture = (props) =>{
    
  const imgWidth = props.picWidth;
  const imgHeight = props.picHeight;
  // const imgBorderRadius = props.picBorderRadius;
  return (<img src={props.gender==='male'? pic1 : pic2} width={imgWidth} height={imgHeight} 
   alt=""/>);
       
        
}