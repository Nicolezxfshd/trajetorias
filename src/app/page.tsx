import Title from "./components/Title"
import GradeViagens from "./components/Grid";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <div>
      <Introduction />
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <Title title="Nossas Trajetórias Disponíveis" />
        <GradeViagens />
      </div>
    </div>
  );
}
