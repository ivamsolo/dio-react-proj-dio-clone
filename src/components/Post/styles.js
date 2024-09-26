import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 767px;

  overflow: hidden;
  border-radius: 5px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
  }

  .header {
    width: 100%;
    height: 160px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .body {
    padding: 13px;
    background-color: rgba(59, 70, 81, 1);

    .user-info {
      display: flex;
      gap: 13px;
    }

    .content {
      margin-top: 16px;
    }
  }
`;
