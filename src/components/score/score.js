import React from 'react'
import './score.css'

class Score extends React.Component {
    
    render() {
        return(
            <div id='score' className='d-flex justify-content-between p-3'>
                <div className='d-flex'>
                    <p className='rpc mb-0'>ROCK PAPER SCISSORS</p>
                </div>
                <div className='d-flex'>
                    <div className='d-flex flex-column align-items-center justify-content-between px-4 box-score'>
                        <span className='score-title'>SCORE</span>
                        <p className='score mb-0'>{this.props.score}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Score