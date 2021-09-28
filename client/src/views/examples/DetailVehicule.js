import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteVehicule, updateVehicule } from "../../actions/clients";
import VehiculeDataService from "../../services/VehiculeService";
// reactstrap components
import Axios from "axios";
import { Modal } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const DetailVehicule = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const initialVehiculeState = {
   
  };
  const [currentVehicule, setCurrentVehicule] = useState(initialVehiculeState);
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

  useEffect(() => {
    getVehicule(props.id);
  }, [props.id]);

  

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setCurrentClient({ ...currentClient, [name]: value });
  // };
  return (
    <>
      <Button className="btn-icon btn-2"  size="sm" color="info" type="button" onClick={handleShow}>
            <i className="ni ni-align-center" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Détails vehicule </h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>

                <div className="pl-lg-4">
                  <Row>
                    {/* <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                         Immatricule: {currentVehicule.immatricule} 
                        </label>
                      </FormGroup>
                    </Col>
                   */}
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                         PropreteInt: {currentVehicule.PropreteInt ? "false" : "true"}
                          
                        </label>
                      </FormGroup>
                    </Col>
                     <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                         PropreteExt: {currentVehicule.PropreteExt ? "false" : "true"}
                        </label>
                      </FormGroup>
                    </Col>
                   
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         PropreteTapis: {currentVehicule.PropreteTapis ? "false" : "true"}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          LeveVitre: {currentVehicule.LeveVitre ? "false" : "true"}
                        </label>
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         HuileM: {currentVehicule.HuileM ? "false" : "true"}
                        </label>
                        <Space direction="vertical">
                       
                        </Space>
                        
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         liquideR: {currentVehicule.liquideR ? "false" : "true"}
                        </label>
                      </FormGroup>{" "}
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         liquideF: {currentVehicule.liquideF ? "false" : "true"}
                        </label>
                      </FormGroup>
                  
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         etatB: 
                         {currentVehicule.etatB ? "false" : "true"}
                        </label>
                      </FormGroup>
                  
                    </Col>

                   {/* <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Kilometrage: {currentVehicule.Kilometrage} 
                        </label>
                      </FormGroup>
                  
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          carburant: {currentVehicule.carburant} 
                        </label>
                      </FormGroup>
                  
                    </Col>
                     <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         assurance: {currentVehicule.assurance}
                        </label>
                      </FormGroup>
                  
                    </Col>
                    */}
                  </Row>
              
                </div>

                
              </Form>
            </CardBody>
          </Card>
        </Modal>
    
    </>
  );
};

export default DetailVehicule;
