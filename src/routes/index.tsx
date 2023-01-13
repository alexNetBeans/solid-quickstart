import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Fazendo Apenas um Teste</Title>
      <h1>Olá Teste !!!</h1>
      <Counter />
      <p>
      Visit{" "}
      <hr/>
       
        
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
