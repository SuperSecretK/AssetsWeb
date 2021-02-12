/**
 * Currency
 */
export function crnc(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * x1000
 */
export function ths(number) {
  return number * 1000;
}

export function formatPrice(number) {
  return (number * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Floating point
 */
export function fp() {
  
}

export function formatDate() {
  
}