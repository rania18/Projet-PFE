import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReparateur } from "../../actions/reparateurs";
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

const AddReparateur = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialReparateurState = {
    id: null,
    nom: "",
    prenom: "",
    email: "",
    password: "",
    tel: "",
    status:"",
  };
  const [reparateur, setReparateur] = useState(initialReparateurState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReparateur({ ...reparateur, [name]: value });
  };

  const saveReparateur = () => {
    const { nom, prenom, email,password, tel, status } = reparateur;

    dispatch(createReparateur(nom, prenom, email,password, tel, status))
      .then((data) => {
        setReparateur({
          id: data.id,
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          password: data.password,
          tel: data.tel,
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
          Ajouter reparateur
        </Button>
   
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Ajouter reparateur</h3>
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
                          value={reparateur.nom}
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
                          value={reparateur.prenom}
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
                          value={reparateur.email}
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
                          value={reparateur.password}
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
                          value={reparateur.tel}
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
                    <Button variant="primary" onClick={saveReparateur}>
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

export default AddReparateur;
