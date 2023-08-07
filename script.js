document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.getElementById("calculator-form");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    const sensibleCoolingLoadParagraph = document.getElementById("sensibleCoolingLoad");

    calculateButton.addEventListener("click", function () {
        const area = parseFloat(document.getElementById("area").value);
        const occupants = parseInt(document.getElementById("occupants").value);
        const buildingType = document.getElementById("buildingType").value;
        const outdoorTemp = parseFloat(document.getElementById("outdoorTemp").value);
        const indoorTemp = parseFloat(document.getElementById("indoorTemp").value);

        let coolingLoad;
        if (buildingType === "residential") {
            coolingLoad = 100 * occupants;
        } else if (buildingType === "commercial") {
            coolingLoad = 150 * occupants;
        }

        const U = 30;
        const qConduction = U * area * (outdoorTemp - indoorTemp);
        const sensibleCoolingLoad = qConduction + coolingLoad;

        sensibleCoolingLoadParagraph.textContent = `Sensible Cooling Load: ${sensibleCoolingLoad.toFixed(2)} W`;
        resultDiv.classList.remove("hidden");
    });
});
