const React = require('react')
const baker = require('../controllers/bakers_controllers')
const baker_seeds = require('../models/baker_seeds')
const Default = require('./layouts/defaults')

function New({baker}) {
  return (
    <Default>
      <h2>Add a new bread</h2>
      <div className="backButton">
        <a href="/breads"><button>Go back to the index</button></a>
      </div>
      <form action="/breads" method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image" />
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
          {baker.map((baker) => {
            return (
              <option value={baker.id} key={baker.id}>{baker.name}</option>
            )
          })}
        </select>
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  )
}

module.exports = New