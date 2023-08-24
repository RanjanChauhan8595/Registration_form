
    let allocatedCenters = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Ahmadabad"
    ];

    function allocateExamCenter() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const examCenter = document.getElementById("examCenter");

    if (email !== "") {
      // Check if the email is not already entered
      if (localStorage.getItem(email)) {
        alert("Email has already been registered.");
    return;
      }

    const randomCenter = Math.floor(Math.random() * allocatedCenters.length);
    const allocatedCenter = allocatedCenters[randomCenter];

    examCenter.textContent = `${name} , ${email}, your allocated exam center is: ${allocatedCenter}`;
    localStorage.setItem(email, allocatedCenter);
    }
  }
