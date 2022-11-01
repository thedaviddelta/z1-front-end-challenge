/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.png' {
  const image: string;
  export default image;
}
declare module '*.jpg' {
  const image: string;
  export default image;
}

declare module '*.jpeg' {
  const image: string;
  export default image;
}

declare module '*.webp' {
  const image: string;
  export default image;
}

declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;
  export = Schema;
}
