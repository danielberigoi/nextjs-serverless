import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import "../styles/globals.css";
import * as locales from "../locales";

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

  return (
    <IntlProvider
      locale={locale}
      messages={locales[locale]}
      defaultLocale={defaultLocale}
    >
      <Component {...pageProps} />;
    </IntlProvider>
  );
};

export default App;
