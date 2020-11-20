import React from 'react';
import NavBar from '../navabar/NavBar'
import FooterPage from "../footer/Footer";
import Carrousel from '../Home/Carrousel';

import './Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>

            <Carrousel />
                <div className="home_para">
                    <h2>What is Greek List?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Egestas diam in arcu cursus. Orci dapibus ultrices in iaculis nunc. Massa tincidunt dui ut ornare lectus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Sed enim ut sem viverra. Etiam non quam lacus suspendisse. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Blandit libero volutpat sed cras ornare. Dolor purus non enim praesent elementum facilisis leo vel. Ac ut consequat semper viverra nam libero. Ac turpis egestas integer eget aliquet. Pellentesque eu tincidunt tortor aliquam nulla. Malesuada proin libero nunc consequat interdum varius sit. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Nunc sed blandit libero volutpat sed cras ornare arcu.</p>
                </div>
            <FooterPage />
        </div>
    )
}

export default Home;