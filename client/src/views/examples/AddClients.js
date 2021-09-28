import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createClient } from "../../actions/clients";
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

const AddClients = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialClientState = {
    id: null,
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
    adresse: "",
    status:"",
  };
  const [client, setClient] = useState(initialClientState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };

  const saveClient = () => {
    const { nom, prenom, email,password, tel, adresse, status } = client;

    dispatch(createClient(nom, prenom, email,password, tel, adresse, status))
      .then((data) => {
        setClient({
          id: data.id,
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          password: data.password,
          tel: data.tel,
          adresse: data.adresse,
          status:data.status,
        });
     
      })
      .catch((e) => {
       // console.log(e);
      });
      handleClose();
  };

  

  return (
    <>
      
        <Button color="primary" onClick={handleShow}>
          Ajouter client
        </Button>
   
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Ajouter client</h3>
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
                          defaultValue="lucky.jesse"
                          id="input-username"
                          placeholder="Nom"
                          type="text"
                          name="nom"
                          value={client.nom}
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
                          id="input-email"
                          placeholder="Prenom"
                          type="text"
                          name="prenom"
                          value={client.prenom}
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
                          id="input-email"
                          placeholder="Email"
                          type="email"
                          name="email"
                          value={client.email}
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
                          Mot de passe
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="Mot de passe"
                          type="password"
                          name="password"
                          value={client.password}
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
                          id="input-email"
                          placeholder="Tel"
                          type="text"
                          name="tel"
                          value={client.tel}
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
                          Adresse
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="Adresse"
                          type="text"
                          name="adresse"
                          value={client.adresse}
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
                    <Button variant="primary" onClick={saveClient}>
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

export default AddClients;
