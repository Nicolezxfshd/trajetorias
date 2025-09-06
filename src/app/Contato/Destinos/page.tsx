import Title from "@/app/components/Title";
import GradeViagens from "@/app/components/Grid";

const Destinos = () => {
  return (
    <div>
      <Title title="Destinos" />
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#666' }}>
        Explore os melhores destinos de viagem! Clique em qualquer destino para ver mais detalhes.
      </p>
      <GradeViagens />
    </div>
  );
};

export default Destinos;
