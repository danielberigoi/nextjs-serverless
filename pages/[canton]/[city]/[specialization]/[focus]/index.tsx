import { useIntl } from "react-intl";

import ProfileListHeader from "components/ProfileListHeader";
import ProfileListItem from "components/ProfileListItem";

import paths from "static/paths.json";

const DoctorsList = (props) => {
  const { formatMessage: f } = useIntl();
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <ProfileListHeader />
              <tbody className="bg-white divide-y divide-gray-200">
                {props.users.map((user) => (
                  <ProfileListItem key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default DoctorsList;
