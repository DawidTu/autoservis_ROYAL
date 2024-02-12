'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, MessageSquare, PhoneCallIcon } from "lucide-react";

import emailjs from '@emailjs/browser'
import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [result, setResult] = useState(false);
    const [error, setError] = useState(false);
   
    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !number || !message) {
            setError('Vaša správa nebola odoslaná. Musíte vyplniť všetky polia');
            setResult('');
            return;
          }
    
          setError('');

          const serviceId = 'service_cx17pbi';
          const templateId = 'template_8qdmgg7';
          const userId = 'LHIIyucJAPuIWRX_B';
    
        emailjs
        .send(serviceId, templateId, {name, email, number, message}, userId)
        .then((result) => {
            console.log(result.text);
            setResult("Vaša správa bola úspešne odoslaná. Čoskoro sa vám ozvem");

            setName('');
            setEmail('');
            setNumber('');
            setMessage('');
        }) 
        .catch((error) => {
            setError("Vaša správa nebola odoslaná. Musíte vyplniť všetky polia");
        });
      };

      setTimeout(() => {
        setResult(false)
        setError(false);
      }, 5000)

  return (
    
    <form 
        onSubmit={sendEmail}
        className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" value={name} type='name' id='name' placeholder='Meno a Priezvisko *' onChange={(e) => setName(e.target.value)}/>
            <User className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Input className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" value={email} type='email' id='email' placeholder='Email *' onChange={(e) => setEmail(e.target.value)}/>
            <MailIcon className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Input className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" value={number} type='number' id='number' placeholder='+421 *' onChange={(e) => setNumber(e.target.value)}/>
            <PhoneCallIcon className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Textarea className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" value={message} placeholder="Tu nápíšte prosím svoju správu. *"  onChange={(e) => setMessage(e.target.value)}/>
            <MessageSquare className="absolute top-4 right-6" size={20}/>
        </div>
        <div className="flex items-center gap-x-8">
            <Button type="submit" className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]'>
                Kontaktujte nás
            </Button>
            <div>     
                {error && <div className="danger">{error}</div>}
                {result && <div className="success">{result}</div>} 
            </div>
        </div>  
    </form>
  )
}