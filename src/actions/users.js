import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason } = err; //location reqd?
      if (reason === "ValidationError") {
        console.log(err);
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        // return new SubmissionError({
        //   _error: message
        // });
        throw new SubmissionError("asd");
      }
    });
};
