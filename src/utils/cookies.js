export function getCookie(name) {
  return localStorage.getItem(name);
}

export function setCookie(name, value) {
  localStorage.setItem(name, value);
}

export function deleteCookie(name) {
  localStorage.removeItem(name);
}