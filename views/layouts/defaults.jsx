const React = require('react')

function Default(html) {
    return (
        <html>
            <head>
                <title>Default</title>
            </head>
            <body>
                <h1>HTML Rendered!
                <div className="container">
                    {html.children}
                </div>
                </h1>
            </body>
        </html>
    )
}

module.exports = Default