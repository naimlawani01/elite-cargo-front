import React from 'react';

const LinkTitle = () => {
    return (                    
        <a title="À propos de nous" className="transform-scale-h" href={ `${process.env.PUBLIC_URL + "/about-us"}` }>
            À propos de nous<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
        </a>
    );
};

const TextTitle = () => {
    return ( <div title="À propos de nous">À propos de nous</div> );
};

const AboutUsTitle = ( props ) => {
    const isHomepage = props.isHomepage;

    if ( isHomepage ) {
        return <LinkTitle />;
    }
    return <TextTitle />;
};

const AboutUsPrimary = ( props ) => {
    return (
        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
            <div className="title">
                <h2>
                    <AboutUsTitle isHomepage={ props.isHomepage } />
                </h2>
            </div>

            <div className="text">
                <p>
                    <strong>ELITE CARGO Sarl</strong> est une société spécialisée dans la représentation de compagnies aériennes, 
                    le fret aérien et maritime, le transit, le déménagement international et la logistique. Forte d'une expertise 
                    éprouvée depuis 2007, l'entreprise propose des solutions fiables et adaptées aux besoins de ses clients.
                </p>
                <p>
                    Située au cœur de la zone fret de l’aéroport international Ahmed Sékou TOURE à Conakry, ELITE CARGO Sarl dispose 
                    de bureaux modernes (n° 32 et 34) et d'une zone d’entreposage de <strong>2400 m²</strong>. Un magasin supplémentaire 
                    est situé dans la zone industrielle de Gomboyah, à environ 15 km de l’aéroport, renforçant ainsi sa capacité logistique.
                </p>
            </div>

            <div className="list-group list-group-horizontal spacer m-top-lg m-bottom-lg-media-xl style-default">
                <div className="list-group-item">
                    <h4 className="text-secondary">03</h4>
                    <p>Pays</p>
                </div>

                <div className="list-group-item">
                    <h4 className="text-secondary">3</h4>
                    <p>Filiales</p>
                </div>

                <div className="list-group-item">
                    <h4 className="text-secondary">2400</h4>
                    <p>m² d'entrepôt</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPrimary;
