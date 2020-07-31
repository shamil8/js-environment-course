module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                node: '1',
                firefox: '5',
                chrome: '5',
                safari: '5.1',
            },
        }],
    ],
}