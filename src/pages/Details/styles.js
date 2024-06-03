//Normal css
// body {
//     background: rgba(255, 52, 52, 0.624);
// }

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";
`;