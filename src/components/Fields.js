//Fields
export function UserNameField(props) {
  function handleOnChange(event) {
    var reg = /^[a-zA-Z-_]+$/
    if (reg.test(event.target.value)) {
      props.onChange(event.target.value)
      props.isValid(true)
    } else {
      props.onChange(event.target.value)
      props.isValid(false)
    }
  }
  return (
    <input
      className="input-filed w-100"
      placeholder={props.placeholder}
      onChange={handleOnChange}
    />
  )
}
export function PINField(props) {
  function handleOnChange(event) {
    var reg = /^[0-9]+$/
    if (reg.test(event.target.value)) {
      props.onChange(event.target.value)
      props.isValid(true)
    } else {
      props.onChange(event.target.value)
      props.isValid(false)
    }
  }
  return (
    <input
      className="input-filed w-100"
      type="tel"
      placeholder={props.placeholder}
      onChange={handleOnChange}
    />
  )
}

export function ErrorMessage(props) {
  return (
    <div
      className={
        'w-100 ' +
        (props.isShow === null
          ? 'd-none'
          : props.isShow === false
          ? ''
          : 'd-none')
      }
    >
      <p className="filed-error w-100">{props.message}</p>
    </div>
  )
}

export function SearchField(props) {
  function handleOnChange(event) {
    props.onChange(event.target.value)
  }
  return (
    <input
      className="input-filed-search "
      placeholder={props.placeholder}
      onChange={handleOnChange}
    />
  )
}
