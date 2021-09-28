import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletePanne, updatePanne } from "../../actions/pannes";
import PanneDataService from "../../services/PanneService";
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

const DetailPanne = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const initialPanneState = {
 
  };
  const [currentPanne, setCurrentPanne] = useState(initialPanneState);
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getPanne = id => {
    PanneDataService.get(id)
      .then(response => {
        setCurrentPanne(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPanne(props.id);
  }, [props.id]);

  

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setCurrentClient({ ...currentClient, [name]: value });
  // };
  return (
    <>
      <Button className="btn-icon btn-2"  size="sm" color="info" type="button" onClick={handleShow}>
            <i className="ni ni-align-center" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Détails Panne </h3>
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
                         Titre: {currentPanne.name}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                         Description: {currentPanne.description}
                          
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                         Photo: {currentPanne.photo}
                        </label>
                      </FormGroup>
                    </Col>

                  </Row> */}
              
                </div>
                
              </Form>
            </CardBody>
          </Card>
        </Modal>
    
    </>
  );
};

export default DetailPanne;
