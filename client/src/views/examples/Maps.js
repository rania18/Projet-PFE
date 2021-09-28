
import { CardHeader } from "@material-ui/core";
import { Button } from "antd/lib/radio";
import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import {
  retrievePannes,
  findPannesByTitle,
  deleteAllPannes,
} from "../../actions/pannes";
const Maps = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const pannes = useSelector(state => state.pannes);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(retrievePannes());
  }, []);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {/* <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container  className="mt--7" fluid>
          <div className="header-body">
            {/* Card stats 
            <Row>*/}
           


{/* {taches.map((tache, index) => ( 

<div style={{ width: "18rem" }}>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase text-muted mb-0">
                  {tache.name}
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0"> 
                           {tache.description}
                     </span>
                </div>
                <Col className="col-auto">
                 
                </Col>
              </Row>
        
              <p className="mt-3 mb-0 text-muted text-sm">
                
              </p>
            </CardBody>
          </Card>
        </div>
))}

          </Row>
          </div>
        </Container>
 */}





        <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl">
          <div class="card">
            <div class="card-header bg-transparent">
              <h3 class="mb-0">Pannes</h3>
            </div>
            <div class="card-body">
             {pannes.map((panne, index) => ( 
              <div class="timeline timeline-one-side" data-timeline-content="axis" data-timeline-axis-style="dashed">
                <div class="timeline-block">
                  <span class="timeline-step badge-Info">
                    <i class="ni ni-bell-55"></i>
                  </span>
                  <div class="timeline-content">

                    <h5 class=" mt-3 mb-0">{panne.name}</h5>
                    <small class="text-muted font-weight-bold">{panne.description}</small>
                    <hr></hr>
                    <div class="mt-3">
                      <span class="badge badge-pill badge-success"></span>
                      <span class="badge badge-pill badge-success"></span>
                      <span class="badge badge-pill badge-success"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        </div>







      </div>
   
    </>
  );
};

export default Maps;
