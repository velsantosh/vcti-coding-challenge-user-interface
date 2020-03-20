import React, { Component} from 'react';
import ObjectiveQuestion from '../ObjtiveQuestion/ObjectiveQuestion';
import ObjectiveQuestionStep from '../ObjectiveQuestionStep/ObjectiveQuestionStep';
import objQuestions from './Questions';
import MultiStep from 'react-multistep';
import Confirm from '../ObjtiveQuestion/Confirm';


class ObjectiveQuestionWizard extends Component {
    constructor(props){
        super(props);
        this.state={
            questions:objQuestions,
            step:0,
            result:[]
        };        
    }

    handleOptionSelection = e => {
        console.log("handleOptionSelection");
        console.log(this.state);
        console.log(e.currentTarget.value);
        let resultValue = {
            questionContent:objQuestions[this.state.step].question,
            selectedAnswer:e.currentTarget.value
        };
        this.setState((prevState)=>
            {
              var existingquestionContents = this.state.result.map((obj) => obj.questionContent);

              if(existingquestionContents.indexOf(resultValue.questionContent) === -1){
                result:prevState.result.push(resultValue)
              }
              else {
                this.state.result.map((item,index)=>{
                  if(item.questionContent === resultValue.questionContent){
                    this.state.result[index] = resultValue
                  }
                }
                );
                //result:items;
              }
            }
        );

        console.log(this.state.result);
    }

  // Proceed to next step
  nextStep = () => {
    console.log("nextStep");
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
      console.log("prevStep");

    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

   // Handle fields change
   handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

    render(){       
        let idx = this.state.step;
        console.log(idx);

        let nextPage;

        if(idx > (objQuestions.length-1)){
          nextPage = (
            <Confirm result={this.state.result}  prevstep={this.prevStep} nextstep={this.nextStep} result={this.state.result}/>
          );
        }
        else {
          nextPage = (
            <ObjectiveQuestionStep result={this.state.result} handleOptionSelection={this.handleOptionSelection} prevstep={this.prevStep} nextstep={this.nextStep} answerOptions={objQuestions[idx].answers} count={objQuestions.length} content={objQuestions[idx].question} id={"steps" + idx} indentid={idx}/>
          );
        }

        return (
            <div className="animated fadeIn">
                {nextPage}
            </div>
        );
    }
}

export default ObjectiveQuestionWizard;