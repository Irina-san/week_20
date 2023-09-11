document.getElementById("searchBtn").addEventListener("click", handleSearch);
function handleSearch() {
  const entity = document.getElementById("entitySelect").value;
  const entityId = document.getElementById("entityId").value;

  // Send the API request
  fetch(`https://swapi.dev/api/${entity}/${entityId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      let names;
      if (entity === "people") {
        names = data.name;
      } else if (entity === "planets") {
        names = data.name;
      } else if (entity === "films") {
        names = data.title;
      }

      document.getElementById("result").textContent = names;
      document.getElementById("error").textContent = "";
    })
    .catch((error) => {
      
      document.getElementById("result").textContent = "";
      document.getElementById("error").textContent = "Ошибка: " + error.message;
    })
    }
