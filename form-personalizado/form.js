document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('custom-site-form');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.querySelector('.progress');

    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle('active', index === step);
        });

        prevBtn.style.display = step === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = step === steps.length - 1 ? 'none' : 'inline-block';
        submitBtn.style.display = step === steps.length - 1 ? 'inline-block' : 'none';

        updateProgressBar();
    }

    function updateProgressBar() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    nextBtn.addEventListener('click', function() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    });

    // File upload preview (for company logo)
    const companyLogo = document.getElementById('company-logo');
    const logoPreview = document.getElementById('logo-preview');

    companyLogo.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                logoPreview.innerHTML = '';
                logoPreview.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });

    // Initialize the form
    showStep(currentStep);
});