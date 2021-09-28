import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateVehicule } from "../../actions/vehicules";
import VehiculeDataService from "../../services/VehiculeService";
// reactstrap components
import Axios from "axios";
import { Modal } from "react-bootstrap";
import { DatePicker, Space,EditOutlined } from "antd";

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

const EditVehicule = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialVehiculeState = {
    id: null,
    immatricule: "", 
    marque: "", 
    modele: "", 
    Kilometrage: "", 
    carburant: "", 
    PropreteInt: "", 
    PropreteExt: "", 
    PropreteTapis: "",
    LeveVitre: "",
    HuileM: "",
    liquideR: "",
    liquideF: "",
    etatB: "",
    assurance : "",
    clientId: "",
  };
  const [currentVehicule, setCurrentVehicule] = useState(initialVehiculeState);
  const [message, setMessage] = useState("");

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

  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentVehicule({ ...currentVehicule, [name]: value });
  };

  
  const updateContent = () => {
    dispatch(updateVehicule(currentVehicule.id, currentVehicule))
      .then(response => {
        // console.log(response);

        setMessage("The Vehicule was updated successfully!");
      })
      .catch(e => {
        // console.log(e);
      });
      handleClose()
  };

  return (
    <>
      
        {/* <Button color="primary" onClick={handleShow}>
          Modifier Vehicule
        </Button> */}
        <Button className="btn-icon btn-2"  size="sm" color="primary" type="button" onClick={handleShow}>
            <i className="ni ni-caps-small" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Modifier Vehicule</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Vehicule information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          immatricule
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          // id="input-username"
                          // placeholder="Username"
                          type="text"
                          id="immatricule"
                          name="immatricule"
                          value={currentVehicule.immatricule}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Marque
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          id="marque"
                          name="marque"
                          value={currentVehicule.marque}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Modele
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="modele"
                          name="modele"
                          value={currentVehicule.modele}
                          onChange={handleInputChange}
                        />
                        
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Kilometrage
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="Kilometrage"
                          name="Kilometrage"
                          value={currentVehicule.Kilometrage}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Carburant
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="carburant"
                          name="carburant"
                          value={currentVehicule.carburant}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          PropreteInt
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="PropreteInt"
                          name="PropreteInt"
                          value={currentVehicule.PropreteInt}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          PropreteExt
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="PropreteExt"
                          name="PropreteExt"
                          value={currentVehicule.PropreteExt}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          PropreteTapis
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="PropreteTapis"
                          name="PropreteTapis"
                          value={currentVehicule.PropreteTapis}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          LeveVitre
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="LeveVitre"
                          name="LeveVitre"
                          value={currentVehicule.LeveVitre}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          HuileM
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="HuileM"
                          name="HuileM"
                          value={currentVehicule.HuileM}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                  
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          liquideR
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="liquideR"
                          name="liquideR"
                          value={currentVehicule.liquideR}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                  
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          liquideF
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="liquideF"
                          name="liquideF"
                          value={currentVehicule.liquideF}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                  
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          etatB
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="etatB"
                          name="etatB"
                          value={currentVehicule.etatB}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                  
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          assurance 
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="assurance "
                          name="assurance "
                          value={currentVehicule.assurance }
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                  
                    </Col>

                  </Row>
                </div>

                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <Button variant="secondary" onClick={handleClose}>
                      Annuler
                    </Button>
                    <Button variant="primary"onClick={updateContent}>
                      Modifier
                    </Button>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Modal>
    
    </>
  );
};

export default EditVehicule;
