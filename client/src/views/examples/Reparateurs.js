
import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Form,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  FormGroup,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { Button } from "reactstrap";
import { findReparateursByTitle, retrieveReparateurs } from "../../actions/reparateurs";
import AddReparateur from "./AddReparateur";
import EditReparateur from "./EditReparateur";
import ActiveReparateur from "./ActiveClient";
import DetailReparateur from "./DetailReparateur";
import DeleteReparateur from "./DeleteReparateur";
import { InputBase } from "@material-ui/core";
import DeleteAllReparateurs from "./DeleteAllReparateurs";

const Reparateurs = () => {


  const reparateurs = useSelector(state => state.reparateurs);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(retrieveReparateurs());
  }, []);

  //recherche
  const [searchTitle, setSearchTitle] = useState("");
  const [reparateur, setReparateur] = useState(null);
  const [index, setIndex] = useState(-1);

  const refreshData = () => {
    setReparateur(null);
    setIndex(-1);
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findReparateursByTitle(searchTitle));
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
              <Col xs="8">
              <h3 className="mb-0">List des réparateurs</h3>
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
                   
                    <AddReparateur />
                  </Col>
                </Row>

             </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Status</th>

                    <th scope="col" />
                  </tr>
                </thead>
                {reparateurs.map((reparateur, index) => ( 
                <tbody>
                  <tr>
                    <td>{reparateur.nom}</td>
                    <td>{reparateur.prenom} </td>
                    <td>{reparateur.email}</td>
                    <td>{reparateur.tel} </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        {reparateur.status ? (
                          <i className="bg-success" />
                        ) : (
                          <i className="bg-warning" />
                        )}

                        {reparateur.status ? "Active" : "Désactiver"}
                      </Badge>
                    </td>
                    <td><DetailReparateur id={reparateur.id}/>
                      <EditReparateur id={reparateur.id}/> 
                    <ActiveReparateur id={reparateur.id}/> 
                    <DeleteReparateur id={reparateur.id}/></td>
                  </tr>
                </tbody>
                ))}
             </Table>
              <CardFooter className="py-4">
                <DeleteAllReparateurs />
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

export default Reparateurs;
