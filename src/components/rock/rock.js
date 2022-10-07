import React from 'react'
import './rock.css'
import imgRock from '../../img/icon-rock.svg'

class Rock extends React.Component {
    btnChoice = (choice) => {
        this.props.onBtnChoice(choice)
    }
    render() {
        return(
            <div id='rock' className="d-flex justify-content-center align-items-center" onClick={() => this.btnChoice("rock")}>
                <div className='round-rock'>
                    <img src={imgRock} alt="" />
                </div>
            </div>
        )
    }
}

export default Rock