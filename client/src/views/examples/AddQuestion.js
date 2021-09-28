import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuestion } from "../../actions/questions";
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

const AddQuestion = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialQuestionState = {
    id: null,
    name: "",
    text: "",
  };
  const [question, setQuestion] = useState(initialQuestionState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  const saveQuestion = () => {
    const { name, text } = question;

    dispatch(createQuestion(name, text))
      .then((data) => {
        setQuestion({
          id: data.id,
          name: data.name,
          text: data.text,
        });
     
      })
      .catch((e) => {
       // console.log(e);
      });
      handleClose()
  };

  

  return (
    <>
      
        <Button color="primary" onClick={handleShow}>
          Ajouter question
        </Button>
   
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Ajouter question</h3>
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
                          Type
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          // id="input-username"
                          // placeholder="Username"
                          type="text"
                          name="name"
                          value={question.name}
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
                          text
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          name="text"
                          value={question.text}
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
                    <Button variant="primary" onClick={saveQuestion}>
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

export default AddQuestion;
