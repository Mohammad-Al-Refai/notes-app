import Avatar from 'react-avatar'
import { SearchField } from './Fields'
import {
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  DropdownItem,
} from 'reactstrap'
import { useState } from 'react'

//App Header
export function Header(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className="header-container">
      <Dropdown
        isOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <DropdownToggle tag="button" className="btn btn-action">
          <Avatar
            name={props.userName}
            size="50"
            round={true}
            onClick={() => setIsDropdownOpen(true)}
          />
        </DropdownToggle>
        <DropdownMenu end={true}>
          <DropdownItem
            disabled={false}
            onClick={() => {
              localStorage.removeItem('user')
              window.location.href = '/login'
            }}
          >
            logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <i
        className="bi bi-arrow-clockwise icon-gray p-4"
        onClick={props.onRefresh}
      ></i>
    </div>
  )
}
