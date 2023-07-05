// import { Link } from '@modules/shared/components'
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

// const PolicyContainer = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 24px;

//   & > a {
//     transition: color 150ms cubic-bezier(0.215, 0.61, 0.355, 1);

//     :hover {
//       color: ${({ theme }) => theme.palette.display['7']};
//     }
//   }
// `
