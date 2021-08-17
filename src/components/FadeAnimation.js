import React from 'react';
import Fade from 'react-reveal/Fade'
import Img1 from '../images/card1.jpg'
import Img2 from '../images/card2.jpg'
import Img3 from '../images/card3.jpg'
import Img4 from '../images/card4.jpeg'

function FadeAnimation() {
    return (
        <div className={'container'}>
            <div className="row">
                <Fade left cascade>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={Img1} alt="1-img"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum enim excepturi fugit
                                illum
                                minima nulla quas quis tenetur? Ad corporis expedita mollitia nobis perferendis tenetur
                                unde
                                voluptatibus. Ab cupiditate, mollitia!
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={Img2} alt="2-img"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa
                                dolor,
                                est
                                exercitationem obcaecati rerum ut voluptate. Aliquid aspernatur, enim iste modi nobis
                                perspiciatis. Accusantium doloremque quaerat quibusdam voluptatibus?
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="row">
                <Fade left cascade>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={Img3} alt="3-img"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum enim excepturi fugit
                                illum
                                minima nulla quas quis tenetur? Ad corporis expedita mollitia nobis perferendis tenetur
                                unde
                                voluptatibus. Ab cupiditate, mollitia!
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={Img4} alt="4-img"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa
                                dolor,
                                est
                                exercitationem obcaecati rerum ut voluptate. Aliquid aspernatur, enim iste modi nobis
                                perspiciatis. Accusantium doloremque quaerat quibusdam voluptatibus?
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default FadeAnimation;