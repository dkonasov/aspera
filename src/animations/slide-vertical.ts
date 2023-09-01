const anim = {
  old: {
    name: "slideDown",
    duration: "0.5s",
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "slideUp",
    duration: "0.5s",
    easing: "linear",
    fillMode: "backwards",
  },
};

export const slideVertical = {
  forwards: anim,
  backwards: anim,
};
