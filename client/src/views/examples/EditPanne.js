import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePanne } from "../../actions/pannes";
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

const EditPanne = (props) => {
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
  const [currentPanne, setCurrentPanne] = useState(initialPanneState);
  const [message, setMessage] = useState("");

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
      handleClose()
  };

  useEffect(() => {
    getPanne(props.id);
  }, [props.id]);

  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPanne({ ...currentPanne, [name]: value });
  };

  
  const updateContent = () => {
    dispatch(updatePanne(currentPanne.id, currentPanne))
      .then(response => {
        console.log(response);

        setMessage("The panne was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
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
                  <h3 className="mb-0">Modifier panne</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Panne information
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
                          id="name"
                          name="name"
                          value={currentPanne.name}
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
                          id="description"
                          name="description"
                          value={currentPanne.description}
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
                          Photo
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="photo"
                          id="photo"
                          name="photo"
                          value={currentPanne.photo}
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
                      Close
                    </Button>
                    <Button variant="primary"onClick={updateContent}>
                      Save Changes
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

export default EditPanne;
