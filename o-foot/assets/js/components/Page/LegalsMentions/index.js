import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

// Import scss
import './legals-mentions.scss';


const LegalsMentions = () => (

    <div id="legals-mentions">
        <header className="header">
            <h1 className="header-h1">
                Le joueur, face aux buts
            </h1>
            <div className="">
                <div className="header-title">Mentions légales</div>
            </div>
        </header>

        <Container>
            <div className="main">
                <div className="main-section">
                    <h2 className="main-h2">Identité</h2>
                    <h3>Informations principales</h3>
                        <ul>
                            <li>Nom du site web : O’Foot</li>
                            <li>Adresse : 7 rue du Stade, Paris 75016</li>
                            <li>Propriétaires : Marine, Mickaël, Cebrail, Berenger et Pedro</li>
                            <li>Animation et conception : Marine et Mickaël</li>
                            <li>Réalisation et structure  : Cebrail, Berenger et Pedro</li>
                            <li>Hébergement : Amazon AWS</li>
                        </ul>
                    <h3>Personne morale</h3>
                        <p>‘O’Foot SA’ – ‘Forme juridique’ au capital de 100 euros – RCS 154321654 – ‘7 rue du stade’
                        ‘0745454545’ – ‘ofoot@gmail.com’</p>
                </div>

                <div className="main-section">
                    <h2 className="main-h2"> Conditions d’utilisation</h2>
                        <p>L’utilisation du présent site O’Foot implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après.
                        Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.</p>

                    <h3>Informations</h3>
                        <p>Les informations et documents de l’application O’Foot sont présentés à titre indicatif, n’ont pas de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.
                        Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.</p>

                    <h3>Interactivité</h3>
                        <p>Les utilisateurs du site O’Foot peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés (notamment via les commentaires).</p>

                        <p>Le contenu déposé reste sous la responsabilité de leurs auteurs, qui en assument pleinement l’entière responsabilité juridique.</p>
                        <p>Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par les utilisateurs qui ne satisferait pas à la charte déontologique du site ou à la législation en vigueur.</p>

                    <h3>Propriété intellectuelle</h3>
                        <p>Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage.</p>

                        <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.</p>

                        <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et poursuivie.</p>

                        <p>Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.</p>

                    <h3>Liens</h3>

                        <p>Le propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.</p>

                    <h3>Données personnelles</h3>
                        <p>Tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une preuve d’identité.</p>

                        <p>Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL.</p>
                    <Image src="https://images.unsplash.com/photo-1428200698796-38743f953a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" fluid />
                </div>
            </div>
        </Container>
    </div>
);

export default LegalsMentions;
