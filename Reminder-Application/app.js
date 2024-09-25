function setReminder() {
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const activity = document.getElementById("activity").value;

    if (!time) {
        alert("Please select a valid time.");
        return;
    }

    const currentTime = new Date();
    const reminderTime = new Date();
    
    // Set the day and time for the reminder
    const [hours, minutes] = time.split(":");
    reminderTime.setHours(hours);
    reminderTime.setMinutes(minutes);
    reminderTime.setSeconds(0);
    
    // Calculate the delay for the reminder
    const delay = reminderTime - currentTime;
    
    if (delay < 0) {
        alert("The time has already passed. Please select a future time.");
        return;
    }
    
    setTimeout(() => {
        playChime();
        alert(`Reminder for ${activity} on ${day}`);
    }, delay);
}

function playChime() {
    const chime = document.getElementById("chime");
    chime.play();
}
