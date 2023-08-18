import React, {useState} from "react";
import { FieldBox, FieldLabel, FieldPosition, FieldInput, Button } from "./Form.styled"


export const Form = ({ onSubmit }) => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
 
  // Отвечает за обновление состояния
  const handleChangeName = e => {
    const {value} = e.target
    setName( value );
  };

  const handleChangeNumber = e => {
    const {value} = e.target
    setNumber( value );
  };

  // // Вызывается при отправке формы
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(`Signed up as: ${this.state}`);

    // Проп который передается форме для вызова при сабмите
    onSubmit({ ...{name, number} });
    
    reset();
  };
  
  // clear Form
  const reset = () => {
    setName("");
    setNumber("");
  }

  return (
      <form onSubmit={handleSubmit}>
        <FieldBox>
          <FieldLabel>
            Name
            <FieldPosition>
              <FieldInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-ЯіІїЇєЄ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄ])?[a-zA-Zа-яА-ЯіІїЇєЄ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={ name }
                onChange={ handleChangeName }
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
                onChange={ handleChangeNumber }
              />
            </FieldPosition>
          </FieldLabel>
        </FieldBox>

        <Button type="submit">Save</Button>
      </form>
    )
  
}
