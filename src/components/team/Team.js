import "../../Style/Style.css"
import 'popper.js';
import user from '../../assets/user.webp'

import server from "../../services/ServerService";

const integrantes = await server.get('/api/configuracoes').then(
  (response) => {
    return response?.integrantes;
  }
);

function Team() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <section className="team_section layout_padding section">
          <div className="container-fluid">
            <div className="heading_container heading_center section-heading">
              <h2 className="">
                Nosso <span> Time</span>
              </h2>
            </div>
            <div className="team_container">
              <div className="row">
                {integrantes.map((integrante, index) => (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="box card">
                      <div className="img-box">
                        <img src={user} className="img1" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>{integrante.nome}</h5>
                        <p>{integrante.funcao}</p>
                      </div>
                      <div className="social_box">
                        <a href={integrante.urlGithub}>
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        {/* Adicione outros ícones de redes sociais conforme necessário */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;