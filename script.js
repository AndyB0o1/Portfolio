const about = document.querySelector('.about')
const aboutMe = document.querySelector('.aboutMe')
const less = document.querySelector('.less')

about.addEventListener('click', function () {
aboutMe.classList.toggle('hidden')
about.classList.add('hidden')
})

less.addEventListener('click', function () {
    aboutMe.classList.toggle('hidden')
    about.classList.remove('hidden')
})

const menu = document.querySelector('.menu')
const dropdown = document.querySelector('.dropdown')

menu.addEventListener('mouseover', function () {
    dropdown.classList.toggle('hidden')
})

dropdown.addEventListener('mouseleave', function () {
    dropdown.classList.toggle('hidden')
})

fetch('portfolio.json').then(function (res) {
    return res.json()
}).then(function (data) {
    data.project.forEach(function (project) {
        console.log(project)
        const projectType = document.querySelector('.project')
        projectType.innerHTML += `
    <div class="specificProject sm:basis-2/5 bg-[#90AEAD] max-w-2xl rounded-lg p-1.5">
            <h2 class="py-1.5 font-bold text-cyan-900 sm:text-3xl">${project.name}</h2>
        <div>
            <a href="${project.live}" title="See it live">
            <img src="${project.img}" alt="A ${project.name}" class="projectImage rounded"/>
            </a>
        </div>
        <div class="projectText">
            <p class="pt-1.5 pb-3 text-cyan-900 font-semibold sm:text-3xl">${project.desc}</p>
            <p class="py-2"><a class="bg-cyan-900 rounded-lg p-3 text-orange-100 sm:text-xl hover:bg-lime-300 hover:text-cyan-900 rounded-lg p-3" href="${project.url}" target="_blank">See it on github</a> | <a href="${project.live}"
                    class="bg-cyan-900 rounded-lg p-3 text-orange-100 sm:text-xl hover:bg-lime-300 hover:text-cyan-900 rounded-lg p-3" >Live</a></p>
        </div>
    </div>`
    })
})