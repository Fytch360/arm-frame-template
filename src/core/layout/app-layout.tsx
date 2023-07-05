import { ReactNode } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./global-styles";
import { Header } from "./header";
import { Footer } from "../footer";

const HEADER_HEIGHT = "64px";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <LayoutContent>
      <GlobalStyle />
      <Header />
      <Content id={"content-wrapper"}>{children}</Content>
      <Footer />
    </LayoutContent>
  );
}

/**
 * Styled components
 */

const LayoutContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 52px 15% 0 15%;
`;

const Content = styled.div`
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT};
`;
