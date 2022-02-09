import React, {useState, useEffect, useDebugValue} from "react"
import InputBox from '../../src/components/InputBox';
import { useSelector, useDispatch } from "react-redux";
import {setUser} from '../../src/reducers/user';
import {useRouter} from 'next/router';

const Login = () => {
    console.log('login component');
    const router = useRouter()

    const userState = useSelector(state => state.user);

    const dispatch = useDispatch();
    //rerendering.
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    useEffect(() => {
        console.log('use effect');
        // if(email.length >= 5){
        //     // alert('over 5 ');
        // }
    }, [email, pw])

    //state, 
    const login = (e) => {
		const _user = {
			email: "sungpah@gmail.com",
			firstName: "Customer Satisfaction Survey"
		}
		//user!!!
		dispatch(setUser(_user));
		router.push("/user/survey")

    }

    //props
    return <>
			<div className="loginPg">
				<div className = "flex fdr jcc">
						<img src="/images/logo.png" alt = "Google Logo"/>
					</div>
					<br/>
					<div className="flex fdr jcc"><InputBox text={"Email"} placeholder={"Enter your email"} value={email} onTextChange={e => setEmail(e.target.value)}/></div>
					<div className="flex fdr jcc"><InputBox text={"Password"} placeholder={"Enter your password"} value={pw} onTextChange={e => setPw(e.target.value)}/></div>
					<br/>
					<div className="flex fdr jcc">
				<div className = "loginBtn flex fdr jcc aic curP" onClick={e => login(e)}>Login</div>
					</div>
			</div>

        
        
    </>
}

export default Login