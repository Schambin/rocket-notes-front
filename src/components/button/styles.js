import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border-radius: 1rem;
    padding: 1.6rem 1.45rem;
    margin-top: 9rem;

    outline: none;
    border: none;

    font-weight: 500;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    > svg {
            margin: 0 1.6rem;
        }
`;