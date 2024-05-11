function ListedItem({label="",deletFun,id,isChecked,checkedFun}){
    return(
        <div style={{listStyle:"none"}}>
            <li>
       <input type="checkbox" onClick={()=>checkedFun(id)}/>
       
       
       <p style={{textDecoration: isChecked ? "line-through":""}}>{label}</p>
       

       <button onClick={()=>deletFun(id)}>delete</button>
       </li>
        </div>
    )
}
export default ListedItem;