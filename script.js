const { animate, scroll, inView } = Motion

let i = 0
const animateHomeBanner = () => {
    setInterval(() => {
        const bannerSections = document.querySelectorAll('#home-banner')
        if(i === 2) {
            i = 0
            return
        }
        bannerSections.forEach((elm, index) => {
            if(i !== index) {
                elm.classList.remove('block')
                elm.classList.add('hidden')
            }else {
                elm.classList.add('block')
                elm.classList.remove('hidden')
            }
        })
        i++
    }, 2000);
}
animateHomeBanner()