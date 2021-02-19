import React from "react";
import { useIntl } from "react-intl";

import ProfileListHeader from "components/ProfileListHeader";
import ProfileListItem from "components/ProfileListItem";

const UsersList = (props) => {
  const [users, setUsers] = React.useState(props.users);
  const { formatMessage: f } = useIntl();

  const loadMoreUsers = async () => {
    const res = await fetch(props.usersUrl);
    const users = await res.json();
    setUsers((oldUsers) => oldUsers.concat(users));
  };

  return (
    <div>
      <h1>{f({ id: "hello" })}</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <ProfileListHeader />
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <ProfileListItem key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button onClick={() => loadMoreUsers()}>LOAD MORE</button>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const usersUrl = `${process.env.HOST}/api/users`;
  const res = await fetch(usersUrl);
  const users = await res.json();

  return {
    props: {
      usersUrl,
      users,
    },
  };
};

export default UsersList;
