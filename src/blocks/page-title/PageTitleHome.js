import React, { Component } from 'react';

import LanguageSelector from '../../components/button/LanguageSelector';

class PageTitleHome extends Component {
    constructor() {
        super();
        this.state = {
            lang: 'Fr', // Langue par défaut "Fr" pour le français
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    };

    onChangeValue(event) {
        this.setState({
            lang: event.target.title,
        });
    };

    render() {
        return (
            <section id="page-title" className="block" style={{ backgroundImage: `url(${require('../../assets/img/placeholder/pagetitle.jpg')})` }}>
                <div className="wrapper h-100">
                    <div className="d-flex justify-content-between position-relative h-100">
                        <div className="align-self-center">
                            <div className="title">
                                <h1>Bienvenue chez Elite Cargo</h1>
                                <h2>Experts en logistique, fret aérien, maritime et déménagement international</h2>
                            </div>

                            <p className="spacer p-top-lg mb-0">
                                Nous offrons des solutions logistiques globales pour le transport par mer, terre et air. <br />
                                Votre sécurité et la satisfaction de vos besoins sont notre priorité.
                            </p>
                        </div>

                        <div className="lang-position">
                            <nav className="languages">
                                <ul className="nav" onClick={this.onChangeValue}>
                                    <LanguageSelector title="Fr" className={this.state.lang === 'Fr' ? 'current-lang' : ''} />
                                    <LanguageSelector title="En" className={this.state.lang === 'En' ? 'current-lang' : ''} />
                                    <LanguageSelector title="Es" className={this.state.lang === 'Es' ? 'current-lang' : ''} />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="page-title-bg-color"></div>
            </section>
        );
    };
};

export default PageTitleHome;
