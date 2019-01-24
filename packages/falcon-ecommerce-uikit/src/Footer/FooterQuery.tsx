import gql from 'graphql-tag';
import { Query } from '../Query';
import { MenuItem } from '../Menu';

const GET_FOOTER_DATA = gql`
  query FooterData {
    config @client {
      menus {
        footer {
          name
          children {
            name
            urlPath
          }
        }
      }
      languages {
        name
        code
        active
      }
    }
  }
`;

export type LanguageItem = {
  name: string;
  code: string;
  active: boolean;
};

export type FooterData = {
  config: {
    menus: {
      footer: MenuItem[];
    };
    languages: LanguageItem[];
  };
};

export class FooterQuery extends Query<FooterData, {}> {
  static defaultProps = {
    query: GET_FOOTER_DATA
  };
}
