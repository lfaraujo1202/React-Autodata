import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.2rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    .modal-button{
        background-color: var(--lightpurple);
        height: 30px;
        width: 100px;
        margin-top: 20px;
        margin-left: 20px;
    }
`;