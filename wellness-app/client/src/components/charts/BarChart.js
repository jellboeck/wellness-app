import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Container, Row, Col } from "shards-react";


class BarChart extends Component {
    // constructor(props) {
    //     console.log('barchart');
    //     console.log(props);
    //     super(props);
    //     var bmis = props.bmis
    //     this.state = {
    // chartData: {
    //     labels: [
    //         '1', '2', '3', '4', '5'
    //     ],
    //     datasets: [
    //         {
    //             label: 'BMI',
    //             data: bmis,
    //             backgroundColor: 'green'
    //         }
    //     ]
    // }
    // }
    // }
    // componentDidUpdate() {
    //     this.setState({bmis: this.props.bmis})
    // }
    componentDidMount = () => console.log(this.props)
    render() {
        return (
            <div className='barChart'>
            <Col>
                    <Line
                        data={{
                            labels: [
                                '1', '2', '3', '4', '5'
                            ],
                            datasets: [
                                {
                                    label: 'BMI',
                                    data: this.props.bmis,
                                    backgroundColor: 'green'
                                }
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
            </Col>
            <Col>
            <Line
                data={{
                    labels: [
                        '1', '2', '3', '4', '5'
                    ],
                    datasets: [
                        {
                            label: 'Steps',
                            data: this.props.steps,
                            backgroundColor: 'red'
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false
                }}
                />
            </Col>
        </div>
        )
    }
}

export default BarChart