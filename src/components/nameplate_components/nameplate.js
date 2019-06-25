import React, { useGlobal } from "reactn"
import SpeciesSelector from "./nameplate-dropdowns"

const CharacterDescriptionPanel = () => {
    const [name, setName] = useGlobal('name')

    return (
        <div className="row" description="Character Information">
            <div className="three columns">
                <strong>Character Name</strong>
                <input class="u-full-width" type="text" value={name} onChange={(event) => setName(event.target.value)} id="characterName" />
            </div>
            <div className="three columns">
                <strong>Species</strong>
                <SpeciesSelector />
            </div>
            <div className="three columns">
                <strong>Carrer</strong>
                <p>Smuggler</p>
            </div>
            <div className="three columns">
                <strong>Specialization Trees</strong>
                <p>Gunslinger</p>
            </div>
        </div>)
}

export default CharacterDescriptionPanel