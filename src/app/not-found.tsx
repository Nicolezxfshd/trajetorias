import Link from 'next/link';
import Title from './components/Title';

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '4rem 2rem',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Title title="Página não encontrada" />
      
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: '6rem',
        fontWeight: 'bold',
        margin: '2rem 0'
      }}>
        404
      </div>
      
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#666', 
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        Ops! A página que você está procurando não existe ou foi movida.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link 
          href="/"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}
        >
          Voltar ao Início
        </Link>
        
        <Link 
          href="/Contato/Destinos"
          style={{
            background: 'transparent',
            color: '#667eea',
            border: '2px solid #667eea',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
        >
          Ver Destinos
        </Link>
      </div>
    </div>
  );
}
