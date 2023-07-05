import { theme } from "../../theme";
import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface TestProvidersProps {
  children: ReactNode;
}

function TestProviders(props: TestProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <>{props.children}</>
    </ThemeProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
