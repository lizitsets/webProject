
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>კონტაქტი</h1>
      <p>📍 მისამართი: თბილისი, პეკინის გამზირი 20</p>
      <p>📞 ტელეფონი: +995 599 123 456</p>
      <p>📧 ელ-ფოსტა: info@beautysalon.ge</p>

      <form className="contact-form">
        <label>შეტყობინება:</label>
        <textarea placeholder="დაგვიტოვე შეტყობინება..." required></textarea>
        <button type="submit">გაგზავნა</button>
      </form>
    </div>
  );
}

export default Contact;
