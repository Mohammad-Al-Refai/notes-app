import { Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AddNote } from '../components/AddNote'
import { DashboardContainer } from '../components/DashboardContainer'
import { Header } from '../components/Header'
import { Note } from '../components/Note'
import { NotesList } from '../components/NotesList'

import { CustomButton } from '../components/Button'
import {
  addNote,
  callCreateUser,
  callGetUserData,
  deleteNote,
  updateNote,
} from '../store/Main/actionTypes'

function Dashboard(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isShowNote, setIsShowNote] = useState(false)
  const [note, setNote] = useState({})
  useEffect(() => {
    props.callGetUserData()
    return () => false
  }, [])
const formatDate=()=>{
  console.log(new Date(note.updatedAt))
 return ""
}
  return (
    <DashboardContainer>
      <Header
        userName={props.userName}
        onRefresh={() => {
          props.callGetUserData()
        }}
      />
      <div className="w-100 d-flex align-content-center justify-content-center p-5">
        <AddNote
          title={title}
          description={description}
          onChangeTitle={(value) => setTitle(value)}
          onChangeDescription={(value) => setDescription(value)}
          isOpen={isOpen}
          onOpen={() => setIsOpen(!isOpen)}
          onClose={() => {
            if (title !== '' && description !== '') {
              props.addNote({ title, description })
            }
            setIsOpen(!isOpen)
            setDescription('')
            setTitle('')
          }}
        />
      </div>
      <div>
        {props.notes.length === 0 ? (
          <h1 className="text-center text-white">Notes you add appear here</h1>
        ) : (
          <NotesList>
            {props.notes.map((note) => (
              <Note
                key={note._id}
                title={note.title}
                updatedAt={formatDate()}
                description={note.description}
                onClick={() => {
                  setNote(note)
                  setTitle(note.title)
                  setDescription(note.description)
                  setIsShowNote(true)
                }}
                onDelete={() => {
               
                  props.deleteNote({ id: note._id })
                }}
              />
            ))}
          </NotesList>
        )}
      </div>
      <Modal
        show={isShowNote}
        onHide={() => {
          setIsShowNote(!isShowNote)
          setDescription('')
          setTitle('')
        }}
        backdrop="static"
      >
        <Modal.Header className="modal-container">
          <input
            value={title}
            className="input-filed-title"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            placeholder="Title"
          ></input>
        </Modal.Header>
        <Modal.Body className="modal-container">
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            className="input-filed-textarea"
            placeholder="Take a note"
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="modal-container">
          <CustomButton
            title="Close"
            onClick={() => {
              props.updateNote({
                uid: props.uid,
                id: note._id,
                title,
                description,
              })
              setDescription('')
              setTitle('')
              setIsShowNote(false)
            }}
          />
        </Modal.Footer>
      </Modal>
    </DashboardContainer>
  )
}

let mapStateToProps = (state) => {

  return {
    uid: state.MainReducer.uid,
    notes: state.MainReducer.notes,
    errors: state.MainReducer.errors,
    userName: state.MainReducer.userName,
  }
}

export default connect(mapStateToProps, {
  callGetUserData,
  addNote,
  updateNote,
  deleteNote,
})(Dashboard)
