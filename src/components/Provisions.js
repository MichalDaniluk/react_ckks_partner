import Provision from "./Provision";
import SectionHeader from "./SectionHeader";

const Provisions = ({ provisions }) => {
  return (
    <div>
      <SectionHeader title="Prowizje partnera" />
      <div className="row course-header">
        <div className="col">Procent prowizji</div>
        <div className="col">Status płatności</div>
        <div className="col">Kursant</div>
        <div className="col">Miejsce kursu</div>
        <div className="col">Wpłaty kursanta</div>
        <div className="col">Prowizja</div>
        <div className="col">Wypłacono</div>
        <div className="col">Róznica</div>
      </div>
      {provisions.map((item) => (
        <>
          <Provision key={item.kurs_id} item={item} />
        </>
      ))}
    </div>
  );
};

export default Provisions;
