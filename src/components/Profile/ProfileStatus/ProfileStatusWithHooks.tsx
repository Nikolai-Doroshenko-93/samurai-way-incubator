import React, {useEffect, useState} from "react";
import s from'./ProfileStatus.module.css'
import {IconPensilForStatus} from "../../../assets/icons/IconPensilForStatus";


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
                <div className={s.statusBox}>
                    <span
                        onDoubleClick={activateEditMode}>
                        {props.status || '======'}
                    </span>
                    <span onClick={activateEditMode} className={s.iconBox}><IconPensilForStatus /></span>
                </div> }
            { editMode && <div>
                <input
                     onBlur={deActivateEditMode}
                     onChange={onStatusChange}
                     value={status}
                     autoFocus={true}
                     className={s.input}
                ></input>
            </div> }
        </div>
    )

}

export default ProfileStatusWithHooks