import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>PRO-ACTIVE</h1>
          <p>Get the best deals here at cheap price.</p>
        </main>
      </div>
      <div className="home2">
        <img
          src="https://www.picng.com/upload/linux/png_linux_64447.png"
          alt="graphics"
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla
            excepturi quam aperiam. Obcaecati quam laudantium velit, delectus
            maiores quos in beatae voluptatem pariatur, repudiandae non!
            Perferendis officiis tempore, unde iusto officia eligendi architecto
            nemo? Dignissimos repellendus quo, tempora doloremque vero incidunt
            nisi odit a ullam amet vel quam nostrum!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>WHO WE ARE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
            modi quis perspiciatis asperiores rem voluptatem reiciendis esse
            quae, quia ea aut, vitae ipsum blanditiis? Voluptates cumque esse
            harum accusantium voluptate animi molestiae ratione obcaecati
            officia eum ipsam perspiciatis dignissimos, sapiente magni voluptas
            earum cum quia doloribus! Aut minus doloremque quis, excepturi quas
            consequuntur saepe quibusdam blanditiis explicabo, tenetur ullam,
            dolores libero exercitationem qui repellat iure nostrum. Ipsum
            repellendus doloribus nesciunt maxime excepturi vero sapiente
            deleniti. Quae harum libero provident quasi in consequuntur facere
            voluptas enim eaque itaque accusantium placeat ipsam obcaecati
            tenetur totam voluptates, eius voluptate cupiditate ipsa
            repellendus.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>BRANDS</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
