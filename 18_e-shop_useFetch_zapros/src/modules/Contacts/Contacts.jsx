/** @jsxImportSource @emotion/react */
import { useState } from "react";


import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import LoadingError from "../../shared/components/LoadingError/LoadingError";
import FooterContacts from '../Footer/FooterContacts/FooterContacts'
import MainContacts from "./MainContacts/MainContacts";
import ContactForm from "./ContactForm/ContactForm";
import SnapChatIcon from '../../shared/components/icons/SnapChatIcon'
import FacebookColorIcon from '../../shared/components/icons/FacebookColorIcon'
// import XIcon from '../../shared/components/icons/XIcon'
import XIconCopy from '../../shared/components/icons/XIconCopy'

import { registerUser } from "../../shared/api/auth-api";

import { wrapperStyle, wrapperStyle2, wrapperStyle3} from './stylesContainer'

const Contacts = () => {
  const [error, setError] = useState(null);


  const submitForm = async (payload) => {
    const { error } = await registerUser(payload);
    if (error) {
      return setError(error.response.data.message);
    }

    alert("Ваше сообщение отправлено");
  };

  return (
    <div>
      <Container>
        <SectionTitle title="Контакты" />
        {/* <FooterContacts /> */}
        <MainContacts />

        <div css={wrapperStyle}>
          <div>
            <ContactForm submitForm={submitForm} />
            {error && <LoadingError>{error}</LoadingError>}
          </div>
          <div css={wrapperStyle2}>
            <div>
              <h4>Найдите нас</h4>
            </div>
            <div css={wrapperStyle3}>
              <SnapChatIcon />
              <FacebookColorIcon />
              {/* <XIcon /> */}
              <XIconCopy style={{ width: '76px', height: '76px' }} />
            </div>
          </div>
        </div>
      </Container>
    </div >
  );
};

export default Contacts;
