import * as S from "./Register.style";
import { FormRegister } from "components/Forms/FormRegister";

import { tabTitle } from "utils/ChangeTitle";

export function Register() {
    tabTitle("Register");

    return (
        <S.Register>
            <S.Container>
                <FormRegister />
            </S.Container>
        </S.Register>
    );
}
