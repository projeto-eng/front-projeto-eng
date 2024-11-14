import React from 'react';
import './css/bootstrap.css';
import './css/style.css';

import herobg from './images/hero-bg.png'; 
import slider from './images/slider-img.png'; 

function Index() {
  return (
    <div className="hero_area">

      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src={herobg} alt="Hero Background" />
        </div>
      </div>

      {/* Slider Section */}
      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Consulte informações <br />
                        de diversas escolas.
                      </h1>
                      <p>
                        Acesse dados sobre estrutura, qualidade do ensino e avaliações de diversas escolas públicas.
                      </p>
                      <div className="btn-box">
                        <a href="https://example.com" className="btn1">
                          Cadastre-se
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slider} alt="School" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Outros itens do carrossel */}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Avalie sua <br />
                        Escola.
                      </h1>
                      <p>
                        Compartilhe sua experiência e ajude outros a entender melhor a qualidade da educação oferecida.
                      </p>
                      <div className="btn-box">
                        <a href="https://example.com" className="btn1">
                          Registre-se
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slider} alt="School" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Veja notas do Enem <br />
                        por escola.
                      </h1>
                      <p>
                        Consulte o desempenho das escolas públicas nas últimas edições do Enem, comparando resultados.
                      </p>
                      <div className="btn-box">
                        <a href="https://example.com" className="btn1">
                          Registre-se
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={slider} alt="School" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>

      {/* Info Section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Desenvolvidos por alunos da Universidade de São Paulo, este site oferece uma forma de encontrar
                  informações detalhadas sobre escolas públicas, incluindo infraestrutura, localização e desempenho.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">Inicio</a>
                  <a href="about.html">Sobre</a>
                  <a href="service.html">Serviços</a>
                  <a href="why.html">Por que nós</a>
                  <a href="team.html">Equipe</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Cadastre-se</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Cadastre-se</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;