//template_cstn8gx
//service_jpr82wd
//MGvXfrMv-agyb2PhX

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm(
            'service_jpr82wd',
            'template_cstn8gx',
            event.target,
            'MGvXfrMv-agyb2PhX'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                'The email service is temporarily unabailable. Please contact me directly on ngrant2020@gmail.com'
            )
        })
}