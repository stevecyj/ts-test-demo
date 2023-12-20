export function sayHi() {
  // setInterval(() => {
  //   console.log("hi");
  // }, 1000);

  /**
   * nested timers
   */
  setTimeout(() => {
    setInterval(() => {
      console.log("hi");
    }, 1000);
  }, 1000);
}
