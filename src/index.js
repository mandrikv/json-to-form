import React, { Component } from 'react'
import { object } from 'prop-types'

const VALID_TYPE_INPUT = [
  'string',
  'number',
  'password'
];

export default class ExampleComponent extends Component {
  static propTypes = {
    schema: object
  };

  isRequired (field) {
    const {
      schema: {
        required
      }
    } = this.props;

    return required.indexOf(field) >= 0;
  }

  inputTypeCheck (type) {
    return VALID_TYPE_INPUT.indexOf(type) >= 0 ? type : 'text';
  }

  renderItem (id, property) {
    const {
      onChange
    } = this.props;

    const {
      title,
      type,
    } = property;

    const isRequired = this.isRequired(id);

    return (
      <div
        key={id}
      >
        <label
          key={id}
          htmlFor={id}
        >
          {title}
          {isRequired && '*'}
        </label>

        <input
          type={this.inputTypeCheck(type)}
          id={id}
          required={isRequired}
          defaultValue={property['default']}
          onChange={onChange}
        />
      </div>
    )
  }

  render() {
    const {
      onSubmit,
      schema: {
        title,
        description,
        properties,
      }
    } = this.props;

    return (
      <form
        onSubmit={onSubmit}
      >
        {title &&
          (<h1>{title}</h1>)
        }
        {description &&
          (<p>{description}</p>)
        }
        {properties && Object.keys(properties).map(id => {
          return this.renderItem(id, properties[id])
        })}
        <input
          type='submit'
          value='Submit'
        />
      </form>
    )
  }
}
