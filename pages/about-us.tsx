import { useIntl } from "react-intl";

const AboutUs = () => {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <h1>About Us</h1>
      <h2>{f({ id: "hello" })}</h2>
    </>
  );
};

export default AboutUs;
