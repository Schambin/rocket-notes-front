import { Container, Form, Avatar } from './styles';
import { Link } from 'react-router-dom';

import { FaLeftLong, FaEnvelope, FaLock, FaUser, FaCamera } from "react-icons/fa6";


import { Input } from '../../components/input';
import { Button } from '../../components/button';

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FaLeftLong /> 
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/schambin.png" alt="Foto do usuário" />
                    <label htmlFor="Avatar">
                        <FaCamera />
                    </label>
                    <input id="Avatar" type="file" />
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FaUser}>
                </Input>

                <Input 
                    placeholder="Email"
                    type="email"
                    icon={FaEnvelope}>
                </Input>

                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FaLock}>
                </Input>

                <Input 
                    placeholder="Nova Senha" 
                    type="password"
                    icon={FaLock}>
                </Input>

                <Button title="Salvar" />

            </Form>
        </Container>
    )
}