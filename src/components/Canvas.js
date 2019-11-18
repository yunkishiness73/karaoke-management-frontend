import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Canvas extends Component {
    configOptions = (dataPoints) => {
        return {
            height: 500,
            theme: "light2",
            title: {
                text: "Báo Cáo Doanh Thu"
            },
            axisY: {
                title: "VND",
            },
            data: [{
                type: "spline",
                title: 'Statistics',
                toolTipContent: "Period: {label} </br> Total: {y} </br> Quantity: {z}",
                yValueFormatString: "#,###",
                dataPoints: dataPoints,

            }]
        }
    }

    processStatisticsBeforeRender = (formatDate) => {
        let dataPoints = [];
        let statistics = this.props.statistics;

        if (Array.isArray(statistics) && statistics.length > 0) {
            _.each(statistics, (item) => {
                dataPoints.push({
                    label: moment(item.period).format(formatDate),
                    y: item.totalPrice,
                    z: item.quantity,
                })
                console.log(dataPoints[0]);
            })
        }

        return dataPoints;
    }

    getDateFormat() {
        let dateFormat = '';

        switch (this.props.viewType) {
            case 'day':
                dateFormat = 'YYYY-MM-DD'
                break;
            case 'month':
                dateFormat = 'YYYY-MM'
                break;
            default:
                dateFormat = 'YYYY'
                break;
        }

        return dateFormat;
    }

    render() {
        const dateFormat = this.getDateFormat();
        console.log(dateFormat);
        const dataPoints = this.processStatisticsBeforeRender(dateFormat);
        const options = this.configOptions(dataPoints);

        return (
            <CanvasJSChart options={options} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        statistics: state.invoice.statistics,
        viewType: state.invoice.viewType
    }
}

export default connect(mapStateToProps, null)(Canvas);