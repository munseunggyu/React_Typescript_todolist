import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { signState } from "./atom";
import { Wrapper } from "./Boards";

export const Title = styled.h1`
    color:white;
    font-size:30px;
    font-weight: 700;
    margin-bottom:30px;
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction:column;
`;
export const Input = styled.input`
    margin-bottom:10px;
    padding-left:10px;
    width:300px;
    height:50px;
    outline:none;
`;

export const SignBtn = styled.button`
    height:50px;
    margin-bottom:10px;
`;

interface SignInForm{
    id:string
}

function SignIn(){
    const navigate = useNavigate()
    const setsign = useSetRecoilState(signState)
    const goHome = () => {
        setsign(true)
        navigate('/')
    }
    const goSignUp = () => navigate('/signup')
    return (
        <Wrapper style={{flexDirection:'column'}}>
            <Title>
                TDL
            </Title>
            <FormWrapper>
                <Input 
                    placeholder='아이디를 입력해주세요'
                />
                <Input 
                    placeholder="비밀번호를 입력해주세요"
                />
                <SignBtn onClick={goHome} > 로그인 </SignBtn>
                <SignBtn onClick={goSignUp}  > 회원가입 </SignBtn>
            </FormWrapper>
        </Wrapper>
    )
}

export default SignIn;