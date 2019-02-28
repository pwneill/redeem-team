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
        vids: [],
        upcoming: []
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
                    result.link = "https://www.espn.com" + $(this)
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

                    x++

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
                    result.link = "https://www.thescoreesports.com/culture" + $(this)
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

    LoLVids = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.LoLScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.col-sm-6.col-md-4").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("span")
                        .children("button")
                        .children("div")
                        .text();
                    result.img = $(this)
                        .children("div")
                        .children("img")
                        .attr("src");

                    let link = result.img.replace("https://i.ytimg.com/vi/", "")
                    link = link.replace("/hqdefault.jpg", "")

                    result.link = "https://www.thescoreesports.com/lol/videos/" + link

                    console.log(result);


                    resultArr.push(result);

                });

                this.setState({ news: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    DotaVids = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.DotaScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.col-sm-6.col-md-4").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("span")
                        .children("button")
                        .children("div")
                        .text();
                    result.img = $(this)
                        .children("div")
                        .children("img")
                        .attr("src");

                    let link = result.img.replace("https://i.ytimg.com/vi/", "")
                    link = link.replace("/hqdefault.jpg", "")

                    result.link = "https://www.thescoreesports.com/lol/videos/" + link

                    console.log(result);


                    resultArr.push(result);

                });

                this.setState({ news: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    CSGOVids = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.CSGOScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.col-sm-6.col-md-4").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("span")
                        .children("button")
                        .children("div")
                        .text();
                    result.img = $(this)
                        .children("div")
                        .children("img")
                        .attr("src");

                    let link = result.img.replace("https://i.ytimg.com/vi/", "")
                    link = link.replace("/hqdefault.jpg", "")

                    result.link = "https://www.thescoreesports.com/lol/videos/" + link

                    console.log(result);


                    resultArr.push(result);

                });

                this.setState({ news: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    OverwatchVids = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.OverwatchScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.col-sm-6.col-md-4").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("span")
                        .children("button")
                        .children("div")
                        .text();
                    result.img = $(this)
                        .children("div")
                        .children("img")
                        .attr("src");

                    let link = result.img.replace("https://i.ytimg.com/vi/", "")
                    link = link.replace("/hqdefault.jpg", "")

                    result.link = "https://www.thescoreesports.com/lol/videos/" + link

                    console.log(result);


                    resultArr.push(result);

                });

                this.setState({ news: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    SmashVids = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.SmashScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.col-sm-6.col-md-4").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("span")
                        .children("button")
                        .children("div")
                        .text();
                    result.img = $(this)
                        .children("div")
                        .children("img")
                        .attr("src");

                    let link = result.img.replace("https://i.ytimg.com/vi/", "")
                    link = link.replace("/hqdefault.jpg", "")

                    result.link = "https://www.thescoreesports.com/lol/videos/" + link

                    console.log(result);


                    resultArr.push(result);

                });

                this.setState({ news: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    StreetFighterVids = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.StreetFighterScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div.col-sm-6.col-md-4").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("span")
                        .children("button")
                        .children("div")
                        .text();
                    result.img = $(this)
                        .children("div")
                        .children("img")
                        .attr("src");

                    let link = result.img.replace("https://i.ytimg.com/vi/", "")
                    link = link.replace("/hqdefault.jpg", "")

                    result.link = "https://www.thescoreesports.com/lol/videos/" + link

                    console.log(result);


                    resultArr.push(result);

                });

                this.setState({ news: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    PCUpcoming = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.PCScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("div").each(function (i, element) {
                    let result = {};

                    console.log($(this))

                    // x++

                    // result.id = x;
                    // result.title = $(this)
                    //     .children("div")
                    //     .children("a")
                    //     .children("div")
                    //     .children("div.NewsCard__title--37vMp")
                    //     .text();
                    // result.body = $(this)
                    //     .children("div")
                    //     .children("a")
                    //     .children("div")
                    //     .children("div.NewsCard__content--1VLID")
                    //     .text();
                    // result.img = $(this)
                    //     .children("div")
                    //     .children("a")
                    //     .children("div")
                    //     .children("img")
                    //     .attr("src");
                    // result.link = "https://www.thescoreesports.com/culture" + $(this)
                    //     .children("div")
                    //     .children("a")
                    //     .attr("href");


                    // resultArr.push(result);

                });


                // for (let i = 0; i < resultArr.length; i++) {
                //     for (let i = 0; i < resultArr.length; i++) {
                //         if (resultArr[i].title === "" || resultArr[i].img === undefined) {
                //             resultArr.splice(i, 1);
                //             console.log("removed")
                //         };
                //     };
                // };


                // this.setState({ news: resultArr })
                // console.log(this.state.news)

            })
            .catch(function (err) {
                console.log(err);
            });

    }


    displayBox = () => {
        if (this.state.news.length) {
            return (
                <List id={"overflow"}>
                    {this.state.news.map(news => (
                        <ListItem key={news.id}>
                            <Card className={"articleCards"}>
                                <a href={news.link} target={"_blank"}><CardHeader>
                                    <h4 className={"articleTitle"}>{news.title}</h4>
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
            )
        } else if (this.state.vids.length) {
            return (
                <List id={"overflow"}>
                    {this.state.vids.map(vids => (
                        <ListItem key={vids.id}>
                            <Card className={"articleCards"}>
                                <a href={vids.link} target={"_blank"}><CardHeader>
                                    <h4 className={"articleTitle"}>{vids.title}</h4>
                                </CardHeader></a>
                                <CardBody id={"articleCardBody"}>
                                    <Container>
                                        <Row>
                                            <Col size={"md-8"}>
                                                <img className={"vidsImg"} src={vids.img} alt={vids.img}></img>
                                                <div className={"articleSave"}>
                                                    <SaveBtn onClick={this.saveBtn}>Save</SaveBtn>
                                                </div>
                                            </Col>
                                            <Col size={"md-4"}>
                                                <div className="playBtn"><a href={vids.link} target={"_blank"} ><i className="fas fa-play" ></i></a></div>
                                                <h5 className="playText">Watch Video!</h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardBody>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            )
        } else {
            return (
                <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
            )
        }
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
                                                        <DropdownItem onClick={this.espnTrending}>Trending</DropdownItem>
                                                        <DropdownItem onClick={this.theScoreTrending}>Culture</DropdownItem>
                                                        <DropdownItem onClick={this.LoLVids}>LoL vids</DropdownItem>
                                                        <DropdownItem onClick={this.DotaVids}>Dota 2 vids</DropdownItem>
                                                        <DropdownItem onClick={this.CSGOVids}>CS:GO vids</DropdownItem>
                                                        <DropdownItem onClick={this.OverwatchVids}>Overwatch vids</DropdownItem>
                                                        <DropdownItem onClick={this.SmashVids}>Super Smash Bros vids</DropdownItem>
                                                        <DropdownItem onClick={this.StreetFighterVids}>Street Fighter vids</DropdownItem>
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
                                                        <DropdownItem onClick={this.PCUpcoming}>PC</DropdownItem>
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
                                    <this.displayBox>

                                    </this.displayBox>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container >
        );
    };
};

export default News;