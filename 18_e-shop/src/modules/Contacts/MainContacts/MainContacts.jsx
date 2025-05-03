/** @jsxImportSource @emotion/react */


import MainContactsItems from "./MainContactsItems";

import {
  mainWrapperStyle,
  mainContactsItemStyle,
  mainContactsLinkStyle,
} from "./mainstyles";



const MainContacts = () => {
  // const { colors } = useTheme();
  // console.log(colors.lightDark);

  const elements = MainContactsItems.map(({ href, text }) => (
    <li key={text} css={mainContactsItemStyle}>
      <a href={href} css={mainContactsLinkStyle}>
        {text}
      </a>
    </li>
  ));

  return (
    <div css={mainWrapperStyle} >
      <ul>{elements}</ul>
    </div>
  );
};

export default MainContacts;
