
import "./ServiceCard.css";

function ServiceCard({ name, price, duration }) {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>ფასი: {price}</p>
      <p>ხანგრძლივობა: {duration}</p>
    </div>
  );
}

export default ServiceCard;
