import { gql } from "apollo-boost";
import { DocumentNode } from "apollo-link";

export const getAllTalksQueryForList = (): DocumentNode => {
  return gql`
    {
      getTalks(limit: 100) {
        talks {
          _id
          title
          event {
            link
            name
          }
          tags
          location {
            latitude
            longitude
            country
            city
          }
        }
      }
    }
  `;
};
