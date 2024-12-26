function generateRandomPassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

document.getElementById("generate-button").addEventListener("click", () => {
  const passwordLength = parseInt(document.getElementById("password-length").value);

  if (passwordLength < 8 || passwordLength > 15) {
    alert("Password length must be between 8 and 15.");
    return;
  }

  // Generate passwords and show copy buttons
  updatePassword("1", `Password 1:`, generateRandomPassword(passwordLength));
  updatePassword("2", `Password 2:`, generateRandomPassword(passwordLength));
  updatePassword("3", `Password 3:`, generateRandomPassword(passwordLength));
});

function updatePassword(id, label, password) {
  document.getElementById(`pass${id}`).textContent = label;
  document.getElementById(id).textContent = password;
  const passwordBox = document.getElementById(`password-box-${id}`);
  passwordBox.style.display = "flex"; // Show password box
}

function copyPassword(id) {
  const passwordText = document.getElementById(id).textContent;
  navigator.clipboard.writeText(passwordText).then(() => {
    console.log(`Password ${id} copied to clipboard!`);
  }).catch((err) => {
    console.error("Error copying password:", err);
  });
}

// Hide password boxes initially
document.querySelectorAll(".password-box").forEach(box => {
  box.style.display = "none";
});
