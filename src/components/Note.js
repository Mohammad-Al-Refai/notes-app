import { useState } from 'react'
import {
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  DropdownItem,
} from 'reactstrap'

//Note Item
export function Note(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const reduceDescription = () => {
    if (props.description.length < 400) {
      return props.description
    } else {
      return props.description.substring(0, 400) + '...'
    }
  }
  return (
    <div className="note-container">
      <div className="note-title" onClick={props.onClick}>
        {props.title}
      </div>
      <div className="note-description" onClick={props.onClick}>
        {reduceDescription()}
      </div>
      <div className="d-flex gap-3 align-items-center justify-content-between">
        <Dropdown
          isOpen={isDropdownOpen}
          toggle={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <DropdownToggle tag="button" className="btn btn-action">
            <i className="bi bi-three-dots-vertical text-white" />
          </DropdownToggle>
          <DropdownMenu end={true}>
            <DropdownItem disabled={false} onClick={props.onDelete}>
              <i className="bi bi-trash p-2 font-size-18 text-danger" />
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="text-white">{props.updatedAt}</div>
      </div>
    </div>
  )
}
