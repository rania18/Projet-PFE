import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/color.css"
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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { retrieveTypepannes } from "actions/typepannes";
import AddTypepanne from "./AddTypepanne";
import EditTypepanne from "./EditTypepanne";
import DetailTypepanne from "./DetailTypepanne";
import { PhotoshopPicker } from "react-color";
import { deleteTypepanne } from "actions/typepannes";
import DeleteTypepanne from "./DeleteTypepanne";
import EditTypepannes from "./EditTypepannes";
import  DeleteAllTypes  from "./DeleteAllTypes";

const Typepannes = () => {
  const typepannes = useSelector((state) => state.typepannes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTypepannes());
  }, []);
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
                  <h3 className="mb-0">List des type pannes</h3>
                </Col>
                <Col className="text-right" xs="12">
                  <AddTypepanne />
                </Col>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Couleur</th>
                    <th scope="col" />
                    <th scope="col" />
                  </tr>
                </thead>
                {typepannes.map((typepanne, index) => (
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                         
                          <Media>
                            <span className="mb-0 text-sm">
                              {typepanne.name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          {/* <i className="bg-warning"  style={{color:typepanne.description}}/> */}
                             <div  style={{backgroundColor:typepanne.description }} className="colorCercle"  ></div>
                          {/* {typepanne.description} */}
                        </Badge>
                      </td>
                     
                     
                      
                      <td className="text-right">
                        <DetailTypepanne id={typepanne.id} />

                        <EditTypepannes id={typepanne.id} />
                        <DeleteTypepanne id={typepanne.id} />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <CardFooter className="py-4">
                <DeleteAllTypes />
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

export default Typepannes;
