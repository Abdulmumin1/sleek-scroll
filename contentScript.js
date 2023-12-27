// This code is injected into the web page as a content script

// Function to append a <style> element with custom scrollbar styles
chrome.storage.sync.get(["SleekScrollData"], function (result) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
    return;
  }

  let Sdata;
  Sdata = result.SleekScrollData;
  console.log("Retrieved data:", Sdata);

  const width = Sdata["width"] || "10px";
  const height = Sdata["height"] || "10px";
  const borderRd = Sdata["borderRd"] || "0px";
  const trackColor = Sdata["trackColor"] || "inherit";
  const thumbColor = Sdata["thumbColor"] || "#333";

  let before = document.head.firstElementChild;

  function addCustomScrollbarStyle() {
    const scrollStyle = document.createElement("style");
    scrollStyle.textContent = `   
  ::-webkit-scrollbar {
    /* --height: default; */
    width: ${width};
    height:${height}; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${thumbColor};
    border-radius: ${borderRd};
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${trackColor};
  }
  ::-webkit-scrollbar-corner {
    background-color: ${trackColor};
  }
  
    `;

    document.head.insertBefore(scrollStyle, before);
  }

  // Add custom scrollbar styles when the storage data is retrieved
  addCustomScrollbarStyle();
});
