import React from 'react';

export default function AddQuestionFormAddOn (props) {
    if (props.newQuestionType == 'freeForm') {
        return (
            <div className="form-group">
                <label htmlFor="newCorrectAnswer">Correct Answer:</label>
                <input id="newCorrectAnswerId" className="form-control" name="newCorrectAnswer" type="text" value={props.newCorrectAnswer} onChange={props.handleChange} />
            </div>
        )
    }
    else if (props.newQuestionType == 'trueOrFalse') {
        return (
            <div className="form-group">
                <label htmlFor="newCorrectAnswer">Correct Answer:</label><br />
                <input name="newCorrectAnswer" type="radio" value="true" onChange={props.handleChange} checked={props.newCorrectAnswer == "true"} /> True <br />
                <input name="newCorrectAnswer" type="radio" value="false" onChange={props.handleChange} checked={props.newCorrectAnswer == "false"} /> False <br />
            </div>
        )
    }
    else if (props.newQuestionType == 'multipleChoice') {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="newCorrectAnswer">Correct Answer:</label>
                    <input 
                        id="newCorrectAnswerId" 
                        className="form-control" 
                        name="newCorrectAnswer" 
                        type="text"
                        value={props.newCorrectAnswer} 
                        onChange={props.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="newIncorrectAnswer1">Incorrect Answer:</label>
                    <input 
                        id="newIncorrectAnswer1Id" 
                        className="form-control" 
                        name="newIncorrectAnswer1" 
                        value={props.newIncorrectAnswer1} 
                        type="text" 
                        onChange={props.handleChange}
                        required='true' />
                </div>
                <div className="form-group">
                    <label htmlFor="newIncorrectAnswer2">Incorrect Answer:</label>
                    <input 
                        id="newIncorrectAnswer2Id" 
                        className="form-control" 
                        name="newIncorrectAnswer2" 
                        value={props.newIncorrectAnswer2} 
                        type="text" 
                        onChange={props.handleChange}
                        required='true' />
                </div>
                <div className="form-group">
                    <label htmlFor="newIncorrectAnswer3">Incorrect Answer:</label>
                    <input 
                        id="newIncorrectAnswer3Id" 
                        className="form-control" 
                        name="newIncorrectAnswer3" 
                        value={props.newIncorrectAnswer3} 
                        type="text" 
                        onChange={props.handleChange} 
                        required='true' />
                </div>
            </div>
        )
    }
    
    return <div></div>
}
