import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteClient, updateClient } from "../../actions/clients";
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

const DeleteClient = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialClientState = {
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
        console.log(e);
      });
  };

  useEffect(() => {
    getClient(props.id);
  }, [props.id]);

  

 
///////////////////////

const removeClient = () => {
  dispatch(deleteClient(currentClient.id))
    .then(() => {
      props.history.push("/clients");
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
                  <h3 className="mb-0">Modifier client</h3>
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
                    <Button variant="primary"onClick={removeClient}>
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

export default DeleteClient;
