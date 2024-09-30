'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            fontFamily: 'Manrope, system-ui',
            fontWeight: '500',
            fontSize: '1.6rem',
            lineHeight: '1',
            letterSpacing: '0',
            color: 'rgba(255, 255, 255, 0.4)',
            width: '100%',
            transition: 'all 0.2s ease',
            borderRadius: '0.4rem',
            ':hover':{
              '.MuiInputLabel-shrink': {
                color: '#fff', // Колір плейсхолдера при фокусі
                backgroundColor: '#7C69F7',
              },
              '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                border: '2px solid #7C69F7'
              }
            },

          },
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: 'Manrope, system-ui',
            fontWeight: '500',
            fontSize: '1.6rem',
            lineHeight: '1',
            letterSpacing: '0',
            color: 'rgba(255, 255, 255, 0.4)',
            top: '50%', 
            transform: 'translateY(-50%)',
            transition: 'all 0.2s ease',
            left: '2rem',
            '&.Mui-error': {
              color: 'rgba(255, 255, 255, 0.4)',
            },
            
          },
          shrink: {

              top: '0', // Підняття лейблу при введенні тексту
              color: '#fff', // Колір плейсхолдера при незаповненому полі
              backgroundColor: '#7C69F7',
              fontSize: '1.2rem',
              padding: '.4rem .6rem .2rem .6rem',
              borderRadius: '.4rem',
              '&.Mui-error': {
                dataShrink: 'true',
                color: '#fff',
                backgroundColor: '#F7696B',
              },
              '&.Mui-focused': {
                color: '#fff', // Колір плейсхолдера при фокусі
                backgroundColor: '#7C69F7',
              },
              '&:hover': {
                color: '#fff', 
              }

          },
        },
      },
      MuiOutlinedInput: {
        
        styleOverrides: {
          notchedOutline: {
            border: 'none',
            '>legend':{
              width: '0'
            }
          },
          root: {
            fontFamily: 'Manrope, system-ui',
            fontWeight: '500',
            fontSize: '1.6rem',
            lineHeight: '1',
            letterSpacing: '0',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '.4rem',
            color: '#fff',
            [`&.Mui-error .${outlinedInputClasses.notchedOutline}`]: {
              border: '.2rem solid #F7696B',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              border: '2px solid #7C69F7'
            },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              border: '2px solid #7C69F7',
            },
            
          
          },
        },

      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            position: 'absolute',
            bottom: '-2rem',
            right: '0',
            fontSize: '1.2rem',
            color: '#F7696B',
            
            '&.Mui-error': {
            color: '#F7696B', 
            },
          },
          
        },
      },
    },
  });

