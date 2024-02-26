if (location.href == "https://nikangamedev.github.io/infinite-craft-gen/") {
  const z = document.createElement("h1");
  z.innerHTML = "Success! Bookmarklet works! Go try it on infinite craft now!";
  document.body.append(z);
}
if (location.href != "https://neal.fun/infinite-craft/") {
  alert("Please use on infinite craft website!");
} else {
  const a = document.createElement("button");
  a.innerHTML = "a";
  document.body.append(a);
}
