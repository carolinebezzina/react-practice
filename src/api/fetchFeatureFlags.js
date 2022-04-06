function fetchAllFeatures() {
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };
    setTimeout(resolve, 100, sampleFeatures);
  });
}

function getFeatureState(key) {

  return new Promise((resolve) => {

    fetchAllFeatures().then(allFeatures => {
  
      const isEnabled = allFeatures[key];
        
      resolve(isEnabled)  // Yay! Everything went well!

    })
  })
}

function showExtendedSummary() {
  // console.log("Extended summary is shown");
}

function showBriefSummary() {
  // console.log("Brief summary is shown");
}

function makeFeedbackButtonVisible() {
  // console.log("Feedback button is visible");
}

getFeatureState("extended-summary").then(function (isEnabled) {
  if (isEnabled) {
    showExtendedSummary();
  } else {
    showBriefSummary();
  }
});

getFeatureState("feedback-dialog").then(function (isEnabled) {
  if (isEnabled) {
    makeFeedbackButtonVisible();
  }
});
