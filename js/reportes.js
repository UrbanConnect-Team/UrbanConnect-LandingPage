document.addEventListener("DOMContentLoaded", () => {
  const reportModal = document.getElementById("reportModal");
  const closeReportModal = document.getElementById("closeReportModal");
  const cancelReportModal = document.getElementById("cancelReportModal");
  const newReportForm = document.getElementById("newReportForm");

  const openButtons = document.querySelectorAll(
    ".open-report-modal, #openReportModalQuick"
  );

  const reportList = document.querySelector(".report-list");

  function openModal() {
    reportModal.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    reportModal.classList.remove("active");
    document.body.classList.remove("modal-open");
    newReportForm.reset();
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeReportModal.addEventListener("click", closeModal);
  cancelReportModal.addEventListener("click", closeModal);

  reportModal.addEventListener("click", (event) => {
    if (event.target === reportModal) {
      closeModal();
    }
  });

  newReportForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("reportTitle").value;
    const category = document.getElementById("reportCategory").value;
    const location = document.getElementById("reportLocation").value;
    const priority = document.getElementById("reportPriority").value;
    const description = document.getElementById("reportDescription").value;

    const priorityClass =
      priority === "Alta" ? "high" :
      priority === "Media" ? "medium" :
      "low";

    const dotClass =
      priority === "Alta" ? "red" :
      priority === "Media" ? "orange" :
      "green";

    const categoryClass =
      category === "Mantenimiento" ? "blue" :
      category === "Alumbrado" ? "green" :
      category === "Plomería" ? "purple" :
      category === "Áreas comunes" ? "orange" :
      "red";

    const icon =
      category === "Mantenimiento" ? "🏢" :
      category === "Alumbrado" ? "💡" :
      category === "Plomería" ? "💧" :
      category === "Áreas comunes" ? "🌳" :
      "📷";

    const newReport = document.createElement("article");
    newReport.classList.add("report-card");

    newReport.innerHTML = `
      <div class="report-thumb elevator">${icon}</div>

      <div class="report-info">
        <span class="priority ${priorityClass}">
          ${priority === "Alta" ? "Urgente" : priority}
        </span>

        <h3>${title}</h3>
        <p>${description}</p>

        <div class="report-tags">
          <span class="tag ${categoryClass}">${category}</span>
          <span class="location">📍 ${location}</span>
        </div>
      </div>

      <div class="report-meta">
        <span class="status open">Abierto</span>
        <h4>#R-2025-046</h4>
        <p>Ahora</p>
        <small><i class="dot ${dotClass}"></i> Prioridad: ${priority}</small>
      </div>

      <button class="more-btn">•••</button>
    `;

    reportList.prepend(newReport);

    closeModal();
  });
});