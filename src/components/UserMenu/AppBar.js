import React from 'react'
import Navigation from "./Navigation"
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { connect } from 'react-redux';
import {getIsAuthenticated} from "../../redux/auth/auth.selectors"


const AppBar = ({ isAuthenticated }) => (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu/> : <AuthNav/>}
    </header>
)

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(AppBar);