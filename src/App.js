import { Suspense, lazy, Component } from "react";
import { connect } from "react-redux";
import { Switch} from "react-router-dom";
import AppBar from "./components/UserMenu/AppBar";
import { getCurrentUser } from "./redux/auth/auth.operations";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "login-view" */)
);
const Contacts = lazy(() =>
  import("./components/Contacts" /* webpackChunkName: "contacts-view" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div className="block">
        <AppBar />
        <Suspense fallback={<p>Loading in progress...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              exact
              restricted
              path="/register"
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              exact
              restricted
              path="/login"
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              exact
              path="/contacts"
              component={Contacts}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
