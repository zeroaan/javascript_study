const fetchPage = (name) => {
  fetch(name).then((response) => {
    response.text().then((text) => {
      document.querySelector("article").innerHTML = text;
    });
  });
};

if (location.hash) {
  fetchPage(location.hash.substr(2));
} else {
  fetchPage("welcome");
}

fetch("list").then((response) => {
  response.text().then((text) => {
    const items = text.split("\n");
    let tags = "";
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item = item.trim();
      if (item === "") {
        continue;
      }
      const tag =
        "<li><a href='#!" +
        item +
        "' onClick='" +
        'fetchPage("' +
        item +
        "\")'>" +
        item +
        "</a></li>";
      tags = tags + tag;
    }
    document.querySelector(".nav").innerHTML = tags;
  });
});
