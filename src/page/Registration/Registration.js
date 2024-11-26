import { BgBox, Box, ComponentsBox, FormBox, HelpText, InputBox, InputField, SubTitle, Title } from "./Registration.styled";
import React  from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from "../../components/Button/Button.styled";

let schema = Yup.object().shape({
  name: Yup.string()
    .min(4, " *Name must be at least 4 characters")
    .max(32, " *Name must be at most 32 characters"),
  number: Yup.string()
    // Валидация для двух форматов: 096-162-81-56 или 38-096-162-81-56
    .matches(/^(38-)?\d{3}-\d{3}-\d{2}-\d{2}$/, " *Phone number must be in the format XXX-XXX-XX-XX or 38-XXX-XXX-XX-XX"),
});

const initialValues = {
  name: "",
  number: "",
};

const formatPhoneNumber = (value) => {
  // Оставляем только цифры
  const phoneNumber = value.replace(/[^\d]/g, "");
  
  // Если номер начинается с 38 оставляем, иначе заменяем на 096
  let formattedNumber = phoneNumber;
  
  if (phoneNumber.length > 10 && phoneNumber.startsWith('38')) {
    formattedNumber = phoneNumber
      .replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5")
      .slice(0, 16); 
  } else {
    
    formattedNumber = phoneNumber
      .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4")
      .slice(0, 14);
  }

  return formattedNumber;
};



export const RegistrationBlock = () => {
  return (
    <BgBox>
      <Box id="Registration" data-aos="zoom-in">
        <Title >
          Registration for a <span>free</span> phone <span>consultation</span> on the nuances of
          English UPE
        </Title>
        <SubTitle >
          Leave a request for participation in a <span>free lesson</span>.
          <br /> A consultant will contact you and answer your questions.
        </SubTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {/* touched - Взаимодействие с инпутом */}
          {({ values, setFieldValue, touched }) => (
            <FormBox>
              
              <ComponentsBox>
                <InputBox>
                  {/* Поле имени */}
                  <InputField 
                    id="name"
                    name="name"
                    type="text"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    placeholder="Name*"
                    value={values.name}
                  />
                  {touched.name && <HelpText className="HelpTextName" name="name" component="div" />}
                </InputBox>
                <InputBox>
                  {/* Поле номера телефона */}
                  <InputField 
                    id="number"
                    name="number"
                    type="tel"
                    placeholder="Phone*"
                    value={values.number}
                    onChange={(e) => {
                      const formattedNumber = formatPhoneNumber(e.target.value);
                      setFieldValue("number", formattedNumber);
                    }}
                  />
                  {touched.number && <HelpText className="HelpTextPhone" name="number" component="div" />}
                </InputBox>
              </ComponentsBox> 

              <Button type="submit">I want a free lesson</Button>
            </FormBox>
          )}
        </Formik>
      </Box>
    </BgBox>
  );
};