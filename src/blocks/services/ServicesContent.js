import React, { Component } from 'react';
import Isotope from 'isotope-layout';

class ServicesContent extends Component {
    componentDidMount() {
        var grid = document.querySelector('.service-items');
        var iso = new Isotope(grid, {
            itemSelector: '.service-item',
            masonry: {
                itemSelector: '.service-item',
                transitionDuration: 0,
                stagger: 0
            }
        });

        iso.layout();
    }

    render() {
        const servicesData = [

            {
                title: "Fret aérien et maritime",
                description: "Des solutions fiables pour le transport de vos marchandises par voie aérienne et maritime, avec des partenaires de confiance.",
                imgSrc: "../../assets/img/services/fretaerien.jpg",
                link: "/services/fret"
            },
            {
                title: "Transit et douane",
                description: "Des déclarants expérimentés pour gérer vos dossiers en transit maritime, terrestre et aérien, assurant un service rapide et efficace.",
                imgSrc: "../../assets/img/services/entrepot.jpg",
                link: "/services/transit"
            },
            {
                title: "Déménagement international",
                description: "Une équipe spécialisée dans le déménagement et l'emballage, avec plus de 15 ans d'expérience.",
                imgSrc: "../../assets/img/services/demenagement.jpg",
                link: "/services/demenagement"
            },
            {
                title: "Logistique et entreposage",
                description: "Des infrastructures modernes, incluant 2400 m² de stockage, pour répondre à vos besoins logistiques.",
                imgSrc: "../../assets/img/services/entrepot.jpg",
                link: "/services/logistique"
            }
        ];

        return (
            <div className="service-items clearfix type-1">
                {servicesData.map((item, key) => {
                    return (
                        <a key={key} title={item.title} className="service-item" href={process.env.PUBLIC_URL + item.link}>
                            <div className="service-content">
                                <div className="service-content-sec">
                                    <div className="text">
                                        <h5 className="service-title">{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className="button no-space">
                                        <p className="p-small bold transform-scale-h">En savoir plus<i className="fas fas-space-l fa-long-arrow-alt-right align-middle"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src={item.imgSrc} alt={item.title} />
                                </div>
                            </div>

                            <div className="img-bg-color"></div>
                        </a>
                    );
                })}
            </div>
        );
    }
}

export default ServicesContent;
