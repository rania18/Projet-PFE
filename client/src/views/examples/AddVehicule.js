import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVehicule } from "../../actions/vehicules";
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { retrieveReparateurs } from "actions/reparateurs";
import Reparateurs from "./Reparateurs";
import { retrieveClients } from "actions/clients";

const AddVehicule = () => {
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
    photoMat: "",
    PropreteTapis: "",
    LeveVitre: "",
    HuileM: "",
    liquideR: "",
    liquideF: "",
    etatB: "",
    assurance : "",
    clientId: ""
  };
  const [vehicule, setVehicule] = useState(initialVehiculeState);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicule({ ...vehicule, [name]: value });
    
  };

  const saveVehicule = () => {
    const {
      immatricule,
      marque,
      modele,
      Kilometrage,
      carburant,
      PropreteInt,
      PropreteExt,
      photoMat,
      PropreteTapis,
      LeveVitre,
      HuileM,
      liquideR,
      liquideF,
      etatB,
      assurance ,
      clientId
      
    } = vehicule;

    dispatch(
      createVehicule(
        immatricule,
        marque,
        modele,
        Kilometrage,
        carburant,
        PropreteInt,
        PropreteExt,
        photoMat,
        PropreteTapis,
        LeveVitre,
        HuileM,
        liquideR,
        liquideF,
        etatB,
        assurance ,
        clientId
      )
    )
      .then((data) => {
        setVehicule({
          id: data.id,
          immatricule: data.immatricule,
          marque: data.marque,
          modele: data.modele,
          Kilometrage: data.Kilometrage,
          carburant: data.carburant,
          PropreteInt: data.PropreteInt,
          PropreteExt: data.PropreteExt,
          photoMat: data.photoMat,
          PropreteTapis: data.PropreteTapis,
          LeveVitre: data.LeveVitre,
          HuileM: data.HuileM,
          liquideR: data.liquideR,
          liquideF: data.liquideF,
          etatB: data.etatB,
          assurance: data.assurance,
          clientId: data.clientId,        
        });
      })
      .catch((e) => {
        // console.log(e);
      });
    handleClose();
  };

  //reparateur
  useEffect(() => {
    dispatch(retrieveReparateurs());
  }, []);

  //getclient
  const clients = useSelector((state) => state.clients);
  useEffect(() => {
    dispatch(retrieveClients());
  }, []);
  return (
    <>
      <Button color="primary" onClick={handleShow}>
        Ajouter Vehicule
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Ajouter vehicule</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Immatricule
                      </label>
                      <Input
                        className="form-control-alternative"
                        // defaultValue="lucky.jesse"
                        // id="input-username"
                         placeholder="Immatricule"
                        type="text"
                        name="immatricule"
                        value={vehicule.immatricule}
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
                        marque
                      </label>
                      <Input
                        className="form-control-alternative"
                        // id="input-email"
                         placeholder="marque"
                        type="text"
                        name="marque"
                        value={vehicule.marque}
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
                        modele
                      </label>
                      <Input
                        className="form-control-alternative"
                        // defaultValue="Lucky"
                        // id="input-first-name"
                        placeholder="modele"
                        type="modele"
                        name="modele"
                        value={vehicule.modele}
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
                        placeholder="Kilometrage"
                        type="text"
                        id="Kilometrage"
                        name="Kilometrage"
                        value={vehicule.Kilometrage}
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
                        carburant
                      </label>
                      <Input
                        className="form-control-alternative"
                        // defaultValue="Lucky"
                        // id="input-first-name"
                        placeholder="carburant"
                        type="text"
                        id="carburant"
                        name="carburant"
                        value={vehicule.carburant}
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
                        placeholder="PropreteInt"
                        type="text"
                        id="PropreteInt"
                        name="PropreteInt"
                        value={vehicule.PropreteInt}
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
                        placeholder="PropreteExt"
                        type="text"
                        id="PropreteExt"
                        name="PropreteExt"
                        value={vehicule.PropreteExt}
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
                        placeholder="PropreteTapis"
                        type="text"
                        id="PropreteTapis"
                        name="PropreteTapis"
                        value={vehicule.PropreteTapis}
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
                        placeholder="LeveVitre"
                        type="text"
                        id="LeveVitre"
                        name="LeveVitre"
                        value={vehicule.LeveVitre}
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
                        placeholder="liquideR"
                        type="text"
                        id="liquideR"
                        name="liquideR"
                        value={vehicule.liquideR}
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
                        placeholder="liquideF"
                        type="text"
                        id="liquideF"
                        name="liquideF"
                        value={vehicule.liquideF}
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
                        placeholder="etatB"
                        type="text"
                        id="etatB"
                        name="etatB"
                        value={vehicule.etatB}
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
                        placeholder="assurance "
                        type="text"
                        //id="assurance"
                        name="assurance"
                        value={vehicule.assurance}
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
                         placeholder="HuileM"
                        type="text"
                        id="HuileM"
                        name="HuileM"
                        value={vehicule.HuileM}
                        onChange={handleInputChange}
                      />
                    </FormGroup>

                    <Col lg="6">
                      <FormGroup>
                     
                        <UncontrolledDropdown> 
                      
                          <DropdownToggle caret color="secondary">
                            Client
                          </DropdownToggle>   
                          
                          <DropdownMenu> 
                            {clients.map((client) =>  
                            
                            <DropdownItem
                               type="text"
                               id="clientId"
                               name="clientId"
                               value={client.id}
                              onClick={handleInputChange}
                            >
                             {client.id}:  {client.nom} 
                            </DropdownItem>
                            )}
                          </DropdownMenu>
                         
                        </UncontrolledDropdown>
                      
                      </FormGroup>
                    </Col>
                  </Col>
                </Row>
              </div>

              <hr className="my-4" />
              <div className="pl-lg-4">
                <FormGroup>
                  <Button variant="secondary" onClick={handleClose}>
                    Annuler
                  </Button>
                  <Button variant="primary" onClick={saveVehicule}>
                    Ajouter
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

export default AddVehicule;
