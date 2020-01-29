import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import {
    Card,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    Container,
    FormInput,
    Button
  } from "shards-react";
  
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
            <div className='barChart mb-12 chart'>

<Container fluid className="main-content-container px-12">
    
{/* <Card> */}
          <GridContainer>
          
          <GridItem xs={12} sm={6} md={6} lg={6} className='width'>
          <Line
                        data={{
                            labels: [
                                'Most Recent', '', '', '', ''
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
          </GridItem>

          <GridItem xs={12} sm={6} md={6} lg={6} className='width'>

          <Line
                data={{
                    labels: [
                        'Most Recent', '', '', '', ''
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

          </GridItem>

          </GridContainer>

{/* </Card> */}

  </Container>

        </div>
        )
    }
}

export default BarChart