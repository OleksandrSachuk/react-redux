import React from 'react';
import ActiveCell from '../containers/active_cell';

const Shedule = () => {
    return(
        <table className="table-bordered">
            <thead>
            <tr>
                <th></th>
                <th>ALL DAY</th>
                <th>00:00</th>
                <th>01:00</th>
                <th>02:00</th>
                <th>03:00</th>
                <th>04:00</th>
                <th>05:00</th>
                <th>06:00</th>
                <th>07:00</th>
                <th>08:00</th>
                <th>09:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>
                <th>19:00</th>
                <th>20:00</th>
                <th>21:00</th>
                <th>22:00</th>
                <th>23:00</th>
                <th>24:00</th>
            </tr>
            </thead>
            <tbody>
            <ActiveCell date={'mo'} />
            <ActiveCell date={'tu'} />
            <ActiveCell date={'we'} />
            <ActiveCell date={'th'} />
            <ActiveCell date={'fr'} />
            <ActiveCell date={'sa'} />
            <ActiveCell date={'su'} />
            </tbody>
        </table>
    )
};

export default Shedule;