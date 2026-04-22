document.addEventListener('DOMContentLoaded', function() {

    // blog 9 password overlay
    const blog9Button = document.getElementById('blog9Button');
    const blog9Overlay = document.getElementById('blog9Overlay');
    const closeBlog9Star = document.getElementById('closeBlog9Star');
    const blog9Submit = document.getElementById('blog9SubmitBtn');
    const blog9Password = document.getElementById('blog9Password');
    const blog9Prompt = document.getElementById('blog9Prompt');

    if (blog9Prompt) blog9Prompt.innerText = 'The number of my days';

    if (blog9Button && blog9Overlay) {
        blog9Button.addEventListener('click', function() {
            blog9Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog9Password) blog9Password.value = '';
        });
    }

    if (closeBlog9Star && blog9Overlay) {
        closeBlog9Star.addEventListener('click', function() {
            blog9Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog9Overlay) {
        blog9Overlay.addEventListener('click', function(e) {
            if (e.target === blog9Overlay) {
                blog9Overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    if (blog9Submit && blog9Password) {
        blog9Submit.addEventListener('click', function() {
            if (blog9Password.value === '523') {
                window.location.href = 'blog-posts/blog9.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog9Password.value = '';
                blog9Password.focus();
            }
        });

        blog9Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog9Submit.click();
            }
        });
    }

    // blog 2 password overlay
    const blog2Button = document.getElementById('blog2Button');
    const blog2Overlay = document.getElementById('blog2Overlay');
    const closeBlog2Star = document.getElementById('closeBlog2Star');
    const blog2Submit = document.getElementById('blog2SubmitBtn');
    const blog2Password = document.getElementById('blog2Password');
    const blog2Prompt = document.getElementById('blog2Prompt');
    
    
    if (blog2Prompt) blog2Prompt.innerText = 'The password lies in plain red design';
    
    //  change SVG on hover
    if (blog2Button) {
        const normalSrc = 'images-homepage/blog2.svg';
        const hoverSrc = 'images-homepage/blog2hover.svg';
        
        
        blog2Button.addEventListener('mouseenter', function() {
            blog2Button.src = hoverSrc;
        });
        
        
        blog2Button.addEventListener('mouseleave', function() {
            blog2Button.src = normalSrc;
        });
        
       
        blog2Button.addEventListener('click', function() {
            blog2Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog2Password) blog2Password.value = '';
        });
    }
    
    
    if (closeBlog2Star && blog2Overlay) {
        closeBlog2Star.addEventListener('click', function() {
            blog2Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    
    if (blog2Overlay) {
        blog2Overlay.addEventListener('click', function(e) {
            if (e.target === blog2Overlay) {
                blog2Overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    
    if (blog2Submit && blog2Password) {
        blog2Submit.addEventListener('click', function() {
            if (blog2Password.value === 'Zimnygrad') {
                window.location.href = 'blog-posts/blog2.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog2Password.value = '';
                blog2Password.focus();
            }
        });
    
        blog2Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog2Submit.click();
            }
        });
    }
    

    // Blog 3 overlay
    const blog3Button = document.getElementById('blog3Button');
    const blog3Overlay = document.getElementById('blog3Overlay');
    const closeBlog3Star = document.getElementById('closeBlog3Star');
    const blog3Submit = document.getElementById('blog3SubmitBtn');
    const blog3Password = document.getElementById('blog3Password');
    const blog3Prompt = document.getElementById('blog3Prompt');

    
    if (blog3Prompt) blog3Prompt.innerText = 'I bend my knees only to the sign of my sisters, they always have good points';

    
    if (blog3Button && blog3Overlay) {
        blog3Button.addEventListener('click', function() {
            blog3Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog3Password) blog3Password.value = '';
        });
    }

    if (closeBlog3Star && blog3Overlay) {
        closeBlog3Star.addEventListener('click', function() {
            blog3Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog3Overlay) {
        blog3Overlay.addEventListener('click', function(e) {
            if (e.target === blog3Overlay) {
                blog3Overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    if (blog3Submit && blog3Password) {
        blog3Submit.addEventListener('click', function() {
            if (blog3Password.value === '16') {
                window.location.href = 'blog-posts/blog3.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog3Password.value = '';
                blog3Password.focus();
            }
        });

        blog3Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog3Submit.click();
            }
        });
    }

    //Blog 4 Overlay
    const blog4Button = document.getElementById('blog4Button');
    const blog4Overlay = document.getElementById('blog4Overlay');
    const closeBlog4Star = document.getElementById('closeBlog4Star');
    const blog4Submit = document.getElementById('blog4SubmitBtn');
    const blog4Password = document.getElementById('blog4Password');
    const blog4Prompt = document.getElementById('blog4Prompt');

    if (blog4Prompt) blog4Prompt.innerText = 'Pray to the cold and look above the letters start is full of her love';

    if (blog4Button) {
        const normalSrc = 'images-homepage/blog4.svg';
        const hoverSrc = 'images-homepage/blog4hover.svg';
        
        blog4Button.addEventListener('mouseenter', function() {
            blog4Button.src = hoverSrc;
        });
        
        blog4Button.addEventListener('mouseleave', function() {
            blog4Button.src = normalSrc;
        });
        
       
        blog4Button.addEventListener('click', function() {
            blog4Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog4Password) blog4Password.value = '';
        });
    }

    if (closeBlog4Star && blog4Overlay) {
        closeBlog4Star.addEventListener('click', function() {
            blog4Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog4Submit && blog4Password) {
        blog4Submit.addEventListener('click', function() {
            if (blog4Password.value === 'Corina') {
                window.location.href = 'blog-posts/blog4.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog4Password.value = '';
                blog4Password.focus();
            }
        });

        blog4Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog4Submit.click();
            }
        });
    }

    //Blog 5 Overlay
    const blog5Button = document.getElementById('blog5Button');
    const blog5Overlay = document.getElementById('blog5Overlay');
    const closeBlog5Star = document.getElementById('closeBlog5Star');
    const blog5Submit = document.getElementById('blog5SubmitBtn');
    const blog5Password = document.getElementById('blog5Password');
    const blog5Prompt = document.getElementById('blog5Prompt');

    if (blog5Prompt) blog5Prompt.innerText = 'The origin of our message';

    if (blog5Button && blog5Overlay) {
        blog5Button.addEventListener('click', function() {
            blog5Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog5Password) blog5Password.value = '';
        });
    }

    
    if (closeBlog5Star && blog5Overlay) {
        closeBlog5Star.addEventListener('click', function() {
            blog5Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog5Submit && blog5Password) {
        blog5Submit.addEventListener('click', function() {
            if (blog5Password.value === 'Psalm 58:10') {
                window.location.href = 'blog-posts/blog5.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog5Password.value = '';
                blog5Password.focus();
            }
        });

        blog5Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog5Submit.click();
            }
        });
    }

    // Blog 6 Overlay
    const blog6Button = document.getElementById('blog6Button');
    const blog6Overlay = document.getElementById('blog6Overlay');
    const closeBlog6Star = document.getElementById('closeBlog6Star');
    const blog6Submit = document.getElementById('blog6SubmitBtn');
    const blog6Password = document.getElementById('blog6Password');
    const blog6Prompt = document.getElementById('blog6Prompt');

    if (blog6Prompt) blog6Prompt.innerText = 'The worker has no lungs, but she can speak. She hates to repeat herself.';

    if (blog6Button) {
        const normalSrc = 'images-homepage/blog6.svg';
        const hoverSrc = 'images-homepage/blog6hover.svg';
        
        blog6Button.addEventListener('mouseenter', function() {
            blog6Button.src = hoverSrc;
        });
        
        blog6Button.addEventListener('mouseleave', function() {
            blog6Button.src = normalSrc;
        });
        
        
        blog6Button.addEventListener('click', function() {
            blog6Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog6Password) blog6Password.value = '';
        });
    }

    if (closeBlog6Star && blog6Overlay) {
        closeBlog6Star.addEventListener('click', function() {
            blog6Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog6Submit && blog6Password) {
        blog6Submit.addEventListener('click', function() {
            if (blog6Password.value === 'QZ8472FT') {
                window.location.href = 'blog-posts/blog6.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog6Password.value = '';
                blog6Password.focus();
            }
        });

        blog6Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog6Submit.click();
            }
        });
    }

    // Blog 7 Overlay
    const blog7Button = document.getElementById('blog7Button');
    const blog7Overlay = document.getElementById('blog7Overlay');
    const closeBlog7Star = document.getElementById('closeBlog7Star');
    const blog7Submit = document.getElementById('blog7SubmitBtn');
    const blog7Password = document.getElementById('blog7Password');
    const blog7Prompt = document.getElementById('blog7Prompt');

    if (blog7Prompt) blog7Prompt.innerText = 'The sector of fire and those who lead with death';

    if (blog7Button) {
        const normalSrc = 'images-homepage/blog7.svg';
        const hoverSrc = 'images-homepage/blog7hover.svg';
        
        blog7Button.addEventListener('mouseenter', function() {
            blog7Button.src = hoverSrc;
        });
        
        blog7Button.addEventListener('mouseleave', function() {
            blog7Button.src = normalSrc;
        });
        
        blog7Button.addEventListener('click', function() {
            blog7Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog7Password) blog7Password.value = '';
        });
    }

    if (closeBlog7Star && blog7Overlay) {
        closeBlog7Star.addEventListener('click', function() {
            blog7Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog7Submit && blog7Password) {
        blog7Submit.addEventListener('click', function() {
            if (blog7Password.value === '450') {
                window.location.href = 'blog-posts/blog7.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog7Password.value = '';
                blog7Password.focus();
            }
        });

        blog7Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog7Submit.click();
            }
        });
    }

    // Blog 8 Overlay
    const blog8Button = document.getElementById('blog8Button');
    const blog8Overlay = document.getElementById('blog8Overlay');
    const closeBlog8Star = document.getElementById('closeBlog8Star');
    const blog8Submit = document.getElementById('blog8SubmitBtn');
    const blog8Password = document.getElementById('blog8Password');
    const blog8Prompt = document.getElementById('blog8Prompt');

    if (blog8Prompt) blog8Prompt.innerText = 'What bleeds on my files code, the hex that only I control';

    if (blog8Button) {
        const normalSrc = 'images-homepage/blog8.svg';
        const hoverSrc = 'images-homepage/blog8hover.svg';
        
        blog8Button.addEventListener('mouseenter', function() {
            blog8Button.src = hoverSrc;
        });
        
        blog8Button.addEventListener('mouseleave', function() {
            blog8Button.src = normalSrc;
        });
        
        blog8Button.addEventListener('click', function() {
            blog8Overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            if (blog8Password) blog8Password.value = '';
        });
    }

    if (closeBlog8Star && blog8Overlay) {
        closeBlog8Star.addEventListener('click', function() {
            blog8Overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (blog8Submit && blog8Password) {
        blog8Submit.addEventListener('click', function() {
            if (blog8Password.value === '#90005E') {
                window.location.href = 'blog-posts/blog8.html';
            } else {
                alert('Access denied. Authentication failed.');
                blog8Password.value = '';
                blog8Password.focus();
            }
        });

        blog8Password.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                blog8Submit.click();
            }
        });
    }

 

    //blog one doesnt have an overlay but it does have a loading animation
    const blog1Button = document.getElementById('blog1Button');

    if (blog1Button) {
        blog1Button.addEventListener('click', function() {
            // Change to loading image
            blog1Button.src = 'images-homepage/blog1loading.svg';
            
            // Wait 2 seconds, then redirect to blog 1
            setTimeout(function() {
                window.location.href = 'blog-posts/blog1.html';
            }, 2000);
        });
    }

    // document overlay
    const officialDocument = document.getElementById('officialDocument');
    const documentOverlay = document.getElementById('documentOverlay');
    const closeStar = document.getElementById('closeStar');

    if (officialDocument && documentOverlay) {
        officialDocument.addEventListener('click', function() {
            documentOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeStar && documentOverlay) {
        closeStar.addEventListener('click', function() {
            documentOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // audio verlay for the teal cross

    const tealCross = document.getElementById('tealCross');
    const audioOverlay = document.getElementById('audioOverlay');
    const closeAudioStar = document.getElementById('closeAudioStar');

    if (tealCross && audioOverlay) {
        tealCross.addEventListener('click', function() {
            audioOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeAudioStar && audioOverlay) {
        closeAudioStar.addEventListener('click', function() {
            audioOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            const audioElement = document.querySelector('#audioOverlay audio');
            if (audioElement) {
                audioElement.pause();
                audioElement.currentTime = 0;
            }
        });
    }

    if (audioOverlay) {
        audioOverlay.addEventListener('click', function(e) {
            if (e.target === audioOverlay) {
                audioOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
                const audioElement = document.querySelector('#audioOverlay audio');
                if (audioElement) {
                    audioElement.pause();
                    audioElement.currentTime = 0;
                }
            }
        });
    }

    // code overlay for the balck cross
    const blackCrossTall = document.getElementById('blackCrossTall');
    const codeOverlay = document.getElementById('codeOverlay');
    const closeCodeStar = document.getElementById('closeCodeStar');

    if (blackCrossTall && codeOverlay) {
        blackCrossTall.addEventListener('click', function() {
            codeOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeCodeStar && codeOverlay) {
        closeCodeStar.addEventListener('click', function() {
            codeOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (codeOverlay) {
        codeOverlay.addEventListener('click', function(e) {
            if (e.target === codeOverlay) {
                codeOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

});
