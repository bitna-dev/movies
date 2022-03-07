import React, {useState, useRef} from "react"


function Sample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname:'',
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;

    const reset = () => {
        setInputs({
            name: "",
            nickname: "",
        })
        nameInput.current.focus();
       
    }
    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
        // const nextInputs = {
        //     ...inputs,
        //     [name]: value
        // }
        // setInputs(nextInputs);
        // const nextInputs = {
        //     ...inputs
        // }
        // nextInputs[name] = value;
    }
    // useEffect(() => {

    // },[value]);
    return(
        <>
            <input ref={nameInput} placeholder="이름" name="name" value={name} onChange={onChange} />
            <input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange} />
            <button onClick={reset}>초기화</button>
            <div>
                <b>{name} ({nickname})</b>
            </div>
        </>
    );
}

export default Sample;