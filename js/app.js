const url = "https://www.reddit.com/r/DigitalArt.json"

fetch(url).then(resp => {
    resp.json().then(api => {
        const posts = api.data.children

        for (let post of posts) {
            const title = post.data.title
            const thumbail = post.data.thumbail
            const url_big_img = post.data.url

            


        }
    })
})