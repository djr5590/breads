const React = require('react')
const breads = require('../controllers/breads_controller')
const Bread = require('../models/bread')
const Default = require('./layouts/default')
const Baker = require('../models/baker.js')

function Show ({ bread, index }) {
    // console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{Bread.name}</h3>
            <p>
                and it 
                {
                    Bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten
            </p>
            <img src={Bread.image} alt={Bread.name} />
            <p>Baked by {Bread.Baker}</p>
            {/* <button><a href='/breads'>Go Home</a></button> */}
            <a href={`/breads/${Bread.id}/edit`}><button>Edit</button></a>
            <form action={`/breads/${Bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
        </Default>
    )
}

module.exports = Show