import { FieldBox, FieldLabel, FieldPosition, FieldInput } from "../Form/Form.styled"

export const Filter = ({ value, onFilter }) => { 

  return (
    <FieldBox>
      <FieldLabel>Find contacts by name
        <FieldPosition>
          <FieldInput
            type="text"
            value={value}
            onChange={onFilter}
          />
        </FieldPosition>
      </FieldLabel>
    </FieldBox>
  );
  
}