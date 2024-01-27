// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  // Redireciona para a documentação Swagger quando a página inicial é carregada
  useEffect(() => {
    router.push('/swagger');
  }, []);

  return (
    <div>
      {/* Página inicial vazia, pois será redirecionada para a documentação Swagger */}
    </div>
  );
};

export default Home;
