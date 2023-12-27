const widthRange = document.getElementById("width");
const heightRange = document.getElementById("height");
const borderR = document.getElementById("borderR");
const trackColorInput = document.getElementById("tr-color");
const thumbColorInput = document.getElementById("tb-color");
const preview = document.querySelector(".preview");

widthRange.addEventListener("input", updatePreview);
heightRange.addEventListener("input", updatePreview);
borderR.addEventListener("input", updatePreview);
trackColorInput.addEventListener("input", updatePreview);
thumbColorInput.addEventListener("input", updatePreview);

chrome.storage.sync.get(["SleekScrollData"], function (result) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
    return;
  }
  let Sdata;
  Sdata = result.SleekScrollData;
  console.log("Retrieved data:", Sdata);
  try {
    const width = Sdata["width"] || "10px";
    const height = Sdata["height"] || "10px";
    const borderRd = Sdata["borderRd"] || "0px";
    const trackColor = Sdata["trackColor"] || "#e9d8ff";
    const thumbColor = Sdata["thumbColor"] || "#b794f4";

    let exist = document.getElementById("prDSDFSFDSDFDSFDrew");
    if (exist) {
      console.log("removing exising");
      exist.remove();
    }
    let style = document.createElement("style");
    //   console.log(style.textContent);
    style.id = "prDSDFSFDSDFDSFDrew";
    style.textContent = `
          .preview::-webkit-scrollbar {
            /* --height: default; */
            width: ${width};
            height:${height}; 
          }
          .preview::-webkit-scrollbar-thumb {
            background-color: ${thumbColor};
            border-radius: ${borderRd};
            width: 1px;
          }
          .preview::-webkit-scrollbar-track {
            background-color: ${trackColor};
          }
          .preview::-webkit-scrollbar-corner {
            background-color: ${thumbColor};
          }
          
          `;

    //   preview.style.setProperty("--track-color", trackColor);
    //   preview.style.setProperty("--thumb-color", thumbColor);
    //   preview.style.setProperty("--width", width);
    //   preview.style.setProperty("--height", height);
    //   preview.style.getProperty("--width");
    //   console.log(widthRange, thumbColorInput);
    //   console.log(width);
    widthRange.value = parseInt(width.slice(0, -2));
    heightRange.value = parseInt(height.slice(0, -2));
    thumbColorInput.value = thumbColor;
    trackColorInput.value = trackColor;

    document.head.appendChild(style);
  } catch (error) {}
});

function updatePreview() {
  console.log("change");

  const width = widthRange.value + "px";
  const height = heightRange.value + "px";
  const borderRd = borderR.value + "px";
  const trackColor = trackColorInput.value;
  const thumbColor = thumbColorInput.value;

  // preview.style.width = width;
  // preview.style.height = height;
  //   preview.style.backgroundColor = color;
  let exist = document.getElementById("prDSDFSFDSDFDSFDrew");
  if (exist) {
    console.log("removing exising");
    exist.remove();
  }
  let style = document.createElement("style");
  //   console.log(style.textContent);
  style.id = "prDSDFSFDSDFDSFDrew";
  style.textContent = `
  .preview::-webkit-scrollbar {
    /* --height: default; */
    width: ${width};
    height:${height}; 
  }
  .preview::-webkit-scrollbar-thumb {
    background-color: ${thumbColor};
    border-radius: ${borderRd};
    width: 1px;
  }
  .preview::-webkit-scrollbar-track {
    background-color: ${trackColor};
  }
  .preview::-webkit-scrollbar-corner {
    background-color: ${thumbColor};
  }
  
  `;

  //   preview.style.setProperty("--track-color", trackColor);
  //   preview.style.setProperty("--thumb-color", thumbColor);
  //   preview.style.setProperty("--width", width);
  //   preview.style.setProperty("--height", height);
  //   preview.style.getProperty("--width");
  //   console.log(widthRange, thumbColorInput);
  //   console.log(width);
  document.head.appendChild(style);
}

// updatePreview(); // Initial update
function save() {
  const width = widthRange.value + "px";
  const height = heightRange.value + "px";
  const borderRd = borderR.value + "px";
  const trackColor = trackColorInput.value;
  const thumbColor = thumbColorInput.value;
  var myData = {
    width,
    height,
    borderRd,
    trackColor,
    thumbColor,
  };

  // Store data
  chrome.storage.sync.set({ SleekScrollData: myData }, function () {
    console.log("Data saved:", myData);
  });
}

let saveBtn = document.getElementById("SaveSettings");
saveBtn.addEventListener("click", save);
