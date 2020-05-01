import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-areas:
    "sidenav main";
  height: 100vh;
`;