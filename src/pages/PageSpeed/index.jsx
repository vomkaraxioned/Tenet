import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PageSpeed = () => {
  const website = useSelector(state => state.speedTestReducer.websiteName);
  const page = useSelector(state => state.speedTestReducer.pageName);
  const data = useSelector(state => state.pageDataReducer.data);
  
  const params = useLocation();

  return (
    <>
      {
        console.log(data)
      }
    </>
  )
}

export default PageSpeed;
