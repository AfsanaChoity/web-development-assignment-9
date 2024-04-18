import { Link } from "react-router-dom";
import 'animate.css';

const Card = ({ cards }) => {
    // console.log(cards);
    const { estate_title, image, description, id,status,price } = cards;
    const animationDelay = `${id * 500}ms`; 
    return (
        <div className={`animate__animated animate__bounceIn card w-96 bg-base-100  border  `} style={{ animationDelay }}>
            <figure><img className="p-4 rounded-3xl w-80 h-60" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p className="text-xs opacity-60">{description}</p>
                <div className="card-actions justify-end items-center">
                    <p className="bg-orange-400 text-orange-200 w-4 text-center rounded-full">{price} $</p>
                    <p className="bg-orange-400 text-orange-200 w-4 text-center rounded-full">{status}</p>
                    
                    <Link to= {`/cards/${id}`} className="btn btn-active btn-link text-xl text-orange-200">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;