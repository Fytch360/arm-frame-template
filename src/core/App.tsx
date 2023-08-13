import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Page } from "./page";
import { store } from "./store";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
