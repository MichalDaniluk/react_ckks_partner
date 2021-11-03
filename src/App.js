import Header from "./components/Header";
import Menu from "./components/Menu";
import Courses from "./components/Courses";
import MainData from "./components/MainData";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";
import Provisions from "./components/Provisions";
import ProvisionsSettled from "./components/ProvisionsSettled";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //const location = useLocation();
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [provisions, setProvisions] = useState([]);

  const [isLogin, setLogin] = useState(true);

  const getList = async () => {
    try {
      const res = await axios.get(
        "https://api.ckks.pl/api/course/main/arturwojcik88@gmail.com/Artur Wójcik"
      );
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getCourseData = async (id) => {
    try {
      const res = await axios.get("https://api.ckks.pl/api/course/" + id);
      setCourseData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getProvisions = async (code) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/partner/orders/" + code
      );
      setProvisions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setLogin(false);
  };

  const addData = (course) => {
    console.log(course);
    //user settings
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header userName="Miki" />
          {isLogin && (
            <Menu
              onLogout={logout}
              onGetList={getList}
              onGetListProvisions={getProvisions}
            />
          )}
        </header>
        <div className="main-container">
          <Route
            path="/logout"
            render={(props) => (
              <>
                {setLogin(false)}
                <LoginForm />
              </>
            )}
          />
          <Route
            path="/courses"
            render={(props) => (
              <Courses courses={courses} onDoubleClick={getCourseData} />
            )}
          />

          <Route
            path="/maindata"
            render={(props) => <MainData onAdd={addData} />}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/coursecard"
            render={(props) => <CourseCard item={courseData} />}
          />
          <Route
            path="/provisions"
            render={(props) => <Provisions provisions={provisions} />}
          />
          <Route
            path="/provisions-settled"
            render={(props) => <ProvisionsSettled provisions={provisions} />}
          />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
