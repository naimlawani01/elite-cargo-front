import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { Accordion, Card, Button } from "react-bootstrap";

class ContactsAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active1: false,
            active2: false,
            active3: false
        };
    }

    clickHandler1(e) {
        this.setState({
            active1: !this.state.active1,
            active2: false,
            active3: false
        });
    }

    clickHandler2(e) {
        this.setState({
            active2: !this.state.active2,
            active1: false,
            active3: false
        });
    }

    clickHandler3(e) {
        this.setState({
            active3: !this.state.active3,
            active1: false,
            active2: false
        });
    }

    componentDidMount() {
        let box = document.getElementById('maps-information');

        if (window.innerWidth < 1200) {
            box.style.overflow = 'hidden';
        } else {
            box.style.overflow = 'initial';
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div id="maps-information" className="maps-information">
                    <Scrollbars
                        autoHeight
                        autoHeightMin={0}
                        autoHeightMax={449}
                        thumbMinSize={30}
                        style={{ width: this.state.active1 || this.state.active2 || this.state.active3 ? '102%' : '100%' }}
                        renderThumbVertical={({ style, ...props }) =>
                            <div {...props} style={{
                                ...style,
                                backgroundColor: '#414258',
                                opacity: this.state.active1 || this.state.active2 || this.state.active3 ? 1 : 0
                            }} />
                        }
                    >
                        <Accordion id="accordion-maps" style={{ width: this.state.active1 || this.state.active2 || this.state.active3 ? '98%' : '100%' }}>
                            <Card>
                                <Card.Header id="heading-1">
                                    <Accordion.Toggle as={Button} style={{ color: "#414258" }} onClick={(e) => this.clickHandler1(e)} variant="link" value="1" eventKey="1" className={`btn btn-lg btn-link stretched-link ${this.state.active1 ? '' : 'collapsed'}`} aria-expanded={this.state.active1 ? 'true' : 'false'}>
                                        Siège Conakry<i className="fas fa-long-arrow-alt-up"></i>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="1" id="collapse-1" aria-labelledby="heading-1" data-parent="#accordion-maps">
                                    <Card.Body>
                                        <p>Aéroport International Ahmed Sékou Touré, Conakry, Guinée</p>
                                        <p>+224 622 00 00 00</p>
                                        <p>
                                            <a href="mailto:info@elitecargo.com">info@elitecargo.com</a>
                                        </p>
                                        <p>Lun - Ven : 9h - 18h</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header id="heading-2">
                                    <Accordion.Toggle as={Button} style={{ color: "#414258" }} onClick={(e) => this.clickHandler2(e)} variant="link" value="2" eventKey="2" className={`btn btn-lg btn-link stretched-link ${this.state.active2 ? '' : 'collapsed'}`} aria-expanded={this.state.active2 ? 'true' : 'false'}>
                                        Bureau Mali<i className="fas fa-long-arrow-alt-up"></i>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="2" id="collapse-2" aria-labelledby="heading-2" data-parent="#accordion-maps">
                                    <Card.Body>
                                        <p>Rue 123, Bamako, Mali</p>
                                        <p>+223 600 00 00 00</p>
                                        <p>
                                            <a href="mailto:mali@elitecargo.com">mali@elitecargo.com</a>
                                        </p>
                                        <p>Lun - Ven : 9h - 18h</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header id="heading-3">
                                    <Accordion.Toggle as={Button} style={{ color: "#414258" }} onClick={(e) => this.clickHandler3(e)} variant="link" value="3" eventKey="3" className={`btn btn-lg btn-link stretched-link ${this.state.active3 ? '' : 'collapsed'}`} aria-expanded={this.state.active3 ? 'true' : 'false'}>
                                        Bureau Bénin<i className="fas fa-long-arrow-alt-up"></i>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="3" id="collapse-3" aria-labelledby="heading-3" data-parent="#accordion-maps">
                                    <Card.Body>
                                        <p>Rue 456, Cotonou, Bénin</p>
                                        <p>+229 600 00 00 00</p>
                                        <p>
                                            <a href="mailto:benin@elitecargo.com">benin@elitecargo.com</a>
                                        </p>
                                        <p>Lun - Ven : 9h - 18h</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export default ContactsAccordion;
