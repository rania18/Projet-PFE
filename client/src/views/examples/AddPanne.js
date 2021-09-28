import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPanne } from "../../actions/pannes";
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
import { retrieveVehicules } from "actions/vehicules";
import { retrieveReparateurs } from "actions/reparateurs";

const AddPanne = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialPanneState = {
    id: null,
    name: "",
    description: "",
    photo: "",
  };
  const [panne, setPanne] = useState(initialPanneState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPanne({ ...panne, [name]: value });
  };

  const savePanne = () => {
    const { name, description, photo } = panne;

    dispatch(createPanne(name, description, photo))
      .then((data) => {
        setPanne({
          id: data.id,
          name: data.name,
          description: data.description,
          // photo: data.photo,
        });
     
      })
      .catch((e) => {
       // console.log(e);
      });
      handleClose()
  };

   //getvehicule
   const vehicules = useSelector((state) => state.vehicules);
   useEffect(() => {
     dispatch(retrieveVehicules());
   }, []);

    //getreparateur
    const reparateurs = useSelector((state) => state.reparateurs);
    useEffect(() => {
      dispatch(retrieveReparateurs());
    }, []);

  return (
    <>
      
        <Button color="primary" onClick={handleShow}>
          Ajouter panne
        </Button>
   
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Ajouter panne</h3>
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
                          name="name"
                          value={panne.name}
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
                          Description
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          name="description"
                          value={panne.description}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Photo
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="photo"
                          name="photo"
                          value={panne.photo}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col> */}
                    <Col lg="6">
                      <FormGroup>
                     
                        <UncontrolledDropdown> 
                      
                          <DropdownToggle caret color="secondary">
                            vehicules
                          </DropdownToggle>   
                          
                          <DropdownMenu> 
                            {vehicules.map((vehicule) =>  
                            
                            <DropdownItem
                               type="text"
                               id="vehiculeId"
                               name="vehiculeId"
                               value={panne.vehiculeId}
                              onClick={handleInputChange}
                            >
                             {vehicule.id}:  {vehicule.immatricule} 
                            </DropdownItem>
                            )}
                          </DropdownMenu>
                         
                        </UncontrolledDropdown>
                      
                      </FormGroup>
                    </Col>

                    <Col lg="6">
                      <FormGroup>
                     
                        <UncontrolledDropdown> 
                      
                          <DropdownToggle caret color="secondary">
                            reparateur
                          </DropdownToggle>   
                          
                          <DropdownMenu> 
                            {reparateurs.map((reparateur) =>  
                            
                            <DropdownItem
                               type="text"
                               id="reparateurId"
                               name="reparateurId"
                               value={panne.reparateurId}
                              onClick={handleInputChange}
                            >
                             {reparateur.id}:  {reparateur.nom} 
                            </DropdownItem>
                            )}
                          </DropdownMenu>
                         
                        </UncontrolledDropdown>
                      
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
                    <Button variant="primary" onClick={savePanne}>
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

export default AddPanne;
