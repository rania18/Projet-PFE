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

const AddClient = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () =>{ 
    setClient({
      id: null,
      nom:"",
      prenom:"",
      email:"",
      password:"",
      tel:"",
      adresse:"",
    })
    setShow(false)};
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
  const [client, setClient] = useState(initialClientState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };


  const saveClient = () => {
    const { nom, prenom, email, password, adresse} = client;

    dispatch(createClient(nom, prenom, email, password, adresse))
      .then((data) => {
        setClient({
          id: data.id,
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          password: data.password,
          tel: data.tel,
          adresse: data.adresse,

        });
        handleClose();
      })
      .catch((e) => {
       // console.log(e);
      });
      setClient({
        id: null,
        nom:"",
        prenom: "",
        email: "",
        password:"",
        tel: "",
        adresse: "",
       
      })
  };

  // const newclient = () => {
  //   setClient(initialClientState);
 
  // };

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
                  <h3 className="mb-0">Ajouter clients</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
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
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          placeholder="Prenom"
                          type="text"
                          name="prenom"
                          value={client.prenom}
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
                          Email
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Lucky"
                          id="input-first-name"
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
                          htmlFor="input-first-name"
                        >
                          Mot de passe
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Lucky"
                          id="input-first-name"
                          placeholder="Mot de passe"
                          type="password"
                          name="password"
                          value={client.password}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Code
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Jesse"
                          id="input-last-name"
                          placeholder="Last name"
                          type="text"
                          name="code"
                          value={client.code}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                   */}
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Tel
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Jesse"
                          id="input-last-name"
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
                          htmlFor="input-last-name"
                        >
                          Adresse
                        </label>
                        <Space direction="vertical">
                        <Input
                          className="form-control-alternative"
                          defaultValue="adresse"
                          id="input-last-name"
                          placeholder="adresse"
                          type="text"
                          name="adresse"
                          value={client.adresse}
                          onChange={handleInputChange}
                        />
                        </Space>
                        
                      </FormGroup>
                      </Col>
                    {/*<Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Contact
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="contact"
                          id="input-last-name"
                          placeholder="adresse"
                          type="text"
                          name="adresse"
                          value={client.adresse}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                     <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Fax
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Jesse"
                          id="input-last-name"
                          type="text"
                          name="Fax"
                          placeholder="Last name"
                          type="text"
                        />
                      </FormGroup>
                  
                    </Col>
                    */}
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

export default AddClient;
