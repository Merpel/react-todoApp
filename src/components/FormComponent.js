import React from "react"

class FormComponent extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="todoForm">
                <p>Creata a new todo for the list</p>
                <input placeholder="Description" name="text" value={this.props.data.text} type="text" onChange={this.props.handleChange} /><br />
                <button>Submit</button>
            </form>
        )
    }
}

export default FormComponent;