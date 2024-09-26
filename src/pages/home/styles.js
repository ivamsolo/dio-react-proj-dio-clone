import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 54px 60px;
`;

export const Infos = styled.div`
  max-width: 368px;
  padding: 20px 5px;
  color: white;

  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 12px;
  }

  span {
    display: block;
    color: rgba(228, 16, 93, 1);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 52px;
  }
`;

export const Banner = styled.img`
    width: 100%;
    max-width: 563px;
`