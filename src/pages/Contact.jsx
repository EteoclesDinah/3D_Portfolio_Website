import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {

  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: ''});

  const [isLoading, setIsLoading] = useState(false);
  
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  };

  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => { 
    //to not reload our page after submitting
    e.preventDefault();

    setIsLoading(true);

    setCurrentAnimation('hit');  //run

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name : form.name,
          to_name: "Kamala",
          from_email: form.email,
          to_email: 'kr8167869@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then (
        () => {
        setIsLoading(false);

        showAlert({
          show: true, 
          text: 'Thank You for your Message. 😃', 
          type: 'success',
        });

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation('idle');
          setForm({ 
            name: '', 
            email: '', 
            message: '',
          });
        }, [3000]);

      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.log(error);

        showAlert({
          show: true, 
          text: 'I did not receive your message. 😢', 
          type: 'danger',
        });

      }
    );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      
      {alert.show && <Alert {...alert} />}
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='sm:text-5xl text-4xl font-semibold sm:leading-snug'> Get In Touch.</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-blue-800 font-bold'>
            Name
            <input 
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-blue-800 font-bold'>
            Email
            <input 
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-blue-800 font-bold'>
            Your Message
            <textarea 
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />

          <ambientLight intensity={0.5}/>

          <Suspense fallback={<Loader />}>
            <Fox 
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.6, 0]}
              scale={[0.6, 0.6, 0.6]}
            />
          </Suspense>

        </Canvas>

      </div>
    </section>
  )
}

export default Contact