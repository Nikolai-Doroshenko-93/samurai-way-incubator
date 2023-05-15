import React, {ChangeEventHandler, useState} from "react";


const ProfileStatusWithHooks = (props: any) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
      setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: any) => {
      setStatus(e.currentTarget.value)
    }


    return (
        <>
            {!editMode && <div>
                <span
                    onDoubleClick={activateEditMode}
                >{props.status}</span>
            </div>}
            {editMode && <div>
                <input
                     onBlur={deActivateEditMode}
                     onChange={onStatusChange}
                     value={status}
                     autoFocus={true}
                ></input>
            </div>}
        </>
    )

}

export default ProfileStatusWithHooks