export function CustomButton(props) {
  return (
    <button className="custom-button" onClick={props.onClick}>
      {props.title}
    </button>
  )
}
