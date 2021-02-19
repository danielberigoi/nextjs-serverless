import { User } from "interfaces";

type Props = {
  user: User;
};

const ProfileListItem: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://i.pravatar.cc/40?u=${user.id}`}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.company.name}</div>
        <div className="text-sm text-gray-500">{user.company.catchPhrase}</div>
      </td>
    </tr>
  );
};

export default ProfileListItem;
