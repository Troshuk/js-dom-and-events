const categories = document.body.children.categories.children;

console.log("Number of categories:", categories.length);

[...categories].forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});
