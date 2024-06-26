import { Container, Links, Content } from "./styles.js";
import { Link } from 'react-router-dom';

import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/buttonText";

export function Details() {

  return(
    <Container>

      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

            <h1>Introdução ao React!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum reiciendis blanditiis fugit minus odio eveniet vero necessitatibus eos. Perferendis ratione sunt consequuntur vero facere eum qui deserunt ut nostrum.
            </p>
          <Section title="Links Úteis">
            <Links>
              <li><a href="#"> https://www.youtube.com/ </a></li>
              <li><a href="#"> https://store.steampowered.com/ </a></li>
            </Links>
          </Section>

          <Section title="Marcadores"> 
            <Tag title="Node"/>
            <Tag title="Express"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
      
    </Container>
  )
}