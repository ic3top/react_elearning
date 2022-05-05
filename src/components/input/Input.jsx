import './input.scss';
import DatePicker from "react-datepicker";
import datepickeImg from "../../assets/datepicker.svg";
import {selectStyles} from "./select-styles";
import Select from "react-select";

const minDatepickerDate = (new Date()).setFullYear(1980);
const maxDatepickerDate = new Date();

export const Input = ({
    id,
    label,
    className,
    containerClasses,
    type,
    form,
    field,
    ...props
  } = { type: 'text', className: '', containerClasses: '' }
) => {
  const { setFieldValue } = form;
  const errorMsg = form.errors?.[field.name];

  return (
    <div className={`input ${containerClasses}`}>
      <label className="input__label" htmlFor={id}>{label}</label>
      {
        type === 'date'
          ?
        <div className="input_datepicker">
          <DatePicker
            className={`input__field ${className} ${errorMsg && 'input__field_error'}`}
            id={id}
            onChange={d => setFieldValue(field.name, d.toDateString())}
            value={field.value}
            {...props}
            maxDate={maxDatepickerDate}
            minDate={minDatepickerDate}
          />
          <img src={datepickeImg} alt="calendar"/>
        </div>
          : type === 'select'
          ?
            <Select
              id={id}
              styles={selectStyles(errorMsg)}
              {...props}
              onChange={options => {
                setFieldValue(field.name, options);
              }}
              value={field.value.map(value => {
                return typeof value === 'string' && { value, label: value } || value
              })}
            />
          : type === 'textarea'
              ? <textarea
                  {...props}
                  className={`input__field ${className} ${errorMsg && 'input__field_error'}`}
                  id={id}
                  onChange={e => setFieldValue(field.name, e.target.value)}
                  value={field.value}
                />
          : <input
              className={`input__field ${className} ${errorMsg && 'input__field_error'}`}
              id={id}
              type={type}
              {...props}
              onChange={e => setFieldValue(field.name, e.target.value)}
              value={field.value}
            />
      }
      <span className="input__errors">{errorMsg}</span>
    </div>
  )

}
