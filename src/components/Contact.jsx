import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [query, setQuery] = useState();
  return (
    <main className="flex flex-col justify-center items-center gap-y-4 py-4 w-screen">
      <h1 className="text-4xl font-bold">Contact Form</h1>
      <form className="flex flex-col items-center justify-center gap-y-4 w-full">
        <div className="gap-x-6 flex items-center justify-center py-4">
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            className="border border-black"
          />
        </div>
        <div className="gap-x-6 flex items-center justify-center py-4">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            className="border border-black"
          />
        </div>
        <div className="gap-x-6 flex items-center justify-center py-4">
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            className="border border-black"
          />
        </div>
        <div className="gap-x-6 w-full flex items-center justify-center">
          <label htmlFor="query">Query:</label>
          <textarea
            id="query"
            value={query}
            className="border border-black"
          ></textarea>
        </div>
      </form>
    </main>
  );
};

export default Contact;
