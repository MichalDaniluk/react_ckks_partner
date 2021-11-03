const Provision = (item) => {
  return (
    <div className="row course">
      <div className="col"></div>
      <div className="col">{item.item.status}</div>
      <div className="col">{item.item.imie_nazwisko}</div>
      <div className="col">{item.item.miejsce}</div>
      <div className="col"></div>
      <div className="col"></div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  );
};

export default Provision;
