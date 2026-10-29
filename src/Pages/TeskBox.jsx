import style from './Task.module.css'
const TeskBox = (props) => {
  return (
    <div >
      <div className={style.box}>
        <div className={style.imageSection}>
            <img src={props.icon} alt=""/>
        </div>
        <div className={style.TaskCount}>
            <p>{props.names}</p>
            <h3>{props.counts}</h3>
        </div>
      </div>
    </div>
  )
}

export default TeskBox
