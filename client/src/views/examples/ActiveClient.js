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
// import { up } from "actions/clients";

const ActiveClient = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [currentClient, setCurrentClient] = useState("");
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getClient = (id) => {
    ClientDataService.get(id)
      .then((response) => {
        setCurrentClient(response.data);
      })

      .catch((e) => {
        
      });
  };

  useEffect(() => {
    getClient(props.id);
  }, [props.id]);

  ///////////////////////
  const updateStatus = (status) => {
    const data = {
      id: currentClient.id,
      nom: currentClient.nom,
      email: currentClient.email,
      status: status,
    };

    dispatch(updateClient(currentClient.id, data))
      .then((response) => {

        setCurrentClient({ ...currentClient, status: status });
        // setMessage("The status was updated successfully!");
      })
      .catch((e) => {
      });
    handleClose();
  };

  return (
    <>
      {currentClient.status ? (
       <Button
       className="btn-icon btn-2"
       size="sm"
       color="default"
       type="button"
       onClick={handleShow}
     >
       <i className="ni ni-fat-remove" />
     </Button>
      ) : (
        <Button
        className="btn-icon btn-2"
        size="sm"
        color="success"
        type="button"
        onClick={handleShow}
      >
        <i className="ni ni-check-bold" />
      </Button>
      )}

      {/* <Button
        className="btn-icon btn-2"
        size="sm"
        color="danger"
        type="button"
        onClick={handleShow}
      >
        <i className="ni ni-fat-remove" />
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Modifier Statut</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                {currentClient.status ? "Active" : "Désactiver"}
              </h6>

              <hr className="my-4" />
              <div className="pl-lg-4">
                <FormGroup>
                  <Button variant="secondary" onClick={handleClose}>
                    non
                  </Button>
                  {currentClient.status ? (
                    <Button
                      variant="primary"
                      //  className="badge badge-primary mr-2"
                      onClick={() => updateStatus(false)}
                    >
                      Désactiver
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      //  className="badge badge-primary mr-2"
                      onClick={() => updateStatus(true)}
                    >
                      Active
                    </Button>
                  )}

                  {/* <Button variant="primary"onClick={updateStatus}>
                      oui
                    </Button> */}
                </FormGroup>
              </div>
           
            </Form>
        
          </CardBody>
        </Card>
      </Modal>
    </>
  );
};

export default ActiveClient;
