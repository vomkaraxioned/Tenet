export const Button = ({name,styleName,clickHandler})=>{

  return(
    <button onClick={clickHandler} className={styleName}>{name}</button>
  )
}