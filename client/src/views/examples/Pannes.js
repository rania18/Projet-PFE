import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  retrievePannes,
  findPannesByTitle,
  deleteAllPannes,
} from "../../actions/pannes";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
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
  Col,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import AddEditPanne from "./AddClient";
import AddClient from "./AddClient";
import AddPanne from "./AddPanne";
import EditPanne from "./EditPanne";
import DeletePanne from "./DeletePanne";
import DetailPanne from "./DetailPanne";
// import { Input } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import DeleteAllPanne from "./DeleteAllPanne";

const Pannes = () => {
  const pannes = useSelector((state) => state.pannes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePannes());
  }, []);

  /// Searche
  const [searchTitle, setSearchTitle] = useState("");
  const [panne, setPanne] = useState(null);
  const [index, setIndex] = useState(-1);

  const refreshData = () => {
    setPanne(null);
    setIndex(-1);
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findPannesByTitle(searchTitle));
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
                  <h3 className="mb-0">List des pannes</h3>
                  <Col className="text-center" xs="8"></Col>
                </Col>

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
                            placeholder="Search"
                            type="text"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={onChangeSearchTitle}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                          >
                            Search
                          </button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col className="text-right" xs="4">
                    <AddPanne />
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                    {/* <th scope="col">Photo</th> */}
                    {/* <th scope="col">Matricule vehicule</th> */}
                    {/* <th scope="col">Reparateur</th> */}
                    <th scope="col" />

                    <th scope="col" />
                  </tr>
                </thead>
                {pannes.map((panne, index) => (
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">{panne.name}</span>
                          </Media>
                        </Media>
                      </th>
                      <td>{panne.description}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          {/* <i className="bg-warning" /> */}
                          {panne.photo}
                        </Badge>
                      </td>
                      {/* <td>
                        <Badge color="" className="badge-dot mr-4">
                          {panne?.vehicule?.immatricule}
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          {panne?.reparateur?.nom}
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          {panne.reparateurId}
                        </Badge>
                      </td> */}

                      <td className="text-right">
                        <DetailPanne id={panne.id} />

                        <EditPanne id={panne.id} />
                        <DeletePanne id={panne.id} />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <CardFooter className="py-4">
                <DeleteAllPanne />

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
      </Container>
    </>
  );
};

export default Pannes;
