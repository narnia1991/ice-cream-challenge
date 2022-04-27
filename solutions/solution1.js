const solution1 = (() => {
  if (window.iceCreamFlavors.length && document.readyState === "complete") {
    // check if list is manipulated
    if ($(document).data("initialList")) {
      //reset if list is manipulated
      $(document).data("initialList").replaceAll(".ice-cream-list");
    }

    // clone list for check later
    $(document).data("initialList", $(".ice-cream-list").clone(true));

    const timeOut = setTimeout(() => {
      const ul = document.getElementsByClassName("ice-cream-list")[0];
      window.iceCreamFlavors.map((flavor) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(flavor));
        li.classList.add("ice-cream-flavor");
        ul.appendChild(li);
      });
      clearTimeout(timeOut);
    }, 500);
  }
})();
