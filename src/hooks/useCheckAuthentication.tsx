import { useState } from 'react';
import { useUserList } from '../context/userLists';

export const useCheckAuthentication = () => {
  const [withError, setWithError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { userList } = useUserList();

  const getInputtedCredentials = (
    branchId: string,
    username: string,
    password: string,
  ) => {
    setLoading(true);
    const crossCheckedBranchId = userList.filter((item: any) => `${item.branchId}` === branchId);

    if(crossCheckedBranchId[0]){
        if (!(crossCheckedBranchId[0].userName === username && crossCheckedBranchId[0].password === password)) {
            setWithError('mismatched');
          }else{
              setWithError('');
          }
    }else{
        setWithError('missing');
    }

    setLoading(false);
  };

  return {
    getInputtedCredentials,
    withError,
    loading,
  };
};
