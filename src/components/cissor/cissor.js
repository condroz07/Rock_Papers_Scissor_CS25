import React from 'react'
import './cissor.css'
import imgScissor from '../../img/icon-scissors.svg' 

class Cissor extends React.Component {
    btnChoice = (choice) => {
        this.props.onBtnChoice(choice)
    }
    render() {
        return(
            <div id='scissor' className="d-flex justify-content-center align-items-center" onClick={() => this.btnChoice("scissor")}>
                <div className='round-scissor'>
                    <img src={imgScissor} alt="" />
                </div>
            </div>
        )
    }
}

export default Cissor