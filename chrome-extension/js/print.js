document.getElementById("btnPrint").addEventListener("click", function () {

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function () {

        const downloadButtons = document.querySelectorAll('#DownloadButton');
        const delay = 200;

        if (downloadButtons.length === 0) {
          const message = '#DownloadButton tidak terdeteksi, pastikan Anda di halaman yang benar.';
          alert(message);
          return;
        }

        downloadButtons.forEach((button, index) => {
          setTimeout(() => {
            button.click();
            console.log(`PDF terunduh ${index + 1}`);
          }, delay * index);
        });
        
      },
    });
  });
});
