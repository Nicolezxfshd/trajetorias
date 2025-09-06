import { Viagem } from "@/lib/viagens";
import { notFound } from "next/navigation";
import Title from "@/app/components/Title";
import styles from "./destino.module.css";
import Link from "next/link";

// Tipagem dos parâmetros da página
type DestinoPageProps = {
  params: {
    id: string;
  };
};

/**
 * Página de detalhes do destino
 * Exibe informações completas sobre um destino específico
 */
export default function DestinoPage({ params }: DestinoPageProps) {
  const destinoId = parseInt(params.id);
  const destino = Viagem.find(v => v.id === destinoId);

  // Se o destino não for encontrado, retorna 404
  if (!destino) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumb_link}>Início</Link>
        <span className={styles.breadcrumb_separator}> / </span>
        <Link href="/Contato/Destinos" className={styles.breadcrumb_link}>Destinos</Link>
        <span className={styles.breadcrumb_separator}> / </span>
        <span className={styles.breadcrumb_current}>{destino.title}</span>
      </div>

      <Title title={destino.title} />
      
      <article className={styles.destino_detail}>
        <div className={styles.image_container}>
          <img 
            src={destino.imagem} 
            alt={`Imagem de ${destino.title}`}
            className={styles.destino_image}
          />
        </div>
        
        <div className={styles.content}>
          <div className={styles.description_section}>
            <h2 className={styles.section_title}>Sobre o Destino</h2>
            <p className={styles.description}>{destino.description}</p>
          </div>

          <div className={styles.highlights_section}>
            <h2 className={styles.section_title}>Destaques</h2>
            <ul className={styles.highlights_list}>
              {getDestinationHighlights(destino.id).map((highlight, index) => (
                <li key={index} className={styles.highlight_item}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className={styles.actions}>
            <button className={styles.cta_button}>
              Solicitar Orçamento
            </button>
            <Link href="/Contato/Pacote-de-Viagens" className={styles.secondary_button}>
              Ver Pacotes
            </Link>
          </div>
        </div>
      </article>

      <div className={styles.navigation}>
        <Link href="/" className={styles.back_button}>
          ← Voltar para Início
        </Link>
      </div>
    </div>
  );
}

/**
 * Função auxiliar para obter destaques específicos de cada destino
 */
function getDestinationHighlights(id: number): string[] {
  const highlights: { [key: number]: string[] } = {
    1: [
      "Torre Eiffel e vistas panorâmicas",
      "Museu do Louvre e Mona Lisa",
      "Passeios românticos pelo Sena",
      "Gastronomia francesa autêntica"
    ],
    2: [
      "Templos históricos e jardins zen",
      "Cerejeiras em flor na primavera",
      "Cultura tradicional japonesa",
      "Culinária refinada e autêntica"
    ],
    3: [
      "Cristo Redentor e Pão de Açúcar",
      "Praias de Copacabana e Ipanema",
      "Carnaval e cultura vibrante",
      "Natureza exuberante e trilhas"
    ],
    4: [
      "Arranha-céus icônicos de Manhattan",
      "Broadway e espetáculos mundiais",
      "Central Park e museus famosos",
      "Vida urbana intensa 24/7"
    ]
  };

  return highlights[id] || ["Experiência única e inesquecível"];
}

// Geração de metadados dinâmicos
export async function generateMetadata({ params }: DestinoPageProps) {
  const destinoId = parseInt(params.id);
  const destino = Viagem.find(v => v.id === destinoId);

  if (!destino) {
    return {
      title: "Destino não encontrado",
    };
  }

  return {
    title: `${destino.title} - Portal de Viagens`,
    description: destino.description,
  };
}
