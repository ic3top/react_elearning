import styles from './Input.module.scss';
import "react-datepicker/dist/react-datepicker.css";

import Image from 'next/image';

import DatePicker from "react-datepicker";
import Select from "react-select";

import datepickerImg from "/public/img/datepicker.svg";
import { selectStyles } from "./select-styles";

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
    <div className={`${styles.input} ${containerClasses}`}>
      <label className={styles.input__label} htmlFor={id}>{label}</label>
      {
        type === 'date'
          ?
        <div className={styles.input_datepicker}>
          <DatePicker
            className={`${styles.input__field} ${errorMsg && styles.input__field_error}`}
            id={id}
            onChange={d => { console.log(d); setFieldValue(field.name, d.toDateString()) }}
            value={field.value}
            {...props}
            maxDate={maxDatepickerDate}
            minDate={minDatepickerDate}
          />
          <div className={styles["input_datepicker-img"]}><Image src={datepickerImg} alt="calendar"/></div>

        </div>
          : type === 'select'
          ?
            <Select
              id={id}
              styles={selectStyles(errorMsg)}
              {...props}
              onChange={options => {
                setFieldValue(field.name, options.map(({ value }) => value));
              }}
              value={field.value.map(value => {
                return typeof value === 'string' && { value, label: value } || value
              })}
            />
          : type === 'textarea'
              ? <textarea
                  {...props}
                  className={`${styles.input__field} ${className} ${errorMsg && styles.input__field_error}`}
                  id={id}
                  onChange={e => setFieldValue(field.name, e.target.value)}
                  value={field.value}
                />
          : <input
              className={`${styles.input__field} ${errorMsg && styles.input__field_error}`}
              id={id}
              type={type}
              {...props}
              onChange={e => setFieldValue(field.name, e.target.value)}
              value={field.value}
            />
      }
      <span className={styles.input__errors}>{errorMsg}</span>
    </div>
  )

}
