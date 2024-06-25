import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;
   
    padding: 1rem;
    margin-bottom: .8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: white;

    border-radius: 1.2rem;
    border: none;
    resize: none;

    font-size: 1.6rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:active, &:focus {
        outline: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;