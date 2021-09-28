import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateReparateur } from "../../actions/reparateurs";
import ReparateurDataService from "../../services/ReparateurService";
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

const EditReparateur = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialReparateurState = {
    id: null,
    nom: "", 
    email: "", 
  };
  const [currentReparateur, setCurrentReparateur] = useState(initialReparateurState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getReparateur = id => {
    ReparateurDataService.get(id)
      .then(response => {
        setCurrentReparateur(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      handleClose()
  };

  useEffect(() => {
    getReparateur(props.id);
  }, [props.id]);

  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentReparateur({ ...currentReparateur, [name]: value });
  };

  
  const updateContent = () => {
    dispatch(updateReparateur(currentReparateur.id, currentReparateur))
      .then(response => {
        // console.log(response);

        setMessage("The Reparateur was updated successfully!");
      })
      .catch(e => {
        // console.log(e);
      });
      handleClose()
  };

  return (
    <>
      
      <Button className="btn-icon btn-2"  size="sm" color="primary" type="button" onClick={handleShow}>
            <i className="ni ni-caps-small" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Modifier Reparateur</h3>
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
                          Nom
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          // id="input-username"
                          // placeholder="Username"
                          type="text"
                          id="nom"
                          name="nom"
                          value={currentReparateur.nom}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Prenom
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          // id="input-username"
                          // placeholder="Username"
                          type="text"
                          id="prenom"
                          name="prenom"
                          value={currentReparateur.prenom}
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
                          Email
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          id="email"
                          name="email"
                          value={currentReparateur.email}
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
                          Tel
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          id="tel"
                          name="tel"
                          value={currentReparateur.tel}
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

export default EditReparateur;
