
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Vehicules from "views/examples/Vehicules";
import Reparateurs from "views/examples/Reparateurs";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Satisfaction from "views/examples/Satisfaction.js";
import Pannes from "views/examples/Pannes";
import TypePannes from "views/examples/Typepannes";
import Enquete from "views/examples/Enquete";

import Clients from "views/examples/Clients";
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DetailVehicules from "views/examples/DetailVehicules";

var routes = [
  {
    path: "/index",
    name: "Tableau de bord",
    icon: "ni ni-tv-2 text-red",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/clients",
    name: "Gestion des clients",
    icon: "ni ni-single-02 text-blue",
    component: Clients,
    layout: "/admin",
  },
  {
    path: "/reparateurs",
    name: "Gestion des réparateurs",
    icon: "ni ni-single-02 text-yellow",
    component: Reparateurs,
    layout: "/admin",
  },
  {
    path: "/vehicules",
    name: "Gestion des véhicules",
    icon: "ni ni-pin-3 text-orange",
    component: Vehicules,
    layout: "/admin",
  },
  
  {
    path: "/pannes",
    name: "Gestion des pannes",
    icon: "ni ni-settings text-blue",
    component: Pannes,
    layout: "/admin",
  },
  {
    path: "/typePannes",
    name: "Gestion type des pannes",
    icon: "ni ni-settings-gear-65 text-orange",
    component: TypePannes,
    layout: "/admin",
  },
  {
    path: "/satisfaction",
    name: "Gestion des satisfactions",
    icon: "ni ni-bullet-list-67 text-yellow",
    component: Satisfaction,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
  // {
  //   path: "/profil",
  //   name: "Profile",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Profile,
  //   layout: "/admin",
  // },
  {
   path: "/detail/:id",
    // name: "Profile",
    // icon: "ni ni-circle-08 text-pink",
  component: DetailVehicules,
    layout: "/admin",
  },
  // {
  //   path: "/Enquete",
  //   name: "Enquete",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Enquete,
  //   layout: "/auth",
  // },

];

export default routes;
