import "./MovieCard.css";

const MovieCard = (props) => {
  // console.log(props.item);
   return (
    <div className="mcard" style={{backgroundImage:`url(${props.item.image})`}} >
        <img src={props.item.image} alt=""  className="hid-img"/>
      <div className="card-content">
        <div className="img-name-box">
          <img
            src={props.item.image}
            height="150px"
            width="120px"
            alt=""
          />
          <div className="name-box">
            <h2>{props.item.title}</h2>
            <p className="year-actor-para">
              <span className="year">{props.item.year}</span>,
              <span className="actor">Salman khan</span>
            </p>
            <p className="time-mtype-para">
              <span className="time">125min</span>
              <span className="mtype">{props.item.genre.toString()}</span>
            </p>
          </div>
        </div>
        <p className="para">
          {props.item.description}
        </p>
        <div className="main-btn-box">
          <button className="main-btn">
            <img
              src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-share-icon-png-image_925437.jpg"
              alt=""
              width="30px"
            />
          </button>
          <button className="main-btn">
            <img
              src="https://i.pinimg.com/736x/c3/b2/df/c3b2dff7986e701847f213423683f00a.jpg"
              alt=""
              width="30px"
            />
          </button>
          <button className="main-btn">
            <img
              src="https://p7.hiclipart.com/preview/1022/31/772/computer-icons-speech-balloon-speak-bubbles.jpg"
              alt=""
              width="30px"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
