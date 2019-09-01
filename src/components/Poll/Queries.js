import gql from "graphql-tag";

const POLLS_QUERY = gql`
  query {
    poll {
      id
      creator
      description
      name
      poll_close_date
      user {
        name
        id
      }
    }
  }
`;

export { POLLS_QUERY };
