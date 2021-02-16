import { useIntl } from "react-intl";
import paths from "./paths.json";

const DoctorsList = () => {
  const { formatMessage: f } = useIntl();

  return <h1>{f({ id: "hello" })}</h1>;
};

export const getStaticPaths = async () => {
  return { paths, fallback: false };
};

export const getStaticProps = () => {
  return { props: {} };
};

export default DoctorsList;
