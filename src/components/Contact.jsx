import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          query,
        }),
      });
      const data = await response.json();
      alert(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      setFullName("");
      setEmail("");
      setSubject("");
      setQuery("");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center gap-y-4 py-4 w-screen">
      <h1 className="text-4xl font-bold">Contact Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-y-4 w-full"
      >
        <div className="gap-x-6 flex items-center justify-center py-4">
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            className="border border-black"
            onChange={(e) => setFullName(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="gap-x-6 flex items-center justify-center py-4">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            className="border border-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="gap-x-6 flex items-center justify-center py-4">
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            className="border border-black"
            onChange={(e) => setSubject(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="gap-x-6 w-full flex items-center justify-center">
          <label htmlFor="query">Query:</label>
          <textarea
            id="query"
            value={query}
            className="border border-black"
            onChange={(e) => setQuery(e.target.value)}
            required
            minLength={10}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-700 px-3 py-2 text-white text-sm rounded-lg"
          disabled={loading ? true : false}
        >
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
    </main>
  );
};

export default Contact;
