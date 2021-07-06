import axios from "axios";
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./contacts.actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const addNewContacts = (contact) => async (dispatch) => {
  dispatch(addNewContactsRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addNewContactsSuccess(data));
  } catch (error) {
    dispatch(addNewContactsError(error));
  }
};

const getAllContacts = () => async (dispatch) => {
  dispatch(getAllContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsError(error));
  }
};

const removeContacts = (contactId) => async (dispatch) => {
  dispatch(removeContactsRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(removeContactsSuccess(contactId));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};

export { addNewContacts, getAllContacts, removeContacts };
