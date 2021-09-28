
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveVehicules } from "actions/vehicules";
import VehiculeDataService from "../../services/VehiculeService";
import Header from "components/Headers/Header";
import PanneDataService from "../../services/PanneService";
import {
  retrievePannes
 
} from "../../actions/pannes";
const DetailVehicules = ({match}) => {

  useEffect(() => {
    dispatch(retrieveVehicules());
  }, [])


  const initialVehiculeState = {
    // id: null,
    // nom: "", 
    // prenom: "", 
    // code: "", 
    // adresse: "", 
    // contact: "", 
    // tel: "", 
    // fax: "", 
    // email: ""
  };
  const [currentVehicule, setCurrentVehicule] = useState(initialVehiculeState);
  const [panne, setPanne] = useState(initialVehiculeState);

  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getVehicule = id => {
    VehiculeDataService.get(id)
      .then(response => {
        setCurrentVehicule(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        // console.log(e);
      });
  };

  const getPanne = id => {
    PanneDataService.get(id)
      .then(response => {
        setPanne(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getVehicule(match.params.id);
  }, [match.params.id]);
  
  useEffect(() => {
    getPanne(match.params.id);
  }, [match.params.id]);
  
  const vehicule = useSelector(state => state.vehicules).find(elm=>elm.id==match.params.id)
  console.log(vehicule)
  return (
    <>
      <Header /> 
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-sm-2" lg="3">
                  <div className="card-profile-image" xl="8">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                 
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                {/* <Row>
                  <div className="col">
                      
                     
                  </div>
                </Row> */}
               
                <div className="text-center">
                  <h2>
                  Immatricule: {currentVehicule.immatricule}                    
                  </h2>
                
                    

                  
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                         PropreteInt: <br></br>
                        
                         {currentVehicule.PropreteInt ? "true" :  "false"}

                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         PropreteExt: <br></br>
                        
                        {currentVehicule.PropreteExt ? "true" :  "false"}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          PropreteTapis: <br></br>
                        
                        {currentVehicule.PropreteTapis ? "true" :  "false"}
                        </label>
                      </FormGroup>
                      </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         LeveVitre: <br></br>
                        
                        {currentVehicule.LeveVitre ? "true" :  "false"}
                        </label>
                        
                        
                      </FormGroup>
                      </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         HuileM: <br></br>
                        
                        {currentVehicule.HuileM ? "true" :  "false"}
                        </label>
                      </FormGroup>{" "}
                      </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         liquideR: <br></br>
                        
                        {currentVehicule.liquideR ? "true" :  "false"}
                        </label>
                      </FormGroup>
                  
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         liquideF:<br></br>
                        
                        {currentVehicule.liquideF ? "true" :  "false"}
                        </label>
                      </FormGroup>
                  
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         etatB: <br></br>
                        
                        {currentVehicule.etatB ? "true" :  "false"}
                        </label>
                      </FormGroup>
                    </Col>
                   
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Kilometrage: <br/> {currentVehicule.Kilometrage}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          carburant: <br/> {currentVehicule.carburant}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          assurance: <br/> {currentVehicule.assurance}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Client:<br/>  {currentVehicule?.client?.nom}
                        </label>
                      </FormGroup>
                    </Col>
                   
                  </Row>
              
                 {/*  <hr className="my-4" />

                  <p>
                  Panne: {currentVehicule?.panne?.name}
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a> */}
                </div>
              </CardBody>
            </Card>
          </Col>
         
       
        </Row>
      </Container>
    </>
  );
};

export default DetailVehicules;
