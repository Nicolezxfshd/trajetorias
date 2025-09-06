import { Viagem } from "@/lib/viagens";
import CardDestino from "../Card";
import styles from "./Grid.module.css";

/**
 * Componente Grade - Exibe uma grade de cartões de destinos usando map()
 */
const GradeViagens = () => {
  return (
    <section className={styles.grid}>
      {Viagem.map(destino => (
        <CardDestino key={destino.id} destino={destino} />
      ))}
    </section>
  );
};

export default GradeViagens;

