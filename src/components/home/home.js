// Importando o React
import React from "react";
import dog1 from '../../images/dog1.jpeg';
import dog2 from '../../images/dog2.jpg';
import dog3 from '../../images/dog3.jpg';

const Home = () => (
  
  <section>
    <div id="imgWithoutCarousel">
      <img class='w-100' src={dog1}/>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={dog1} alt="First slide"/>
          <div class="carousel-caption">
            <p class="carousel-text-size">Adote seu melhor amigo</p>
            <button type="button" class="btn btn-lg btn-secondary rounded-pill">Clique aqui</button>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={dog2} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={dog3} alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
);

export default Home;