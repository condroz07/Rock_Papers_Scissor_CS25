import React from 'react'
import './paper.css'
import imgPaper from '../../img/icon-paper.svg'

class Paper extends React.Component {
    btnChoice = (choice) => {
        this.props.onBtnChoice(choice)
    }
    render() {
        return (
            <div id='paper' className="d-xl-flex d-flex justify-content-xl-center align-items-xl-center justify-content-center align-items-center" onClick={() => this.btnChoice("paper")}>
                <div className='round-paper'>
                    <img src={imgPaper} alt="" />
                </div>
            </div>
        )
    }
}

export default Paper