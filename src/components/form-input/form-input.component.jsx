import {FormInputLabel, Input, Group} from './form-input.styles.jsx';

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
        <Input {...otherProps}/>
        {  label && (

            <FormInputLabel
                shrink={otherProps.value.length} // if has length is true otherwise it is false. Based on that will be css displayed 
            > 
                {label}
            </FormInputLabel>
        )}
            
    </Group>
  )
}

export default FormInput