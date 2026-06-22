const serverAddress = document.getElementById("serverAddress");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
  const value = serverAddress.textContent.trim();

  try {
    await navigator.clipboard.writeText(value);
    copyBtn.textContent = "Másolva";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(serverAddress);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    copyBtn.textContent = "Másolva";
  }

  setTimeout(() => {
    copyBtn.textContent = "Cím másolása";
  }, 1500);
});
