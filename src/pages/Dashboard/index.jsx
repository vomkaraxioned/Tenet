import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { pageData } from "../../store/reducers/dataSlice";
import { apiHandler } from "../../api/apiHandler";

const Dashboard = ()=>{

    const userLogged = useSelector(state => state.loginReducer.login);
    const data = useSelector(state => state.pageDataReducer.data);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const { id } = userLogged;
        apiHandler("/details",{id},(data)=>dispatch(pageData(data)));
    },[]);

    return(
        <ul>
        {
            data.map(obj=>{
                
            })
        }
        </ul>
    )
}

export default Dashboard;