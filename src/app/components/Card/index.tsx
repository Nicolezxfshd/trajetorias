import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

// Tipagem das propriedades do componente CardDestino
type PropriedadesDestino = {
  destino: {
    id: number;
    title: string;
    description: string;
    imagem: string;
  };
};

/**
 * Componente CardDestino - Exibe informações de um destino de viagem
 * @param destino - Objeto contendo dados do destino (título, descrição, imagem)
 */
const CardDestino = ({ destino }: PropriedadesDestino) => {
  const { id, title, description, imagem } = destino;

  return (
    <Link href={`/destino/${id}`} className={styles.card_link}>
      <article className={styles.card}>
        <img 
          src={imagem} 
          alt={`Imagem de ${title}`} 
          className={styles.card_poster}
          loading="lazy"
        />
        <div className={styles.card_info}>
          <h2 className={styles.card_title}>{title}</h2>
          <p className={styles.card_description}>{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default CardDestino;
