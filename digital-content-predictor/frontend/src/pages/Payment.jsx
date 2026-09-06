import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import CheckoutSteps from "../components/subscription/CheckoutSteps.jsx";
import OrderSummary, { getOrderTotal } from "../components/subscription/OrderSummary.jsx";
import PaymentForm from "../components/subscription/PaymentForm.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { setPlan } = useAuth();
  const billing = state?.billing === "annual" ? "annual" : "monthly";
  const [processing, setProcessing] = useState(false);
  const [failure, setFailure] = useState("");

  function completePayment() {
    if (processing) return;
    setFailure("");
    setProcessing(true);
    window.setTimeout(() => {
      try {
        const orderNumber = `MTK-${Date.now().toString().slice(-8)}`;
        setPlan("premium");
        localStorage.setItem("meateka_last_order", JSON.stringify({ orderNumber, billing, total: getOrderTotal(billing) }));
        navigate("/confirmation", { replace: true, state: { orderNumber, billing, total: getOrderTotal(billing) } });
      } catch {
        setFailure("We could not complete the upgrade. Please try again.");
        setProcessing(false);
      }
    }, 900);
  }

  return <PageShell title="Payment" description="Securely complete your Meateka Pro upgrade." showBack backTo="/checkout">
    <div className="mx-auto max-w-5xl"><CheckoutSteps current={1} /><div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"><div className="rounded-2xl border border-[#e0e3f0] bg-white p-6 sm:p-8"><PaymentForm onComplete={completePayment} processing={processing} />{failure && <p role="alert" className="mt-4 rounded-lg bg-[#fff0f1] px-3 py-2 text-sm font-medium text-[#c2415b]">{failure}</p>}</div><OrderSummary billing={billing} /></div></div>
  </PageShell>;
}
