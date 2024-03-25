document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('#faq dt');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all dt elements
            faqItems.forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked dt element
            this.classList.add('active');
        });
    });
});
