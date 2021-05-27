import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <CommonCard>share</CommonCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 0px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0px 0px 2px 1px #e0e0e0;
`;

const shareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
`;

export default Main;
