import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div className="chart">
          <Sparklines height={20} width={80} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}
