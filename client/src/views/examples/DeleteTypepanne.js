import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTypepanne } from "../../actions/typepannes";
import TypepanneDataService from "../../services/TypepanneService";

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

const DeleteTypepanne = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const initialTypepanneState = {
  
  };
  const [currentTypepanne, setCurrentTypepanne] = useState(initialTypepanneState);

  const dispatch = useDispatch();

  const getTypepanne = id => {
    TypepanneDataService.get(id)
      .then(response => {
        setCurrentTypepanne(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTypepanne(props.id);
  }, [props.id]);

  

 
const removeTypepanne = () => {
  dispatch(deleteTypepanne(currentTypepanne.id))
    .then(() => {
      console.log("object")
      props.history.push("/typepannes");
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
                    <Button variant="primary"onClick={removeTypepanne}>
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

export default DeleteTypepanne;
