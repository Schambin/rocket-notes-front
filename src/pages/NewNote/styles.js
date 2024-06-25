import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;  
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: "content";
        overflow-y: auto;
    };
`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 3.8rem auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.6rem;
    };

    a {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    };

    #tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    > Section {
        margin: 2.3rem 0 2.5rem;
    }

    > Button {
        margin-top: auto;
    }
`;