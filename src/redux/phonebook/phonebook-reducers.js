import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actionsPhonebook from "./phonebook-actions";

const contacts = createReducer([], {
  [actionsPhonebook.addContact]: (state, { payload }) => {
    const alreadyContacts = state.find((item) => item.name === payload.name);
    if (alreadyContacts) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [...state, payload];
  },
  [actionsPhonebook.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [actionsPhonebook.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
