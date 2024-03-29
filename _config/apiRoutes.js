const moduleName = 'iredeems';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  items: `${urlBase}/items`,
  redeems: `${urlBase}/redeems`,
  points: `${urlBase}/points`,
  calculates: `${urlBase}/points/calculates/user`,
}
