import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import locales from "locales";

import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

  return (
    <IntlProvider
      locale={locale}
      messages={locales[locale]}
      defaultLocale={defaultLocale}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
