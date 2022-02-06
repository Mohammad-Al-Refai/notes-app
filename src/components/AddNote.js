import { CustomButton } from './Button'

export function AddNote(props) {
  return (
    <div className="add-note-container">
      {props.isOpen ? null : (
        <div className="add-note-label" onClick={props.onOpen}>
          Take a note...
        </div>
      )}
      {props.isOpen ? (
        <div className="w-100">
          <input
            value={props.title}
            className="input-filed-title"
            onChange={(e) => {
              props.onChangeTitle(e.target.value)
            }}
            placeholder="Title"
          ></input>
          <textarea
            value={props.description}
            onChange={(e) => {
              props.onChangeDescription(e.target.value)
            }}
            className="input-filed-textarea"
            placeholder="Take a note"
          ></textarea>
        </div>
      ) : null}
      {props.isOpen ? (
        <div className="w-100 d-flex justify-content-end">
          <CustomButton title="Close" onClick={props.onClose} />
        </div>
      ) : null}
    </div>
  )
}
