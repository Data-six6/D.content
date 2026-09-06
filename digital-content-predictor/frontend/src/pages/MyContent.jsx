import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import api from '../services/api';

export default function MyContent() {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    setError("");
    api.get('/plan/my-content')
    .then(({ data }) => { setHistory(data.history); })
    .catch(() => { setError("Failed to load your content plans."); })
    .finally(() => { setLoading(false); });
  };

  useEffect(() => { load(); }, []);


  return (
    <div>
      <PageShell title="My Content Plans" description="Keep track of your planned and published content in one place." backTo="/dashboard">
      <Link to="/create-content" className="inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]">Create a New Plan</Link>

      {loading && <p className="mt-6 text-sm text-[#667085]">Loading...</p>}
      {error && <p className="mt-6 text-sm font-medium text-[#c2415b]">{error}</p>}
      
      {!loading && !error && history.length === 0 && (
        <p className="mt-6 text-sm text-[#667085]">You haven't created any plans yet.</p>
      )}

      {!loading && !error && history.length > 0 && (
        <div>
        {history.map((h) => {
          return (
            <div key={h.plan_id} className="mx-auto max-w-4xl px-5 py-10 sm:px-8" >
            <h1 className="mt-6 text-3xl font-bold text-[#172033]">{ h.product_name }</h1>
            <p className="mt-2 text-sm leading-6 text-[#667085]">{ h.product_description }</p>
            <section className="mt-8 rounded-xl border border-[#d9dbea] bg-white p-6 shadow-sm sm:p-8">{ h.plan_channel }</section>
            </div>
          )
          })}
      </div>
      )}
      
      </PageShell>

     
    </div>


  )
}
