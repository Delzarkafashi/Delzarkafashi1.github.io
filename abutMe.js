function generateCustomText() {
  var customText = document.querySelector('.abutMeText');
  var abutMeText = `
    <h1 style="font-size: 24px; color: #333; font-family: Arial, sans-serif;">
    Välkommen till min webbsida</h1>
    <p style="font-size: 16px; color: #666; font-family: Arial, sans-serif;">
    Här är några exempeltexter som visar hur du kan styla din text med CSS.</p>
  `;
  customText.innerHTML = abutMeText;
}

// Anropa funktionen 
generateCustomText();

  