import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteVehicule } from "../../actions/vehicules";
import VehiculeDataService from "../../services/VehiculeService";

// reactstrap components
import Axios from "axios";
import { Modal } from "react-bootstrap";
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

const DeleteVehicule = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
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
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getVehicule = id => {
    VehiculeDataService.get(id)
      .then(response => {
        setCurrentVehicule(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getVehicule(props.id);
  }, [props.id]);

  

 
const removeVehicule = () => {
  dispatch(deleteVehicule(currentVehicule.id))
    .then(() => {
      props.history.push("/vehicule");
    })
    .catch(e => {
      console.log(e);
    });
    handleClose()
};
  return (
    <>
      
      <Button className="btn-icon btn-2"  size="sm" color="danger" type="button" onClick={handleShow}>
            <i className="ni ni-fat-remove" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Supprimer Vehicule</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Etes-vous sur de vouloir supprimer cet élément ?
                </h6>
               
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <Button variant="secondary" onClick={handleClose}>
                      non
                    </Button>
                    <Button variant="primary"onClick={removeVehicule}>
                      oui
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

export default DeleteVehicule;
