import React from 'react';
import axios from 'axios';
import SaveSuccessMessage from './saved_question_success_msg';
import AddQuestionFormAddOn from './add_question_form_addon';


export default class AddQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            savedQuestion: '',
            newQuestion: '',
            newCorrectAnswer: '',
            newQuestionType: '',
            newIncorrectAnswer1: '',
            newIncorrectAnswer2: '',
            newIncorrectAnswer3: '',
            newQuestionTopic: 1,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value,
        });
    }

    sendQuestionToServer(newQuestion){
        axios({
            method: 'post',
            url: this.props.url,
            data: {
                question: newQuestion.question,
                correctAnswer: newQuestion.correctAnswer,
                questionTopic: newQuestion.questionTopic,
                questionType: newQuestion.questionType,
                incorrectAnswer1: newQuestion.incorrectAnswer1,
                incorrectAnswer2: newQuestion.incorrectAnswer2,
                incorrectAnswer3: newQuestion.incorrectAnswer3
            },
            xsrfHeaderName: "X-CSRFTOKEN",
        })
        .then(function(response) {
            console.log("success? ", response)
        })
        .catch(function(error) {
            console.log("error? ", error)
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var newQuestion = this.state.newQuestion;
        var newQuestionType = this.state.newQuestionType;
        var newCorrectAnswer = this.state.newCorrectAnswer;
        var newQuestionTopic = this.state.newQuestionTopic;
        var newIncorrectAnswer1 = this.state.newIncorrectAnswer1;
        var newIncorrectAnswer2 = this.state.newIncorrectAnswer2;
        var newIncorrectAnswer3 = this.state.newIncorrectAnswer3;

        this.sendQuestionToServer({
            question: newQuestion,
            questionType: newQuestionType,
            correctAnswer: newCorrectAnswer,
            questionTopic: newQuestionTopic,
            incorrectAnswer1: newIncorrectAnswer1,
            incorrectAnswer2: newIncorrectAnswer2,
            incorrectAnswer3: newIncorrectAnswer3
        });
        this.setState({
            savedQuestion: newQuestion,
            newQuestion: '',
            newCorrectAnswer: '',
            newIncorrectAnswer1: '',
            newIncorrectAnswer2: '',
            newIncorrectAnswer3: '',
        });
    }

    render() {
        return (
            <div>
                <h2>Add Question</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="newQuestion">Question:</label>
                        <input 
                            id="newQuestionId" 
                            className="form-control" 
                            name="newQuestion" type="text" 
                            value={this.state.newQuestion} 
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newQuestionType">Question Type:</label><br />
                        <input type="radio" name="newQuestionType" value="trueOrFalse" onChange={this.handleChange} /> True/False<br />
                        <input type="radio" name="newQuestionType" value="multipleChoice" onChange={this.handleChange} /> Multiple Choice<br />
                        <input type="radio" name="newQuestionType" value="freeForm" onChange={this.handleChange} /> Free Form
                    </div>
                    <AddQuestionFormAddOn 
                        newQuestionType={this.state.newQuestionType} 
                        newCorrectAnswer={this.state.newCorrectAnswer}
                        newIncorrectAnswer1={this.state.newIncorrectAnswer1}
                        newIncorrectAnswer2={this.state.newIncorrectAnswer2}
                        newIncorrectAnswer3={this.state.newIncorrectAnswer3} 
                        handleChange={this.handleChange} />
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Save</button>
                </form>
                <SaveSuccessMessage savedQuestion={this.state.savedQuestion} />
            </div>
        );
    }
}
