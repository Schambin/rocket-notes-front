import { Container } from "./styles";

export function Button({ icon: Icon, title, Loading = false, ...rest }) {
    return (
        <Container type="button" disabled={Loading} {...rest} >
             {Icon && <Icon size={10}/>}
            { Loading ? "Carregando..." : title }
        </Container>
    )
}