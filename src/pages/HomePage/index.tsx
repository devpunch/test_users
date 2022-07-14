import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getUserAsync,
  isLoadingUserSelector,
  usersSelector,
} from "../../store/usersSlicer";
import UsersRow from "../../components/UserRow";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(usersSelector);
  const isLoading = useAppSelector(isLoadingUserSelector);

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);
  console.log("####: isLoading", isLoading);
  if (isLoading) return <div>...loading</div>;

  return (
    <div>
      <h2>Users list</h2>
      {data !== null &&
        data.map(({ id, name, email, phone }: any) => (
          <UsersRow key={id} name={name} email={email} phone={phone} />
        ))}
    </div>
  );
};

export default HomePage;
