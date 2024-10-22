export default function setLinkWhatsapp() {

    const links = document.querySelectorAll('.whatsapp'),
          wa = 'https://wa.me/77070199595';

    links.forEach(link => {
        link.setAttribute('href', wa);
        link.setAttribute('target', '_blank');
    })

}