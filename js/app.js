const url = "https://www.reddit.com/r/DigitalArt.json"

fetch(url).then(resp => {
    resp.json().then(api => {
        const posts = api.data.children

        for (let post of posts) {
            const title = post.data.title
            const thumbnail_src = post.data.thumbnail
            const url_big_img = post.data.url
            const container = document.querySelector(".container-scroll")
            const big_img = document.querySelector(".big-img")

            let thumbnail = document.createElement("img")
            thumbnail.setAttribute("src", thumbnail_src)

            let template = document.createElement("div")
            template.classList.add('template')

            let overlay = document.createElement("div")
            overlay.classList.add('overlay')

            container.appendChild(template)
            template.appendChild(overlay)
            template.appendChild(thumbnail)

            template.addEventListener("click", () => {
                big_img.setAttribute("src", url_big_img)
                // console.log("allo")
            })






        }
    })
})