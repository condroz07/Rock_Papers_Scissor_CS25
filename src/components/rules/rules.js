import React from 'react'
import ModalRules from '../modal-rules/modal-rules'
import './rules.css'

class Rules extends React.Component {
    state = {
        action: "inactive"
    }
    activeModal = (etat) => {
        this.setState({
            action: etat,
        })
    }
    render() {
        return (
            <div>
                <div id='rules'>
                    <p className='p-rules mb-0' onClick={() => this.activeModal("active")}>RULES</p>
                </div>
                {this.state.action === "active" &&
                    <div className='animation'>
                        <ModalRules onActiveModal={this.activeModal}/>
                    </div>
                }
            </div>
        )
    }
}

export default Rules