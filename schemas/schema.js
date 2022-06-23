// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import aboutUs from './aboutUs'
import aboutBuildathon from './aboutBuildathon'
import blockContent from './blockContent'
import coreMember from './coreMember'
import createSchema from 'part:@sanity/base/schema-creator'
import gallery from './gallery'
import otherNews from './otherNews'
import pastEvents from './pastEvents'
import perks from './perks'
import schedule from './schedule'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import speaker from './speaker'
import speakerTrack from './speakerTrack'
import sponsorPerks from './sponsorPerks'
import sponsorTier from './sponsorTier'
import ticket from './ticket'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    schedule,
    speakerTrack,
    speaker,
    ticket,
    coreMember,
    pastEvents,
    aboutUs,
    aboutBuildathon,
    otherNews,
    sponsorTier,
    sponsorPerks,
    
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    perks,
    gallery,
    blockContent,
  ]),
})
