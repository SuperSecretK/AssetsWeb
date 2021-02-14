import { NavItem } from "react-bootstrap";

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export function setCookie(name, value) {
  document.cookie = `${name}=${value}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`;
}