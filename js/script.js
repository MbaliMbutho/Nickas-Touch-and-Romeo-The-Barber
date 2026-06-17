// SERVICES PAGE: search/filter services
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    const serviceBoxes = document.querySelectorAll(".box");

    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase();

        serviceBoxes.forEach(function (box) {
            const serviceText = box.textContent.toLowerCase();

            if (serviceText.includes(searchValue)) {
                box.style.display = "";
            } else {
                box.style.display = "none";
            }
        });
    });
}


// CONTACT PAGE: form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name.length < 2) {
            formMessage.innerText = "Please enter a valid name.";
            return;
        }

        if (phone.length < 10) {
            formMessage.innerText = "Please enter a valid phone number.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            formMessage.innerText = "Please enter a valid email address.";
            return;
        }

        if (messageType === "") {
            formMessage.innerText = "Please select a message type.";
            return;
        }

        if (message.length < 5) {
            formMessage.innerText = "Please enter a longer message.";
            return;
        }

        formMessage.innerText = "Message sent successfully!";
        contactForm.reset();
    });
}


// ENQUIRY PAGE: show service information
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const service = document.getElementById("service").value;
        const response = document.getElementById("enquiryResponse");

        if (service === "Haircut") {
            response.innerText = "Haircuts start from R120. Please contact us to confirm availability.";
        } else if (service === "Braids") {
            response.innerText = "Braids start from R350. Prices depend on length and style.";
        } else if (service === "Grooming") {
            response.innerText = "Grooming services start from R80.";
        } else if (service === "Styling") {
            response.innerText = "Styling prices depend on the selected look. Please contact us for a quote.";
        } else {
            response.innerText = "Please select a service.";
        }

        enquiryForm.reset();
    });
}