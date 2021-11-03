import Course from "./Course";
import SectionHeader from "./SectionHeader";

const Courses = ({ courses, onDoubleClick }) => {
  return (
    <div>
      <SectionHeader title="Moje kursy" />
      <div className="row course-header">
        <div className="col-md-6">Nazwa kursu</div>
        <div className="col">Rozpoczęcie</div>
        <div className="col">Zakończenie</div>
        <div className="col">Zaliczka/Wpłata</div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      {courses.map((item) => (
        <>
          <Course
            key={item.kurs_id}
            item={item}
            onDoubleClick={onDoubleClick}
          />
        </>
      ))}
    </div>
  );
};

export default Courses;
