import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllPannes, deletePanne } from "../../actions/pannes";
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
import { deleteAllReparateurs } from "actions/reparateurs";

const DeleteAllReparateurs = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

//remove all
const [reparateur, setReparateur] = useState();
const [index, setIndex] = useState(-1);

const dispatch = useDispatch();

const refreshData = () => {
  setReparateur(null);
  setIndex(-1);
};

const removeAllReparateurs = () => {
  dispatch(deleteAllReparateurs())
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
          Supprimer tout les reparateurs 
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0"> Supprimer tout les reparateurs</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Etes-vous sur de vouloir supprimer tout les reparateurs ?
                </h6>
               
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <Button variant="secondary" onClick={handleClose}>
                      non
                    </Button>
                    <Button variant="primary"    onClick={removeAllReparateurs}>
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

export default DeleteAllReparateurs;
