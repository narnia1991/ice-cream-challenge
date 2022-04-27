function solution1() {
  if (window.iceCreamFlavors.length) {
    const ul = document.getElementsByClassName("ice-cream-list")[0];
    window.iceCreamFlavors.map((flavor) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(flavor));
      li.classList.add("ice-cream-flavor");
      ul.appendChild(li);
    });
  }
}
