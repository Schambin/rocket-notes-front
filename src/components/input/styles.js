import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: .8rem;
    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};

        background: transparent;

        border: 0;

        &:placeholder > {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            outline: none;
        }
        
        }
        
        > svg {
            margin: 0 1.6rem;
        }
        
    > input:active, input:focus {
      /* border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300}; */
      border-radius: 1rem;
      outline: none;
    }
`;