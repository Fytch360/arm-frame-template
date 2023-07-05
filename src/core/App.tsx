import { BrowserRouter } from "react-router-dom";
import { Page } from "./page";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import { Provider as StoreProvider } from "react-redux";

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

// import { ApolloProvider } from '@apollo/client'
// import { oneTheme, ThemeProvider as FlamingoThemeProvider } from '@ataccama/flamingo-theme'
// import { Page } from '@core/page'
// import { theme } from '@core/theme'
// import { ToastMessagesList } from '@modules/shared/components/toast-messages-list'
// import { UserInfoProvider } from '@modules/shared/context/user-info'
// import { ErrorBoundary } from '@shared/components/error-boundary'
// import { Settings } from 'luxon'
// import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
// import { ThemeProvider } from 'styled-components'
// import { client } from './apollo'
// import { AuthProvider } from './services/keycloak'
// import { store } from './store'

// export function App() {
//   //TODO: Has to be changed when internationalization is used
//   Settings.defaultLocale = 'en'

//   return (
//     <ThemeProvider theme={theme}>
//       <FlamingoThemeProvider theme={oneTheme}>
//         <AuthProvider>
//           <Provider store={store}>
//             <ApolloProvider client={client}>
//               <ErrorBoundary>
//                 <BrowserRouter>
//                   <UserInfoProvider>
//                     <div>something</div>
//                     <Page />
//                     <ToastMessagesList />
//                   </UserInfoProvider>
//                 </BrowserRouter>
//               </ErrorBoundary>
//             </ApolloProvider>
//           </Provider>
//         </AuthProvider>
//       </FlamingoThemeProvider>
//     </ThemeProvider>
//   )
// }
