const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index({ breads }) {
    return (
        <Default>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                <a href={`/breads/${bread.id}`}>
                                    {bread.name}
                                </a>
                            </li>)
                    })
                }
            </ul>
            <h3>Breads</h3>
            <ul>
                {
                    breads.map((bread) => {
                        return (
                            <li key={bread._id}>
                                <a href={`/breads/${bread._id}`} >
                                    {bread.name}
                                </a>
                                {/* <ul>
                                <li className='li-no-style'>{bread.getBakedBy()}</li>
                            </ul> */}
                            </li>)

                    })
                }
            </ul>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
        </Default>
    )
}

module.exports = Index