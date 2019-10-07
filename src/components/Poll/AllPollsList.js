import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import PollPreview from "./PollPreview";
import { POLLS_QUERY } from "./Queries";
import "./AllPollsList.css";

const AllPollsList = ({ userId, type }) => {
  return (
    <Query query={POLLS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading. Please wait...</div>;
        }
        if (error) {
          console.log("error", error);
          return <div>{""}</div>;
        }
        const polls = data.poll;

        return (
          <div className="allPollsListwrapper">
            <ul>
              {polls.map(poll => {
                return (
                  <PollPreview
                    creatorName={poll.user && poll.user.name}
                    description={poll.description}
                    key={poll.id}
                    name={poll.name}
                    // userId={userId}
                  />
                );
              })}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

AllPollsList.propTypes = {
  // userId: PropTypes.string,
  type: PropTypes.string
};

export default AllPollsList;
