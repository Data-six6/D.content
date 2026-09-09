import React, { useEffect, useMemo, useState } from "react";
import api from '../services/api';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";
import { useAuth } from "../context/AuthContext";
import { FaRegUser } from 'react-icons/fa';
import { BsFileBarGraph } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import { PiShapesBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoMdMegaphone } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { FaHourglass } from "react-icons/fa6";
import { OrbitProgress } from "react-loading-indicators";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MapPin, Zap, TrendingUp, Clock, Copy, Check } from "lucide-react";





const steps = [
  { key: "purpose", title: "Purpose", label: "What are you creating content for?" },
  { key: "product", title: "Product", label: "Describe the content idea and core objective." },
  { key: "audience", title: "Audience", label: "Who is this content for?" },
  { key: "goal", title: "Goal", label: "What approach should the content take?" },
  { key: "channels", title: "Channels", label: "Which channels should this content target?" },
  { key: "ai", title: "AI Predictor", label: "AI recommendation summary" },
  { key: "review", title: "Review", label: "Review and save your content plan." },
];


const purposeOptions = [
  "Content Creator",
  "Business",
  "Existing Content",
  
];

const categoryOptions = [
  "Skincare",
  "Wellness",
  "Beauty",
  "Fashion",
  "Tech",
  "Food & Beverage",
  "Home Goods",
  "Education",
];

const contentTypeOptions = [
  "Short-form video",
  "Carousel posts",
  "Educational content",
  "UGC",
  "Product showcase",
  "News update",
];

const toneOptions = [
  "Confident",
  "Friendly",
  "Professional",
  "Playful",
  "Luxury",
  "Bold",
];

const ctaOptions = [
  "Learn more",
  "Shop now",
  "Book a demo",
  "Sign up",
  "Follow us",
  "DM us",
];

const ageOptions = [
  "Under 18",
  "18-24",
  "25-34",
  "35-44",
  "45+"
];

const genderOptions = [
  "Women",
  "Men",
  "All"
];



const goalOptions = [
  "Maximize Reach",
  "Drive Sales",
  "Increase Followers",
  "Brand Awareness"
]

const channelOptions = [
  "TikTok",
  "Instagram",
  "Facebook",
  
];

const initialPlanData = {
  purpose: {
    objective: "",
    selectedPurpose: "Brand Awareness",
  },
  product: {
    name: "",
    category: "",
    description: "",
  },
  audience: {
    targetAudience: "",
    ageRange: "18-34",
    gender: "All genders",
    location: "",
    interests: "",
    characteristics: "",
  },
  strategy: {
    goal: "",
    contentType: "",
    tone: "",
    keyMessage: "",
    cta: "",
    notes: "",
  },
  channels: ["Instagram", "TikTok"],
};

