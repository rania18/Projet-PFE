import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteReparateur, updateReparateur } from "../../actions/reparateurs";
import ReparateurDataService from "../../services/ReparateurService";
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
// import { up } from "actions/Reparateurs";

const ActiveReparateur = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [currentReparateur, setCurrentReparateur] = useState("");
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getReparateur = (id) => {
    ReparateurDataService.get(id)
      .then((response) => {
        setCurrentReparateur(response.data);
      })

      .catch((e) => {
        
      });
  };

  useEffect(() => {
    getReparateur(props.id);
  }, [props.id]);

  ///////////////////////
  const updateStatus = (status) => {
    const data = {
      id: currentReparateur.id,
      // nom: currentReparateur.nom,
      // prenom: currentReparateur.prenom,
      // email: currentReparateur.email,
      // password: currentReparateur.password,
      // tel: currentReparateur.tel,
      status: status,
    };

    dispatch(updateReparateur(currentReparateur.id, data))
      .then((response) => {

        setCurrentReparateur({ ...currentReparateur, status: status });
        // setMessage("The status was updated successfully!");
      })
      .catch((e) => {
      });
    handleClose();
  };

  return (
    <>
      {currentReparateur.status ? (
       <Button
       className="btn-icon btn-2"
       size="sm"
       color="danger"
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
                {currentReparateur.status ? "Active" : "Désactiver"}
              </h6>

              <hr className="my-4" />
              <div className="pl-lg-4">
                <FormGroup>
                  <Button variant="secondary" onClick={handleClose}>
                    non
                  </Button>
                  {currentReparateur.status ? (
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

export default ActiveReparateur;
