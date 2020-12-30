const setUpThemeing = () => {
  const themer = document.querySelector("#themer");

  themer.addEventListener("change", (event) => {
    const themeable = document.querySelector("#themeable");
    themeable.className = `${event.currentTarget.value}`;
  });
};

document.addEventListener("DOMContentLoaded", function () {
  setUpThemeing();
});
