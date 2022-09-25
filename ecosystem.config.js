module.exports = {
    apps : [
        {
            name: "gl-api",
            script: "yarn serve:ssr",
            watch: false,
            env: {
                "PORT": 80,
                "IP": "0.0.0.0",
                "NODE_ENV": "production"
            }
        }
    ]
}