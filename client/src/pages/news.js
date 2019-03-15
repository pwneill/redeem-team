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
import auth0Client from "../components/Auth/Auth"

let isUser = false

class News extends Component {

    state = {
        news: [],
        vids: [],
        upcoming: []
    };

    componentDidMount = () => {
        this.espnInitial();

        this.isUser();
    };

    isUser = () => {
        console.log(auth0Client.expiresAt)

        if (auth0Client.expiresAt) {
            isUser = true
        } else {
            isUser = false
        }

        console.log(isUser);
    }

    espnInitial = () => {
        let resultArr = [];
        let x = 0;

        API.espnScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("section h1").each(function (i, element) {
                    let result = {};

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "news";
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
                        };
                    };
                };

                this.setState({ vids: [], upcoming: [], news: resultArr })

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

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "news";
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
                        };
                    };
                };


                this.setState({ vids: [], upcoming: [], news: resultArr })

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

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "vids";
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


                    resultArr.push(result);

                });

                this.setState({ news: [], upcoming: [], vids: resultArr })

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

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "vids";
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


                    resultArr.push(result);

                });

                this.setState({ news: [], upcoming: [], vids: resultArr })

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

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "vids";
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


                    resultArr.push(result);

                });

                this.setState({ news: [], upcoming: [], vids: resultArr })

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

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "vids";
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


                    resultArr.push(result);

                });

                this.setState({ news: [], upcoming: [], vids: resultArr })

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

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "vids";
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


                    resultArr.push(result);

                });

                this.setState({ news: [], upcoming: [], vids: resultArr })

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

                    x++

                    if (isUser) {
                        result.user = auth0Client.getProfile().name;
                    } else {
                        result.user = "noUser"
                    }
                    result.id = x;
                    result.origin = "vids";
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


                    resultArr.push(result);

                });

                this.setState({ news: [], upcoming: [], vids: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });
    }

    PS4Upcoming = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.PS4Scrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("li.product.game_product").each(function (i, element) {
                    let result = {};

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .text().trim();
                    result.release = $(this)
                        .children("div")
                        .children("div.more_stats")
                        .children("ul")
                        .children("li.stat.release_date")
                        .children("span.data")
                        .text();
                    result.link = "https://www.metacritic.com" + $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .attr("href");


                    resultArr.push(result);

                });


                this.setState({ vids: [], news: [], upcoming: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });

    }

    XBoneUpcoming = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.XBoneScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("li.product.game_product").each(function (i, element) {
                    let result = {};

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .text().trim();
                    result.release = $(this)
                        .children("div")
                        .children("div.more_stats")
                        .children("ul")
                        .children("li.stat.release_date")
                        .children("span.data")
                        .text();
                    result.link = "https://www.metacritic.com" + $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .attr("href");


                    resultArr.push(result);

                });


                this.setState({ vids: [], news: [], upcoming: resultArr })

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

                $("li.product.game_product").each(function (i, element) {
                    let result = {};

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .text().trim();
                    result.release = $(this)
                        .children("div")
                        .children("div.more_stats")
                        .children("ul")
                        .children("li.stat.release_date")
                        .children("span.data")
                        .text();
                    result.link = "https://www.metacritic.com" + $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .attr("href");


                    resultArr.push(result);

                });


                this.setState({ vids: [], news: [], upcoming: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });

    }

    SwitchUpcoming = event => {
        event.preventDefault();

        let resultArr = [];
        let x = 0;

        API.SwitchScrape()
            .then(response => {
                let $ = cheerio.load(response.data);

                $("li.product.game_product").each(function (i, element) {
                    let result = {};

                    x++

                    result.id = x;
                    result.title = $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .text().trim();
                    result.release = $(this)
                        .children("div")
                        .children("div.more_stats")
                        .children("ul")
                        .children("li.stat.release_date")
                        .children("span.data")
                        .text();
                    result.link = "https://www.metacritic.com" + $(this)
                        .children("div")
                        .children("div")
                        .children("a")
                        .attr("href");


                    resultArr.push(result);

                });


                this.setState({ vids: [], news: [], upcoming: resultArr })

            })
            .catch(function (err) {
                console.log(err);
            });

    }

    SouljaGameUpcoming = event => {
        event.preventDefault()

        let resultArr = [{
            title: "Just Kidding",
            release: "April 1",
            link: "https://www.ign.com/articles/2019/01/02/soulja-boy-stops-selling-souljagame-game-consoles"
        }]

        this.setState({ vids: [], news: [], upcoming: resultArr })
    }

    saveBtn = event => {
        event.preventDefault();

        let incoming = event.target.id;
        incoming = incoming.split("-");

        let tempNews = this.state.news;
        let tempVids = this.state.vids;

        console.log(event.target);

        if (incoming[2] === "noUser") {
            alert("You need to log in to save articles.")
        } else {
            if (incoming[1] === "news") {
                for (let i = 0; i < tempNews.length; i++) {
                    if (tempNews[i].id === parseInt(incoming[0])) {
                        API.saveArticle(tempNews[i]).then(function () {
                            console.log("success");
                            alert("Article has been saved. Visit the user account page to view your saved articles.")
                        }).catch(function (err) {
                            console.log(err);
                        })
                    }
                }
            } else if (incoming[1] === "vids") {
                for (let i = 0; i < tempVids.length; i++) {
                    if (tempVids[i].id === parseInt(incoming[0])) {
                        API.saveArticle(tempVids[i]).then(function () {
                            console.log("success");
                            alert("Article has been saved. Visit the user account page to view your saved articles.")
                        }).catch(function (err) {
                            console.log(err);
                        })
                    }
                }
            }
        }
    }


    displayBox = () => {
        if (this.state.news.length) {
            return (
                <List id={"newsOverflow"}>
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
                                                    <SaveBtn onClick={this.saveBtn} id={news.id + "-news-" + news.user}>Save</SaveBtn>
                                                </div>
                                            </Col>
                                            <Col size={"md-8"}>
                                                <p id="articleBody">{news.body}</p>
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
                <List id={"newsOverflow"}>
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
                                                    <SaveBtn onClick={this.saveBtn} id={vids.id + "-vids-" + vids.user}>Save</SaveBtn>
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
        } else if (this.state.upcoming.length) {
            return (
                <List id={"newsOverflow"}>
                    {this.state.upcoming.map(upcoming => (
                        <ListItem key={upcoming.id}>
                            <Card className={"articleCards"}>
                                <a href={upcoming.link} target={"_blank"}><CardHeader>
                                    <h4 className={"articleTitle"} style={{ float: "left" }}>{upcoming.title}</h4>
                                    <h4 className={"articleTitle"} style={{ float: "right" }}>{upcoming.release}</h4>
                                </CardHeader></a>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            )
        } else {
            return (
                <Card id="maineventsCard">
                    <CardBody>
                        <h3 id="eventsbanner">No Results to Display</h3>
                    </CardBody>
                </Card>
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
                                                        <DropdownItem onClick={this.PS4Upcoming}>PS4</DropdownItem>
                                                        <DropdownItem onClick={this.XBoneUpcoming}>X-Box One</DropdownItem>
                                                        <DropdownItem onClick={this.PCUpcoming}>PC</DropdownItem>
                                                        <DropdownItem onClick={this.SwitchUpcoming}>Switch</DropdownItem>
                                                        <DropdownItem onClick={this.SouljaGameUpcoming}>SouljaGame</DropdownItem>
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