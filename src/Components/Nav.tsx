import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components"
import { signState } from "../atom";


const NavWrapper = styled.nav`
width:100%;
height:80px;
background-color: #DADFE9;
padding:0 80px;
position:fixed;
display: flex;
justify-content:space-between;
align-items:center;
`;
const NavLogo = styled.div`
    font-size:30px;
    font-weight:700;
`;
const Sign = styled.button`
    background-color: #dadfe9e8;
    padding:5px 10px;
`

function Nav(){
    const navigate = useNavigate()
    const goSign = () => navigate('/signin')
    const [sign,setSign] = useRecoilState(signState)
    const SignOut = () => {
        setSign(prev => prev -1)
    }
    return(
        <NavWrapper>
            <NavLogo>
                TDL
            </NavLogo>
           { sign === 1 ?
            <Sign onClick={SignOut}>
                로그아웃
            </Sign>
            : <Sign onClick={goSign}>
                로그인
            </Sign> }
        </NavWrapper>
    )
}

export default Nav