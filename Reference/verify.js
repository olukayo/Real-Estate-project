  const inputs = document.querySelectorAll('.code-input input');

        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length > 0 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
                    inputs[index - 1].focus();
                }
            });
        });
        let message = document.getElementById('message')
        document.getElementById('signUpBtn').addEventListener('click', () => {
            const code = Array.from(inputs).map(input => input.value).join('');
            if (code.length === inputs.length) {
                message.textContent=(`"Verification code entered"`)
                message.style.color="rgb(0, 123, 255)"
                message.style.backgroundColor="none"
                // alert(`Verification code entered: ${code}`);
            } else {
                message.textContent=(`"Please enter the complete code"`)
            
            }
        });