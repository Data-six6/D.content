import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import CheckoutSteps from "../components/subscription/CheckoutSteps.jsx";
import ConfirmationCard from "../components/subscription/ConfirmationCard.jsx";

export default function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let order = state;
  if (!order) {
    try { order = JSON.parse(localStorage.getItem("meateka_last_order") || "null"); } catch { order = null; }
  }
  const orderNumber = order?.orderNumber || "MTK-PENDING";
  const billing = order?.billing === "annual" ? "annual" : "monthly";
  const total = Number(order?.total || 31.32);

  function downloadReceipt() {
    const receipt = `Meateka Pro receipt\nOrder: ${orderNumber}\nPlan: Pro (${billing})\nTotal: $${total.toFixed(2)}`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([receipt], { type: "text/plain" }));
    link.download = `${orderNumber}-receipt.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return <PageShell title="Confirmation" description="Your subscription details and receipt are ready." showBack backTo="/payment"><div className="mx-auto max-w-4xl"><CheckoutSteps current={2} /><div className="mt-12"><ConfirmationCard orderNumber={orderNumber} total={total} billing={billing} onDashboard={() => navigate("/dashboard")} onDownload={downloadReceipt} /></div></div></PageShell>;
}
