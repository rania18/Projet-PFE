import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { InputBase } from "@material-ui/core";
import DeleteAllVehicule from "./examples/DeleteAllVehicule";
import { retrieveClients } from "actions/clients";
import { retrieveVehicules } from "actions/vehicules";
import DetailVehicule from "./examples/DetailVehicule";
import DeleteVehicule from "./examples/DeleteVehicule";
import DetailVehicules from "./examples/DetailVehicules";
import { Link } from "react-router-dom";
import EditVehicule from "./examples/EditVehicule";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  ///vehicule
  const vehicules = useSelector(state => state.vehicules);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveVehicules());
  }, []);


   /// Searche
    const [vehicule, setVehicule] = useState(null);
    const [index, setIndex] = useState(-1);
  
    
  
    
  
   
  
  return (
    <>
      <Header />
      {/* Page content */}
      

      <Container className="mt--7" fluid>
      <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
          {vehicules.map((vehicule, index) => ( 

            <Card className=" shadow">
               <CardHeader >
                <div className="d-flex justify-content-between">
                
                    <DetailVehicule />
                    <div className="h5 mt-2">
                    <i className="ni business_briefcase-24 mr-2" />
                    Immatricule: {vehicule.matricule}
                  </div>
                    <DeleteVehicule />
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                      <div>
                       
                      </div>
                      <div>
                    
                      </div>
                      <div>
                        
                      </div>
                    </div>
                </Row>
                <div className="text-center">
                  <h3>
                    
                  </h3>
                  <div className="h5 font-weight-300">
                  
                  </div>
                 
                  <div>
                    <i className="ni education_hat mr-2" />
                    Kilometrage: {vehicule.Kilometrage}
                    </div>
                    <div>
                    <i className="ni education_hat mr-2" />
                    Carburant: {vehicule.carburant}
                    </div>
                    <div>
                    <i className="ni education_hat mr-2" />
                    Assurance: {vehicule.assurance}
                    </div>
                  <hr className="my-4" />
                  
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  
                  </a>
                </div>
              </CardBody>
           
              </Card>
          ))}
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total réparation</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

          <div className="header-body">
            {/* Card stats */}
            {vehicules.map((vehicule, index) => ( 

            <Row>
              <Col lg="6" xl="3">

                <Card className="card-stats mb-4 mb-xl-0">

              
              <CardHeader >
                <div className="d-flex justify-content-between">
                
                    <DetailVehicule />
                    <div className="h5 mt-2">
                    <i className="ni business_briefcase-24 mr-2" />
                    Immatricule: {vehicule.immatricule}
                  </div>
                    <DeleteVehicule />
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                      <div>
                       
                      </div>
                      <div>
                    
                      </div>
                      <div>
                        
                      </div>
                    </div>
                </Row>
                <div className="text-center">
                  <h3>
                    
                  </h3>
                  <div className="h5 font-weight-300">
                  
                  </div>
                 
                  <div>
                    <i className="ni education_hat mr-2" />
                    Kilometrage: {vehicule.Kilometrage}
                    </div>
                    <div>
                    <i className="ni education_hat mr-2" />
                    Carburant: {vehicule.carburant}
                    </div>
                    <div>
                    <i className="ni education_hat mr-2" />
                    Assurance: {vehicule.assurance}
                    </div>
                  <hr className="my-4" />
                  
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  
                  </a>
                </div>
              </CardBody>
           
     </Card>
   
      
 </Col>
 </Row>   ))}
 </div>
 
     </Container>
  
    </>
  );
};

export default Index;
