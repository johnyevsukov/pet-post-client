import { css } from "styled-components";

export const onDesktop = (styles: TemplateStringsArray) => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;
