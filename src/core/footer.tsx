import styled from "styled-components";

export function Footer() {
  return (
    <>
      <StyledFooter>Footer</StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 24px;
`;
