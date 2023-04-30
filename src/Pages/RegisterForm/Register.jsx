import { useForm } from '@mantine/form';
import { storage } from '../../Firebase';
import { Loader } from '@mantine/core';

import {
    ref, uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage';
import React, { useState, useContext, useEffect } from 'react'
import { Select } from '@mantine/core';
import { Text, rem } from '@mantine/core';
import { FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { Radio } from '@mantine/core';
import AmityLogo from '../../assets/logo_amity.png'
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import { Divider } from '@mantine/core';

import { TextInput, NumberInput, Button, Group, Box } from '@mantine/core';

function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const [utr,setUtr] = useState()
    const [receipt, setReceipt] = useState(null)
    const [receiptURL, setReceiptURL] = useState(null)
    const [event, setEvent] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [institute, setInstitute] = useState(null);
    const [userSchool, setUserSchool] = useState(null);
    const [isAmitian, setIsAmitian] = useState(true);
    const theme = useMantineTheme();
    const [opened, { open, close }] = useDisclosure(true);
    const [school, setSchool] = useState([
        { value: 'Amity University Patna', label: 'Amity University Patna' },
    ]);
    const [searchValue, onSearchChange] = useState('');
    const handleUploadFile = () => {
        if (!receipt) {
            console.log("No File Selected");
        } else {
            setIsLoading(true)
            const storageRef = ref(storage, `/${name}/${receipt.name}`);
            const uploadTask = uploadBytesResumable(storageRef, receipt);
            uploadTask.on(
                "state_changed", (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(percent);

                },
                (err) => console.log(err),
                () => {
                    
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => { 
                        setIsLoading(false)                   
                        setReceiptURL(url);
                    });
                }
            )
        }
    }

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            event: event,
            imageURl: '',
            enrollmentNo: '',
            amitian: '',
            institute: userSchool
        },
        validate: {
            name: (value) => (value.length < 2 ? 'First name is too short' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: (value) => (value.length < 10 ? 'Phone No. Not valid' : null),
            enrollmentNo: (value) => (value.length < 1 ? 'Please Specify' : null),
            // event:(value) =>(event? 'Please Select an Event' : null)
        },
    });
    const userData = {
        name,email

    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={"Payment Page"}
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,
                }}
            >

                <div className='flex flex-col self-center'>
                    <Divider my="sm" variant="dashed" />
                    <Button variant={"light"}>
                        Pay ₹ 100
                    </Button>
                    <TextInput
                            label="UTR Id"
                            withAsterisk
                            placeholder="Enter UTR"
                            {...form.getInputProps('email')}
                        />
                    <FileInput withAsterisk onChange={setReceipt} label="Upload Payment Recipt" placeholder="Payment Recipt" icon={<IconUpload size={rem(14)} />} />;
                    <button  onClick={handleUploadFile}  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3497FE] hover:bg-[#0458f4] hover:-translate-y-0.5 transition-all delay-75 sm:w-fit ">
              <div className={isLoading ? '' : "hidden"}>
                <Loader color="white" variant="dots" />
              </div>
              <div className={isLoading ? "hidden" : ""}>
                Submit
              </div>
            </button>

                </div>
            </Modal>



            <div className='h-[100vh] self-center flex flex-col relative top-24'>
                <div className='flex flex-col self-center'>
                    <div className='flex px-3 flex-col w-full text-center text-black'>
                        <img src={AmityLogo} alt="" />
                        <p className='font-bold' >Registration Form</p></div>
                    <form onSubmit={form.onSubmit((values) => { console.log(values); open(); console.log(event); console.log("userSchool", userSchool); })}>
                        <TextInput
                            label="Full Name"
                            withAsterisk
                            placeholder="Enter Full Name"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label="Email"
                            withAsterisk
                            placeholder="Enter Email"
                            {...form.getInputProps('email')}
                        />
                        <NumberInput
                            mt="sm"
                            label="Phone No."
                            withAsterisk
                            placeholder="Enter Phone No."
                            {...form.getInputProps('phone')}
                        />
                        <Select className='' placeholder='Select Event' label={"Event"} value={event}
                            onChange={(value) => setEvent(value)} nothingFound="" searchable data={[
                                { value: 'ReactJs', label: 'React' },
                                { value: 'Angular', label: 'Angular' },
                                { value: 'svelte', label: 'Svelte' },
                                { value: 'vue', label: 'Vue' },
                            ]} />
                        <Select label="School/College"
                            data={school}
                            placeholder="Enter College/School"
                            nothingFound="No Such Events"
                            searchable
                            creatable
                            withAsterisk
                            onChange={setUserSchool}
                            getCreateLabel={(query) => `${query}`}
                            onCreate={(query) => {
                                const item = { value: query, label: query };
                                console.log(query);
                                if (!query.toLowerCase().includes("amity")) {
                                    setIsAmitian(false)
                                } else setIsAmitian(true)
                                setSchool((current) => [...current, item]);
                                return item;
                            }} />

                        <NumberInput
                            className={isAmitian ? 'hidden' : ''}
                            mt="sm"
                            label="Roll No."
                            placeholder="Enter Eoll"
                            min={0}
                            max={10000}
                            {...form.getInputProps('enrollmentNo')}
                        />
                        <TextInput
                            className={isAmitian ? '' : 'hidden'}
                            label="Enrollment No"
                            placeholder="Enrollment No."
                            {...form.getInputProps('enrollmentNo')}
                        />
                        <Button type="submit" onClick={() => { form.validate(); }} variant={"outline"} mt="md">
                            Submit
                        </Button>

                    </form>
                </div>

            </div>
        </>
    );
}

export default Register