// Валідаційна схема для форми
const validationSchema = Yup.object({
  firstName: Yup.string().required("Це поле обовʼязкове"),
  lastName: Yup.string().required("Це поле обовʼязкове"),
  company: Yup.string().required("Це поле обовʼязкове"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Тільки цифри")
    .required("Це поле обовʼязкове")
    .max(15, "Максимум 15 цифр"),
  email: Yup.string().email("Некоректний email").required("Це поле обовʼязкове"),
  policyAgreement: Yup.boolean().oneOf([true], "Потрібно погодитися з політикою конфіденційності"),
});

export default function Home() {
  const outerTheme = useTheme();
  const isProd = process.env.NODE_ENV === 'production';
  // Масив слів
  const words = ["підприємництво", "мрію", "перемогу", "сенси", "майбутнє", "лідерство", "місію", "бізнес", "візію", "допомогу"];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFadingUp, setIsFadingUp] = useState(true);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [isSlidingIn, setIsSlidingIn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const formRef = useRef(null);
  
  useEffect(() => {
    setIsAnimating(true);
    const intervalId = setInterval(() => {

      // Затримка для fade-up анімації
      setTimeout(() => {
        // Тепер запускаємо slide-out анімацію
        setIsFadingUp(false);
        setIsSlidingOut(true);
        setIsSlidingIn(false);
        

        // Після завершення slide-out, змінюємо слово
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsSlidingOut(false); // Скидаємо slide-out
          setIsSlidingIn(true)
        }, 500); // Час, що відповідає тривалості slide-out анімації
      }, 500); // Затримка для fade-up анімації
    }, 1500); // Загальна затримка між змінами слів

    return () => clearInterval(intervalId);
  }, [words.length,isSlidingOut,isSlidingIn,isAnimating]);

  const scrollToBottom = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scroll to the top of the form
      });
    }
  };

  return (
    <div className="container grid justify-center content-center">
      <div className="flex items-center justify-center md:mb-35">
        <p className='md:mr-10 animate-fade-in'>Онлайн-конференція</p>
        <span className=''>
          <svg
            width="27"
            height="43"
            viewBox="0 0 27 43"
            className='w-20 h-33 md:w-[2.7rem] md:h-[4.3rem]'
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.609375"
              y="41.7292"
              width="48.1847"
              height="2"
              transform="rotate(-60 0.609375 41.7292)"
              fill="white"
            />
          </svg>
        </span>
        <p className='animate-fade-up'>30 квітня о 10:00</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-[3.7rem]">
        <h1 className='m-0 animate-fade-in'>Ми віримо у</h1>
        <h1 className={`${isFadingUp ? 'animate-fade-up': ''} ${isSlidingOut ? 'animate-slide-out' : ''} ${isSlidingIn ? 'animate-slide-in' : ''}`}>
          {words[currentWordIndex]}</h1>
      </div>
      <div className="flex justify-center items-center mb-30 md:mb-60 ">
        <button className="btn btn--secondary">Зареєструватися</button>
      </div>
      <div className="relative  flex flex-col md:grid md:grid-cols-5 md:gap-x-10  justify-center items-center md:items-start mb-100 md:mb-[23rem]">
        <h3 className='md:col-span-2 md: justify-self-center animate-fade-in'>
          Про що ця <br />
          онлайн-конференція
        </h3>
        <div className='flex flex-col md:col-span-3   justify-center items-center text-center md:text-start md:items-start animate-fade-up'>
          <p className="md:max-w-[69.2rem] font-normal leading-loose tracking-normal max-w-[30rem] text-md md:text-[2.4rem]">
            Щодня ми ходимо на роботу, зустрічаємося з друзями, донатимо на
            Перемогу, робимо рутинні речі. Але чи замислюємося ми щодня
            навіщо це все? Чи є у цьому сенс? Чи бачимо ми своє майбутнє?
            Чи мріємо ми?
          </p>
          <button
            className="md:mt-[4rem] mt-20 bg-white bg-opacity-[0.03] rounded-full"
            onClick={scrollToBottom}
          >
            
            <Image
              src={`${isProd ? '/Uspacy/arrow.svg' : '/arrow.svg'}`}
              alt="arrow"
              width={26}
              height={54}
              loading="lazy" 
              className='w-[2.6rem] h-[5.4rem]'
            />
          </button>
        </div>
        <div className={`absolute top-14 left-1/2 right-1/2 will-change-transform  ${isAnimating ? 'animate-expand' : 'w-0'} pointer-events-none`}>
            <Image
            
              src={`${isProd ? '/Uspacy/uspacy.svg' : '/uspacy.svg'}`}
              alt="uspacy"
              width={3334}
              height={722}
              loading="lazy" 
              className='w-full'
            />
          </div>
      </div>

      <div className="flex flex-col md:gap-y-20 md:justify-self-center items-center md:items-start max-w-[30rem] md:max-w-[45.5rem] justify-center " ref={formRef}>
        <h3 className='md:max-w-[45.5rem]'>Відвідати <br/> онлайн-конференцію</h3>
        <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        company: '',
        phoneNumber: '',
        email: '',
        question: '',
        policyAgreement: false, 
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid }) => {

        const isFormFilled = Object.values(values).every(value => value !== '');
        return (
          <Form className="flex flex-col items-center gap-y-20 pb-[14.5rem] max-w-[45.5rem] w-full">
            <ThemeProvider theme={customTheme(outerTheme)}>
            <Field
              name="firstName"
              as={TextField}
              label="Імʼя *"
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              InputLabelProps={{
                shrink: touched.firstName && Boolean(errors.firstName) ? true : undefined, 
              }}

            />
            <Field
              name="lastName"
              as={TextField}
              label="Прізвище *"
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              InputLabelProps={{
                shrink: touched.lastName && Boolean(errors.lastName) ? true : undefined, 
              }}
            />
            <Field
              name="company"
              as={TextField}
              label="Компанія *"
              variant="outlined"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.company && Boolean(errors.company)}
              helperText={touched.company && errors.company}
              InputLabelProps={{
                shrink: touched.company && Boolean(errors.company) ? true : undefined, 
              }}
            />
            <Field
              name="phoneNumber"
              as={TextField}
              label="Номер мобільного телефону *"
              variant="outlined"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              InputLabelProps={{
                shrink: touched.phoneNumber && Boolean(errors.phoneNumber) ? true : undefined, 
              }}
              inputProps={{
                maxLength: 15,
                
                onKeyDown: (e) => {
                  if (
                    !/[0-9]/.test(e.key) &&
                    e.key !== 'Backspace' &&
                    e.key !== 'Delete' &&
                    e.key !== 'Tab' &&
                    e.key !== 'Escape' &&
                    e.key !== 'Enter' &&
                    e.key !== 'ArrowLeft' &&
                    e.key !== 'ArrowRight'
                  ) {
                    e.preventDefault();
                  }
                },
              }}
            />
            <Field
              name="email"
              as={TextField}
              label="Адреса електронної пошти *"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              InputLabelProps={{
                shrink: touched.email && Boolean(errors.email) ? true : undefined, 
              }}
            />
            <Field
              name="question"
              as={TextField}
              placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме ви б хотіли його поставити"
              label="Ваше запитання *"
              multiline
              minRows={1}
              variant="outlined"
              value={values.question}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
            <div className="checkbox-container">
            <input
              type="checkbox"
              id="policyAgreement"
              name="policyAgreement" 
              className="custom-checkbox"
              onChange={handleChange}
              value={values.policyAgreement}
              error={touched.policyAgreement && Boolean(errors.policyAgreement)}
              onBlur={handleBlur}
              checked={values.policyAgreement} 
            />
            <label htmlFor="policyAgreement" className="checkbox-label">
              <p>Реєструючись, я повністю погоджуюся з <span className="text-orange">Політикою конфіденційності Uspacy</span></p>
            </label>
          </div>
            <button
                type="submit"
                className={`btn btn--secondary ${isValid ? ' text-white' : 'text-gray'}`}
              >
                Зареєструватися
              </button>
            </ThemeProvider> 
            
          </Form>
        );
      }}
    </Formik>
      </div>
    </div>
  );
}


