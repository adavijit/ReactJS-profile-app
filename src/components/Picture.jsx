import pic1 from "../images/male_photo.jpeg";
import pic2 from "../images/female_photo.jpeg";


export const Picture = (props) =>{
    if(props.gender === 'male')
        return (<img src={pic1} style={{"width" : "20px", "height" : "20px"}}/>);
    else
        return (<img src={pic2} style={{"width" : "20px", "height" : "20px"}}/>);
}