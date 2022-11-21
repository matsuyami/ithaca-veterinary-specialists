import { useState } from 'react'
import { Button } from '../button/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './ContactForm.module.css'

import * as Yup from 'yup'

export const ContactForm = () => {

  const validationSchema = Yup.object().shape ({
    name: Yup.string()
      .required('Please enter your name'),
    mail: Yup.string()
      .email('Email is invalid')
      .required('Please enter your email'),
    message: Yup.string()
      .required('Please enter a message'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const [formStatus, setFormStatus] = useState('')
  const [input, setInput] = useState({
    name: '',
    mail: '',
    message: '',
  })

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (formInfo) => {
    const data = await formInfo 
    if(data.name && data.mail && data.message){
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if(res.status === 200){
          setInput({
            name: '',
            mail: '',
            message: '',
          })
          setFormStatus('Your message has been sent')
          reset()
        }
      } catch(error) {
        setFormStatus('Something went wrong')
      }
    }
  }

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactForm__heading}>
        <h2 className={styles.contactForm__header}>Let&apos;s Talk</h2>
        <svg xmlns="http://www.w3.org/2000/svg">
          <image href="/images/waving_emoji.svg" height="40" width="40" />
        </svg>
      </div>
      <form className={styles.contactForm_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contactForm__info}>
          <div>
            <label className={styles.contactForm__label} htmlFor="name">Name</label>
            <input placeholder='Name' className={styles.contactForm__input} type="text" 
              id='name'
              {...register('name')}
              name="name" onChange={handleChange}
            />
            {errors.name?.message && 
              <div className={errors.name?.message ? styles.contactForm__error : ''}>{}{errors.name?.message}</div>}
          </div>

          <div>
            <label className={styles.contactForm__label} htmlFor="mail">Email</label>
            <input placeholder='Email' className={styles.contactForm__input} type="email" 
              id='mail'
              {...register('mail')}
              name="mail" onChange={handleChange} />
            { errors.mail?.message && 
                <div className={errors.mail?.message ? styles.contactForm__error : ''}>{errors.mail?.message}</div>
            }
          </div>
        </div>

        <label className={styles.contactForm__label} htmlFor="message" name="Message">Message</label>
        <textarea placeholder='Please enter your message here' className={styles.contactForm__textArea}
          id='message'
          {...register('message')}
          onChange={handleChange} >
        </textarea>
        {errors.message?.message && <div className={styles.contactForm__error}> {errors.message?.message} </div>}
        {formStatus && 
          <div className={styles.contactForm__status}>{formStatus}</div>
        }

        <div className={styles.contactForm__button}>
          <input type='submit' />
        </div>
      </form>
    </div>
  )
}