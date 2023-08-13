import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../theme";

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

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
