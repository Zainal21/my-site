import unfetch from "isomorphic-unfetch";

export default async function fetch(input, init) {
  const res = await unfetch(input, init);
  if (!res.ok) {
    const error = new Error("An error occured while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  return data;
}
