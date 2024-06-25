import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    
    margin-bottom: .8rem;
    border-radius: 1rem;
    padding: 0 1.6rem 0 .5rem ;


    > input {
        font-size: 1.6rem;
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: white;
        background-color:transparent;

        border: none;
        outline: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    };

    > button {
        border: none;
        background: none;
        color: red;

        > svg {
            width: 2.5rem;
            height: 100%;
        }
    };

    .buttonAdd {
        color: orange;
    };

    .buttonRemove {
        color: red;
        margin-right: .2rem;
    };
`;