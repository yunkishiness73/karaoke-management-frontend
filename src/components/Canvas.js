import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import axios from 'axios';

// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPoints : []
        };
    }

    render() {
      console.log('render canvas');
        const options = {
			theme: "light2",
			title: {
				text: "Báo Cáo Doanh Thu"
			},
			axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
			data: [{
        type: "line",
        name: "Total Price",
        showInLegend: true,
				xValueFormatString: "YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: this.state.dataPoints
			}]
		}
        return (
        
            <CanvasJSChart options = {options}/>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        axios({
          method: 'GET',
          url: 'http://localhost:3001/api/invoices/summarize?viewType=year&from=2018-09-28&to=2019-10-05',
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraWV0bmd1eWVuNzM5OEBnbWFpbC5jb20iLCJleHAiOjE1NzA4MjgxOTQsImlhdCI6MTU3MDgxMDE5NH0.sSzZMBB5aocvk4sRQaNXef_wF1307P1jGl5sUaLj2VNusPC0EyG8bUR8T8E_tSsT3rFGeZ_JMYynsDJj5osPbQ'}
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            let data = res.data;
            let dataPoints = [];
            for (let i = 0; i < data.length; i++) {
              dataPoints.push({
                x : new Date(data[i].period),
                y : data[i].totalPrice
              });
            }
    
            console.log(dataPoints);
    
            this.setState({
              dataPoints
            });
          }
        }).catch((err) => {
          if(err.response) {
           
          }
        });
      }
}

export default Canvas;