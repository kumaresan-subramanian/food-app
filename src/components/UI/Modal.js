import classes from "./Modal.module.css";
import ReactDOM from "react-dom"

const Backdrop = props => {
  return <div className={classes.backdrop}
  onClick={props.onClick}></div>
}

const ModalOverlay = props => {
  return (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
  )
}

export const Modal = (props) => {

  const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onCartHandler}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}