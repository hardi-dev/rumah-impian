export const classname = (className: any) => {
  try {
    return typeof className !== "undefined" && className !== "" && className !== null ? className : "";
  } catch (error) {
    return "";
  }
}