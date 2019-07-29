const HASURA_GRAPHQL_ENGINE_HOSTNAME = "ces-voting.herokuapp.com";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
export const authClientId = "lSKW6vmHRlDQqSxzjyYIy70ngXao0HCm";
export const authDomain = "fsargent.auth0.com";
export const callbackUrl = `${scheme("http")}://localhost:3000/callback`;
