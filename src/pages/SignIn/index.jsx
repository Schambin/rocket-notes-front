import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from "react-icons/fa6";


import { Input } from "../../components/input"
import { Button } from "../../components/button"

export function SignIn () {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="Email" 
                    type="email" 
                    icon={FaEnvelope}>
                </Input>

                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FaLock}>
                </Input>

                <Button title="Entrar" />
                
                <Link to="/register"> Criar Conta </Link>
            </Form>

            <Background />
        </Container>
    )
}