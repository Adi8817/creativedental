
// Check if video playback is supported and handle fallback
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-background');
    const fallbackImage = document.querySelector('.fallback-image');

    video.addEventListener('error', function () {
        video.style.display = 'none';
        fallbackImage.style.display = 'block';
    });

    // Ensure video plays on mobile devices
    video.play().catch(function (error) {
        console.log("Video autoplay failed:", error);
        video.style.display = 'none';
        fallbackImage.style.display = 'block';
    });
});





const links = document.querySelectorAll('.nav-links li a');
const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

// Find the index of the current page link
let currentIndex = -1;
links.forEach((link, index) => {
    if (link.getAttribute('href') === currentPage) {
        currentIndex = index;
    }
});

// Apply 'current', 'next', and 'previous' classes
links.forEach((link, index) => {
    link.classList.remove('current', 'next', 'previous'); // Clear previous classes

    if (index === currentIndex) {
        link.classList.add('current'); // Current page
    } else if (index === currentIndex + 1) {
        link.classList.add('next'); // Next link
    } else if (index === currentIndex - 1) {
        link.classList.add('previous'); // Previous link
    }
});

// Hamburger menu toggle (for mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close menu and update 'active' classes on link click
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove current, next, and previous classes from all links
        links.forEach(l => l.classList.remove('current', 'next', 'previous'));

        // Add 'current' to clicked link
        link.classList.add('current');

        // Find new index
        const newIndex = [...links].indexOf(link);

        // Update previous and next links
        if (newIndex > 0) {
            links[newIndex - 1].classList.add('previous');
        }
        if (newIndex < links.length - 1) {
            links[newIndex + 1].classList.add('next');
        }

        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
});



// ================= testimonal read more ==============
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
        const textElement = this.previousElementSibling;
        textElement.classList.toggle('collapsed');
        this.textContent = textElement.classList.contains('collapsed') ? 'Read more' : 'Read less';
    });
});








// =========================   our teams   ========================================


const teamMembers = [
    {
        name: 'Crown and Bridge Dental Lab Technician',
        image: 'img/teams/1.png',
        department: 'Crown and Bridge Dental Lab Technician'
    },
    {
        name: '	Crown and Bridge Technician',
        image: 'img/teams/2.png',
        department: 'Management'
    },
    {
        name: '	Crown Ceramist',
        image: 'img/teams/3.png',
        department: 'Crown and Bridge Technician'
    },
    {
        name: '	Dental Ceramist',
        image: 'img/teams/4.png',
        department: 'Crown and Bridge Technician'
    },
    {
        name: '	Dental Ceramist Assistant',
        image: 'img/teams/5.png',
        department: 'Dental Ceramist'
    },
    {
        name: '	Dental Laboratory Technician (Dental Lab Technician)',
        image: 'img/teams/6.png',
        department: 'Dental Ceramist	'
    },
    {
        name: '	Denture Finisher',
        image: 'img/teams/1.png',
        department: 'Crown and Bridge Technician'
    },
    {
        name: '	Metal Finisher',
        image: 'img/teams/2.png',
        department: 'Denture Finisher'
    },
    {
        name: '	Model and Dye Person',
        image: 'img/teams/3.png',
        department: 'Denture Finisher'
    },
    {
        name: '	Orthodontic Band Maker',
        image: 'img/teams/5.png',
        department: 'Denture Finisher'
    },
    {
        name: '	Orthodontic Laboratory Technician (Orthodontic Lab Technician)',
        image: 'img/teams/6.png',
        department: 'Denture Finisher'
    }

];

// Render team members
function renderTeamMembers(members) {
    const teamGrid = document.querySelector('.team-grid');
    teamGrid.innerHTML = '';

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        memberElement.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
        <div class="member-info">
            <h3>${member.name}</h3>
        </div>
        `;
        teamGrid.appendChild(memberElement);
    });
}

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter members
        const filter = button.textContent;
        const filteredMembers = filter === 'View all'
            ? teamMembers
            : teamMembers.filter(member => member.department === filter);

        renderTeamMembers(filteredMembers);
    });
});

// Initial render
renderTeamMembers(teamMembers);
