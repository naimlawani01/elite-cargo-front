import React, { Component } from 'react';

class TeamContent extends Component {
    render() {
        const teamData = [
            {
                name: "Aminou LAWANI",
                role: "Directeur Général",
                imgSrc: "../../assets/img/team/aminou.jpg",
                description: "Expert en gestion logistique, Aminou apporte plus de 20 ans d'expérience dans le secteur."
            },
            {
                name: "Jacques AKOBI",
                role: "Responsable Administration",
                imgSrc: "../../assets/img/team/jacques.jpg",
                description: "Jacques supervise toutes les opérations administratives avec rigueur et précision."
            },
            {
                name: "Djibril CAMARA",
                role: "Responsable Exploitation Fret",
                imgSrc: "../../assets/img/team/djibril.jpg",
                description: "Spécialiste du fret aérien et maritime, il gère les flux de transport internationaux."
            },
            {
                name: "Moustapha BALDE",
                role: "Coordonnateur Logistique",
                imgSrc: "../../assets/img/team/moustapha.jpg",
                description: "Moustapha organise et optimise les opérations logistiques pour une efficacité maximale."
            }
        ];

        return (
            <div className="container">
                <div className="row">
                    {teamData.map((member, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={member.imgSrc} alt={member.name} className="card-img-top" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                                    <p className="card-text">{member.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TeamContent;
