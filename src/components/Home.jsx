import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

import "../styles/Home.scss"

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>SnehaStar</h1>
                    <p>Solution To All Your Problems</p>
                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tempore incidunt dicta molestias nobis fuga possimus inventore. Voluptas, deserunt, modi labore voluptates, hic reprehenderit minima illum eos non repellat dolore!
                    </p>
                </div>
            </div>

            <div className='home3' id="about">
                <div>
                    <h2>Welcome</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint, eaque reprehenderit necessitatibus quae optio quos aliquid laborum adipisci repudiandae reiciendis perferendis, id amet repellendus, error ratione commodi ut illum!
                            Est, architecto! Sed harum inventore atque suscipit neque nam dicta, eos id dolorum unde, maxime aliquam recusandae sit repellat sint? Ipsam fugiat adipisci repellat sequi magni, facilis ratione iusto tempore.
                        </p>
                </div>
            </div>

            <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",  //it is object
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",  //it is object
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay: "0.7s",  //it is object
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>


                    <div style={{
                        animationDelay: "1s",  //it is object
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>

                </article>
                </div>
            </div>
        </>
    )
}

export default Home