import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Portal de Trajetórias</h1>
        <p className={styles.subtitle}>
          Descubra experiências únicas que vão além de simples destinos
        </p>
        
        <div className={styles.description}>
          <p>
            Bem-vindo ao nosso portal, onde cada viagem é uma <strong>trajetória</strong> 
            cuidadosamente planejada. Não oferecemos apenas destinos - criamos 
            <strong> jornadas transformadoras</strong> que conectam você a culturas, 
            sabores, paisagens e memórias inesquecíveis.
          </p>
          
          <div className={styles.differentials}>
            <div className={styles.differential}>
              <h3>🗺️ Trajetórias Personalizadas</h3>
              <p>Roteiros únicos adaptados ao seu perfil e interesses</p>
            </div>
            
            <div className={styles.differential}>
              <h3>🌟 Experiências Autênticas</h3>
              <p>Conexões genuínas com a cultura local e pessoas</p>
            </div>
            
            <div className={styles.differential}>
              <h3>📖 Histórias que Inspiram</h3>
              <p>Cada trajetória conta uma história única e transformadora</p>
            </div>
          </div>
        </div>
        
        <div className={styles.callToAction}>
          <p className={styles.ctaText}>
            Explore nossas trajetórias e descubra como uma viagem pode ser muito mais 
            que um destino - pode ser uma jornada de autodescoberta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
