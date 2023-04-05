import React, {ChangeEventHandler} from "react";
import {ReactComponent} from "*.svg";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        //@ts-ignore
        status: this.props.status
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
        //@ts-ignore
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        //@ts-ignore
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
}

    render() {
    return (<>
        {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>
                    {
                        //@ts-ignore
                        this.props.status || "===="
                    }
                </span>
            </div>
        }
        {this.state.editMode &&
            <div>
                <input
                    //@ts-ignore
                    ref={this.statusInputRef}
                    //@ts-ignore
                    value={this.state.status}
                    onChange={this.onStatusChange}
                    onBlur={this.deActivateEditMode}
                    autoFocus={true}
                ></input>
            </div>
        }
    </>)
}
}

export default ProfileStatus