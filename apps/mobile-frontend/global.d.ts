import {ReactElement, SVGProps} from "react";

declare module "*.svg" {
  import type { ReactElement, SVGProps } from "react";

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

export type SVGIcon = (props: SVGProps<SVGElement>) => ReactElement;
