input.addEventListener("change", updateValue);

function updateValue(e) {
  const input = document.querySelector("input").value;
  const result = document.getElementById("result");
  result.textContent = e.target.value;
}
