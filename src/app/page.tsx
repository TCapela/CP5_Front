import Image from "next/image"

export default function Home() {
  return (
  <div>
      <Image src='/img/Immanuel_Velikovsky.jpg' alt="Emanuel" width={200} height={200}/>
      <h1>Sobre Immanuel Velikovsky</h1>
      <p>Immanuel Velikovsky, um psiquiatra que se aventurou no campo da astronomia e da história antiga, causou um terremoto na comunidade científica com seu livro "Worlds in Collision" (Mundos em Colisão). Publicada em 1950, a obra propôs uma visão radicalmente diferente sobre a formação e evolução do Sistema Solar, desafiando as teorias estabelecidas e gerando um debate acalorado que persiste até os dias de hoje.</p>
      <h2>Words in colision</h2>
      <p>
          Immanuel Velikovsky, em seu polêmico livro "Mundos em Colisão", propôs uma visão radical sobre a história do Sistema Solar.<br/>

          Ele sugeriu que grandes cataclismos, causados por colisões entre planetas, moldaram a Terra e a humanidade.<br/>

          Velikovsky argumenta que Vênus e Marte foram ejetados de Júpiter e passaram perto da Terra, causando grandes perturbações.<br/>

          Essa teoria desafiou os modelos astronômicos e geológicos da época, gerando um debate acalorado na comunidade científica.<br/>

          A falta de evidências científicas e a metodologia questionável de Velikovsky fizeram com que suas ideias fossem amplamente rejeitadas.<br/></p>
  </div>
  );
}
