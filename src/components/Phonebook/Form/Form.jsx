import React, {Component} from "react";
import { FieldBox, FieldLabel, FieldPosition, FieldInput, Button } from "./Form.styled"


export class Form extends Component {

  state = {
    name : "",
    number : "",
  }
 
  // Отвечает за обновление состояния
  handleChange = e => {
    const {name, value} = e.target
    this.setState({ [name]: value });
  };

  // // Вызывается при отправке формы
  handleSubmit = e => {
    e.preventDefault();
    // console.log(`Signed up as: ${this.state}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
    
    this.reset();
  };
  
  // clear Form
  reset = () => {
    this.setState({name: "", number: ""})
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <FieldBox>
          <FieldLabel>
            Name
            <FieldPosition>
              <FieldInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={ name }
                onChange={ this.handleChange }
              />
            </FieldPosition>
          </FieldLabel>
        </FieldBox>

        <FieldBox>
          <FieldLabel>
            Number
            <FieldPosition>
              <FieldInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={ number }
                onChange={ this.handleChange }
              />
            </FieldPosition>
          </FieldLabel>
        </FieldBox>

        <Button type="submit">Save</Button>
      </form>
    )
  }
  
}