import {memo} from "react"

const style = {
    width:"100%",
    height:"200px",
    backgroundColor:"purple"
}


export const ChildArea = memo((props) => {
    const {open,onClickClose} = props;
    console.log("Childareaがレンダリングされた");

    const data = [ ...Array(2000).keys()];
    data.forEach(()=>{
        console.log("....");

    });


    return(
<>
    {open ? (
        <div style={style}>
            <h1>子コンポーネント</h1>
            <button onClick={onClickClose}>閉じる</button>

        </div>

    ):(null)}




</>

    )



});