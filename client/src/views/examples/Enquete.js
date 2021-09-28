import React , { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useDispatch, useSelector } from "react-redux";
// import { retrieveQuestions } from "actions/questions";

import {
  retrieveQuestions,
  findPannesByTitle,
  deleteAllPannes,
} from "../../actions/questions.js";
import { createReponse } from "actions/reponses.js";
const Enquete = () => {
const user = useSelector(state => state.auth.user)
    //get question
    const questions = useSelector(state => state.questions);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(retrieveQuestions());
    }, []);
    useEffect(() => {
      setListReponse( questions.map(elm=> {return {questionId:elm.id,description:"non",userId:1}}))
    }, [questions]);

    //ajout reponse
    const [listReponse, setListReponse] = useState(
      // questions.map(elm=> {return {...elm,response:false,userId:user._id}})
      null
    )
    
  const initialReponseState = {
    id: null,
    titre: "",
    description: "",
    questionId: "",
  };
  const [reponse, setReponse] = useState(initialReponseState);

  // const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReponse({ ...reponse, [name]: value });
  };

  const saveReponse = () => {
    
listReponse.map(elm=>{
  dispatch(createReponse(elm))
})
   /*  dispatch(createReponse(title, description, questionId))
      .then((data) => {
        setReponse({
          id: data.id,
          title: data.title,
          description: data.description,
          questionId: data.questionId,
        });
     
      })
      .catch((e) => {
       // console.log(e);
      }); */
  };


  return (
    <>
      {/* <UserHeader /> */}
      {/* Page content */}
      {/* <Container className="mt--12" fluid> */}
      <Row>
        {console.log(listReponse)}
        <Col className="order-xl-1" xl="16">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Merci de consacrer quelques minutes à remplir ce court questionnaire</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              
              <Form>            

                <div className="pl-lg-4">
                  <Row>
                    <Col lg="8"> 
                    {questions.map((question, index) => (
                      <FormGroup key={`form${index}`}>
                        <label key={`label1${index}`}
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          {question.text}


                        </label>

                        <div key={`div${index}`} className="custom-control custom-checkbox mb-3">
          <input key={`input1${index}`}
            className="custom-control-input"
            id={`customCheck1${index}`}
            type="checkbox"
            name="description"
            onClick={()=>setListReponse(listReponse.map(elm=> elm.id===question.id? {...question,description:"oui"}:elm))}
            value={reponse.title}
            onChange={handleInputChange}
          />
          <label key={`label2${index}`} className="custom-control-label" htmlFor={`customCheck1${index}`}>
            oui
          </label>
        </div>
        <div key={`div2${index}`} className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            defaultChecked
            id={`customCheck2${index}`}
            type="checkbox"
            name="titre"
            value={reponse.description}
            onClick={()=>setListReponse(listReponse.map(elm=> elm.id===question.id? {...question,description:"non"}:elm))}

            onChange={handleInputChange}
          />
          <label key={`label3${index}`} className="custom-control-label" htmlFor={`customCheck2${index}`}>
            non
          </label>
        </div>

                        {/* <div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            id="customRadio1"
                            // name="custom-radio-1"
                            type="radio"
                            name="titre"
                            value={reponse.titre}
                            onChange={handleInputChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio1"
                          >
                            oui
                          </label>
                        </div>
                        <div className="custom-control custom-radio mb-3">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="customRadio2"
                            name="custom-radio-1"
                            type="radio"
                            name="titre"
                            value={reponse.titre}
                            onChange={handleInputChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio2"
                          >
                            non
                          </label>
                        </div>
                     </div>
                      */}
                      </FormGroup>
                       ))}

                    </Col>
                </Row>
                <hr className="my-4" />
                <div className="pl-lg-6">
                  <FormGroup>
                    <Button variant="secondary">
                      Annuler
                    </Button>
                    <Button variant="primary" color="primary" size="lg" type="button"  onClick={saveReponse} >
                      Envoyer
                    </Button>
                  </FormGroup>
                </div>
               </div> 
           </Form>
          
           </CardBody>
          </Card>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default Enquete;
