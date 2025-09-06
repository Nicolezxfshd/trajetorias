import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <a href="/">Portal de Viagens</a>
        </div>
        <nav className={styles.footer__nav}>
                 <a href="/contato">Contato</a>
          <a href="/privacidade">Política de Privacidade</a>
        </nav>    
      </div>
      <p>© 2025 Trajetórias Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
