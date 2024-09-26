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

  .posts {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 767px;

    .entries {
      display: flex;
      flex-direction: column;
      gap: 34px;
    }
  }

  .ranking {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 269px;

    h2 {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .card {
        display: flex;
        gap: 15px;
      }
    }
  }
`;
