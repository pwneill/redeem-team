import React, { Component } from "react";
import cheerio from "cheerio";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownBtn } from "../components/Dropdown";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { SaveBtn } from "../components/Form";
import { Card, CardHeader, CardBody } from "../components/Card";

class News extends Component {

    state = {
        news: [],
        culture: []
    };

    componentDidMount = () => {
        this.espnInitial();
    };

    espnInitial = () => {
        let resultArr = [];
        let x = 0;

        API.espnScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("section h1").each(function (i, element) {
                    let result = {};

                    x++

                    result.id = x;
                    result.title = $(this)
                        .text();
                    result.body = $(this)
                        .parent("div")
                        .children("p")
                        .text();
                    result.img = $(this)
                        .parent("div")
                        .parent("div")
                        .parent("a")
                        .children("figure")
                        .children("picture")
                        .children("img")
                        .attr("data-default-src");
                    result.link = $(this)
                        .parent("div")
                        .parent("div")
                        .parent("a")
                        .attr("href");

                    resultArr.push(result);


                });

                for (let i = 0; i < resultArr.length; i++) {
                    for (let i = 0; i < resultArr.length; i++) {
                        if (resultArr[i].body === "" || resultArr[i].img === undefined) {
                            resultArr.splice(i, 1);
                            console.log("removed")
                        };
                    };
                };

                this.setState({ news: resultArr })
                console.log(this.state.news)

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    espnTrending = event => {
        event.preventDefault();

        this.setState({ news: []})

        this.espnInitial()
    }

    theScoreTrending = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.theScoreScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.RiverContainer__articleCard--1hrtM").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    // x++

                    result.id = x;
                    result.title = $(this)
                    .children("div")
                    .children("a")
                    .children("div")
                    .children("div.NewsCard__title--37vMp")
                    .text();
                    result.body = $(this)
                    .children("div")
                    .children("a")
                    .children("div")
                    .children("div.NewsCard__content--1VLID")
                    .text();
                    result.img = $(this)
                    .children("div")
                    .children("a")
                    .children("div")
                    .children("img")
                    .attr("src");
                    result.link = $(this)
                    .children("div")
                    .children("a")
                    .attr("href");


                    resultArr.push(result);

                });


                for (let i = 0; i < resultArr.length; i++) {
                    for (let i = 0; i < resultArr.length; i++) {
                        if (resultArr[i].title === "" || resultArr[i].img === undefined) {
                            resultArr.splice(i, 1);
                            console.log("removed")
                        };
                    };
                };


                this.setState({ news: resultArr })
                console.log(this.state.news)

            })
            .catch(function (err) {
                console.log(err);
            });

    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Card id={"dropdownCard"}>
                            <Container fluid>
                                <Row>
                                    <Col size={"md-6"}>
                                        <Card id={"genreCard"}>
                                            <CardHeader>
                                                <Dropdown>
                                                    <DropdownBtn>Genres</DropdownBtn>
                                                    <DropdownMenu>
                                                        <DropdownItem id={"this"} data-state={true} onClick={this.espnTrending}>Trending</DropdownItem>
                                                        <DropdownItem onClick={this.theScoreTrending}>Culture</DropdownItem>
                                                        <DropdownItem>genre3</DropdownItem>
                                                        <DropdownItem>genre4</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                    <Col size={"md-6"}>
                                        <Card id={"upcomingCard"}>
                                            <CardHeader>
                                                <Dropdown>
                                                    <DropdownBtn>Upcoming Games</DropdownBtn>
                                                    <DropdownMenu>
                                                        <DropdownItem>genre1</DropdownItem>
                                                        <DropdownItem>genre2</DropdownItem>
                                                        <DropdownItem>genre3</DropdownItem>
                                                        <DropdownItem>genre4</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <Card id={"newsMainContainer"}>
                            <CardBody>
                                <Col size={"md-12"}>
                                    {this.state.news.length ? (
                                        <List id={"overflow"}>
                                            {this.state.news.map(news => (
                                                <ListItem key={news.id}>
                                                    <Card className={"articleCards"}>
                                                        <a href={"https://www.espn.com" + news.link} target={"_blank"}><CardHeader>
                                                            <h4>{news.title}</h4>
                                                        </CardHeader></a>
                                                        <CardBody id={"articleCardBody"}>
                                                            <Container>
                                                                <Row>
                                                                    <Col size={"md-4"}>
                                                                        <img className={"newsImg"} src={news.img} alt={news.img}></img>
                                                                        <div className={"articleSave"}>
                                                                            <SaveBtn onClick={this.saveBtn}>Save</SaveBtn>
                                                                        </div>
                                                                    </Col>
                                                                    <Col size={"md-8"}>
                                                                        <p>{news.body}</p>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </CardBody>
                                                    </Card>
                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                            <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
                                        )}
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default News;