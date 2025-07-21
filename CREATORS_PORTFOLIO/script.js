  document.addEventListener('DOMContentLoaded', function() {

            // --- Responsive Navigation (Hamburger Menu) ---
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            });

            // --- Reveal Elements on Scroll ---
            function revealOnScroll() {
                const reveals = document.querySelectorAll('.reveal');
                for (let i = 0; i < reveals.length; i++) {
                    const windowHeight = window.innerHeight;
                    const elementTop = reveals[i].getBoundingClientRect().top;
                    const elementVisible = 100;
                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add('active');
                    }
                }
            }
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
            
            // --- Contact Form Submission ---
            const contactForm = document.getElementById('contact-form');
            const formStatus = document.getElementById('form-status');

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                formStatus.textContent = 'Sending...';
                formStatus.style.color = 'var(--text-color-light)';
                setTimeout(() => {
                    formStatus.textContent = 'Thank you! Your message has been sent.';
                    formStatus.style.color = '#38bdf8';
                    contactForm.reset();
                    setTimeout(() => { formStatus.textContent = ''; }, 5000);
                }, 1500);
            });

            // --- Gemini API Integration ---
            const apiKey = ""; // This will be handled by the execution environment

            // --- AI Bio Rewriter ---
            const bioContent = document.getElementById('bio-content');
            const originalBioHTML = bioContent.innerHTML;
            const bioStatus = document.getElementById('bio-status');

            document.getElementById('rewrite-pro').addEventListener('click', () => rewriteBio('professional'));
            document.getElementById('rewrite-creative').addEventListener('click', () => rewriteBio('creative and engaging'));
            document.getElementById('reset-bio').addEventListener('click', () => {
                bioContent.innerHTML = originalBioHTML;
                bioStatus.textContent = '';
            });

            async function rewriteBio(tone) {
                const originalText = bioContent.innerText;
                const prompt = `Rewrite the following biography in a more ${tone} tone. Keep it to two paragraphs:\n\n"${originalText}"`;
                bioStatus.textContent = `✨ Generating ${tone} version...`;

                try {
                    const result = await callGemini(prompt);
                    bioContent.innerHTML = `<p>${result.replace(/\n\n/g, '</p><p>')}</p>`;
                    bioStatus.textContent = `Bio rewritten in a ${tone} tone!`;
                } catch (error) {
                    console.error('Error rewriting bio:', error);
                    bioStatus.textContent = 'Error generating bio. Please try again.';
                }
            }

            // --- AI Contact Message Helper ---
            const messageTextarea = document.getElementById('message');
            const contactAiStatus = document.getElementById('contact-ai-status');

            document.getElementById('ai-message-helper').addEventListener('click', async () => {
                const keywords = messageTextarea.value;
                if (keywords.trim().length < 5) {
                    contactAiStatus.textContent = 'Please enter a few keywords first.';
                    return;
                }
                const prompt = `A person wants to contact me through my portfolio website. Based on their keywords below, write a polite, friendly, and professional message of 2-3 sentences for them to send. Do not include a subject line or signature.\n\nKeywords: "${keywords}"`;
                contactAiStatus.textContent = '✨ Drafting message...';

                try {
                    const result = await callGemini(prompt);
                    messageTextarea.value = result;
                    messageTextarea.style.height = 'auto';
                    messageTextarea.style.height = messageTextarea.scrollHeight + 'px';
                    contactAiStatus.textContent = 'Message drafted by AI!';
                } catch (error) {
                    console.error('Error drafting message:', error);
                    contactAiStatus.textContent = 'Error drafting message. Please try again.';
                }
            });


            // --- Core Gemini API Call Function ---
            async function callGemini(prompt) {
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                const payload = {
                    contents: [{
                        role: "user",
                        parts: [{ text: prompt }]
                    }]
                };

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`API call failed with status: ${response.status}`);
                }

                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    return result.candidates[0].content.parts[0].text;
                } else {
                    throw new Error('Invalid response structure from API.');
                }
            }
        });