export default function Home() {
  return (
    <main style={{ padding: '60px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2DBE60', fontSize: '2.5rem' }}>Bienvenue sur ToitPro</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Gérez vos soumissions de toiture facilement. Créez des dossiers, ajoutez des photos et calculez les superficies.
      </p>

      <div style={{ marginTop: '30px' }}>
        <a href="#" style={{ padding: '10px 20px', background: '#2DBE60', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Commencer une nouvelle soumission
        </a>
      </div>
    </main>
  );
}
