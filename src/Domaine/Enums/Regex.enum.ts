export enum authRegex {
  PASSWORD_REGEX = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$',
  USERNAME_REGEX = '^[A-z][A-z0-9-_]{3,23}$',
}
