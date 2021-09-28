
import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from 
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Button,
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
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { retrieveVehicules } from "actions/vehicules";
import AddVehicule from "./AddVehicule";
import EditVehicule from "./EditVehicule";
import DeleteVehicule from "./DeleteVehicule";
import DetailVehicule from "./DetailVehicule";
import Profile from "./Profile"
import { Link } from "react-router-dom";
// import { findPannesByTitle } from "actions/vehicules";
import { InputBase } from "@material-ui/core";
import DeleteAllVehicule from "./DeleteAllVehicule";
import { findPannesByTitle } from "actions/pannes";
import { retrieveClients } from "actions/clients";
import { findVehiculesByTitle } from "actions/vehicules";

const Vehicule = () => {
  const [copiedText, setCopiedText] = useState();

  const vehicules = useSelector(state => state.vehicules);
  const clients = useSelector(state => state.clients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveVehicules());
    dispatch(retrieveClients());
  }, []);


   /// Searche
    const [searchTitle, setSearchTitle] = useState("");
    const [vehicule, setVehicule] = useState(null);
    const [index, setIndex] = useState(-1);
  
    const refreshData = () => {
      setVehicule(null);
      setIndex(-1);
    };
  
    const findByTitle = () => {
      refreshData();
      dispatch(findVehiculesByTitle(searchTitle));
    };
  
    const onChangeSearchTitle = (e) => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
    };
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card véhicules</h3>


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
                <InputBase placeholder="Search" type="text"
                placeholder="Search by title"
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
                 <AddVehicule />
                </Col>
                </Row>


                {/* <Col className="text-right" xs="12">
                <AddVehicule />
                </Col> */}
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Immatricule</th>
                    <th scope="col">Marque</th>
                    <th scope="col">Model</th>
                    <th scope="col">Kilometrage</th>
                    <th scope="col">Carburant</th>
                    {/* <th scope="col">Client</th> */}

                    <th scope="col" />
                  </tr>
                </thead>
                {vehicules.map((vehicule, index) => ( 
                <tbody>
                
                    
                     <tr>
                       <th>
                     <Media>
                            <span className="mb-0 text-sm">
                              {vehicule.immatricule}
                            </span>
                          </Media>
                      </th>
                    <td>{vehicule.marque}</td>
         
                    <td>{vehicule.modele}</td>
                    <td>{vehicule.Kilometrage}</td>
                    <td>{vehicule.carburant}</td>
 
                    {/* <td>{vehicule?.client?.nom}</td>      */}

                                     
                    
                    <td><Link to={`/admin/detail/${vehicule.id}`}>
                      <DetailVehicule id={vehicule.id}/>  </Link>
                      <EditVehicule id={vehicule.id}/>
                    <DeleteVehicule id={vehicule.id}/>
                     </td>
                   
                     
                  </tr>
                
                   
                 
                </tbody>
                 ))}
            </Table>
            
              <CardFooter className="py-4">
                <DeleteAllVehicule />
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

export default Vehicule;
