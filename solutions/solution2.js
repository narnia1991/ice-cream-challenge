$(document).ready(() => {
  $("ul").append(
    () =>
      window.iceCreamFlavors.length &&
      window.iceCreamFlavors.map(
        (flavor) => `<li class="ice-cream-flavor">${flavor}</li>`
      )
  );
});
