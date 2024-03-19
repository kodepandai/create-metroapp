/**
 * See ANSI colors: https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
 */
export const Foreground = {
  RESET: "\x1b[0m",
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  MAGENTA: "\x1b[35m",
  CYAN: "\x1b[36m",
  WHITE: "\x1b[37m",
};
export function warn(message) {
  console.log(`${Foreground.YELLOW}${message}${Foreground.RESET}`);
}
export function success(message) {
  console.log(`${Foreground.GREEN}${message}${Foreground.RESET}`);
}
export function error(message) {
  console.log(`${Foreground.RED}${message}${Foreground.RESET}`);
}

export function custom(mesasge, color) {
  console.log(`${color}${mesasge}${Foreground.RESET}`);
}
