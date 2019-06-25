import React, { useGlobal } from "reactn"

const SpeciesDropdown = () => {
    const [species, setSpecies] = useGlobal("species")

    return (
    <select class="u-full-width" id="SpeciesSelector" value={species} onChange={(event) => setSpecies(event.target.value)}>
        <option value="Human">Human</option>
        <option value="Chiss">Chiss</option>
        <option value="Twi'lek">Twi'lek</option>
    </select>
    )
}

export default SpeciesDropdown