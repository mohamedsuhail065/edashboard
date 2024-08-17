function toggleDescription(element) {
  const description = element.parentElement.querySelector(".pay-description");
  const arrow = element.querySelector(".arrow");
  const line = element.parentElement.querySelector(".hr-line");
  const parentContainer = element.parentElement;
  if (
    description.style.display === "none" ||
    description.style.display === ""
  ) {
    description.style.display = "flex";
    arrow.src = "assets/arrow_close.svg";
    line.style.display = "none";
    parentContainer.style.backgroundColor = "#F8F9FC";
    // Hide the line when the description is visible
  } else {
    description.style.display = "none";
    arrow.src = "assets/arrow_open.svg";
    line.style.display = "block";
    parentContainer.style.backgroundColor = "#fff";
    parentContainer.style.width = "100%";
    // Show the line when the description is hidden
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("collapsed");
}

function toggleSidebarm() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display === "block" || sidebar.classList.contains("show")) {
    sidebar.style.display = "none";
    sidebar.classList.remove("show");
  } else {
    sidebar.style.display = "block";
    sidebar.classList.add("show");
  }
}
