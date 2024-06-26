import styled from "styled-components";

export const Container = styled.button`
    padding: 2.2rem;
    margin-bottom: 1.6rem;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 1rem;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        display: flex;
        width: 100%;
        margin-top: 2.4rem;
    }
`;