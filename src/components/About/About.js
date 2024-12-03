import "../../Style/Style.css"
import 'popper.js';
import about_img from './imgs/about-img.png';
import RedirectButton from "../RedirectButton/RedirectButton";


function About() {
  return (
    <div className="sub_page">
      <div className="hero_area">
      </div>
        
      <section className="about_section layout_padding section">
        <div className="container">
          <div className="heading_container heading_center section-heading">
            <h2>
              Sobre <span>Nós</span>
            </h2>
            <p>
              Somos um grupo de estudantes do Bacharelado em Ciência da Computação do Instituto de Matemática e Estatística da Universidade de São Paulo (USP). Unidos pelo desejo de contribuir para a melhoria da educação pública no Brasil, desenvolvemos o Info Scholl, uma plataforma inovadora de avaliação e consulta de informações sobre escolas públicas brasileiras.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about_img} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box card">
                <h3>Nosso objetivo</h3>
                <p>
                  Nosso objetivo é fornecer uma ferramenta abrangente e confiável para estudantes, pais, professores e gestores educacionais avaliarem a qualidade do ensino nas escolas públicas do Brasil. 
                  Utilizando dados oficiais do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), 
                  oferecemos informações detalhadas sobre a estrutura das escolas, desempenho acadêmico, incluindo notas do ENEM, e outros indicadores relevantes.
                </p>
                <p>
                  Com o Info Scholl, aspiramos a contribuir para o fortalecimento da educação pública no Brasil, 
                  fornecendo as ferramentas necessárias para que todos os envolvidos no processo educacional possam fazer escolhas informadas e trabalhar juntos para elevar o padrão de ensino em nosso país.
                  Cadastre-se agora e junte-se a nós nessa missão de transformar a educação através da informação!
                </p>
                <RedirectButton label="Cadastre-se" to="/cadastro" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;