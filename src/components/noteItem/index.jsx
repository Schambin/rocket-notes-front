import { Container } from './styles';
import { MdClose, MdAdd  } from "react-icons/md";

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            <button type='button' onClick={onClick}>
                { isNew ? <MdAdd /> : <MdClose /> }
            </button>
        </Container> 
    )
}