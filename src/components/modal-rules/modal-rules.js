import React from 'react'
import './modal-rules.css'
import imgModalRules from '../../img/image-rules.svg'
import imgModalClose from '../../img/icon-close.svg'

class ModalRules extends React.Component {
    close = (action) => {
        this.props.onActiveModal(action)
    }
    render() {
        return (
            <div id='modal' className='d-flex' onClick={() => this.close("inactive")}>
                <div className='body-modal' onClick={e => e.stopPropagation()}>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <p className='p-modal mb-0'>RULES</p>
                        <div>
                            <img src={imgModalClose} alt="" onClick={() => this.close("inactive")}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img className='redimension' src={imgModalRules} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalRules