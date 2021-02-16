interface IProps {
  user: {
    name: string;
    email: string;
    company: {
      name: string;
      catchPhrase: string;
    }
  };
}

const ProfileListItem: React.FC<IProps> = (props) => {
  const { user } = props;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {user.company.name}
        </div>
        <div className="text-sm text-gray-500">{user.company.catchPhrase}</div>
      </td>
    </tr>
  );
};

export default ProfileListItem;
