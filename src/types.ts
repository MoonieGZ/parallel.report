/**
 * @file Types
 * @description Typings for 3rd party resources & contributors
 * @typedef types
 */

/**
 * 3rd party resource
 */
export interface Resource {
  title: string;
  prefix: string;
  category: string[];
  color: {
    background: string;
    border: string;
    text: string;
  };
  image: {
    file: string;
    height: number;
    width: number;
  };
  description: string;
  site: string;
  contributors: {
    name: string;
    link: string;
    role: string;
  }[];
}

/**
 * Contributor(s) for a 3rd-party resource
 */
export interface Contributor {
  bold?: boolean;
  link: string;
  name: string;
  role: string;
}
