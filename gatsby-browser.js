/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { setGlobal } from 'reactn'

export const onClientEntry = () => {
    setGlobal({
        name: "Default Name",
        species: {
            name: "Human",
            brawn: 1,
            agility: 1,
            intellect: 1,
            wisdom: 1,
            force: 0
        },
        carrer: {
            name: "smuggler",
            speciality: "Gunslinger"
        }

    })
}