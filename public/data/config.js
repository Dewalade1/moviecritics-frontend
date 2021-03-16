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

export async function fetchEntriess(e) {
  const entries = await client.getEntry({});
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${entries.name}.`);
}

export async function singleEvent(_id) {
  const entries = await client.getEntry({
    id: _id,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${entries.name}.`);
}

export async function singleId(id) {
  const entries = await client.getEntry(id);
  if (entries) return entries;
  console.log(entries);

  console.log(`Error getting Entries for ${entries}.`);
}

export default { fetchEntries };
