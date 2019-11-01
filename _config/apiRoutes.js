const moduleName = 'iredeems';
const moduleVersion = 'v1';
const baseApiUrl = `${env('BASE_URL', 'http://localhost:8000')}/api`;
const urlBase = `${baseApiUrl}/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  items: `${urlBase}/items`,
  redeems: `${urlBase}/redeems`,
  points: `${urlBase}/points`,
}
