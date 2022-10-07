import React from 'react'
import Score from '../score/score'
import Rule from '../rules/rules'
import './body.css'
import Pick from '../pick/pick'
import Choice from '../choise/choice'

class Body extends React.Component {
    state = {
        choice: "",
        score : 0
    }
    onBtnChoiceGrParent = (choice) => {
        this.setState({
            choice: choice,
        })
        console.log(choice);
    } 
    battlePhaseParent = () => {
        this.setState({
            choice: "",
        })
    }
    newScore = this.state.score
    onResu = (modifResultat) =>{   
        if(modifResultat === 1){
            this.newScore += 1
        }else if(modifResultat === -1){
            this.newScore -= 1
        }
        console.log(this.newScore);
        this.setState({
            score : this.newScore
        })
        
    }
    render() {
        
        return(
            <div id='body'>
                <Score score={this.state.score} />
                <div>
                    {this.state.choice === "" &&
                        <Choice btnChoice={this.onBtnChoiceGrParent}/>
                    }
                </div>
                <div>
                    {this.state.choice !== "" &&
                        <Pick battle={this.state.choice} finish={this.battlePhaseParent} result={this.onResu}/>
                    }
                </div>
                <div>
                    <Rule />
                </div>
            </div>
        )
    }
}

export default Body