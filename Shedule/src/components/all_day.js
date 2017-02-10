import React, { Component } from 'react';

class AllDayCell extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    onClickAllDay() {
        const date = this.props.date;
        if(this.state.clicked){
            this.props.clearDayTime(date);
            this.setState({clicked: false});
        } else {
            this.props.fillDayTime(date);
            this.setState({clicked: true});
        }
    }

    render(){
        return(
            <td
                className="full-day"
                onClick={this.onClickAllDay.bind(this)}
            >Click</td>
        )
    }
}

export default AllDayCell;