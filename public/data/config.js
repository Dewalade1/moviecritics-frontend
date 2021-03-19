const contentful = require("contentful");

const client = contentful.createClient({
  space: "2d94qo8clahv",
  environment: "master", // defaults to 'master' if not set
  accessToken: "yiKc3eXbZSiwAz--phBy_D0yUJjYwEWE3pIZScVYGfM",
});

export async function fetchEntries(contentType) {
  const entries = await client.getEntries({content_type: contentType});
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${entries.name}.`);
}

export async function singleEntryBySlug(slug){
   const entry = await client.getEntries({
     "content_type" : "celebs",
     "fields.url": slug,
     "limit" : 1
   })

    if (entry.items) {
    return entry.items
    }
    console.log(`Error getting Entries for ${entry.name}.`)
  }

export async function singleEntry(id) {
  const entry = await client.getEntry(id);
  if (entry) return entry;

  console.log(`Error getting Entries for ${entry}.`);
}

export default { fetchEntries };
