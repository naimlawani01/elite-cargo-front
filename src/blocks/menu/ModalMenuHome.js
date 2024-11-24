import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Collapse } from '@material-ui/core';

const ModalMenuHome = () => {
    const [open, setOpen] = useState( false );

    const handleClick = () => {
        setOpen( ( prev ) => ! prev );
    };

    const modalOff = () => {
        let e = document.getElementById('close-modal');

        if ( e ) {
            e.click();
        }
    };

    return (
        <nav className="menu-primary">
            <ul className="list-unstyled">
                <li className="nav-item">
                    <Link to="services" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Nos Services" href="#">Nos Services</Link>
                </li>

                <li className="nav-item">
                    <Link to="about-us" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="À propos de nous" href="#">À propos de nous</Link>
                </li>

                <li className="nav-item">
                    <Link to="why-us" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Pourquoi nous choisir" href="#">Pourquoi nous choisir</Link>
                </li>

                <li className={"nav-item nav-item-has-children dropdown-child-click-effect " + ( open ?  "show" : '' ) }>
                    <Link to="gallery" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Galerie" href="#">Galerie</Link>

                    <span onClick={ handleClick } className="dropdown-toggle dropdown-custom-icon" style={ { color: '#414258' } }>
                        <span className="dropdown-icon">
                            <i className="fas fa-caret-down"></i>
                        </span>
                    </span>

                    <Collapse in={ open } timeout={ 400 }>
                        <ul className="dropdown-menu" style={ { display: "block" } }>
                            <li>
                                <a title="Logistique routière" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Logistique Routière</a>
                            </li>

                            <li>
                                <a title="Logistique maritime" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Logistique Maritime</a>
                            </li>

                            <li>
                                <a title="Logistique de stockage" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Logistique de Stockage</a>
                            </li>

                            <li>
                                <a title="Logistique aérienne" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Logistique Aérienne</a>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li className="nav-item">
                    <Link to="reviews" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Avis clients" href="#">Avis clients</Link>
                </li>

                <li className="nav-item">
                    <Link to="clients" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Nos clients" href="#">Nos clients</Link>
                </li>

                <li className="nav-item">
                    <Link to="news" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Actualités" href="#">Actualités</Link>
                </li>

                <li className="nav-item">
                    <Link to="contacts" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Contactez-nous" href="#">Contactez-nous</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ModalMenuHome;
