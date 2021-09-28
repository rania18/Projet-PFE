/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  NavItem,
  Col,
  UncontrolledCollapse,
  Row,
  NavbarBrand,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/auth";
import { history } from "../../helpers/history";
import BoardAdmin from "views/examples/BoardAdmin";
import BoardUser from "views/examples/BoardUser";
import Register from "views/examples/Register";
import Login from "components/Footers/AuthFooter";
import Admin from "layouts/Admin";
import Auth from "layouts/Auth";


const AdminNavbar = (props) => {

  const dispatch = useDispatch();
// logout
  const logOut = () => {
    dispatch(logout());
  };

  // 
  const { user: currentUser } = useSelector((state) => state.auth);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    if (currentUser) {
      // setShowReparateurBoard(currentUser.roles.includes("ROLE_REPARATEUR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);
  return (
    <>
        <Router history={history}>

        <Navbar className="navbar navbar-expand ">
          <Link to={"/"} className="navbar-brand">
            {/* TeamDev */}
          </Link>
       
         <div className="navbar-nav mr-auto">
           {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> */}

         

            {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}*/}
          </div> 
          

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/auth/home"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/auth/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/auth/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/auth/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )} 


        
        </Navbar>

        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={Home} /> */}
            {/* <Route exact path="/auth/login" component={Login} /> */}
            {/* <Route exact path="/auth/register" component={Register} /> */}
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route path="/user" component={BoardUser} />
            {/* <Route path="/auth" component={Auth} /> */}

            {/* <Route path="/admin" component={BoardAdmin} /> */}
            {/* <Route path="/admin" component={Admin} /> */}

          </Switch>
        </div>



       {/* navbar tempalte */}
      {/* <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                  
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                    {/* {currentUser.username} */}
                    {/* </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
           
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <a href="/login" className="nav-link" onClick={logOut}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
                </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              
          </Nav>
        
       </Container>
      </Navbar>  */} 
      

      </Router>
    </>
  );
};

export default AdminNavbar;
