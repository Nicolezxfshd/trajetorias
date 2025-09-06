import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>
          <Link href="/">Trajetórias</Link>
        </h1>
        <nav className={styles.header__nav}>
          <Link href="/">Início</Link>
          <Link href="/Contato/sobre-nos">Sobre nós</Link>
          <Link href="/Contato/Destinos">Destinos</Link>
          <Link href="/Contato/Pacote-de-Viagens">Pacotes de Viagem</Link>
          <Link href="/Contato/Passagens">Passagens</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;