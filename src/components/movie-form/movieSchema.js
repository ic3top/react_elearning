 import * as Yup from 'yup';

export const MovieSchema = Yup.object().shape({
    title: Yup.string()
         .min(2, 'Too Short.')
         .max(100, 'Too Long.')
         .required('Required.'),
    overview: Yup.string()
          .min(5, 'Too short.')
          .max(500, 'Too long.')
          .required('Required.'),
    poster_path: Yup.string()
          .url('Must be a valid url.')
          .required('Required.'),
    release_date: Yup.date().required('Required.'),
    runtime: Yup.number()
           .min(1, 'Must be grater than 1min.')
           .max(1000, 'No more than 1000mins.')
           .required('Required.'),
    vote_average: Yup.number()
           .min(1, 'Must be grater than 1.')
           .max(10, 'No more than 10.')
           .required('Required.'),
    genres: Yup.array().min(1, 'Select at least one genre.'),
})
