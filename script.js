let appliances = [];

let totalEnergy = 0;
let totalCost = 0;


function calculateEnergy() {

    // Get values from HTML
    let appliance = document.getElementById("appliance").value;
    let power = document.getElementById("power").value;
    let hours = document.getElementById("hours").value;
    if (appliance === "" || power === "" || hours === "") {
    alert("Please fill all fields.");
    return;
}


    // Calculate energy
    let energy = (power * hours) / 1000;

    // Calculate cost
    let cost = energy * 8;


    // Create appliance object
    let applianceData = {
        name: appliance,
        power: power,
        hours: hours,
        energy: energy,
        cost: cost
    };


    // Add appliance to array
    appliances.push(applianceData);


    // Add to total
    totalEnergy = totalEnergy + energy;
    totalCost = totalCost + cost;


    // Show current appliance result
    document.getElementById("energyResult").innerText =
        energy.toFixed(2) + " kWh/day";

    document.getElementById("costResult").innerText =
        "₹" + cost.toFixed(2);


    // Show total result
    document.getElementById("totalEnergyResult").innerText =
        totalEnergy.toFixed(2) + " kWh/day";

    document.getElementById("totalCostResult").innerText =
        "₹" + totalCost.toFixed(2);
        let monthlyEnergy = totalEnergy * 30;
let monthlyCost = totalCost * 30;

document.getElementById("monthlyEnergyResult").innerText =
    monthlyEnergy.toFixed(2) + " kWh/month";

document.getElementById("monthlyCostResult").innerText =
    "₹" + monthlyCost.toFixed(2) + "/month";



    // Display appliance list
    displayAppliances();
}



function displayAppliances() {

    let list = document.getElementById("applianceList");

    // Clear old list
    list.innerHTML = "";


    // Display every appliance
    appliances.forEach(function(item, index) {

        list.innerHTML += `
            <div class="appliance-card">

                <h3>${item.name}</h3>

                <p>Power: ${item.power} W</p>

                <p>Usage: ${item.hours} hours/day</p>

                <p>Energy: ${item.energy.toFixed(2)} kWh/day</p>

                <p>Cost: ₹${item.cost.toFixed(2)}/day</p>

                <button onclick="deleteAppliance(${index})">
                    Delete
                </button>
                <button onclick="editAppliance(${index})">
    Edit
</button>

            </div>
        `;
    });
}



function deleteAppliance(index) {

    // Remove appliance from array
    appliances.splice(index, 1);


    // Recalculate totals
    totalEnergy = 0;
    totalCost = 0;

    appliances.forEach(function(item) {

        totalEnergy = totalEnergy + item.energy;
        totalCost = totalCost + item.cost;

    });


    // Update total on screen
    document.getElementById("totalEnergyResult").innerText =
        totalEnergy.toFixed(2) + " kWh/day";

    document.getElementById("totalCostResult").innerText =
        "₹" + totalCost.toFixed(2);
        let monthlyEnergy = totalEnergy * 30;
let monthlyCost = totalCost * 30;

document.getElementById("monthlyEnergyResult").innerText =
    monthlyEnergy.toFixed(2) + " kWh/month";

document.getElementById("monthlyCostResult").innerText =
    "₹" + monthlyCost.toFixed(2) + "/month";


    // Display updated list
    displayAppliances();
}

function clearAllAppliances() {

    // Clear appliance array
    appliances = [];

    // Reset totals
    totalEnergy = 0;
    totalCost = 0;

    // Reset results
    document.getElementById("energyResult").innerText =
        "0 kWh";

    document.getElementById("costResult").innerText =
        "₹0";

    document.getElementById("totalEnergyResult").innerText =
        "0 kWh/day";

    document.getElementById("totalCostResult").innerText =
        "₹0";

    document.getElementById("monthlyEnergyResult").innerText =
        "0 kWh/month";

    document.getElementById("monthlyCostResult").innerText =
        "₹0/month";
        document.getElementById("appliance").value = "";
document.getElementById("power").value = "";
document.getElementById("hours").value = "";

    // Clear appliance list
    displayAppliances();
    
}

function editAppliance(index) {

    // Get the appliance we want to edit
    let item = appliances[index];

    // Put its values back into input fields
    document.getElementById("appliance").value = item.name;
    document.getElementById("power").value = item.power;
    document.getElementById("hours").value = item.hours;

    // Remove old appliance
    appliances.splice(index, 1);

    // Recalculate totals
    totalEnergy = 0;
    totalCost = 0;

    appliances.forEach(function(item) {
        totalEnergy = totalEnergy + item.energy;
        totalCost = totalCost + item.cost;
    });

    // Update totals
    document.getElementById("totalEnergyResult").innerText =
        totalEnergy.toFixed(2) + " kWh/day";

    document.getElementById("totalCostResult").innerText =
        "₹" + totalCost.toFixed(2);

    // Update monthly totals
    let monthlyEnergy = totalEnergy * 30;
    let monthlyCost = totalCost * 30;

    document.getElementById("monthlyEnergyResult").innerText =
        monthlyEnergy.toFixed(2) + " kWh/month";

    document.getElementById("monthlyCostResult").innerText =
        "₹" + monthlyCost.toFixed(2) + "/month";

    // Update appliance list
    displayAppliances();
}