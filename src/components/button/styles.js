import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 1rem;
    padding: 1.6rem 1.45rem;

    outline: none;
    border: none;

    &:disabled {
        opacity: 0.5;
        cursor: pointer;
    }
`;