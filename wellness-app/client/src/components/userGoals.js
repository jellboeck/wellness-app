import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Container, Row, Col } from "shards-react";

import SmallStats from "../components/charts/SmallStats";
import BarChart from '../components/charts/BarChart'

function Goals(props, { smallStats }) {

  const [lastStep, setLastStep] = useState('11538');
  const [steps, setSteps] = useState([2000, 3000, 4000, 5000, 6000, 5000, 4000, 3000, 4000, 3000]);
  const [bmis, setBMI] = useState([2, 3, 3, 3, 4, 3, 5]);
  // const [steps, setSteps] = useState([]);
  
  useEffect(() => {

      console.log('!');
      
      axios.get('/api/step_data').then(function (data) {
        console.log('step data');
      console.log(data);
      
      const stepsData = [];
      for (var i = 0; i < data.data.length; i++) {
        stepsData[i] = data.data[i].quantity
      }
      console.log('stepsData')
      console.log(stepsData);
      setSteps(stepsData);
   
      // steps = getUserSteps();
      
      console.log('steps out')
      console.log(steps);
    });

      axios.get('/api/bmi_data').then(function (data) {
        console.log('bmi data');
      console.log(data);
      
      const bmiData = [];
      for (var i = 0; i < 7; i++) {
        bmiData[i] = data.data[i].storedCalc
      }
      console.log('bmiData')
      console.log(bmiData);
      setBMI(bmiData);
   
      // steps = getUserSteps();
      
      console.log('bmi out')
      console.log(bmis);
    });



    
  
  }, [])


  console.log('user goals');
  console.log(props);
  // var steps = [];
  
  console.log('steps out again')
  console.log(steps);
  console.log('bmi out again')
  console.log(bmis);


  var nulls = [null, null, null, null, null, null, null]
  // var BMIdata = [2, 3, 3, 3, 4, 3, 5];

  const stepsList = steps.map((step) =>
    <li>{step}</li>
  );
  const bmiList = bmis.map((bmi) =>
    <li>{bmi}</li>
  );

  function getSteps(){
    return steps
  }

    return (
      // getUserSteps();
      <Container fluid className="main-content-container px-4" onClick={() => console.log(steps)}>
      {/* Page Header */}

      {/* Small Stats Blocks */}
      <Row>
        <BarChart bmis={bmis} steps={steps} />
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
        {/* <Col className="col-md-6" key='1' md='4' sm='6'>
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
                data: bmis
              }
            ]}
            chartLabels={nulls}
            label={"BMI%"}
            value={"31%"}
            percentage={"3.8%"}
            increase={true}
            // decrease={stats.decrease}
            />
            <ul> {bmiList} </ul>

        </Col>
        <Col className="col-md-6" key='2' md='4' sm='6'>
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
            <ul> {stepsList} </ul>
        </Col> */}


      </Row>

      {/* Users Overview */}

    </Container>



  );

  
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
