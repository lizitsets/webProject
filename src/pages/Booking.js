import { useState } from "react";
import servicesData from "../data/services.json";
import "./Booking.css";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("დაჯავშნა:", form);
    alert("თქვენი ჯავშანი წარმატებით შეინახა 💖");
    setForm({ name: "", service: "", date: "", time: "" });
  };

  return (
    <div className="booking">
      <h1>დაჯავშნე მომსახურება</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="თქვენი სახელი"
          value={form.name}
          onChange={handleChange}
          required
        />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">აირჩიეთ სერვისი</option>
          <option value="თმის შეჭრა">თმის შეჭრა</option>
          <option value="მანიკური">მანიკური</option>
          <option value="პედიკური">პედიკური</option>
          <option value="კოსმეტოლოგია">კოსმეტოლოგია</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <button type="submit">დაჯავშნა</button>
      </form>
    </div>
  );
}

export default Booking;