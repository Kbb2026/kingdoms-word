const serverAddress = document.getElementById("serverAddress");
const copyBtn = document.getElementById("copyBtn");
const downloadGuideBtn = document.getElementById("downloadGuideBtn");
const downloadLauncherBtn = document.getElementById("downloadLauncherBtn");

// Minecraft Launcher letöltés - működik mind a régi, mind az új gombbal
const launcherBtn = downloadLauncherBtn || downloadGuideBtn;

if (launcherBtn) {
  launcherBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Link a Minecraft Launcher letöltési oldalára
    window.location.href = "https://launcher.mojang.com/download";
  });
}

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