import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 47px;
  padding: 0 60px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(21, 21, 21, 1);
  color: white;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  .start {
    display: flex;
    gap: 22px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  gap: 17px;
`;

export const Logo = styled.img`
  pointer-events: none;
  width: 63px;
  height: 25px;
`;

