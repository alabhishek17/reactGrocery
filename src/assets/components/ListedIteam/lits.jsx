function ListedItem({label="",deletFun,id,isChecked,checkedFun}){
    return(
        <div style={{listStyle:"none"}}>
            <li style={{display:"flex",justifyContent:"space-between",marginLeft:"200px",marginTop:"40px",fontSize:"1.5rem",backgroundColor:"GrayText",width:"40%",padding:"20px"}}>
       <input type="checkbox" onClick={()=>checkedFun(id)}/>
       
       
       <p style={{textDecoration: isChecked ? "line-through":""}}>{label}</p>
       

       <button style={{padding:"10px",backgroundColor:"black",color:"white"}} onClick={()=>deletFun(id)}>delete</button>
       </li>
        </div>
    )
}
export default ListedItem;