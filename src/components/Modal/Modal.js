import * as React from 'react';
import Modal from '@mui/material/Modal';
import * as Yup from 'yup';
import { Formik} from 'formik';
import {ModalBox, FormBox, FormTitle, EditTitlBox, InputBox, InputField, InputLabel, FormInputContainer, HelpText, Button } from './Modal.styled';


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

export const BasicModal = ({open, toggleModal}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >  
        <ModalBox>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            toggleModal();
          }}
        >
            {({ values, setFieldValue, touched }) => (
              <FormBox>
                <EditTitlBox>
                  <FormTitle>Request a call</FormTitle>
                  <button onClick={toggleModal}></button>
                </EditTitlBox>
								<FormInputContainer>
								<InputBox>
									<InputLabel>Name</InputLabel>
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
									<InputLabel>Number</InputLabel>
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
								</FormInputContainer>
                <Button type="submit">Consultation by phone</Button>
              </FormBox>
            )}
          </Formik>
        </ModalBox>
      </Modal>
    </div>
  );
}