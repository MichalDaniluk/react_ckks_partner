import { FaTimes } from "react-icons/fa";
import { BsFileEarmark } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";

const Course = ({ item, onDoubleClick }) => {
  const history = useHistory();
  const DbClick = (id) => {
    history.push({ pathname: "/coursecard", id: id });
    onDoubleClick(id);
  };

  return (
    <div
      className={`course row ${item.selected ? "course-selected" : ""}`}
      onDoubleClick={() => DbClick(item.kurs_id)}
    >
      <div className="col-md-6">{item.nazwa}</div>
      <div className="col">{item.data_od}</div>
      <div className="col">{item.data_do}</div>
      <div className="col">{item.zaliczka}</div>
      <div className="col">
        <Link to={{ pathname: "/coursecard", query: { the: item.kurs_id } }}>
          <BsFileEarmark />
        </Link>
      </div>
    </div>
  );
};

export default Course;
