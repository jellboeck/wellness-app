import React, { useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from "shards-react";

import SmallStats from "../components/charts/SmallStats";

function userGoals({ smallStats }, props) {
  console.log('user goals');
  console.log(props);

  // const [steps, setSteps] = useState();
  var steps = [];
  function getUserSteps() {
    axios.get('/api/step_data').then(function (data) {
      console.log('step data');
      console.log(data);
      for (var i = 0; i < data.data.length; i++) {
        steps[i] = data.data[i].quantity
      }
      console.log(steps);
     
      // setWeight(data.data.weight);
    });
  }
  getUserSteps();
  console.log('steps out')
  console.log(steps);
  return (
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-md-6 smallStats" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            // decrease={stats.decrease}
            />
        </Col>
      ))}
        
    </Row>

      {/* Users Overview */}
    
  </Container>
)
};

userGoals.defaultProps = {
  smallStats: [

    {
      label: "BMI%",
      value: "31%",
      percentage: "3.8%",
      increase: true,
      // decrease: false,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 3,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 5]
        }
      ]
    },

    {
      label: "Steps",
      value: "11385",
      // percentage: "2.71%",
      // increase: true,

      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          // label: "Today",
          // fill: "start",
          borderWidth: 3,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [2, 3, 3, 3, 4, 3, 5]
        }
      ]
    }
  ]
};

export default userGoals;
