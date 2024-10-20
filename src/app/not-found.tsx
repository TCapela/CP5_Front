import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="relative w-96 h-96">
        {/* Usando o componente de imagem do Next.js */}
        <Image
          src="public/images/not-found-error.jpg" // Caminho da imagem local ou URL externa
          alt="Ilustração de erro"
          layout="fill" // Preenche o container
          objectFit="contain" // Ajusta a imagem para caber no container
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mt-8">Página não encontrada</h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! Parece que a página que você está procurando não existe.
      </p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
          Voltar à página inicial
        </a>
      </Link>
    </div>
  );
}
