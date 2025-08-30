// CardItem.js
import { Link } from "react-router-dom";

const CardItem = ({ card }) => (
  
  <div className="col-6 col-md-3 d-flex justify-content-center mb-4">
    <div
      className="card shadow-sm h-100 border-0"
      style={{
        width: "100%",
        maxWidth: "18rem",
        background: "linear-gradient(135deg, #e6f7e9, #ffffff)",
        borderRadius: "12px",
      }}
    >
      <img
        src={card?.image}
        alt={card?.name}
        className="card-img-top mx-auto mt-3"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <div className="card-body text-center p-2">
        <h6 className="card-title mb-1 text-success fw-bold">{card?.name}</h6>
        <p className="card-text fw-bold text-danger mb-2">{card?.price}</p>
        <Link
          to={`/product-detail/${card?.key}`}
          className="btn btn-success btn-sm"
          style={{ borderRadius: "20px", padding: "4px 12px" }}
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default CardItem;
