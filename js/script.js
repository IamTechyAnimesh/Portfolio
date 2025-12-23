// Theme toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Load projects dynamically
fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");
    data.forEach(project => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading projects:", err));
