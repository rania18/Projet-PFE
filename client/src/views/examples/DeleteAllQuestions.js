import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllQuestions, deleteQuestion } from "../../actions/questions";
import QuestionDataService from "../../services/QuestionService";
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

const DeleteAllQuestions = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

//remove all
const [question, setQuestion] = useState();
const [index, setIndex] = useState(-1);

const dispatch = useDispatch();

const refreshData = () => {
  setQuestion(null);
  setIndex(-1);
};

const removeAllQuestions = () => {
  dispatch(deleteAllQuestions())
    .then(response => {
      // console.log(response);
      refreshData();
    })
    .catch(e => {
      // console.log(e);
    });
    handleClose()
};
  return (
    <>
      
      <Button className="btn-icon btn-2"  size="sm" color="danger" type="button" onClick={handleShow}>
            {/* <i className="ni ni-fat-remove" /> */}
          Supprimer tout les Questions 
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Supprimer touts Questions</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Etes-vous sur de vouloir supprimer tout les Questions ?
                </h6>
               
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <Button variant="secondary" onClick={handleClose}>
                      non
                    </Button>
                    <Button variant="primary"    onClick={removeAllQuestions}>
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

export default DeleteAllQuestions;
