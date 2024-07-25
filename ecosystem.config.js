module.exports = {
    apps: [
        {
            name: "landin-page-iu",
            script: "dist/landin_page_IU/server/main.js",
            watch: false,
            env: {
                "PORT": 3000,
                "NODE_ENV": "production"
            }
        }
    ]
}
