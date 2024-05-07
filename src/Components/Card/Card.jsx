import "./Card.css";

const Card = (props) => {
    // console.log(props.arr.code);
return(
 <div className="card" >
          <div className="color-box" style={{background:`${props.arr.code}`}}></div>
          <div className="color-details-box">
          <p className="color-code">{props.arr.code}</p>
          <p className="color-name" style={{color:`${props.arr.code}`}}>{props.arr.name}</p>
          </div>
          </div>
   )
};

export default Card;



 


        