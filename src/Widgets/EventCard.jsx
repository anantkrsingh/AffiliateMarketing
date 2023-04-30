import React, { useState } from 'react'
import '../Widgets/EventCardStyle.css'
import PlaceHolder from '../assets/logo_amity.png'
import { ClipLoader } from 'react-spinners';
import ClockLoader from 'react-spinners/ClockLoader';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import { Divider } from '@mantine/core';

export default function EventCard({ imgUrl, title, description, formUrl, rule }) {
  const [loaded, setLoaded] = useState(false)
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();


  const [registerEnabled, setRegisterEnabled] = useState(false);
  return (

    <>
     <Modal
        opened={opened}
        onClose={close}
        title={title}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <div className='flex  flex-col self-center'>
          <img className='rounded-xl' src={imgUrl} alt="" />
          <p className='text-xl font-bold text-center '>{title}</p>
          <Divider my="sm" variant="dashed" />
          <p className='text-black'> {description} </p>
          <br/>
          <p className='text-black'> Rules <br/> <br/> {rule} </p>
          <a href={formUrl} className='flex m-10 align-center justify-center'  target="_blank">
          <Button  variant={"light"}>
              Register
            </Button>
          </a>
        </div>
      </Modal>
    <div className='card-base m-auto mb-10 flex transition-all delay-100 ease-in-out' onMouseEnter={() => setRegisterEnabled(true)} onMouseLeave={() => setRegisterEnabled(false)}>
      <div className={loaded ? "hidden" : "flex w-full event-img align-center justify-center"}>
        <ClockLoader color={"#ffffff"} loading />
      </div>
      <img src={imgUrl} onLoad={() => setLoaded(true)} alt="" className={loaded ? 'event-img  transition-all delay-100 ease-in-out' : 'hidden event-img transition-all delay-100 ease-in-out'} />
      <div className={registerEnabled ? 'card-child p-2 mb-5 transition-all delay-150 ease-in-out' : "card-child transition-all delay-100 ease-in-out"}>
        <p className="title text-black text-xl">{title}</p>
        {/* <p className="title text-black text-sm">{description}</p> */}
      </div>
      <div className={registerEnabled ? "transition-transform ease-in-out delay-150 register cursor-pointer":"transition-transform ease-in-out delay-150 register cursor-pointer translate-y-[70px]"}>
        <p className='reg-text text-center'>
          <div className='flex w-full justify-between'>
            <Button onClick={open} variant={"light"}>
              Info
            </Button>
            <a href={formUrl}>
            
            <Button variant={"light"}>
              Register
            </Button>
            </a>
          </div>
        </p>
      </div>
    </div>
    </>
  )
}
