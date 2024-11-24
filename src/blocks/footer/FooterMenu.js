import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from '@material-ui/core';

class FooterMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            visible: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        return (
            <nav className="menu-primary">
                <ul className="nav">
                    <li className={"nav-item " + (this.props.location.pathname === window.location.pathname && this.props.location.pathname === process.env.PUBLIC_URL + "/" ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/"} title="Accueil">Accueil</Link>
                    </li>

                    <li className={"nav-item " + (window.location.pathname.includes("/services") || window.location.pathname.includes("/service-inside") ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/services"} title="Services">Services</Link>
                    </li>

                    <li className={"nav-item " + (window.location.pathname.includes("/about-us") ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/about-us"} title="À propos de nous">À propos de nous</Link>
                    </li>

                    <li className={"nav-item " + (window.location.pathname.includes("/why-us") ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/why-us"} title="Pourquoi nous choisir">Pourquoi nous choisir</Link>
                    </li>

                    <li className={"nav-item nav-item-has-children dropdown-child-click-effect " + (window.location.pathname.includes("/gallery") || window.location.pathname.includes("/gallery-inside") ? "current-nav-item" : "") + (this.state.visible ? ' show' : '')}>
                        <Link to={process.env.PUBLIC_URL + "/gallery"} title="Galerie">Galerie</Link>

                        <span onClick={this.handleClick} className="dropdown-toggle dropdown-custom-icon" style={{ color: '#ffffff' }}>
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down footer-icon"></i>
                            </span>
                        </span>

                        <Collapse in={this.state.visible} className="footer-collapse" timeout={400} style={{ width: '230px' }}>
                            <ul className="footer-dropdown" style={{ display: 'block' }}>
                                <li>
                                    <Link title="Logistique Routière" to={process.env.PUBLIC_URL + "/gallery-inside"}>Logistique Routière</Link>
                                </li>

                                <li>
                                    <Link title="Logistique Maritime" to={process.env.PUBLIC_URL + "/gallery-inside"}>Logistique Maritime</Link>
                                </li>

                                <li>
                                    <Link title="Logistique de Stockage" to={process.env.PUBLIC_URL + "/gallery-inside"}>Logistique de Stockage</Link>
                                </li>

                                <li>
                                    <Link title="Logistique Aérienne" to={process.env.PUBLIC_URL + "/gallery-inside"}>Logistique Aérienne</Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li className={"nav-item " + (window.location.pathname.includes("/clients") ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/clients"} title="Nos clients">Nos clients</Link>
                    </li>

                    <li className={"nav-item " + (window.location.pathname.includes("/news") || window.location.pathname.includes("/news-single-page") ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/news"} title="Actualités">Actualités</Link>
                    </li>

                    <li className={"nav-item " + (window.location.pathname.includes("/contacts") ? "current-nav-item" : "")}>
                        <Link to={process.env.PUBLIC_URL + "/contacts"} title="Contactez-nous">Contactez-nous</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(FooterMenu);
