import React from 'react';
import './Quiz.css'

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: 'What is the capital of Netherlands?',
                    answerOptions: [
                        { answerText: 'New York', isCorrect: false },
                        { answerText: 'London', isCorrect: false },
                        { answerText: 'Amesterdam', isCorrect: true },
                        { answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    questionText: 'What is the biggest country in the world?',
                    answerOptions: [
                        { answerText: 'Canada', isCorrect: false },
                        { answerText: 'Russia', isCorrect: true },
                        { answerText: 'China', isCorrect: false },
                        { answerText: 'United States', isCorrect: false },
                    ],
                },
                {
                    questionText: 'What is the most populated countries ?',
                    answerOptions: [
                        { answerText: 'China', isCorrect: true },
                        { answerText: 'India', isCorrect: false },
                        { answerText: 'United States', isCorrect: false },
                        { answerText: 'Russia', isCorrect: false },
                    ],
                },
                {
                    questionText: 'What is the oldest country in the world?',
                    answerOptions: [
                        { answerText: 'Iran', isCorrect: false },
                        { answerText: 'India', isCorrect: false },
                        { answerText: 'China', isCorrect: false },
                        { answerText: 'Egypt', isCorrect: true },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }
    }

    clickHandler(isCorrect){
        console.log(isCorrect);
        if(this.state.currentQuestion===3){
         this.setState(
             {showScore:true}
         )
        }else{
            this.setState(
                (prevState)=>{
                    return {currentQuestion: prevState.currentQuestion + 1 }
                })
        }

        if(isCorrect){
            this.setState(
                (prevState)=>{
                    return {score: prevState.score +1}
            }
            )
              

        }

        
    }

    render() {
        return (
            <div className='app'>
                {/* next div is for showing user score */}
                   
                   {this.state.showScore?( <div className='score-section'>
                        You scored {this.state.score} out of {this.state.questions.length}
                    </div>): (
                        <>
                             <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {this.state.currentQuestion + 1}</span>/ {this.state.questions.length}
                            </div>
                            <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                               

                                {this.state.questions[this.state.currentQuestion].answerOptions.map((answerOption)=>(
                                     <button onClick={this.clickHandler.bind(this,answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                        </div>
                        </>
                    )}
                       
            </div>
        )
    }
}
