
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <div className="services">
      <h1>ჩვენი სერვისები</h1>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            price={service.price}
            duration={service.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
