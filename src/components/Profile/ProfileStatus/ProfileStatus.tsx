import React from "react";
import {ReactComponent} from "*.svg";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
    return (<>
        {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>Hello</span>
            </div>
        }
        {this.state.editMode &&
            <div>
                <input
                    value='hello'
                    onBlur={this.deActivateEditMode.bind(this)}
                    autoFocus={true}
                ></input>
            </div>
        }
    </>)
}
}

export default ProfileStatus