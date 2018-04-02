var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

function calculateDays() {
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
    if (days < 4) {
        daysMessage.innerHTML = "Short trips are always worth it!";
    } else if (days < 7) {
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
    } else {
        daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
    }
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var hoursMessage = document.getElementById("hoursMessage");
    var minutesMessage = document.getElementById("minutesMessage");
    var secondsMessage = document.getElementById("secondsMessage");
    hoursMessage.innerHTML = "That means you'll be traveling for " + hours + " hours.";
    minutesMessage.innerHTML = "That means you'll be traveling for " + minutes + "minutes.";
    secondsMessage.innerHTML = "That means you'll be traveling for " + seconds + "seconds.";

    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");

    timingNext.onclick = function() {
        document.getElementById("budgetSection").removeAttribute("hidden");
    }
    var enterBudget = document.getElementById("enterBudget");
    enterBudget.onclick = calculateBudget;

    function calculateBudget() {
        var budgetInput = document.getElementById('tripBudget');
        var budget = budgetInput.value;
        var tripExchangeMsg = document.getElementById("tripExchangeMsg");

        var dollar = (budget * 1.45);
        var dailyBudget = Math.round(dollar / days);
        var daily10Money = (1.45 * 10);
        var daily500Money = (1.45 * 500);

        var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
        var exchange10Msg = document.getElementById("exchange10Msg");
        var exchange500Msg = document.getElementById("exchange500Msg");
        tripExchangeMsg.innerHTML = "That means you'll need " + dollar + " NZD for your trip."
        dailyExchangeMsg.innerHTML = "That means you'll need " + dailyBudget + " NZD per day for your trip."
        exchange10Msg.innerHTML = "You'll need " + daily10Money + " NZD for an item that would cost you 10 USD."
        exchange500Msg.innerHTML = "You'll need " + daily500Money + " NZD for an item that would cost you 500 USD."
    }
}