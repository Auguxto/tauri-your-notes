import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  flex-direction: row;

  width: 100%;
  height: 100vh;

  background-color: #2c2c2c;
`;

export const Menu = styled.aside`
  display: flex;

  flex-direction: column;

  width: 300px;
  height: 100vh;

  background-color: #1c1c1c;

  margin-left: -270px;

  :hover {
    margin-left: 0;
  }
`;
