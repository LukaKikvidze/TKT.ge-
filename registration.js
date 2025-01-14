function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    // ელ. ფოსტის ვალიდაცია
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        errorMessages.innerHTML += "<li>გთხოვთ, შეიყვანოთ სწორი ელ. ფოსტა.</li>";
        return false;
    }

    // პაროლის სიმძლავრის შემოწმება
    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "weak") {
        errorMessages.innerHTML += "<li>პაროლი ძალიან სუსტია. პაროლი უნდა შეიცავდეს მხოლოდ ინგლისურ ასოებს.</li>";
        errorMessages.innerHTML += "<li>პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს.</li>";
        errorMessages.innerHTML += "<li>პაროლი რომ იყოს საშუალო სიმძლავრის უნდა შეიცავდეს რიცხვებს.</li>";
        return false;
    } else if (passwordStrength === "medium") {
        errorMessages.innerHTML += "<li>პაროლი საშუალო სიმძლავრისაა. დაამატეთ სიმბოლოები.</li>";
        return false;
    } else if (passwordStrength === "strong") {
        // ძლიერი პაროლი
    }

    // პაროლის შესაბამისობა
    if (password !== confirmPassword) {
        errorMessages.innerHTML += "<li>პაროლები არ ემთხვევა.</li>";
        return false;
    }

    return true;
}

function checkPasswordStrength(password) {
    const weakPattern = /^[a-zA-Z]+$/;  // მხოლოდ ინგლისური ანბანის სიმბოლოები
    const mediumPattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;  // ინგლისური სიმბოლოები + რიცხვები
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;  // დიდ/პატარა ინგლისური + რიცხვები

    if (weakPattern.test(password)) {
        return "weak";
    } else if (mediumPattern.test(password)) {
        return "medium";
    } else if (strongPattern.test(password)) {
        return "strong";
    }
}
