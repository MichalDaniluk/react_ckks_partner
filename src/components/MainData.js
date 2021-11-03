import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const MainData = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Proszę podać imię ");
      return;
    }

    onAdd({ name, email, phone });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <SectionHeader title="Moje dane" />

      <form className="main-data-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Imię i nazwisko</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Adres email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nr telefonu</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>
      </form>
    </div>
  );
};

export default MainData;
