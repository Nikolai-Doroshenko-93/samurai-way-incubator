import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props: any) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
        <div>
            { !editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}>
                        {props.status || '======'}
                    </span>
                </div> }
            { editMode && <div>
                <input
                     onBlur={deActivateEditMode}
                     onChange={onStatusChange}
                     value={status}
                     autoFocus={true}
                ></input>
            </div> }
        </div>
    )

}

export default ProfileStatusWithHooks