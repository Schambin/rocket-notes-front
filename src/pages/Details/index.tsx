import { Container } from "./styles.js";
import { Button } from "../../components/button"

export function Details() {

  return(
    <Container>
      <h1>Hello, World!</h1>
      <span>Kauanzera</span>
      
      <Button title="Entrar" Loading />
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
      <Button title="Salvar"/>
    </Container>
  ) 
}