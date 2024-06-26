import { Container, Form, Background } from "./styles";
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";


import { Input } from "../../components/input"
import { Button } from "../../components/button"

export function SignUp () {
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome" 
                    type="text" 
                    icon={FaUser}>
                </Input>

                <Input
                    placeholder="Email" 
                    type="email" 
                    icon={FaEnvelope }>
                </Input>

                <Input 
                    placeholder="Senha" 
                    type="password" 
                    icon={FaLock}>
                </Input>

                <Button title="Cadastrar"/>

                <Link to="/"> Fazer Login </Link>
            </Form>

        </Container>
    )
}