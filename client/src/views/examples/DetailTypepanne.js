import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletePanne, updatePanne } from "../../actions/typepannes";
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
  Badge,
  CardTitle,
} from "reactstrap";

const DetailTypepanne = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const initialTypepanneState = {
 
  };
  const [currentTypepanne, setCurrentTypepanne] = useState(initialTypepanneState);
  // const [message, setMessage] = useState("");

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

  

  return (
    <>
      <Button className="btn-icon btn-2"  size="sm" color="info" type="button" onClick={handleShow}>
            <i className="ni ni-align-center" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          {/* <Card className="bg-secondary shadow"> */}
            {/* <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Détails Typepanne </h3>
                </Col>
              </Row>
            </CardHeader> */}
            {/* <CardBody>
              <Form> */}

                {/* <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                         Titre: {currentTypepanne.name}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                         Description: {currentTypepanne.description}
                        
                        <Badge color="" className="badge-dot mr-4">
                          {/* <i className="bg-warning"  style={{color:typepanne.description}}/> */}
                             {/* <div  style={{backgroundColor:currentTypepanne.description }} className="colorCercle"  ></div>
                          {/* {typepanne.description} */}
                        {/* </Badge>
                    
                          
                        </label>
                      </FormGroup>
                    </Col>
                  </Row> */}
            
                {/* </div> */}


                {/* <div style={{ width: "18rem" }}> */}
          <Card >
            <CardBody>
              <Row>
                <div className="col">
                  {/* <CardTitle className="text-uppercase text-muted mb-0">
                  Titre: 
                  </CardTitle> */}
                  <span className="h2 font-weight-bold mb-0">
                    {/* Titre: */}
                    
                  {currentTypepanne.name}
                  </span>
                </div>
                <Col className="col-auto">
                  
                    <div  style={{backgroundColor:currentTypepanne.description }} className="colorCercle"  ></div>

                </Col>
              </Row>
            
            </CardBody>
          </Card>
        {/* </div> */}
              {/* </Form>
            </CardBody> */}
          {/* </Card> */}
        </Modal>
    
    </>
  );
};

export default DetailTypepanne;
