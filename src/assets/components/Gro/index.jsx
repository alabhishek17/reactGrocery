import { useState } from "react";
import ListedItem from "../ListedIteam/lits";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
function Index() {
    const [groceryInput, setGroceryInput] = useState("");
    const [groceryList, setGroceryList] = useState([]);

    const InputChange = (e) => {
        setGroceryInput(e.target.value)
    }

    //array inserting
    const addIteam = () => {
        //    const result={
        //     iteam:groceryInput
        //    }
        //    setGroceryList([...groceryList,result]);
        if (groceryInput === "") {
            toast.error("empty search!");
            return;
        }

        //array inserting
        setGroceryList([...groceryList, { iteam: groceryInput, id: uuidv4(), isChecked:false}]);

        //clear Input
        setGroceryInput("");

        //get succsfull toast

        toast.success("iteam is add")

    }
        //delete listed Iteam
        const deleteListedIteam=(id)=>{
            const newfilterArry=groceryList.filter((iteam)=> iteam.id !=id);
            setGroceryList(newfilterArry);
            toast.success("iteam is deleted")
        }
          
        //checked function

        const checkedList=(id)=>{
            const newCheckedList=groceryList.map((iteam)=>{
                if(iteam.id===id){
                    iteam.isChecked=!iteam.isChecked;
                }
                return iteam;
            })
            setGroceryList(newCheckedList);
        }
    return (
        <div style={{border:"2px solid black",width:"50%",textAlign:"center",padding:"40px",margin:"40px 50px 00px 400px",backgroundColor:"greenyellow"}}>
            <h1 style={{marginBottom:"20px"}} >Grocery List</h1>
            <input style={{padding:"20px"}} type="text" placeholder="search" value={groceryInput} onChange={InputChange} />
            <button style={{padding:"20px", backgroundColor:"CaptionText",color:"white",marginLeft:"10px"}} onClick={addIteam}>Add</button>

            <section>
                <ul>
                    {
                        groceryList.map((element) => (
                            <ListedItem key={element.id} label={element.iteam} id={element.id} deletFun={deleteListedIteam} isChecked={element.isChecked} checkedFun={checkedList}/>
                        ))
                    }
                </ul>
            </section>
        </div>



    )
}
export default Index;