import React, { Component } from 'react';
import axios from 'axios';

class ShortCodeModalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {
                name: '',
                lastName: '',
                email: '',
                company: '',
                phone: '',
                message: '',
            },
            successMessage: "Le message de l'expéditeur a été envoyé avec succès",
            warningMessage: 'Veuillez remplir le formulaire !',
            errorMessage: 'Une erreur est survenue. Veuillez réessayer plus tard !',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };
    }

    submitForm = async (e) => {
        e.preventDefault();

        if (document.querySelector('#alert')) {
            document.querySelector('#alert').remove();
        }

        this.setState({ isSubmitting: true });

        axios.post('https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            if (response.data.status === 'success') {
                this.setState({ responseMessage: this.state.successMessage });
            }

            if (response.data.status === 'warning') {
                this.setState({ responseMessage: this.state.warningMessage });
            }

            if (response.data.status === 'error') {
                this.setState({ responseMessage: this.state.errorMessage });
            }

            this.callAlert(this.state.responseMessage, response.data.status);
        }).catch((error) => {
            this.callAlert(this.state.errorMessage, 'error');
        });
    };

    removeAlert = () => {
        clearTimeout(this.state.alertTimeout);
        this.setState({
            alertTimeout: setTimeout(function () {
                var element = document.querySelector('#alert');
                element.classList.remove('fadeIn');
                element.classList.add('fadeOut');
                setTimeout(function () {
                    element.remove();
                }, 900);
            }, this.state.delay),
        });
    };

    callAlert = (message, type) => {
        if (!document.querySelector('#alert')) {
            if (type === 'success') {
                this.setState({ alertClass: 'success' });
            }

            if (type === 'error') {
                this.setState({ alertClass: 'danger' });
            }

            if (type === 'warning') {
                this.setState({ alertClass: 'warning' });
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector('.contact-form');

            element.insertAdjacentHTML('beforeend', alert);

            this.removeAlert();
        }
    };

    handleInputChange = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <form onSubmit={this.submitForm} method="post" action="form.php" className="contact-form">
                <div className="form-group">
                    <label className="after" htmlFor="name">Prénom</label>
                    <input value={this.state.values.name} onChange={this.handleInputChange} name="name" type="text" className="form-lg" id="name" required="required" placeholder="Nom" />
                </div>

                <div className="form-group">
                    <label className="after" htmlFor="lastName">Nom de famille</label>
                    <input value={this.state.values.lastName} onChange={this.handleInputChange} name="lastName" type="text" className="form-lg" id="lastName" required="required" placeholder="Pronom" />
                </div>

                <div className="form-group">
                    <label className="after" htmlFor="email">Email</label>
                    <input value={this.state.values.email} onChange={this.handleInputChange} name="email" type="email" className="form-lg" id="email" required="required" placeholder="info@domain.com" />
                </div>

                <div className="form-group">
                    <label className="after" htmlFor="company">Entreprise</label>
                    <input value={this.state.values.company} onChange={this.handleInputChange} name="company" type="text" className="form-lg" id="company" required="required" placeholder="Entreprise" />
                </div>

                <div className="form-group">
                    <label className="after" htmlFor="phone">Numéro de téléphone</label>
                    <input value={this.state.values.phone} onChange={this.handleInputChange} name="phone" type="text" className="form-lg" id="phone" required="required" placeholder="+224 533 12 523" />
                </div>

                <div className="form-group">
                    <label className="after" htmlFor="message">Message</label>
                    <textarea value={this.state.values.message} onChange={this.handleInputChange} name="message" className="form-lg" id="message" required="required" placeholder="Votre message ici"></textarea>
                </div>

                <button type="submit" className="btn btn-secondary transform-scale-h">Envoyer</button>
            </form>
        );
    }
}

export default ShortCodeModalForm;
