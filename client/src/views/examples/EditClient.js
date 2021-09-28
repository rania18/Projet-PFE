import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClient } from "../../actions/clients";
import ClientDataService from "../../services/ClientService";
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

const EditClient = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialClientState = {
    id: null,
    nom:"",
    prenom: "",
    email: "",
    password:"",
    tel: "",
    adresse: "",
  };
  const [currentClient, setCurrentClient] = useState(initialClientState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getClient = id => {
    ClientDataService.get(id)
      .then(response => {
        setCurrentClient(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getClient(props.id);
  }, [props.id]);

  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentClient({ ...currentClient, [name]: value });
  };

  
  const updateContent = () => {
    dispatch(updateClient(currentClient.id, currentClient))
      .then(response => {
        // console.log(response);

        setMessage("The client was updated successfully!");
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
                  <h3 className="mb-0">Modifier client</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Client information
                </h6>
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
                          value={currentClient.nom}
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
                          Prenom
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          id="prenom"
                          name="prenom"
                          value={currentClient.prenom}
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
                          Tel
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="Tel"
                          type="text"
                          id="tel"
                          name="tel"
                          value={currentClient.tel}
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
                          Adresse
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="adresse"
                          name="adresse"
                          value={currentClient.adresse}
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
                          Email
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="email"
                          name="email"
                          value={currentClient.email}
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

export default EditClient;
