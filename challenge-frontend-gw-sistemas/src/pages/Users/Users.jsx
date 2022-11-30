import * as S from "./Users.style";
import { UserCard } from "components/UserCard/";

import { useEffect, useMemo, useState } from "react";
import { tabTitle } from "utils/ChangeTitle";
import api from "services/api";

export function Users() {
  tabTitle('Users')

  const [users, setUsers] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    api.get('users?page=2').then(({ data }) => {
      setUsers(data.data);
    })
  }, []);

  const usersFilter = useMemo(() => {
    const lowerCaseBusca = busca.toLowerCase();

    return users.filter(user => user.first_name.toLowerCase().includes(lowerCaseBusca));

  }, [busca, users])

  return (
    <S.Users>
      <S.Container>
        <S.Box>
          <S.Title>List all users</S.Title>
          <S.Input placeholder="Busca por nome" type="text" value={busca} onChange={(e) => setBusca(e.target.value)} />
        </S.Box>
        {usersFilter.map((item) => (<UserCard id={item.id} key={item.id} image={item.avatar} name={item.first_name} email={item.email} />))}
      </S.Container>
    </S.Users>

  );
}
