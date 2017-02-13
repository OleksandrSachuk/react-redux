import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import AllDayCell from '../components/all_day';
import * as actions from '../actions';

class ActiveCell extends Component {
    getCell() {
        const date = this.props.date;
        const shedule = this.props.shedule;
        let start, end, td, allCells = [];
        shedule[date].map((time) => {
            start = time.bt;
            end = time.et + 1;
            for (let initTime = 0; (initTime < end && initTime < 1380); initTime += 60) {
                if (start >= 0 && initTime >= start) {
                    td = <td className="active" key={initTime}></td>;
                } else {
                    td = <td className="non-active" key={initTime}></td>
                }
                allCells.push(td);
            }
        });
        for (let allCellsLength = 0; allCellsLength < 23; allCellsLength++) {
            if (allCells.length < 24) {
                td = <td className="non-active" key={allCellsLength}></td>
                allCells.push(td);
            }
        }
        return allCells.map((cell) => {
            return cell;
        });
    }
    render() {
        const { fillDayTime } = this.props.actions;
        const { clearDayTime } = this.props.actions;
        return (
            <tr>
                <td>{this.props.date}</td>
                <AllDayCell date={this.props.date} fillDayTime={fillDayTime} clearDayTime={clearDayTime} />
                {this.getCell()}
            </tr>
        )
    }
}
function mapStateToProps(state) {
    return {
        shedule: state.shedule
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCell);