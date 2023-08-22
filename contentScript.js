// This code is injected into the web page as a content script

// Function to append a <style> element with custom scrollbar styles

let title = document.querySelector("title");

function addCustomScrollbarStyle() {
  const style = document.createElement("style");
  style.textContent = `
      
      /* Example: */
      ::-webkit-scrollbar {
        width: 4px;
        transition:width 0.3s ease-in-out;
        padding:3px;
      }
      ::-webkit-scrollbar:hover {
        width: 5px;
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
  document.head.insertBefore(style, title);
}

// Add custom scrollbar styles when the page is loaded
addCustomScrollbarStyle();
