import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {userLogOut} from '../src/reducers';

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const user = useSelector(state => state.user.user);
  

  console.log('-----')
  console.log(userState);

  //userState.setCnt

  const moveToLogin = (e) => {
    
    if (3 !== 5) {
      //move to login
      router.push("/user/login");
    }else{
      alert('3 is equal to 5')
    }
  }

  const logout = () => {
    dispatch(userLogOut());
  }

  return (
    <div className="container">
      <Head>
        <title>Google Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user ?
      <div>{user.firstName}
        <div onClick={e => logout()}>Start !!</div>
      </div>
      :
      <div>
      <div className = "flex fdr jcc">
        <img src="/images/survey.png" className = "w300" style={{marginTop: '65px'}} alt = "Survey Logo"/>
      </div>
      <br/>
      <br/>
      <div className = "flex fdr jcc"><Link href="/user/login">
        <a>Move to Link</a>
      </Link>
      </div>

      <div className = "flex fdr jcc"><div onClick={e => moveToLogin(e)}>
        <br/>
        This is Google Form for Customers
      </div>
      </div>
      </div>
      }

    </div>
  )
}