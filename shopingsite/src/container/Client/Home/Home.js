import React from 'react';
import Footer from '../../Footer/Footer';

// import { Container } from 'reactstrap';
import './Home.css'

const img1 = require('../../../Image/3.jpg');
export default class Home extends React.Component {
    render() {
        return (
            <div>
            <div className="container" style={{ marginTop: 10 }}>
                <section>
                    <img className="mySlides" src={img1} id="imagecss" alt="true" />
                </section>                
            
            </div>
</div>
        );
    }
}