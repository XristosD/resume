const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const toggleComms = getElement(".toggle-communications");
const toggleCommsIcon = getElement(".toggle-communications i");
const comms = getElement(".communications");
let commsHeight = getElement("#comms-height").getBoundingClientRect().height;
// console.log(commsHeight);

window.addEventListener("resize", () => {
  commsHeight = getElement("#comms-height").getBoundingClientRect().height;
});

toggleComms.addEventListener("click", () => {
  comms.classList.toggle("show-communications");
  if (comms.classList.contains("show-communications")) {
    comms.style.height = `${commsHeight}px`;
  } else {
    comms.style.height = `0px`;
  }
  toggleCommsIcon.classList.toggle("fa-angle-down");
  toggleCommsIcon.classList.toggle("fa-angle-up");
});
