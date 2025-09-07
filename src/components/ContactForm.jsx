import { useState } from "react";

export default function ContactForm(){
  const [data, setData] = useState({name:"", email:"", message:""});
  const [ok, setOk] = useState(null);

  function submit(e){
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      setOk(false);
      return;
    }
    // For assignment: just show success toast — no backend
    setOk(true);
    setData({name:"", email:"", message:""});
  }

  return (
    <form id="contact" onSubmit={submit} className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h4 className="text-lg font-medium">Contact / Register</h4>
      <input className="input mt-4" placeholder="Your name" value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
      <input className="input mt-3" placeholder="Email" value={data.email} onChange={e=>setData({...data,email:e.target.value})}/>
      <textarea className="input mt-3" rows="4" placeholder="Message" value={data.message} onChange={e=>setData({...data,message:e.target.value})}/>
      <div className="mt-3">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
        {ok === false && <span className="text-red-500 ml-3">Please fill all fields.</span>}
        {ok === true && <span className="text-green-600 ml-3">Thanks — message received (demo).</span>}
      </div>
    </form>
  );
}
