import React from 'react'
import Paper from '../paper/paper'
import Cissor from '../cissor/cissor'
import Rock from '../rock/rock'
import './choice.css'

class Choice extends React.Component {
    onBtnChoiceParent = (choice) => {
        this.props.btnChoice(choice)
    }
    render() {
        return(
            <div className='triangle'>
                <Paper onBtnChoice={this.onBtnChoiceParent}/>
                <Cissor onBtnChoice={this.onBtnChoiceParent}/>
                <Rock onBtnChoice={this.onBtnChoiceParent}/>
            </div>
        )
    }
}

export default Choice