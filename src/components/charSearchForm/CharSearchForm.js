import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

//import setContent from "../../utils/setContent";

import "./charSearchForm.scss";


const setContent = (process, Component, data) => {
  switch (process) {
    case "waiting":
      break
    case "loading":
      break
    case "confirmed":
      return <Component data={data} />;
    case 'not_found':
      return (
        <div className="char__search-error">
          The character was not found. Check the name and try again
        </div>
      )
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const Confirmed = ({data}) => {
  return (
    <div className="char__search-wrapper">
      <div className="char__search-success">
        There is! Visit {data[0].name} page?
      </div>
      <Link
        to={`/char/${data[0].id}`}
        className="button button__secondary"
      >
        <div className="inner">To page</div>
      </Link>
    </div>
  )
}

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const { loading, getCharacterByName, clearError,process,setProcess } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);

    char.length > 0 ? setProcess("confirmed") : setProcess("not_found");
  };


  const updateChar = (name) => {
    clearError();

    getCharacterByName(name)
      .then(onCharLoaded)



      // .then((char)=> {char.length > 0 ? setProcess("confirmed") : setProcess('not_found')});
  };

  // const errorMessage = error ? (
  //   <div className="char__search-critical-error">
  //     <ErrorMessage />
  //   </div>
  // ) : null;
  // const results = !char ? null : char.length > 0 ? (

  // ) : (

  // );


  return (
    <div className="char__search-form">
      <Formik
        initialValues={{
          charName: "",
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required("This field is required"),
        })}
        onSubmit={({ charName }) => {
          updateChar(charName);
        }}
      >
        <Form>
          <label className="char__search-label" htmlFor="charName">
            Or find a character by name:
          </label>
          <div className="char__search-wrapper">
            <Field
              id="charName"
              name="charName"
              type="text"
              placeholder="Enter name"
            />
            <button
              type="submit"
              className="button button__main"
              disabled={process === "loading"}
            >
              <div className="inner">find</div>
            </button>
          </div>
          <FormikErrorMessage
            component="div"
            className="char__search-error"
            name="charName"
          />
        </Form>
      </Formik>
      {/* {results}
      {errorMessage} */}
      {setContent(process, Confirmed, char)}
    </div>
  );
};



export default CharSearchForm;
