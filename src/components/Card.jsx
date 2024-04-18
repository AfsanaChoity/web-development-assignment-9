import { Link } from "react-router-dom";


const Card = ({ cards }) => {
    // console.log(cards);
    const { estate_title, image, description, id } = cards;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to= {`/cards/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;