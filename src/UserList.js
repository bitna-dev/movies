import React, {useEffect} from "react"


function User({user, onRemove, onToggle}) {
    const {name, email, id, active} = user;
    useEffect(()=> {
        console.log("컴포넌트가 화면에 나타남");
        // props -> state
        // REST API
        // D3 video.js
        // setInterval, setTimeout

        return() => {
            console.log("컴포넌트가 사라짐.");
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            // 뒷정리 함수
        }
    },[user])
    return(
        <div key={user.id}>
            <b onClick={() => onToggle(id)}
                style={{
                color: active ? 'red' : 'black',
                cursor: 'pointer'
                }}>{name}</b> (<span>{email}</span>)
            &nbsp;
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    )
}
function UserList({users, onRemove, onToggle}){

    return (
        <div>
            <div>
                {users.map((user) => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />))}
            </div>
        </div>
    );
}

export default UserList;