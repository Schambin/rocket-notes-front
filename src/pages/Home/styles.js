import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: brand;

    color: ${({ theme }) => theme.COLORS.ORANGE};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding-top: 7.4rem;
    text-align: center;

    /* padding-top: 6.4rem;
    text-align: center;

    > li {
        margin-bottom: 2.4rem;
    } */
   
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Search = styled.div`
    grid-area: search;
    margin: 6.4rem;
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 6.4rem;
    overflow-y: auto;
`;

export const NewNote = styled.button`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    outline: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        margin-right: .8rem;
    }
`;
