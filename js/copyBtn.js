const phoneNumber = "010-5894-3209";
const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(phoneNumber);
  alert("번호가 복사되었습니다")
  console.log("Phone number copied to clipboard");
});