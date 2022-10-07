import React from 'react'
import Cissor from '../cissor/cissor'
import Paper from '../paper/paper'
import Rock from '../rock/rock'
import './pick.css'

class Pick extends React.Component {
    choisePlayer = [<Paper/>, <Cissor/>, <Rock/>]
    rand = Math.floor(Math.random() * 3);
    nmb;
    resultat;
    modifResultat;
    state = {
        score: 0,
    }
    battlePhase = () => {
        this.props.finish()
        this.props.result(this.modifResultat) 
            
        // console.log(this.props.result);:
    }
    
    render() {

        if(this.props.battle === "paper"){
            this.nmb = 0
        }else if(this.props.battle === "scissor"){
            this.nmb = 1
        }else if(this.props.battle === "rock"){
            this.nmb = 2
        }
        console.log(this.props.battle);

        if(this.nmb === this.rand){
            this.resultat = "DRAW"
        }else if(this.nmb === 0 && this.rand === 2){
            this.resultat = "WIN"
        }else if(this.nmb === 1 && this.rand === 0){
            this.resultat = "WIN"
        }else if(this.nmb === 2 && this.rand === 1){
            this.resultat = "WIN"
        }else if(this.nmb === 0 && this.rand === 1){
            this.resultat = "LOSE"
        }else if(this.nmb === 1 && this.rand === 2){
            this.resultat = "LOSE"
        }else if(this.nmb === 2 && this.rand === 0){
            this.resultat = "LOSE"
        }

        if(this.resultat === "WIN"){
            this.modifResultat = 1
        }else if(this.resultat === "LOSE"){
            this.modifResultat= -1
        }
        

        return (
            <div id='picked' className='d-flex justify-content-around mt-5'>
                <div className='content-player'>
                    <p className='text-white text-center fw-bold fs-6 mb-xl-5'>YOU PICKED</p>
                    <div className='circles'>
                        <div className='content-choice'>
                            {this.choisePlayer[this.nmb]}
                        </div>
                    </div>
                </div>
                <div id='play-again' className='d-flex flex-column align-items-center justify-content-center'>
                    <p className='text-white fs-2 fw-bold para-play'>YOU {this.resultat}</p>
                    <button className='text-danger btn-playagain' onClick={() => this.battlePhase()}>PLAY AGAIN</button>
                </div>
                <div className='content-bot'>
                    <div>
                        <p className='text-white fw-bold fs-6 mb-xl-5 para-play'>THE HOUSE PICKED</p>
                    </div>
                    <div className='circles circles2'>
                        <div className='content-choice'>
                            {this.choisePlayer[this.rand]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pick