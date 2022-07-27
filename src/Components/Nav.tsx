import { useNavigate } from "react-router-dom";
import styled from "styled-components"


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
    const goSigin = () => navigate('/signIn')
    return(
        <NavWrapper>
            <NavLogo>
                TDL
            </NavLogo>
            <Sign onClick={goSigin}>
                로그인
            </Sign>
        </NavWrapper>
    )
}

export default Nav