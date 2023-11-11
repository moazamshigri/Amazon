// alert("Hi this is a Simple Amazon Clone Website that is made by M Moazam Shigri For Educational Purpose All right Reserved to there Orignal Owner")


// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.getElementById('moveToTopButton');

//     button.addEventListener('click', function () {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('moveToTopButton');
    const footer = document.querySelector('footer');

    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    });
});
