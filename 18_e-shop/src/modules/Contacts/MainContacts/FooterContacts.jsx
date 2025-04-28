/** @jsxImportSource @emotion/react */
// import { useTheme } from "@emotion/react";

import footerContactsItems from "./footerContactsItems";

import {
  mainContactsTitleStyle,
  mainContactsItemStyle,
  mainContactsLinkStyle,
} from "./mainstyles";



const FooterContacts = () => {
  // const { colors } = useTheme();
  // console.log(colors.lightDark);

  const elements = footerContactsItems.map(({ href, text }) => (
    <li key={text} css={mainContactsItemStyle}>
          <a href={href} css={mainContactsLinkStyle()}>
        {text}
      </a>
    </li>
  ));

  return (
    <div>
      <p css={mainContactsTitleStyle}>Контакты</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default FooterContacts;
