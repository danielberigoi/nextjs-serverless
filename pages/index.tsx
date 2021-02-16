import Head from "next/head";
import { useIntl } from "react-intl";
export default function Home() {
  const { formatMessage: f } = useIntl();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome!</h1>
        <h2>{f({ id: "hello" })}</h2>
      </main>

      <footer>{/* Silence is golden */}</footer>
    </div>
  );
}
