import "../../Style/Style.css"
import 'popper.js';
import s1 from './imgs/s1.png'; 
import s2 from './imgs/s2.png'; 
import s3 from './imgs/s3.png'; 

function Header() {
  return (
    <div className="sub_page">
        <div className="hero_area">
        </div>

    <section class="service_section layout_padding">
        <div class="service_container">
        <div class="container ">
            <div class="heading_container heading_center">
            <h2>
            Nosso <span>Serviço</span>
            </h2>
            <p>
                Oferecemos uma plataforma abrangente para avaliação e consulta de informações sobre escolas públicas no Brasil, utilizando dados oficiais do INEP para auxiliar estudantes, pais e educadores em suas decisões.
            </p>
            </div>
            <div class="row">
            <div class="col-md-4 ">
                <div class="box ">
                <div class="img-box">
                    <img src={s1} alt="" />
                </div>
                <div class="detail-box">
                    <h5>
                    Consulta de Escolas
                    </h5>
                    <p>
                    Acesse informações detalhadas sobre escolas públicas em todo o Brasil. Nossa base de dados inclui localização, infraestrutura, número de alunos e professores, permitindo uma visão completa de cada instituição.
                    </p>
                </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="box ">
                <div class="img-box">
                    <img src={s2} alt="" />
                </div>
                <div class="detail-box">
                    <h5>
                    Análise de Desempenho
                    </h5>
                    <p>
                    Compare o desempenho acadêmico das escolas através de indicadores como notas do ENEM, taxas de aprovação e índices educacionais. Identifique as instituições que se destacam em diferentes áreas.
                    </p>
                </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="box ">
                <div class="img-box">
                    <img src={s3} alt="" />
                </div>
                <div class="detail-box">
                    <h5>
                    Suporte à Decisão
                    </h5>
                    <p>
                    Utilize nossas ferramentas de filtragem e comparação para encontrar a escola ideal com base em critérios específicos, como localização, desempenho acadêmico ou infraestrutura, facilitando a tomada de decisão informada.
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div class="btn-box">
            <a href="">
                Cadastre-se
            </a>
            </div>
        </div>
        </div>
    </section>

    </div>
  );
}

export default Header;