const predictionProcess = [
  "Understanding Audience",
  "Analyzing Category",
  "Finding Patterns",
  "Generating Ideas",
  "Predicting Engagement",
  "Comparing Platforms",
  "Finding Time",
  "Optimizing Caption/Hashtags"
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getSavedPlans() {
  try {
    return JSON.parse(
      localStorage.getItem("meateka_content_plans") || "[]"
    );
  } catch {
    return [];
  }
}

function buildPredictionData(data) {
  const channels = data.channels.length ? data.channels : ["Instagram"];
  const productName = data.product.name || "Your product";
  const audience = data.audience.targetAudience || "Target audience";
  const purpose = data.purpose.objective || "Content strategy";

  return {
    audienceMatch: Math.min(
      97,
      Math.max(74, 82 + (channels.length - 1) * 4)
    ),
    contentPotential: Math.min(
      96,
      Math.max(76, 78 + (productName.length > 10 ? 8 : 4))
    ),
    platformPotential: Math.min(
      95,
      Math.max(72, 70 + channels.length * 6)
    ),
    engagementPotential: Math.min(
      94,
      Math.max(68, 72 + (audience.length > 10 ? 8 : 4))
    ),
    postingTime: "7:00 PM - 9:00 PM",
    recommendation:
      "Focus on short-form storytelling and high-contrast product visuals to maximize reach across your selected channels.",
    summary: `Best performance is expected for ${productName} among ${audience.toLowerCase()} audiences when positioned around ${purpose.toLowerCase()} with a consistent social-first format.`,
  };
}

export default function CreateContent() {
  const navigate = useNavigate();
  const { plan } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputData, setInputData] = useState({
    purpose: "",
    product: "",
    category: "",
    productDescription: "",
    age: "",
    gender: "",
    interests: [],
    audienceDescription: "",
    goal: "",
    channel: "",
  });
  const [loading, setLoading] = useState(false);
  const [interest, setInterest] = useState([]);
  const [currentProcess, setCurrentProcess] = useState(0);
  const hasStartedPrediction = React.useRef(false);
  const [recommendationData, setRecommendationData] = useState(null);

  useEffect(() => {
    api.get('/plan/interest')
      .then(({ data }) => {
        setInterest(data.interests || []);
      })
      .catch((err) => console.error('Error fetching report data:', err))
      .finally(() => setLoading(false));

      api.get('/recommendation/fetch-data')
        .then(({ data }) => {
          setRecommendationData(data.recommendation || null);
          console.log(recommendationData)
        })
        .catch((err) => console.error('Error fetching recommendation data:', err))
        .finally(() => setLoading(false));

    

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStepConfig = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const isPremiumPlan = plan === 'premium';

  useEffect(() => {
    if (currentStepConfig.key === 'ai' && !hasStartedPrediction.current) {
      hasStartedPrediction.current = true;
      handleCreate();
    }

    if (currentStepConfig.key !== 'ai') {
      hasStartedPrediction.current = false;
    }
  }, [currentStepConfig.key]);

  function updateInputField(field, value) {
    if (field === 'interests') {
      setInputData((previous) => {
        const current = Array.isArray(previous.interests) ? previous.interests : [];
        const next = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value];

        return { ...previous, interests: next };
      });
      return;
    }

    setInputData((previous) => ({ ...previous, [field]: value }));
  }

  function isStepValid() {
    switch (currentStepConfig.key) {
      case 'purpose':
        return Boolean(inputData.purpose);
      case 'product':
        return Boolean(inputData.product) && Boolean(inputData.category);
      case 'audience':
        return Boolean(inputData.age) && Boolean(inputData.gender) && Array.isArray(inputData.interests) && inputData.interests.length > 0;
      case 'goal':
        return Boolean(inputData.goal);
      case 'channels':
        return Boolean(inputData.channel);
      default:
        return true;
    }
  }

  const handleCreate = async () => {
    if (loading) return;

    setLoading(true);
    setCurrentProcess(0);

    try {
      const payload = {
        purpose: inputData.purpose,
        product: inputData.product,
        category: inputData.category,
        productDescription: inputData.productDescription,
        age: inputData.age,
        gender: inputData.gender,
        interests: Array.isArray(inputData.interests)
          ? inputData.interests
          : inputData.interests ? [inputData.interests] : [],
        audience_description: inputData.audienceDescription,
        goal: inputData.goal,
        channel: inputData.channel,
      };

      for (let i = 0; i < predictionProcess.length; i++) {
        await delay(200);
        setCurrentProcess(i + 1);
      }

      await api.post('/plan/create-content', payload);
      setCurrentProcess(predictionProcess.length);
    } catch (err) {
      console.error('Create plan failed:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  function handleNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    const draftPlan = {
      id: Date.now(),
      title: `${inputData.product || 'New'} content plan`,
      purpose: inputData.purpose,
      details: inputData.productDescription || 'Content concept planning',
      audience: inputData.age || 'General audience',
      strategy: inputData.goal || 'Audience-first storytelling',
      channels: inputData.channel ? [inputData.channel] : ['Instagram'],
      createdAt: new Date().toISOString(),
    };

    const savedPlans = getSavedPlans();
    localStorage.setItem('meateka_content_plans', JSON.stringify([draftPlan, ...savedPlans].slice(0, 12)));
    navigate('/plan/my-content', { replace: true });
  }

  function StatCard({ icon, label, value }) {
  return (
    <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #ECEDF3" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "#9A9CAF", marginBottom: 6 }}>
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
    <div style={{ fontSize: 15, fontWeight: 700, color: "#161624" }}>{children}</div>
  );
}

function StratRow({ label, a, b }) {
  return (
    <tr style={{ borderTop: "1px solid #F2F2F7" }}>
      <td style={{ padding: "10px 0", color: "#8A8CA3" }}>{label}</td>
      <td style={{ padding: "10px 0", color: "#161624", fontWeight: 600 }}>{a}</td>
      <td style={{ padding: "10px 0", color: "#6B6D80" }}>{b}</td>
    </tr>
  );
}
 
function EngagementBar({ platform, score, color, note }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6 }}>
        <span style={{ color: "#4A4C5E", fontWeight: 600 }}>{platform}</span>
        <span style={{ color, fontWeight: 700 }}>{score}/100</span>
      </div>
      <div style={{ height: 8, background: "#F0F0F5", borderRadius: 999, overflow: "hidden" }}>
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

  function renderStepContent() {
     const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(
    recommendationData?.captions?.[0]?.platform || "TikTok"
  );

  const activeCaption =
    recommendationData?.captions?.find((c) => c.platform === activeTab) ||
    recommendationData?.captions?.[0];

  const handleCopy = () => {
    if (!activeCaption) return;
    navigator.clipboard.writeText(
      `${activeCaption.caption}\n\n${activeCaption.hashtag}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };



    switch (currentStepConfig.key) {
      case 'purpose':
        return (
          <div className="space-y-5">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mt-2 font-bold tracking-[-0.04em] text-[#222222] sm:text-[42px]">
                What are you creating content for?
              </h2>
              <p className="mt-1.5 text-[16px] leading-5 text-[#667085]">
                Select the primary purpose of this content plan to help us tailor the generation process.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {purposeOptions.map((option) => {
                const isSelected = inputData.purpose === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateInputField('purpose', option)}
                    className={`flex items-center flex-col rounded-2xl border-2 px-5 py-6 text-left transition ${isSelected ? 'border-[#4f46e5] shadow-sm' : 'border-[#d9dbea] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]'}`}
                  >
                    <div className={`flex justify-center items-center border rounded-full p-4 ${option === 'Content Creator' ? 'bg-blue-100' : option === 'Business' ? 'bg-green-100' : option === 'Existing Content' ? 'bg-violet-100' : 'bg-amber-100'}`}>
                      {option === 'Content Creator' ? <FaRegUser className="size-8 fill-blue-800" /> : option === 'Business' ? <MdAddBusiness className="size-8 fill-green-700" /> : option === 'Existing Content' ? <BsFileBarGraph className="size-8 fill-violet-800" /> : <BsStars className="size-8 fill-amber-700" />}
                    </div>

                    <div className="mt-5 text-lg font-bold text-center text-[#222222]">{option}</div>
                    <p className="mt-1 px-11 text-sm text-center leading-6 text-[#667085]">
                      {option === 'Brand Awareness' ? 'Build visibility and recognition around your product or message.' : option === 'Lead Generation' ? 'Capture interest and convert attention into qualified leads.' : option === 'Engagement' ? 'Promote interactive conversations and stronger community connection.' : 'Turn content into direct conversion opportunities and sales activity.'}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'product':
        return (
          <div className="space-y-5">
            <div>
              <h2 className="mt-2 text-[16px] font-semibold tracking-[0.004em] text-[#444444] sm:text-[16px]">Product / Service</h2>
              <input
                value={inputData.product}
                onChange={(event) => updateInputField('product', event.target.value)}
                placeholder="Example: SaaS founders, digital marketers, skincare shoppers"
                className="mt-2 w-full rounded-2xl border-2 border-[#dddddd] bg-[#fafaff] px-4 py-4 text-sm text-[#333333] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
              />
            </div>

            <div>
              <h2 className="mt-3 text-[16px] font-semibold tracking-[0.004em] text-[#444444] sm:text-[16px]">Category</h2>
              <select
                className="mt-2 w-full p-5 rounded-2xl border-2 border-[#dddddd] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
                value={inputData.category}
                onChange={(event) => updateInputField('category', event.target.value)}
              >
                <option value="" disabled hidden>Select a category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between pr-2">
                <h2 className="mt-2 text-[16px] font-semibold tracking-[0.004em] text-[#444444] sm:text-[16px]">Description</h2>
                <h2 className="mt-2 text-[16px] font-medium tracking-[0.004em] text-[#777777] sm:text-[16px]">Optional</h2>
              </div>

              <textarea
                value={inputData.productDescription}
                onChange={(event) => updateInputField('productDescription', event.target.value)}
                rows={6}
                placeholder="Share your content goals, launch themes, or campaign direction..."
                className="mt-2 w-full rounded-2xl border-2 border-[#dddddd] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
              />
            </div>
          </div>
        );
      case 'audience':
        return (
          <div className="space-y-4 grid gap-4 md:grid-cols-5">
            <div className="col-span-3">
              <div className="mt-4 rounded-xl border-[#dddddd] border-2 px-5 py-5 bg-white shadow-sm">
                <div className="flex flex-row items-center gap-1">
                  <LuNotepadText color="#3525CD" className="size-7" />
                  <h2 className="text-[22px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[22px]">Demographics</h2>
                </div>

                <div className="mt-4 grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <h2 className="mt-2 text-[18px] font-[550] tracking-[0.004em] text-[#444444] sm:text-[18px]">Age Range</h2>
                    <div className="mt-1 grid gap-3 md:grid-cols-2">
                      {ageOptions.map((option) => {
                        const isSelected = inputData.age === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateInputField('age', option)}
                            className={`rounded-xl border-2 px-1 py-3 text-center transition ${isSelected ? 'border-[#4b42f1] bg-[#423ae0] shadow-sm' : 'border-[#cccccc] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]'}`}
                          >
                            <div className={`text-[16px] font-medium ${isSelected ? 'text-[#ffffff]' : 'text-[#444444]'}`}>{option}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h2 className="mt-2 text-[18px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[18px]">Gender</h2>
                    <div className="mt-8 grid gap-3 md:grid-cols-1">
                      {genderOptions.map((option) => {
                        const isSelected = inputData.gender === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateInputField('gender', option)}
                            className={`rounded-xl border-2 px-5 py-3 text-center transition ${isSelected ? 'border-[#4b42f1] bg-[#423ae0] shadow-sm' : 'border-[#cccccc] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]'}`}
                          >
                            <div className={`text-[16px] font-medium ${isSelected ? 'text-[#ffffff]' : 'text-[#444444]'}`}>{option}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border-2 px-5 py-5 bg-white border-[#dddddd]">
                <div className="flex justify-between items-center">
                  <div className="flex flex-row items-center gap-1">
                    <PiShapesBold color="#3525CD" className="size-7" />
                    <h2 className="text-[22px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[22px]">Interests</h2>
                  </div>
                  <div className="rounded-full bg-[#4F46E51A] border-0 text-center px-2">
                    <p className="text-[16px] font-semibold text-[#3525CD]">Select min. 1</p>
                  </div>
                </div>

                <p className="mt-1.5 text-[16px] leading-5 text-[#667085]">Select all that apply.</p>
                <div className="mt-5 gap-3 flex flex-wrap">
                  {interest.map((option) => {
                    const isSelected = Array.isArray(inputData.interests) && inputData.interests.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => updateInputField('interests', option)}
                        className={`rounded-full border-2 px-5 py-3 text-center transition ${isSelected ? 'border-[#4b42f1] bg-[#423ae0] shadow-sm' : 'border-[#cccccc] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]'}`}
                      >
                        <div className={`text-[16px] font-medium ${isSelected ? 'text-[#ffffff]' : 'text-[#444444]'}`}>{option}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-span-2 mt-8 rounded-xl border-2 px-5 py-5 bg-white self-stretch border-[#dddddd]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <GrDocumentText color="#3525CD" className="size-6" />
                  <h2 className="mt-2 text-[22px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[22px]">Audience Description</h2>
                </div>
                <div className="flex pt-2">
                  <p className="text-[16px] font-medium text-[#777777]">Optional</p>
                </div>
              </div>

              <p className="mt-1.5 text-[16px] leading-5 text-[#667085]">
                Add any specific nuances about your audience's pain points, desires, or income levels.
              </p>
              <textarea
                value={inputData.audienceDescription}
                onChange={(event) => updateInputField('audienceDescription', event.target.value)}
                rows={6}
                placeholder="Share your content goals, launch themes, or campaign direction..."
                className="mt-2 h-4/5 w-full rounded-2xl border border-[#aaaaaa] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"
              />
            </div>
          </div>
        );
      case 'goal':
        return (
          <div className="space-y-5">
            <h2 className="text-l text-center font-bold tracking-tight text-[#172033]">Define your primary Goal</h2>
            <p className="mt-1.5 text-[16px] text-center leading-5 text-[#667085]">
              Select the primary purpose of this content plan to help us tailor the generation process.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {goalOptions.map((option) => {
                const isSelected = inputData.goal === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateInputField('goal', option)}
                    className={`rounded-2xl border-2 px-5 flex py-3 text-left transition ${isSelected ? 'border-[#4b42f1] bg-[#ffffff] shadow-sm' : 'border-[#dddddd] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]'}`}
                  >
                    <div>
                      <div className="mt-1 inline-block border-2 rounded-2xl px-2 py-3 bg-blue-100">
                        {option === 'Maximize Reach' ? <AiOutlineStock color="#3525CD" className="size-6" /> : option === 'Drive Sales' ? <FiShoppingCart color="#3525CD" className="size-6" /> : option === 'Increase Followers' ? <MdOutlinePersonAddAlt1 color="#3525CD" className="size-6" /> : <IoMdMegaphone color="#3525CD" className="size-6" />}
                      </div>

                      <div className="text-lg font-bold text-[#444444]">{option}</div>
                      <p className="mt-2 mr-7 text-sm leading-6 text-[#444444]">
                        {option === 'Maximize Reach' ? 'Focus on impressions, virality, and getting your content in front of as many new eyes as possible.' : option === 'Drive Sales' ? 'Optimize for conversions, click-through rates to storefronts, and direct revenue generation.' : option === 'Increase Followers' ? 'Prioritize engagement metrics, profile visits, and building a loyal, long-term subscriber base.' : 'Focus on sentiment, share of voice, and establishing authority in your specific niche market.'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'channels':
        return (
          <div className="space-y-5">
            <h2 className="text-l font-bold text-center tracking-tight text-[#172033]">Where is this going?</h2>
            <p className="mt-1.5 text-[16px] text-center leading-5 text-[#667085]">
              Select the primary platforms for this content. We'll tailor the intelligence gathered to fit the specific algorithms and audience behaviors of your chosen destinations.
            </p>
            <div className="pt-5 grid gap-6 md:grid-cols-3 px-16">
              {channelOptions.map((option) => {
                const isSelected = inputData.channel === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateInputField('channel', option)}
                    className={`rounded-xl border-2 px-5 pb-8 pr-12 py-3 justify-start flex flex-col text-left transition ${isSelected ? 'border-[#4b42f1] bg-[#ffffff] shadow-sm' : 'border-[#dddddd] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]'}`}
                  >
                    <div className={`flex items-center justify-center text-center border w-fit h-fit rounded-2xl px-1.5 py-1.5 ${option === 'TikTok' ? 'bg-black my-1.5' : option === 'Instagram' ? 'my-1.5 bg-gradient-to-tr from-[#f58529] via-[#dd2c7c] to-[#8034b7]' : 'border-0'}`}>
                      {option === 'TikTok' ? <FaTiktok className="size-6 text-[#ffffff]" /> : option === 'Instagram' ? <FaInstagram className="size-6 text-[#ffffff]" /> : <FaFacebook color="#3525CD" className="size-9" />}
                    </div>

                    <div className="text-lg font-bold text-[#333333]">{option}</div>
                    <p className="mt-2 text-sm leading-6 text-[#444444]">
                      {option === 'TikTok' ? 'Optimize for high-velocity trends, hook retention, and sound-based discovery.' : option === 'Instagram' ? 'Plan branded campaigns and performance-focused channels.' : 'Refresh and repurpose existing assets into a stronger strategy.'}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="space-y-5">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-[#E1E8FD] border-0 rounded-2xl p-3">
                <BsStars color="#3525CD" className="size-10" />
              </div>
              <h2 className="mt-4 text-[32px] font-bold text-center tracking-tight text-[#172033]">Meateka is creating your content plan...</h2>
              <p className="text-[18px] text-center leading-5 text-[#667085]">
                Our intelligence engine is analyzing data to build your optimal schedule.
              </p>
            </div>

            <div className="mt-6 mx-56 rounded-2xl border border-[#d9dbea] bg-[rgb(244,244,255)] p-6 flex flex-col items-start gap-4">
              {predictionProcess.map((process, index) => (
                <div key={index} className="flex gap-4 items-center justify-center">
                  {index === currentProcess ? (
                    <div className="bg-[#4F46E5] rounded-full relative w-6 h-6 overflow-hidden shrink-0">
                      <div className="absolute top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%) scale(0.20)' }}>
                        <OrbitProgress variant="split-disc" dense color="#ffffff" text="" textColor="#623030" />
                      </div>
                    </div>
                  ) : index < currentProcess ? (
                    <FaCheckCircle color="#12a77d" className="size-6" />
                  ) : (
                    <div className="border-2 rounded-full p-1 border-[#bbbbbb]">
                      <FaHourglass color="#bbbbbb" className="size-3" />
                    </div>
                  )}

                  <p className="text-[21px] text-center font-medium leading-5 text-[#333333]">{process}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'review':
        return (
          <div className="space-y-5">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
              <StatCard icon={<MapPin size={16} color="#6C5CE7" />} label="Recommended Content" value={recommendationData.title} />
              <StatCard icon={<Zap size={16} color="#00B37E" />} label="Best Platform" value={recommendationData.platform} />
              <StatCard icon={<TrendingUp size={16} color="#6C5CE7" />} label="Expected Engagement" value={recommendationData.performance} />
              <StatCard icon={<Clock size={16} color="#8A8CA3" />} label="Best Posting Time" value={recommendationData.time} />
            </div>


            <div>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            <CardLabel>Content Idea Recommendation</CardLabel>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#161624", margin: "6px 0 10px" }}>
              {recommendationData.ideas[0]?.idea_name}
            </h2>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <Badge color="#6C5CE7" bg="#F0EDFE">{recommendationData.ideas[0]?.content_type}</Badge>
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 13, color: "#8A8CA3", fontWeight: 600, marginBottom: 8 }}>
                Alternative Ideas:
              </div>
              {recommendationData.ideas[0]?.alternates.map((alt) => (
                <div key={alt.alternate_id} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#4A4C5E", marginBottom: 6 }}>
                  <span style={{ color: "#6C5CE7" }}>▸</span> {alt.idea_name}
                </div>
              ))}
            </div>
          </Card>
 
          <Card>
            <CardLabel>Engagement Prediction</CardLabel>
            <div style={{ marginTop: 14 }}>
              {recommendationData.platform_predictions.map((prediction) => {
                const score = parseInt(prediction.prediction, 10) || 0;
                const color = score >= 85 ? "#12A77D" : score >= 70 ? "#C2185B" : "#8A8CA3";
                const note =
                  score >= 85 ? "High Potential" : score >= 70 ? "Medium Potential" : "Low Potential";
                return (
                  <div key={prediction.platform_id}>
                    <div style={{ height: 18 }} />
                    <EngagementBar platform={prediction.platform} score={score} color={color} note={note} />
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
              {recommendationData.captions.map((tab) => (
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
              {activeCaption && (
                <>
                  {activeCaption.caption}
                  <br />
                  <br />
                  <span style={{ color: "#5B4FE5" }}>
                    {activeCaption.hashtag}
                  </span>
                </>
              )}
            </div>
            <button
              onClick={handleCopy}
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
                cursor: "pointer",
              }}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy Caption"}
            </button>
          </Card>
              </div>

          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-[#fafaff] text-[#172033]">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="relative min-w-0 flex-1 transition-all duration-300 ease-in-out">
          {!isSidebarOpen && (
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
              className="fixed left-4 top-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#d9dbea] bg-white text-xl font-bold text-[#4f46e5] shadow-sm transition-all duration-300 ease-in-out hover:bg-[#f2f3ff]"
            >
              ☰
            </button>
          )}

          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Close sidebar overlay"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-30 bg-[#172033]/10 lg:hidden"
            />
          )}

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[28px] border border-[#d9dbea] bg-white shadow-[0_18px_40px_rgba(79,70,229,0.06)]">
              <div className="flex flex-col items-center border-[#e8eaf2] px-5 py-5 sm:px-7">
                <div>
                  <p className="text-[18px] font-bold tracking-[0.0018em] text-[#4f46e5]">Planning</p>
                </div>

                <div className="mt-5 overflow-x-auto pb-1">
                  <div className="flex min-w-max items-center gap-6">
                    {steps.map((step, index) => {
                      const isActive = index === currentStep;
                      const isComplete = index < currentStep;
                      const isUpcoming = index > currentStep;

                      return (
                        <React.Fragment key={step.key}>
                          <button
                            type="button"
                            onClick={() => !isUpcoming && setCurrentStep(index)}
                            disabled={isUpcoming}
                            className={`flex items-center gap-2 rounded-full border-0 px-2.5 py-1.5 transition ${isActive ? 'bg-[#f2f3ff]' : isComplete ? 'bg-[#edfaf3]' : 'bg-white'} ${isUpcoming ? 'cursor-default opacity-75' : 'cursor-pointer'}`}
                          >
                            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${isActive ? 'bg-[#4f46e5] text-white' : isComplete ? 'bg-[#12a77d] text-white' : 'bg-[#eef0f8] text-[#667085]'}`}>
                              {isComplete ? '✓' : index + 1}
                            </span>
                            <span className={`whitespace-nowrap text-[11px] font-semibold ${isActive ? 'text-[#3d42d9]' : isComplete ? 'text-[#0d8d68]' : 'text-[#667085]'}`}>
                              {step.title}
                            </span>
                          </button>

                          {index < steps.length - 1 && (
                            <div className={`h-px w-4 ${index < currentStep ? 'bg-[#12a77d]' : 'bg-[#aaaaaa]'}`} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              <section className="mt-[-2rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                <div className="rounded-2xl bg-[#ffffff] px-6 sm:px-8">{renderStepContent()}</div>

                <div className="mt-8 flex justify-end flex-col-reverse gap-[60rem] sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                    className={`${isFirstStep || currentStep > 4 ? 'hidden' : ''} inline-flex items-center justify-center rounded-lg border border-[#d9dbea] px-4 py-3 text-sm font-semibold text-[#172033] transition hover:bg-[#f8f8ff] disabled:cursor-not-allowed disabled:opacity-40`}
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={loading || !isStepValid() || ((currentStep === 5) && (currentProcess < predictionProcess.length))}
                    className="items-center justify-center rounded-lg bg-[#4f46e5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4338ca] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {currentStep === 4 ? 'Create' : 'Continue'}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}