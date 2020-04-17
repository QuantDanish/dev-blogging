import * as React from 'react';
import validator from 'validator';

const formatError = (message: string) => (
  <small className="text-danger">{message}</small>
);
const formatInfo = (message: string) => (
  <small className="text-warning">{message}</small>
);

const raiseError = (invalid: boolean, message: string) => {
  return invalid ? formatError(message) : null;
};

export const required = (value: string): string | React.ReactElement => {
  return raiseError(validator.isEmpty(value), 'Required');
};

export const isEmail = (value: string): string | React.ReactElement => {
  const invalidEmail = !validator.isEmail(value);
  return raiseError(invalidEmail, 'Invalid email Id');
};

export const gt = (
  value: string,
  props: { minLength: number }
): string | React.ReactElement => {
  const min = props.minLength || 0;

  return raiseError(
    !validator.isLength(value, { min }),
    `At least ${min} characters required`
  );
};

export const lt = (value, props: { maxLength: number }) => {
  const max = props.maxLength || Number.MAX_SAFE_INTEGER;

  return raiseError(
    !validator.isLength(value, { max }),
    `At most ${max} characters only.`
  );
};

export const weekPassword = (value: string): string | React.ReactElement => {
  const hasUpperCase = value.search(/[A-Z]{1,}/) >= 0;
  if (!hasUpperCase) {
    return formatInfo('Must have a upper case letter');
  }

  const hasLowerCase = value.search(/[a-z]{1,}/) >= 0;
  if (!hasLowerCase) {
    return formatInfo('must have a lower case letter');
  }

  const hasNumeric = value.search(/\d{1,}/) >= 0;
  if (!hasNumeric) {
    return formatInfo('must have a number');
  }

  const specialChar = value.search(/[@<>()!~#%&\|\^\?\*\.\$]{1,}/) >= 0;
  if (!specialChar) {
    return formatInfo('must have a special character');
  }

  // check for alpha numeric and some special characters
  // return yellow text for week password
  return null;
};

export const samePassword = (
  value: string,
  props,
  components
): string | React.ReactElement => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  // if (value !== components.confirm[0].value) {
  //   // components['password'][0].value !== components['confirm'][0].value
  //   // 'confirm' - name of input
  //   // components['confirm'] - array of same-name components because of checkboxes and radios
  //   return raiseError('Passwords are not equal');
  // }
  if (components.password[0].value === value) {
    return null;
  }

  const different =
    components.password[0].value !== components.confirmPassword[0].value;

  return raiseError(different, 'Passwords are not equal');
};

export const isUrl = (value: string) => {
  const options: validator.IsURLOptions = {
    protocols: ['http', 'https'],
    require_protocol: true,
  };
  const invalid = !(
    validator.isEmpty(value) || validator.isURL(value, options)
  );
  return raiseError(invalid, 'Not a valid url');
};
