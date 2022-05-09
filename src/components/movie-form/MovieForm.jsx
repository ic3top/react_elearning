import {Formik, Field, Form} from "formik";
import {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";

import {MovieSchema} from './movieSchema';

import {Button} from "../button/Button";

import './movie-form.scss';
import {Input} from "../input/Input";

const options = [
  { value: "Drama" },
  { value: "Romance" },
  { value: "Animation" },
  { value: "Adventure" },
  { value: "Family" },
  { value: "Comedy" },

  { value: "Fantasy" },
  { value: "Science Fiction" },
].map(({ value }) => ({ value, label: value }));

export const MovieForm = ({ movie, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: '',
    genres: [],
    runtime: '',
    overview: ''
  });

  useEffect(() => {
    if (movie) setFormValues(movie);
  }, [movie]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={formValues}
      validationSchema={MovieSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        console.log(values.genres)
        const movie = {
          ...values,
          runtime: Number(values.runtime),
          vote_average: Number(values.vote_average),
          release_date: new Date(values.release_date).toISOString(),
          tagline: 'tagline'
        }

        onSubmit(movie)
      }}
    >
      <Form className="movie-from">
          <div className="movie-form__wrapper">
            <Field
              name="title"
              component={Input}
              id="title"
              label="Title"
              type="text"
              placeholder="Movie title"
            />

            <Field
              component={Input}
              type="date"
              id="release_date"
              name="release_date"
              placeholder="Select Date"
              label="Release date"
            />

            <Field
              name="poster_path"
              component={Input}
              placeholder="https://"
              id="poster_path"
              label="Movie poster url"
              type="text"
            />

            <Field
              name="vote_average"
              component={Input}
              placeholder="7.8"
              id="vote_average"
              label="Rating"
              type="number"
              step=".1"
              max="10"
              min="1"
            />

            <Field
              name="genres"
              label="Genre(s)"
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
