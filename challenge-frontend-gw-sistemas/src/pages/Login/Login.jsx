import { FormLogin } from "components/Forms/FormLogin";
import { tabTitle } from "utils/ChangeTitle";
import * as S from "./Login.style";

export function Login() {
    tabTitle("Login");


    return (
        <S.Login>
            <S.Container>
                <FormLogin />
            </S.Container>
        </S.Login>
    );
}