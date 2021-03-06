const url = "https://www.reddit.com/r/DigitalArt.json"

fetch(url).then(resp => {
    resp.json().then(api => {
        const posts = api.data.children
        
        const container = document.querySelector(".container-scroll")
        const big_img = document.querySelector(".big-img")
        const big_img_left = document.querySelector(".big-img-left")
        const big_img_right = document.querySelector(".big-img-right")
        container.style.left = "0px"

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i]

            let post_left = null

            if (i == 0) {
                post_left = posts[posts.length -1]
            } else {
                post_left = posts[i-1]
            }
            
            const post_right = posts[i+1]
            const title = post.data.title
            const thumbnail_src = post.data.thumbnail
            const url_big_img = post.data.url

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
                big_img_left.setAttribute("src", post_left.data.url)
                big_img_right.setAttribute("src", post_right.data.url)
                // console.log(post_left.data.url)
            })






        }

        let drag = false
        let last_position = null

        container.addEventListener("mousedown", e => {
            drag = true
            console.log("licorne")
        })
        document.addEventListener("mouseup", e => {
            drag = false
            console.log("licorne-rose")
        })
        container.addEventListener("mousemove", e => {
            if (drag == true) {
                let position = e.clientX
                let offset = last_position - position
                let current_position = parseFloat(container.style.left)
                let final_position = current_position - offset
                container.style.left = final_position + "px"
            }

            last_position = e.clientX
        })
    })
})