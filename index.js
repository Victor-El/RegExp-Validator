function isString(arg, argName) {
  if (typeof arg != "string") {
    throw new Error(`${argName} must be a string`);
  }
}

function validateFullName(name) {
  isString(name, "name");

  /* Validates Fullname. The name must start with a
      capital letter, can contain hyphens and apostrophe and whitespace characters. The fullname must also be at least two characters long.
   */
  const regex = /^[A-Z]{1}[A-Za-z-'\s]+$/; // using regexp literal
  return regex.test(name)
}


function validateEmail(email) {
  isString(email, "email");

  /* 
    Email Format: <username>@<domain>.<tld>
    where tld means Top Level Domain
    username should be one or more characters long.
    username can contain numbers, letters, hyphens, unserscores and periods.
    domains should be one or more characters long
    domains can contain letters, numbers, hyphens, underscores and periods.
    TLDs should be one or more characters long
    TLDs can contain letters and periods
   */
  const regex = new RegExp("^[a-z0-9-_\\.]+@[a-z0-9-_]+\\.[a-z]+[a-z\\.]*$", 'i'); // using regexp object constructor
  return regex.test(email);
}

function validateUsername(username) {
  isString(username, 'username')

  /* 
    username should be at least two characters long.
    username can contain letters, numbers, hyphens and underscores
   */
  const regex = /^[a-z0-9-_]{2,}$/i;
  return regex.test(username);
}

function validateDOB(dob) {
  isString(dob, 'dob');


  const regex = new RegExp("^\\d{2}-\\d{2}-\\d{4}$");
  return regex.test(dob);
}

function validateURL(url) {
  isString(url, "url");

  const regex = /^http[s]?:\/\/(www\.)?[a-zA-Z0-9-_]+\.[a-zA-Z]+\.?(?=[a-zA-Z]+)[a-zA-Z]*$/;
  return regex.test(url);
}

function validateAddress(address) {
  isString(address, "address");

  const regex = /^no\s{1}\d{1,4}[a-z]?,\s{1}[a-z0-9-'\s]+,\s{1}[a-z-'\s]+,\s{1}[a-z-'\s]+\.?$/i
  return regex.test(address);
}