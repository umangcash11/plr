/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

/* MENU */
export const MENU_SET_CLASSNAMES = "MENU_SET_CLASSNAMES";
export const MENU_CONTAINER_ADD_CLASSNAME = "MENU_CONTAINER_ADD_CLASSNAME";
export const MENU_CLICK_MOBILE_MENU = "MENU_CLICK_MOBILE_MENU";
export const MENU_CHANGE_DEFAULT_CLASSES = "MENU_CHANGE_DEFAULT_CLASSES";
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  "MENU_CHANGE_HAS_SUB_ITEM_STATUS";

export const CHAT_GET_CONTACTS = "CHAT_GET_CONTACTS";
export const CHAT_GET_CONTACTS_SUCCESS = "CHAT_GET_CONTACTS_SUCCESS";
export const CHAT_GET_CONTACTS_ERROR = "CHAT_GET_CONTACTS_ERROR";
export const CHAT_GET_CONVERSATIONS = "CHAT_GET_CONVERSATIONS";
export const CHAT_GET_CONVERSATIONS_SUCCESS = "CHAT_GET_CONVERSATIONS_SUCCESS";
export const CHAT_GET_CONVERSATIONS_ERROR = "CHAT_GET_CONVERSATIONS_ERROR";
export const CHAT_ADD_MESSAGE_TO_CONVERSATION =
  "CHAT_ADD_MESSAGE_TO_CONVERSATION";
export const CHAT_CREATE_CONVERSATION = "CHAT_CREATE_CONVERSATION";
export const CHAT_SEARCH_CONTACT = "CHAT_SEARCH_CONTACT";
export const CHAT_CHANGE_CONVERSATION = "CHAT_CHANGE_CONVERSATION";

export * from "./menu/actions";
export * from "./settings/actions";
export * from "./auth/actions";
export * from "./chat/actions";
