import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageData } from "../../store/reducers/dataSlice";
import { speedTest } from "../../store/reducers/pageSlice";
import { apiHandler } from "../../api/apiHandler";
import { Button } from "../../components/Button";

const Dashboard = () => {

    const userLogged = useSelector(state => state.loginReducer.login);
    const data = useSelector(state => state.pageDataReducer.data);
    const dispatch = useDispatch();

    const redirect = (website, page) => {
         dispatch(speedTest({website,page}));
        //  window.location.href = `page-speed?q=${website}&${page}`;
    }

    const objectIterator = () => {
        const tempArr = [];
        for (let x in data) {
            tempArr.push(
                <li className="website-name" key={x}>
                    <h2>{x}</h2>
                    <ul className="pages">
                        {
                            data[x].map((obj, i) => {
                                const page = obj.page;
                                return (
                                    <li key={i}>
                                        <h3>{page}</h3>
                                        <Button
                                            name="speed test"
                                            styleName="btn-speed-test"
                                            clickHandler={() => redirect(x, page)}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            )
        }
        return tempArr;
    }

    useEffect(() => {
        const { id } = userLogged;
        apiHandler("/details", { id }, (data) => dispatch(pageData(data)));
    }, []);

    return (
        <>
        <button onClick={()=>window.location.href="page-speed"}>click me</button>
        <ul className="websites">
            {
                objectIterator()
            }
        </ul>
        </>
    )
}

export default Dashboard;