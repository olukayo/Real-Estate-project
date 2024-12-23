     // Function to go back to the previous page
        function goBack() {
            window.history.back();
        }

        // Form validation and storing data
        document.getElementById('signInForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form submission

            // Get input values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');

            // Simple validation
            if (email === "" || password === "") {
                errorMessage.textContent = "Both fields are required!";
                return;
            }

            // Store the data (for demo purposes, we'll log to the console)
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Clear error message and redirect (you can replace this with actual redirection)
            errorMessage.textContent = "Welcome to Premium Homes";
            errorMessage.style.color ="rgb(0, 123, 255)";
            // For example: window.location.href = "/dashboard"; // Redirect to a new page
        });