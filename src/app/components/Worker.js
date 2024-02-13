'use client';

// image
import Image from "next/image";

//link
import Link from "next/link";

//icons 
import { Phone, Mail } from "lucide-react";

//data
const WorkerData = [
    {
        img: '/images/testimonial/avatar.png',
        name: 'Matej Hajdin',
        tel: +421944444444,
        mail: 'priklad@gmail.com',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        img: '/images/testimonial/avatar.png',
        name: 'Matej Hajdin',
        tel: +421944444444,
        mail: 'priklad@gmail.com',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
    {
        img: '/images/testimonial/avatar.png',
        name: 'Matej Hajdin',
        tel: +421944444444,
        mail: 'priklad@gmail.com',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since',
    },
]

export default function Worker() {
  return (
    <div className="flex items-center my-24 gap-y-10">
        {WorkerData.map((worker, index) => {
            return (
                <div key={index}>
                    <div className="justify-center text-center mb-8 mx-auto">
                        <Image
                            src={worker.img}
                            width={68}
                            height={68}
                            alt=""
                            className="mx-auto mb-4"
                        />
                        <h3 className="h3">{worker.name}</h3>
                    </div>

                    <div className="mb-8 ">
                        <div className="flex gap-x-3 mb-4">
                            <Phone className="text-accent"/>
                            <Link href='/'>{worker.tel}</Link>
                        </div>
                        <div className="flex gap-x-3">
                            <Mail className="text-accent"/>
                            <Link href='/'>{worker.mail}</Link>
                        </div>
                    </div>
                    <p>{worker.text}</p>
                </div>
            )
        })}
    </div>
  )
}
