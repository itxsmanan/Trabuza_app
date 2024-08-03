import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activities from "./pages/Activities.js";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import ViewUser from "./pages/ViewUser.js";
import Category from "./pages/Category.js";
import AddCategory from "./pages/AddCategory.js";
import ContactUs from "./pages/ContactUs.js";
import Announcements from "./pages/Announcements.js";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/viewUser" component={ViewUser} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/addCategory" component={AddCategory} />
          <Route exact path="/contactUs" component={ContactUs} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
