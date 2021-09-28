import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTypepannes} from "../../actions/typepannes";
import TypepanneDataService from "../../services/TypepanneService";
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

const EditTypepannes = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialTypepanneState = {
    id: null,
    name: "",
    description: "",
    photo: "",
  };
  const [currentTypepanne, setCurrentTypepanne] = useState(initialTypepanneState);
  const [message, setMessage] = useState("");

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
      handleClose()
  };

  useEffect(() => {
    getTypepanne(props.id);
  }, [props.id]);

  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTypepanne({ ...currentTypepanne, [name]: value });
  };

  
  const updateContent = () => {
    dispatch(updateTypepannes(currentTypepanne.id, currentTypepanne))
      .then(response => {
        console.log(response);

        setMessage("The Typepanne was updated successfully!");
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
                  <h3 className="mb-0">Modifier Type panne</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Type panne information
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
                          value={currentTypepanne.name}
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
                          Couleur
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          id="description"
                          name="description"
                          value={currentTypepanne.description}
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

export default EditTypepannes;
