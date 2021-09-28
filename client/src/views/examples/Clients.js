import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {AddClient} from './AddClient'
import {
  findClientsByTitle,
  retrieveClients,
  updateClient,
} from "../../actions/clients";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  button,
  Button,
  CardTitle,
  CardText,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
// import { Button } from "reactstrap";
//client
import AddClient from "./AddClient";
import EditClient from "./EditClient";
import DeleteClient from "./DeleteClient";
import DetailClient from "./DetailClient";
import classnames from "classnames";
//import ActiveReparateur from "./ActiveReparateur";

//reparateur
import { retrieveReparateurs } from "actions/reparateurs";
import AddReparateur from "./AddReparateur";
import EditReparateur from "./EditReparateur";
import ActiveReparateur from "./ActiveReparateur";
import ActiveClient from "./ActiveClient";
import { FormGroup, Input, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import DetailVehicule from "./DetailClients";
import DetailClients from "./DetailClients";
import DeleteAllClients from "./DeleteAllClients";
import AddClients from "./AddClients";

//Search

const Clients = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);

  const clients = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveClients());
  }, []);

  //status
  // const initialClientState = {
  //   id: null,
  //   nom: "",
  //   email: "",
  //   status: false
  // };
  // const [currentClient, setCurrentClient] = useState(initialClientState);
  // const [message, setMessage] = useState("");
  // const updateStatus = status => {
  //   const data = {
  //     // id: currentClient.id,
  //     // nom: currentClient.title,
  //     // email: currentClient.description,
  //     status: status
  //   };

  //   dispatch(updateClient(currentClient.id, data))
  //     .then(response => {
  //       // console.log(response);

  //       setCurrentClient({ ...currentClient, status: status });
  //       setMessage("The status was updated successfully!");
  //     })
  //     .catch(e => {
  //       // console.log(e);
  //     });
  //   }

  //reparateur

  const reparateurs = useSelector((state) => state.reparateurs);
  useEffect(() => {
    dispatch(retrieveReparateurs());
  }, []);

  /// Searche
  const [searchTitle, setSearchTitle] = useState("");
  const [client, setClient] = useState(null);
  const [index, setIndex] = useState(-1);

  const refreshData = () => {
    setClient(null);
    setIndex(-1);
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findClientsByTitle(searchTitle));
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  return (
    <>
      {/* Page content */}
      <Header />

      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Col xs="8">
                  <h3 className="mb-0">List des utilisateurs</h3>
                </Col>
                {/* search */}
                <Row>
                  <Col className="text-center" xs="8">
                    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                      <FormGroup className="mb-0">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-search" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <InputBase
                            placeholder="Recherche"
                            type="text"
                            placeholder="Recherche"
                            value={searchTitle}
                            onChange={onChangeSearchTitle}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                          >
                            Recherche
                          </button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col className="text-right" xs="4">
                     {/* <AddClient />  */}
                     <AddClients />
                   
                    {/* <AddReparateur /> */}
                  </Col>
                </Row>

                
                {/* <Col className="text-right" xs="12">
                    <AddClient />
                    <AddReparateur />
                </Col> */}
              </CardHeader>
           
          

              <TabContent activeTab={activeTab}>


                
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
                        
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tel</th>
                            {/* <th scope="col">Code</th> */}
                            <th scope="col">Adresse</th>
                            {/* <th scope="col">Contact</th> */}
                            {/* <th scope="col">Tel</th> */}
                            {/* <th scope="col">Fax</th> */}
                            <th scope="col">Statut</th>
                            <th scope="col" />
                            <th scope="col" />
                          </tr>
                        </thead>

                        <tbody>
                          {clients.map((client, index) => (
                            <tr>
                              <th>
                                <Media>
                                  <span className="mb-0 text-sm">
                                    {client.nom}
                                  </span>
                                </Media>
                              </th>
                              {/* <td  scope="col">{client.prenom}</td> */}
                              <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {client.prenom}
                                </Badge>
                              </td>
                              {/* <td  scope="col">{client.code}</td> */}
                              {/* <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.code}
                      </Badge>
                    </td> */}
                              {/* <td  scope="col">{client.adresse}</td> */}
                              <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {client.email}
                                </Badge>
                              </td>
                              {/* <td  scope="col">{client.contact}</td> */}
                              {/* <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.contact}
                      </Badge>
                    </td> */}
                              {/* <td  scope="col">{client.tel}</td> */}
                              {/* <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.tel}
                      </Badge>
                    </td> */}

                              <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {client.tel}
                                </Badge>
                              </td>
                              <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {client.adresse}
                                </Badge>
                              </td>
                              <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {client.status ? (
                                    <i className="bg-success" />
                                  ) : (
                                    <i className="bg-warning" />
                                  )}

                                  {client.status ? "Active" : "Désactiver"}
                                </Badge>
                              </td>

                              <td>
                                <DetailClient id={client.id} />
                                <ActiveClient id={client.id} />
                                <EditClient id={client.id} />
                                <DeleteClient id={client.id} />{" "}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      
                    </Col>
                  </Row>
                </TabPane>

                {/* //Reparateur */}
             
              </TabContent>
              <CardFooter className="py-4">
                           <DeleteAllClients />
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default Clients;
