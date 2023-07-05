import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../../modules/icons"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Header() {
  return (
    <Navbar>
      <StyledLogo />
      <NavbarContent>
        <StyledLink to="/">
          <NavText>Главная</NavText>
        </StyledLink>
        <StyledLink to="/operations">
          <NavText>переводы</NavText>
        </StyledLink>
        <StyledLink to="/payments">
          <NavText>платежи</NavText>
        </StyledLink>
        <StyledLink to="/history">
          <NavText>История</NavText>
        </StyledLink>
      </NavbarContent>
      <DropdownsSection>
     <DropdownMenu.Root>
    <DropdownMenu.Trigger>
     RU
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5}>
          <DropdownMenu.Item>
            RU
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            EN
          </DropdownMenu.Item>
      </DropdownMenu.Content>
      </DropdownMenu.Portal>

     </DropdownMenu.Root>
     <DropdownMenu.Root>
    <DropdownMenu.Trigger>
     <span>Тимур И.</span>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5}>
          <DropdownMenu.Item>
           Настройки
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Выход
          </DropdownMenu.Item>
      </DropdownMenu.Content>
      </DropdownMenu.Portal>
     </DropdownMenu.Root>
     </DropdownsSection>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  z-index: 1;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  padding: 0 32px 10px 32px;
`;

const StyledLink = styled(NavLink)`
  margin: 12px;
  padding: 6px;
  &.active {
    border-bottom: 3px solid #08a652;
  }
`;

const NavText = styled.span`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.displayNew};
  font-weight: bold;
  font-size: 16px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -9px;
    left: 0;
    background-color: #08a652;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const StyledLogo = styled(Logo)`
width:222px;
height: 35px;
`

const DropdownsSection = styled.div`
display: flex;
padding-bottom: 10px;
`

