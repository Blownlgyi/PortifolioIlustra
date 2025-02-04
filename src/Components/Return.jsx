import { useNavigate } from "react-router";

const Return = ()=>{
    
    const nav= useNavigate();

    const HandleReturn= ()=>{
        nav('/')
    }
    return(
        <div onClick={HandleReturn} className="return">
            &lt;
        </div>
    )
}
export default Return