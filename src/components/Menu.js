import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  display: inline-block;
`;

const Menu = ({
  onShowMainDataForm,
  onShowMainCourses,
  onShowMenuContact,
  onLogout,
  onGetList,
  onGetListProvisions,
}) => {
  const onClick = (e) => {
    console.log(e);
  };

  const logout = () => {
    onLogout(true);
  };

  const onLoadList = () => {
    onGetList();
  };

  const onLoadProvisions = (code) => {
    onGetListProvisions(code);
  };

  return (
    <div className="menu-container">
      <Ul>
        <Item>
          <Link
            to="/provisions"
            className="btn btn-primary m-2"
            onClick={onLoadProvisions("BC")}
          >
            Prowizje
          </Link>
        </Item>
        <Item>
          <Link to="/provisions-settled" className="btn btn-primary m-2">
            Prowizje rozliczone
          </Link>
        </Item>
        <Item>
          <Link
            to="/courses"
            className="btn btn-primary m-2"
            onClick={onLoadList}
          >
            Moje kursy
          </Link>
        </Item>
        <Item>
          <Link
            to="/maindata"
            className="btn btn-primary m-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Moje dane
          </Link>
        </Item>
        <Item>
          <Link to="/contact" className="btn btn-primary m-2">
            Kontakt
          </Link>
        </Item>
        <Item>
          <Link to="/logout" className="btn btn-danger m-2">
            Wyloguj
          </Link>
        </Item>
      </Ul>
    </div>
  );
};
export default Menu;
