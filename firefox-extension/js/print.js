document.getElementById("btnPrint").addEventListener("click", function () {

  browser.tabs.executeScript({
    code: `
      const downloadButtons = document.querySelectorAll('#DownloadButton');
      const delay = 200;

      if (downloadButtons.length === 0) {
        const message = '#DownloadButton tidak terdeteksi, pastikan Anda di halaman yang benar.';
        alert(message);
      } else {
        downloadButtons.forEach((button, index) => {
          setTimeout(() => {
            button.click();
            console.log(\`PDF terunduh \$\{index + 1\}\`);
          }, delay * index);
        }); 
      }
    `
  });

});
