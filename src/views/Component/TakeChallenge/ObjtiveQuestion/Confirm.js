import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {Button,Card,CardBody, CardHeader} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    let listSelected = this.props.result.map((item)=>{
      return (
          <ListGroupItem active>
    <ListGroupItemHeading>{item.questionContent}</ListGroupItemHeading>
            <ListGroupItemText>
                {item.selectedAnswer}
            </ListGroupItemText>
          </ListGroupItem>
      );
    }
    );
   
    return (
     
        
           <Card>
                    <CardHeader>
                    <i className="fa fa-align-justify"></i><strong>Selected Option</strong>                
                    </CardHeader>
                    <CardBody>
          <ListGroup>
            {listSelected}
          </ListGroup>
         
          <br />
        
          <div>
                      <Container>
                        <Row>
                          <Col>
                          <Button
                            color="primary"                            
                            style={{paddingLeft:"40",paddingRight:"40"}}                            
                            onClick={this.prevStep}
                            >Back</Button>
                          </Col>
                          <Col>
                          <Button
                            color="primary"                            
                            style={{paddingLeft:"40",paddingRight:"40"}}                            
                            onClick={this.continue}
                            >Confirm and Submit</Button>
                          </Col>
                          
                         
                        </Row>
                      </Container>    
         </div>           

</CardBody>
</Card>
       
           
    );
  }
}

export default Confirm;
