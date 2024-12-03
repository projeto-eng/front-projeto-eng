import "../../Style/Style.css"
import 'popper.js';
import w1 from './imgs/w1.png'; 
import w2 from './imgs/w2.png'; 
import w3 from './imgs/w3.png'; 
import w4 from './imgs/w4.png'; 
import RedirectButton from "../RedirectButton/RedirectButton";

function Header() {
  return (
    <div className="sub_page">
      <div className="hero_area">
      </div>

      <section className="why_section layout_padding section">
        <div className="container">
          <div className="heading_container heading_center section-heading">
            <h2>
              Por que escolher <span>Nós</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box card">
              <div className="img-box">
                <img src={w1} alt="" />
              </div>
              <div className="detail-box">
                <h5>Dados Confiáveis</h5>
                <p>
                  Nossa plataforma utiliza dados oficiais do INEP, garantindo informações precisas e atualizadas sobre as escolas públicas em todo o Brasil. Oferecemos uma visão abrangente e confiável do cenário educacional, permitindo que você tome decisões informadas sobre a educação.
                </p>
              </div>
            </div>
            <div className="box card">
              <div className="img-box">
                <img src={w2} alt="" />
              </div>
              <div className="detail-box">
                <h5>Análise Abrangente</h5>
                <p>
                  Fornecemos uma análise completa das escolas, incluindo infraestrutura e desempenho acadêmico. Nossa plataforma permite uma avaliação holística da qualidade educacional de cada instituição, ajudando estudantes, pais e educadores a fazerem escolhas conscientes.
                </p>
              </div>
            </div>
            <div className="box card">
              <div className="img-box">
                <img src={w3} alt="" />
              </div>
              <div className="detail-box">
                <h5>Suporte à Comunidade</h5>
                <p>
                  Nosso objetivo é capacitar a comunidade educacional. Seja você um estudante buscando a melhor escola, um pai procurando opções para seus filhos, ou um professor em busca de oportunidades de emprego, nossa plataforma oferece as ferramentas e informações necessárias para apoiar sua jornada educacional.
                </p>
              </div>
            </div>
            <div className="box card">
              <div className="img-box">
                <img src={w4} alt="" />
              </div>
              <div className="detail-box">
                <h5>Fácil Acesso</h5>
                <p>
                  Com uma interface intuitiva e amigável, nossa plataforma permite que você acesse facilmente as informações necessárias sobre qualquer escola pública no Brasil. Em poucos cliques, você pode obter um panorama detalhado das instituições de ensino, comparar escolas e analisar tendências educacionais.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <RedirectButton label="Cadastre-se" to="/cadastro" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;