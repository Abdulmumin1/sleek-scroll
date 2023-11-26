// This code is injected into the web page as a content script

// Function to append a <style> element with custom scrollbar styles

let before = document.head.firstElementChild;

function addCustomScrollbarStyle() {
  const scrollStyle = document.createElement("style");
  scrollStyle.textContent = `   
      ::-webkit-scrollbar {
        width: 2px;
        height:2px;
        transition:width 0.3s ease-in-out;
      }
      ::-webkit-scrollbar:hover {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: 5px;
        max-height:30px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #888;
      }
      ::-webkit-scrollbar-track {
        background-color:inherit;
      }
    
    `;

  document.head.insertBefore(scrollStyle, before);
}

// Add custom scrollbar styles when the page is loaded
addCustomScrollbarStyle();
