document.addEventListener('DOMContentLoaded', function() {
            // Initialize tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Initialize popovers
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl);
            });
            
            // Back to top button
            const backToTopBtn = document.getElementById('back-to-top');
            if (backToTopBtn) {
                window.addEventListener('scroll', function() {
                    if (window.pageYOffset > 300) {
                        backToTopBtn.classList.add('show');
                    } else {
                        backToTopBtn.classList.remove('show');
                    }
                });
                
                backToTopBtn.addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
            
            // Form validation
            const forms = document.querySelectorAll('.needs-validation');
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
            
            // Price range display
            const priceRange = document.getElementById('priceRange');
            const priceDisplay = document.getElementById('priceDisplay');
            
            if (priceRange && priceDisplay) {
                priceRange.addEventListener('input', function() {
                    priceDisplay.textContent = `₹${this.value}`;
                });
            }
            
            // Quick book modal
            const quickBookModal = document.getElementById('quickBookModal');
            if (quickBookModal) {
                quickBookModal.addEventListener('show.bs.modal', function(event) {
                    const button = event.relatedTarget;
                    const car = button.getAttribute('data-car');
                    const carNameElement = document.getElementById('quickBookCarName');
                    if (carNameElement) {
                        carNameElement.textContent = car;
                    }
                });
            }
            
            // Initialize toast
            const toastLiveExample = document.getElementById('liveToast');
            if (toastLiveExample) {
                setTimeout(() => {
                    const toast = new bootstrap.Toast(toastLiveExample);
                    toast.show();
                }, 3000);
            }
            
            // Dynamic copyright year
            const currentYearElement = document.getElementById('current-year');
            if (currentYearElement) {
                currentYearElement.textContent = new Date().getFullYear();
            }
            
            // Initialize Typeahead for location search
            $('.typeahead').typeahead({
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'locations',
                source: substringMatcher(['Law Gate, Jalandhar', 'LPU University, Phagwara', 'Jalandhar Bus Stand', 'Jalandhar Railway Station', 'Jalandhar Airport', 'PAP Chowk', 'Model Town', 'Urban Estate'])
            });
            
            function substringMatcher(strs) {
                return function findMatches(q, cb) {
                    var matches, substringRegex;
                    
                    // an array that will be populated with substring matches
                    matches = [];
                    
                    // regex used to determine if a string contains the substring `q`
                    substrRegex = new RegExp(q, 'i');
                    
                    // iterate through the pool of strings and for any string that
                    // contains the substring `q`, add it to the `matches` array
                    $.each(strs, function(i, str) {
                        if (substrRegex.test(str)) {
                            matches.push(str);
                        }
                    });
                    
                    cb(matches);
                };
            }
        });