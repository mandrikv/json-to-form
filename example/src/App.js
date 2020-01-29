import React, {Component} from 'react'

import Form from 'json-to-form'

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "text",
      "title": "First name",
      "default": "Max"
    },
    "lastName": {
      "type": "text",
      "title": "Last name",
      "default": "Payne"
    },
    "Birthday": {
      "type": "number",
      "title": "Birthday"
    },
    "Password": {
      "type": "password",
      "title": "Password"
    }
  }
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Form
          onChange={(e) => {
            console.log('changed: ', e.target.value)
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit: ', e.target)}
          }
          schema={schema}
        />
      </div>
    )
  }
}
