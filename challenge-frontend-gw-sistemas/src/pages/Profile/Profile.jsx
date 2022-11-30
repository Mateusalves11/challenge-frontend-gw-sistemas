import * as S from './Profile.style';
import { ProfileCard } from "components/ProfileCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";
import { tabTitle } from 'utils/ChangeTitle';

export function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get(`users/${id}`).then(({ data }) => {
      setUser(data.data);
    })
  }, [id]);

  tabTitle(`User - ${user.first_name}`);
  return (
    user.first_name ?
      <S.Profile>
        <S.Container>
          <ProfileCard name={user.first_name} LastName={user.last_name} email={user.email} image={user.avatar} />
        </S.Container>
      </S.Profile> : <h1>Loading...</h1>
  );
}
