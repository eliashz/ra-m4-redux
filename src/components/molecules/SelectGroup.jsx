import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, Select, SelectOption } from '../atoms'

const SelectGroupStyled = styled.div``

function SelectGroup({
  label,
  id,
  onChange,
  options = [],
  defaultValue = '',
  defaultText = '',
  hideLabel = false,
  ...rest
}) {
  return (
    <SelectGroupStyled>
      <Label htmlFor={id} hideLabel={hideLabel}>
        {label}
      </Label>
      <Select
        id={id}
        name={id}
        onChange={onChange}
        {...rest}
        defaultValue={defaultValue}
      >
        <SelectOption value="" disabled>
          {defaultText}
        </SelectOption>
        {options.map((option) => (
          <SelectOption value={option} key={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </SelectOption>
        ))}
      </Select>
    </SelectGroupStyled>
  )
}

SelectGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.string,
  defaultText: PropTypes.string,
  hideLabel: PropTypes.bool,
}

export default styled(SelectGroup)``
