
import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


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
  NavItem,
  NavLink,
  Col,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Form
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { retrieveEnquetes } from "actions/enquetes";
import AddQuestion from "./AddQuestion";
import classnames from "classnames";
import { retrieveQuestions } from "actions/questions";
import EditQuestion from "./EditQuestion";
import { FormGroup } from "@material-ui/core";
import ActiveQuestion from "./ActiveQuestion";
import DeleteQuestion from "./DeleteQuestion";
import DeleteAllQuestions from "./DeleteAllQuestions";


const Satisfaction = () => {
  //get question
  const enquetes = useSelector(state => state.enquetes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveEnquetes());
  }, []);
  const questions = useSelector(state => state.questions);


  useEffect(() => {
    dispatch(retrieveQuestions());
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
                <h3 className="mb-0">Liste des question</h3>
               
                <Row>
                <Col className="text-center" xs="8"> 
                <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
           
          </Form>
                </Col>
                 <Col className="text-right" xs="4">
                <AddQuestion />
                </Col>
                </Row>
             
              </CardHeader>

         
              <Table className="align-items-center table-flush" responsive> 
                     

                <thead className="thead-light">
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Text</th>
                    <th scope="col" />

                    <th scope="col" />
                  </tr>
                </thead>
                {questions.map((question, index) => ( 
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                            {question.name}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>{question.text}</td>
                    {/* <td>
                                <Badge color="" className="badge-dot mr-4">
                                  {question.status ? (
                                    <i className="bg-success" />
                                  ) : (
                                    <i className="bg-warning" />
                                  )}

                                  {question.status ? "Active" : "Désactiver"}
                                </Badge>
                              </td>
                     */}
                   
                    <td><EditQuestion id={question.id} />
                    {/* <ActiveQuestion id={question.id}/> */}
                    <DeleteQuestion id={question.id} />
                    </td>
                  </tr>
                
                </tbody>
                  ))}
             </Table>
             
            
              <CardFooter className="py-4">
              <DeleteAllQuestions />

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

export default Satisfaction;
