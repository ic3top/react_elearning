import {Formik, Field, Form} from "formik";
import "react-datepicker/dist/react-datepicker.css";

import {Button} from "../button/Button";

import './movie-form.scss';
import {Input} from "../input/Input";
import {useEffect, useState} from "react";

const options = [
  { value: 'documentary', label: 'Documentary' },
  { value: 'fiction', label: 'Fiction' },
  { value: 'criminal', label: 'Criminal' }
];

export const MovieForm = ({ movie }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    release: '',
    url: '',
    rating: '',
    genre: '',
    runtime: '',
    overview: ''
  });

  useEffect(() => {
    if (movie) setFormValues(movie);
  }, [movie]);

  return (
    <Formik
      enableReinitialize
      initialValues={formValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form className="movie-from">
        <div className="movie-form__wrapper">
          <Field name="title" component={Input} id="title" label="Title" type="text" />

          <Field
            component={Input}
            type="date"
            id="release"
            name="release"
            placeholder="Select Date"
            label="Release date"
          />

          <Field
            name="url"
            component={Input}
            placeholder="https://"
            id="url"
            label="Movie url"
            type="text"
          />

          <Field
            name="rating"
            component={Input}
            placeholder="7.8"
            id="rating"
            label="Rating"
            type="number"
            step=".1"
            max="10"
            min="1"
          />

          <Field
            name="genre"
            label="Genre"
            type="select"
            isMulti
            options={options}
            component={Input}
          />

          <Field
            name="runtime"
            component={Input}
            placeholder="minutes"
            id="runtime"
            label="Runtime"
            type="number"
          />

          <Field
            type="textarea"
            placeholder="Movie description"
            id="overview"
            name="overview"
            label="Overview"
            containerClasses="movie-form__textarea"
            component={Input}
          />
        </div>

        <div className="movie-form__actions">
          <Button className="movie-form__btn" color="secondary" type="reset">Reset</Button>
          <Button className="movie-form__btn" color="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  )
}
