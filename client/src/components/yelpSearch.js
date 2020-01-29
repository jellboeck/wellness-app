import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/user-settings/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import {
    Button,
    Card,
    CardHeader,
    FormGroup,
    ListGroupItem,
    ListGroup,
    Label,
    Input,
    CardBody,
    CardLink,
    CardImg,
    Row,
    Col,
    Form,
    Container,
} from "reactstrap";

function SearchComponent(props) {
    const [gyms, setGyms] = React.useState([]);
    const [zip, setZip] = React.useState("");
    const [search, setSearch] = React.useState("gym");

    const gymSearch = () => {

        var fitnessCenters = []
        var yelpApiKey = "oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx";
        var yelpQueryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=" + search + "&location=" + zip;

        console.log(search)
        console.log(zip)
        console.log(yelpQueryURL);

        axios({
            url: yelpQueryURL,
            headers: {
                "Authorization": "Bearer " + yelpApiKey + "",
                // "Origin": "",
            },
            method: "GET",
            // dataType: "json",
        }).then(function (response) {

            console.log(response);

            for (var i = 0; i < response.data.businesses.length; i++) {
                var fitnessCenter = {
                    gymName: response.data.businesses[i].name,
                    gymPhoto: response.data.businesses[i].image_url,
                    gymPhone: response.data.businesses[i].display_phone,
                    gymAddress: response.data.businesses[i].location.address1 + " " + response.data.businesses[i].location.city + " " + response.data.businesses[i].location.state ,
                    gymLink: response.data.businesses[i].url,
                    gymRating: response.data.businesses[i].rating,

                }

                console.log(fitnessCenter)

                fitnessCenters.push(fitnessCenter);

            }

            setGyms(fitnessCenters)
        })
        
    }

    return (
        <div >
            <Container fluid className="main-content-container px-2">

                <Card className="mb-2 updatecard">
                    <ListGroup flush >
                        <ListGroupItem>
                            <Row >
                                <Col>
                                    <GridContainer container justify="center" >

                                        <GridItem md={10}>

                                            <FormGroup row>
                                                <Input type="select" name="select" id="search" onChange={(e) => setSearch(e.target.value)} defaultValue={search}>
                                                    <option value="gym">Gyms and Fitness Centers</option>
                                                    <option value="yoga">Yoga</option>
                                                    <option value="psychologists">Counseling and Mental Health</option>
                                                    <option value="nutritionists">Nutritionists</option>
                                                    <option value="dietitians">Dietitians</option>
                                                </Input>
                                            </FormGroup>

                                        </GridItem>

                                    </GridContainer>

                                    <GridContainer container justify="center" >

                                        <GridItem md={6}>

                                            <Input
                                            className="forminputtext"
                                                labelText="Zip Code"
                                                id="zip"
                                                placeholder="Zip Code"
                                                formControlProps={{
                                                    fullWidth: false
                                                }}
                                                onChange={(e) => setZip(e.target.value)}
                                                value={zip}
                                            />

                                     </GridItem>
                                    </GridContainer>

                                    <div className="center category">
                                    <Button id="bt"
                                    className="btnsearch"
                                        theme="info"
                                        onClick={gymSearch}
                                        ><i className="fas fa-search fa-3x center"></i></Button>
                                   </div >

                                    
                                    {
                                        gyms.map((gym) => {
                                            return (
                                                < Card className="updatecard">
                                                    <CardHeader className="searchtitle ">{gym.gymName}</CardHeader>
                                                    <CardImg src={`${gym.gymPhoto}`} />

                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem className="searchinfo ">Yelp Rating: {gym.gymRating}</ListGroupItem>
                                                        <ListGroupItem className="searchinfo ">Phone: {gym.gymPhone}</ListGroupItem>
                                                        <ListGroupItem className="searchinfo ">Address: {gym.gymAddress}</ListGroupItem>
                                                        {/* <ListGroupItem>{gymMessage}</ListGroupItem> */}
                                                        <CardLink className="searchinfo " href={`${gym.gymLink}`} target="_blank" >Link: {gym.gymName}</CardLink>
                                                    </ListGroup>

                                                        
                                             

                                                </Card >
                                            )
                                        })
                                    }



                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Container>
        </div >
    )

}

export default SearchComponent;