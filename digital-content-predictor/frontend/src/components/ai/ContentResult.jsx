import React, { useEffect, useState } from "react";
import { Clock, Check, Lightbulb, Share2, TrendingUp, Copy } from "lucide-react";

function StatCard({ icon, label, value }) {
  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #ECEDF3" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, marginBottom: 6, fontWeight: 600, color: "#555555" }}>
        {icon} {label}
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 700, color: "#161624", lineHeight: 1.3 }}>{value}</div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: 22,
        border: "1px solid #ECEDF3",
      }}
    >
      {children}
    </div>
  );
}

function CardLabel({ children }) {
  return (
    <div style={{ fontSize: 20, fontWeight: 700, color: "#161624" }}>{children}</div>
  );
}

function EngagementBar({ platform, score, color, note }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6 }}>
        <span style={{ color: "#4A4C5E", fontWeight: 600 }}>{platform}</span>
        <span style={{ color, fontWeight: 700 }}>{score}</span>
      </div>
      <div style={{ height: 2, background: "#F0F0F5", borderRadius: 999, overflow: "hidden" }}>
        <div style={{ width: `${score}%`, height: "100%", background: color, borderRadius: 999 }} />
      </div>
      <div style={{ fontSize: 12, color: "#9A9CAF", marginTop: 4 }}>{note}</div>
    </div>
  );
}

function Badge({ children, color, bg }) {
  return (
    <span
      style={{
        background: bg,
        color,
        fontSize: 12,
        fontWeight: 600,
        padding: "4px 10px",
        borderRadius: 999,
      }}
    >
      {children}
    </span>
  );
}

/**
 * Turns a plan row (from /plan/my-content or /plan/saved-ideas) into the flat
 * shape this component expects. Handles `recommendations` being either an
 * array or a single object, which is why the two pages disagreed before.
 */
export function normalizePlan(plan = {}) {
  const rec = Array.isArray(plan.recommendations)
    ? plan.recommendations[0] || {}
    : plan.recommendations || {};

  return {
    title: rec.title || plan.product_name || "Untitled",
    platform: rec.platform || plan.plan_channel || "N/A",
    performance: rec.performance || "N/A",
    time: rec.time || "N/A",
    ideas: rec.ideas || [],
    platform_predictions: rec.platform_predictions || [],
    captions: rec.captions || [],
  };
}

/** True when a plan actually has a recommendation to show. */
export function hasRecommendations(plan = {}) {
  const rec = plan.recommendations;
  if (Array.isArray(rec)) return rec.length > 0;
  return Boolean(rec && Object.keys(rec).length > 0);
}

export default function ContentResult({ recommendationData = {} }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(
    recommendationData?.captions?.[0]?.platform || "TikTok"
  );

  const captions = recommendationData.captions || [];
  const ideas = recommendationData.ideas || [];
  const predictions = recommendationData.platform_predictions || [];
  const mainIdea = ideas[0];
  const alternates = mainIdea?.alternates || [];

  const activeCaption =
    captions.find((c) => c.platform === activeTab) || captions[0];

  useEffect(() => {
    setActiveTab(recommendationData?.captions?.[0]?.platform || "TikTok");
  }, [recommendationData]);

  const handleCopy = () => {
    if (!activeCaption) return;
    navigator.clipboard.writeText(
      `${activeCaption.caption}\n\n${activeCaption.hashtag}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-5">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
        <StatCard icon={<Lightbulb size={16} color="#6C5CE7" />} label="Recommended Content" value={recommendationData.title} />
        <StatCard icon={<Share2 size={16} color="#00B37E" />} label="Best Platform" value={recommendationData.platform} />
        <StatCard icon={<TrendingUp size={16} color="#6C5CE7" />} label="Expected Engagement" value={recommendationData.performance} />
        <StatCard icon={<Clock size={16} color="#8A8CA3" />} label="Best Posting Time" value={recommendationData.time} />
      </div>

      <div>
        <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            <div className="border-b border-[#aaaaaa] pb-3">
              <CardLabel>Content Idea Recommendation</CardLabel>
            </div>

            <h2 className="pt-3" style={{ fontSize: 18, fontWeight: 600, color: "#161624", margin: "6px 0 10px" }}>
              {mainIdea?.idea_name || "No idea generated yet"}
            </h2>
            {mainIdea?.content_type && (
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <Badge color="#6C5CE7" bg="#F0EDFE">{mainIdea.content_type}</Badge>
              </div>
            )}
            {alternates.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: "#8A8CA3", fontWeight: 600, marginBottom: 8 }}>
                  Alternative Ideas:
                </div>
                {alternates.map((alt) => (
                  <div key={alt.alternate_id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#4A4C5E", marginBottom: 6 }}>
                    <span style={{ color: "#6C5CE7" }}>▸</span> {alt.idea_name}
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card>
            <CardLabel>Engagement Prediction</CardLabel>
            <div style={{ marginTop: 14 }}>
              {predictions.length === 0 && (
                <p style={{ fontSize: 13, color: "#9A9CAF" }}>No predictions available.</p>
              )}
              {predictions.map((prediction) => {
                const score = prediction.prediction;
                const color = score === "High" ? "#12A77D" : score === "Medium" ? "#C2185B" : "#8A8CA3";
                const note =
                  score >= 85 ? "High Potential" : score >= 70 ? "Medium Potential" : "Low Potential";
                return (
                  <div key={prediction.platform_id}>
                    <div style={{ height: 18 }} />
                    <EngagementBar platform={prediction.platform} score={prediction.prediction} color={color}  />
                  </div>
                );
              })}
            </div>
            <p style={{ fontSize: 12.5, color: "#9A9CAF", marginTop: 18, lineHeight: 1.5 }}>
              TikTok's algorithm favors this hook format for your niche right now,
              suggesting higher reach.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card>
          <CardLabel>Caption &amp; Hashtags</CardLabel>
          <div style={{ display: "flex", gap: 18, borderBottom: "1px solid #ECEDF3", marginTop: 12, marginBottom: 14 }}>
            {captions.map((tab) => (
              <button
                key={tab.caption_id}
                onClick={() => setActiveTab(tab.platform)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "0 0 10px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  color: activeTab === tab.platform ? "#5B4FE5" : "#9A9CAF",
                  borderBottom: activeTab === tab.platform ? "2px solid #5B4FE5" : "2px solid transparent",
                  textTransform: "capitalize",
                }}
              >
                {tab.platform}
              </button>
            ))}
          </div>
          <div style={{ background: "#F6F5FE", borderRadius: 10, padding: 14, fontSize: 13.5, color: "#4A4C5E", lineHeight: 1.6, minHeight: 90, whiteSpace: "pre-wrap" }}>
            {activeCaption ? (
              <>
                {activeCaption.caption}
                <br />
                <br />
                <span style={{ color: "#5B4FE5" }}>{activeCaption.hashtag}</span>
              </>
            ) : (
              <span style={{ color: "#9A9CAF" }}>No caption generated yet.</span>
            )}
          </div>
          <button
            onClick={handleCopy}
            disabled={!activeCaption}
            style={{
              marginTop: 14,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "10px 0",
              borderRadius: 8,
              border: "1px solid #E2E3EC",
              background: "#fff",
              color: "#4A4C5E",
              fontSize: 14,
              fontWeight: 600,
              cursor: activeCaption ? "pointer" : "not-allowed",
            }}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied" : "Copy Caption"}
          </button>
        </Card>
      </div>
    </div>
  );
}