$(document).ready(() => {
  // check if list is manipulated
  if ($(document).data("initialList")) {
    //reset if list is manipulated
    $(document).data("initialList").replaceAll(".ice-cream-list");
  }

  // clone list for check later
  $(document).data("initialList", $(".ice-cream-list").clone(true));

  $("ul").append(
    () =>
      window.iceCreamFlavors.length &&
      window.iceCreamFlavors.map((flavor) => {
        return `<li class="ice-cream-flavor">${flavor}</li>`;
      })
  );
}, 500);
