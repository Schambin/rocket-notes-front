import { Container, Links } from "./styles.js";

import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Section } from "../../components/section"

export function Details() {

  return(
    <Container>

      <Header />

      <Section title="Links Úteis"> 
        <Links>
          <li><a href="#"> Sexo </a></li>
          <li>Sexo 2</li>
        </Links>
      </Section>
        
      <Section title="Marcadores"> 

      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}