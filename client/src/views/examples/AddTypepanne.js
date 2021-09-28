import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTypepanne } from "../../actions/typepannes";
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
import { ChromePicker, PhotoshopPicker, TwitterPicker } from "react-color";
import Color from "./Color";

const AddTypepanne = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialTypepanneState = {
    id: null,
    name: "",
    description: "",
    // photo: "",
  };
  const [typepanne, setTypepanne] = useState(initialTypepanneState);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTypepanne({ ...typepanne, [name]: value });
  };

  const saveTypepanne = () => {
    const { name, description } = typepanne;

    dispatch(createTypepanne(name, color))
      .then((data) => {
        setTypepanne({
          id: data.id,
          name: data.name,
          description: data.description,
          // photo: data.photo,
        });
      })
      .catch((e) => {
        // console.log(e);
      });
    handleClose();
  };

  //color
  const [color, setColor] = useState("#fff");

  return (
    <>
      <Button color="primary" onClick={handleShow}>
        Ajouter type panne
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Ajouter type panne</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                type panne information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Titre
                      </label>
                      <Input
                        className="form-control-alternative"
                        // defaultValue="lucky.jesse"
                        // id="input-username"
                        // placeholder="Username"
                        type="text"
                        name="name"
                        value={typepanne.name}
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
                        value={color}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col lg="6">
                    <FormGroup>
                      {/* <Color /> */}
                      <ChromePicker
                        color={color}
                        onChange={(updateColor) => setColor(updateColor.hex)}
                      />
                      {/* <h1>{color}</h1>
                      <Input
                        className="form-control-alternative"
                        // id="input-email"
                        // placeholder="jesse@example.com"
                        type="text"
                        name="description"
                        value={color}
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
                  <Button variant="primary" onClick={saveTypepanne}>
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

export default AddTypepanne;
