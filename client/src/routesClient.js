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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BoardUser from "views/examples/BoardUser";
import BoardAdmin from "views/examples/BoardAdmin";
import Admin from "layouts/Admin";
import Auth from "layouts/Auth";
import Enquete from "views/examples/Enquete";

var routesClient = [
  {
    path: "/index",
    name: "Tableau de bord",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/cliens",
    name: "Gestion des clients",
    icon: "ni ni-single-02 text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/cars",
    name: "Gestion des véhicules",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/repairers",
    name: "Gestion des réparateurs",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/satisfaction",
    name: "Gestion des satisfactions",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-bullet-list-67 text-red",
    component: Profile,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path:'/home',
    name:'home',
    component:Maps,
    layout:"/auth"
  },
  {
     path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/Enquete",
    name: "Enquete",
    icon: "ni ni-circle-08 text-pink",
    component: Enquete,
    layout: "/auth",
  },
 
];
export default routesClient;
