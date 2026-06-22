const serverAddress = document.getElementById("serverAddress");
const copyBtn = document.getElementById("copyBtn");
const downloadGuideBtn = document.getElementById("downloadGuideBtn");

const guideText = `kingdoms word - csatlakozasi utmutato

Szerver cim: ${serverAddress.textContent.trim()}
Verzio: 1.21.2

Lepesek:
1. Toltse le a Minecraft Launchert a hivatalos oldalrol.
2. Inditsa el a jatekot.
3. Nyissa meg a Multiplayer menut.
4. Adja hozza a szervert a fenti cimmel.
5. Lepjen be.

Megjegyzes:
- Ha ugyanazon a gepen jatszol, a localhost:25565 is jo lehet.
- Ha masik halozatrol jon valaki, a routeren a 25565 TCP portot at kell iranyitani.`;

downloadGuideBtn.addEventListener("click", () => {
  const blob = new Blob([guideText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "kingdoms-word-utmutato.txt";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
});

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
