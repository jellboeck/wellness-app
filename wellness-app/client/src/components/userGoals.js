import React, {useState} from "react";
import axios from 'axios';
import { Container, Row, Col } from "shards-react";

import SmallStats from "../components/charts/SmallStats";

function Goals(props, { smallStats }) {

  const [lastStep, setLastStep] = useState('11538');

  console.log('user goals');
  console.log(props);
  // var steps = [];
   var steps = [15000, 10000, 5000, 2000, 12000, 13000, 8000, 9000, 4000, 5000];
  console.log('steps out')
  console.log(steps);

  getUserSteps();

  function getUserSteps() {
    axios.get('/api/step_data').then(function (data) {
      console.log('step data');
      console.log(data);
      for (var i = 0; i < data.data.length; i++) {
        steps[i] = data.data[i].quantity
      }
      console.log(steps);
      return steps
      // setWeight(data.data.weight);
    });
  }
  // steps = [15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000];
  // steps = [8765, 12345, 5432, 6754, 1234, 1234, 1234, 1234, 4567, 10000];
  // steps = [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000];
  // steps = [3000, 4000, 5000, 6000, 7000, 6000, 5000, 4000, 3000, 2000];

  // steps = getUserSteps();

  console.log('steps out again')
  console.log(steps);
  var nulls = [null, null, null, null, null, null, null]
  var BMIdata = [2, 3, 3, 3, 4, 3, 5];

  if (steps === [0]) {
    return (
      <div />
    )
  } else {

    return (
      // getUserSteps();
      <Container fluid className="main-content-container px-4">
      {/* Page Header */}

      {/* Small Stats Blocks */}
      <Row>
        {/* {smallStats.map((stats, idx) => (
          <Col className="col-md-6 smallStats" key={idx} md='4' sm='6'>
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
            ))} */}
        <Col className="col-md-6 smallStats" key='1' md='4' sm='6'>
          <SmallStats
            id={`small-stats-$1`}
            variation="1"
            chartData={[
              {
                label: "Today",
                fill: "start",
                borderWidth: 3,
                backgroundColor: "rgba(255,180,0,0.1)",
                borderColor: "rgb(255,180,0)",
                data: BMIdata
              }
            ]}
            chartLabels={nulls}
            label={"BMI%"}
            value={"31%"}
            percentage={"3.8%"}
            increase={true}
            // decrease={stats.decrease}
            />
        </Col>
        <Col className="col-md-6 smallStats" key='2' md='4' sm='6'>
          <SmallStats
            id={`small-stats-$2`}
            variation="1"
            chartData={[
              {
                label: "Today",
                fill: "start",
                borderWidth: 3,
                backgroundColor: "rgba(255,180,0,0.1)",
                borderColor: "rgb(255,180,0)",
                data: steps
              }
            ]}
            chartLabels={[null, null, null, null, null, null, null]}
            label={"Steps"}
            value={lastStep}
            // value={"11385"}
            percentage={"3.8%"}
            increase={true}
            // decrease={stats.decrease}
            />
        </Col>


      </Row>

      {/* Users Overview */}

    </Container>
  );
};
};

Goals.defaultProps = {
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
          data: [2000, 3000, 4000, 5000, 6000, 7000, 6000, 5000, 4000, 3000]
        }
      ]
    }
  ]
};

export default Goals;
