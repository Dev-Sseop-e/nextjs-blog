import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {userLogOut} from '../../src/reducers';
import InputBox from '../../src/components/InputBox';
import {useState} from 'react'

const Survey = () => {
    const [answer, setAnswer] = useState("");

return <>
    <div>
        Welcome to Our Survey!<br/>
        This is for BaedaluiMinjok customer service survey.<br/>
    <br/>
    </div>
    <div>
        <div>1. 전화번호를 입력해주세요.</div>
            <InputBox text={"ex) 000-0000-0000"} placeholder={"답변을 입력해주세요."} onTextChange={(e) => setAnswer(e.target.value)}/>
    </div>
        <br/>

    <div>
        <div>2. 배민의 좋은 점을 체크해 주세요.</div>
        <div><input type="checkbox"/> 편리한 UI</div>
        <div><input type="checkbox"/> 다양한 음식점</div>
        <div><input type="checkbox"/> 빠른 배달 속도</div>
        <div><input type="checkbox"/> 간편한 결제 시스템</div>
        <div><input type="checkbox"/> 좋은 점이 없다.</div>
    </div>
    <br/>
    <Link href="../">
        <a>Submit !!</a>
    </Link>

</>

}


export default Survey