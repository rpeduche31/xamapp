import { useState, createContext, useContext, Context, useMemo } from 'react';

const UserListsContext: Context<{}> = createContext({});

export const UserListProvider = ({ children }: any) => {
  const [userList, setUserList] = useState<[]>([]);

  const getDefaultUserList = (data: []) => {
    const newUserList = data.map((item:{},index:number)=>{
        return {
            num: index + 1,
            ...item,
        }
    })
    setUserList(newUserList as []);
  };

  const addUser = (data: {}) => {
    const newUser = [...userList, data];
    const newUserList = newUser.map((item:{},index:number)=>{
        return {
            num: index + 1,
            ...item,
        }
    })
    setUserList(newUserList as []);
  };

  const removeUser = (id: string) => {
    const filteredList = userList
      ? userList?.filter((items: any) => `${items?.branchId}` !== id)
      : [];
    setUserList(filteredList as []);
  };

  const value = useMemo(
    () => ({
      getDefaultUserList,
      userList,
      addUser,
      removeUser,
    }),
    [userList],
  );

  return <UserListsContext.Provider value={value}>{children}</UserListsContext.Provider>;
};

export const useUserList: any = () => {
  return useContext(UserListsContext);
};
