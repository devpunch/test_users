import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  getUserAsync,
  isLoadingUserSelector,
  usersSelector,
} from "../../store/usersSlicer";
import { useAppDispatch, useAppSelector } from "../../hooks";

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(usersSelector);
  const isLoading = useAppSelector(isLoadingUserSelector);

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);
  const user = useMemo(() => {
    if (data !== null) {
      return data.find(
        (item: any) => item.name.toLowerCase().split(" ").join("_") === id
      );
    }
  }, [data]);

  const renderFields = (
    obj: Record<string, any>,
    parentKeys: string[] = []
  ): Record<string, any> => {
    return Object.entries(obj).reduce<Record<string, any>>(
      (acc, [key, value]) => {
        if (typeof value === "object") {
          return { ...acc, ...renderFields(value, parentKeys.concat(key)) };
        } else {
          return { ...acc, [parentKeys.concat(key).join(" ")]: value };
        }
      },
      {}
    );
  };

  if (isLoading) return <div>...Loading</div>;
  return (
    <div>
      <h2>User Info</h2>
      {user &&
        Object.entries(renderFields(user)).map((item: any, index) => (
          <div key={index} style={{ display: "flex" }}>
            <p style={{ width: "130px" }}>{`${item[0]}: `}</p>
            <p>{item[1]}</p>
          </div>
        ))}
    </div>
  );
};

export default UserPage;
