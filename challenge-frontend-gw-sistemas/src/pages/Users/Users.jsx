import * as S from "./Users.style";
import { UserCard } from "components/UserCard/";

import { useEffect, useState } from "react";
import { tabTitle } from "utils/ChangeTitle";
import api from "services/api";

export function Users() {
  tabTitle('Users')

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('users?page=2').then(({ data }) => {
      setData(data.data);
    })
  }, []);

  return (
    <S.Users>
      <S.Container>
        <S.Title>List all users</S.Title>
        {data.map((item) => (<UserCard id={item.id} key={item.id} image={item.avatar} name={item.first_name} email={item.email} />))}
      </S.Container>
    </S.Users>

  );
}


