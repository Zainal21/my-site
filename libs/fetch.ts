import unfetch from "isomorphic-unfetch";

export default async function fetch(
  input: RequestInfo,
  init?: RequestInit | undefined
) {
  const res = await unfetch(input, init);
  if (!res.ok) {
    const err = new Error("An error occured while fetching the data.");
    throw err;
  }
  const data = await res.json();
  return data;
}
