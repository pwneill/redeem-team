import React, { Component } from 'react';
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody, CardHeader } from "../components/Card";

class Artists extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size={"md-12"}>
                            <Card id={"artistsMainContainer"}>
                                <CardBody>
                                    <Col size={"md-12"}>
                                        <List id={"artistsOverflow"}>
                                            <ListItem key={"1"}>
                                                <Card className={"artistsCard"}>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: Mark J. Ferrari</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/kwUTHrJ.gif"} alt={"https://i.imgur.com/kwUTHrJ.gif"}></img>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/V5GDPlA.gif"} alt={"https://i.imgur.com/V5GDPlA.gif"}></img>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/YXPFhim.gif"} alt={"https://i.imgur.com/YXPFhim.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"http://www.markferrari.com/image-archives"} target={"_blank"} alt={"http://www.markferrari.com/image-archives"}><h3 className={"artistLink"}>Link to Website</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: Zedotagger</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/Q9CcHGs.gif"} alt={"https://i.imgur.com/Q9CcHGs.gif"}></img>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/QJX7A6a.gif"} alt={"https://i.imgur.com/QJX7A6a.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"https://www.deviantart.com/zedotagger/gallery/"} target={"_blank"} alt={"https://www.deviantart.com/zedotagger/gallery/"}><h3 className={"artistLink"}>Link to Website</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: Kirokaze</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/XuIpkbN.gif"} alt={"https://i.imgur.com/XuIpkbN.gif"}></img>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/vMEtk9t.gif"} alt={"https://i.imgur.com/vMEtk9t.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"https://www.deviantart.com/kirokaze"} target={"_blank"} alt={"https://www.deviantart.com/kirokaze"}><h3 className={"artistLink"}>Link to Website</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: OMSUBSTATION</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/Zri3Udn.gif"} alt={"https://i.imgur.com/Zri3Udn.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"http://omsubstation.tumblr.com/post/160865283453"} target={"_blank"} alt={"http://omsubstation.tumblr.com/post/160865283453"}><h3 className={"artistLink"}>Link to Website</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: 1041uuu</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/JP3yOzm.gif"} alt={"https://i.imgur.com/JP3yOzm.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"http://1041uuu.tumblr.com/"} target={"_blank"} alt={"http://1041uuu.tumblr.com/"}><h3 className={"artistLink"}>Link to Website</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: Takkun</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/RwG0QIj.gif"} alt={"https://i.imgur.com/RwG0QIj.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"https://www.creativeuncut.com/art_garou-mark-of-the-wolves_a.html"} target={"_blank"} alt={"https://www.creativeuncut.com/art_garou-mark-of-the-wolves_a.html"}><h3 className={"artistLink"}>From the game "Garou: Mark of the Wolves"</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                    <CardHeader>
                                                        <h1 className={"artistHeader"}>Artist: Jay Knox</h1>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Container fluid>
                                                            <Row>
                                                                <Col size={"md-2"}>
                                                                    <img className={"artistImages"} src={"https://i.imgur.com/PLPP7I8.gif"} alt={"https://i.imgur.com/PLPP7I8.gif"}></img>
                                                                </Col>
                                                                <Col size={"md-10"}>
                                                                    <a href={"http://jayknoxart.tumblr.com/"} target={"_blank"} alt={"http://jayknoxart.tumblr.com/"}><h3 className={"artistLink"}>Link to Website</h3></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </CardBody>
                                                </Card>
                                            </ListItem>
                                        </List>
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Artists;