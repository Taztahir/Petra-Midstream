import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, RefreshCw, Database, MapPin, ClipboardList, Scale, LineChart } from "lucide-react";
import { storageLogistics, storageConsult, upstreamExtraction, midstreamLogistics } from '../constants/images'

/**
 * Reusable bullet row: orange icon + text, separated by a hairline divider.
 */
const FeatureItem = ({ icon: Icon, children, isLast }) => (
  <div
    className={`flex items-start gap-3 py-4 ${
      !isLast ? "border-b border-gray-200" : ""
    }`}
  >
    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white">
      <Icon size={14} strokeWidth={2.5} />
    </span>
    <p className="text-[15px] leading-relaxed text-gray-700">{children}</p>
  </div>
);

const QuoteButton = () => (
  <button
    type="button"
    className="mt-8 inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
  >
    Get a Quote
  </button>
);

/**
 * A single service block: heading + copy + feature list (+ CTA) on one side,
 * an image on the other. `reverse` flips which side the image sits on.
 */
const ServiceSection = ({
  eyebrow,
  title,
  description,
  features,
  image,
  imageAlt,
  reverse = false,
}) => (
  <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
    {/* Text column */}
    <div
      className={
        reverse ? "md:order-2" : "md:order-1"
      }
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mt-6">
        {features.map((f, i) => (
          <FeatureItem
            key={i}
            icon={f.icon}
            isLast={i === features.length - 1}
          >
            {f.text}
          </FeatureItem>
        ))}
      </div>

      <QuoteButton />
    </div>

    {/* Image column */}
    <div className={reverse ? "md:order-1" : "md:order-2"}>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          style={{ aspectRatio: "4 / 3" }}
        />
      </div>
    </div>
  </div>
);

const services = [
  {
    title: "Upstream Extraction",
    description:
      "We utilize advanced extraction methodologies ensuring maximum yield while maintaining stringent environmental and safety compliance.",
    image: upstreamExtraction,
    imageAlt: "Drilling rig at an upstream extraction site",
    reverse: false,
    features: [
      { icon: CheckCircle2, text: "State-of-the-art drilling technologies for precision operations." },
      { icon: CheckCircle2, text: "Rigorous safety protocols exceeding industry standards." },
      { icon: CheckCircle2, text: "Real-time monitoring and environmental impact mitigation." },
    ],
  },
  {
    title: "Midstream Logistics",
    description:
      "Our robust pipeline networks provide efficient, secure, and continuous transport of energy resources across vast distances.",
    image: midstreamLogistics,
    imageAlt: "Aerial view of a pipeline network and midstream facility",
    reverse: true,
    features: [
      { icon: TrendingUp, text: "Optimized routing algorithms for maximum transport efficiency." },
      { icon: ShieldCheck, text: "Continuous pipeline integrity monitoring systems." },
      { icon: RefreshCw, text: "Seamless integration with regional storage and terminal hubs." },
    ],
  },
  {
    title: "Storage & Logistics",
    description:
      "Strategically located terminal facilities offering high-capacity storage solutions designed for reliability and rapid deployment.",
    image: storageLogistics,
    imageAlt: "Storage tank terminal near a coastline",
    reverse: false,
    features: [
      { icon: Database, text: "High-volume storage capacity tailored to market demands." },
      { icon: MapPin, text: "Strategic placement at critical infrastructure junctions." },
      { icon: ClipboardList, text: "Advanced inventory management and automated distribution tracking." },
    ],
  },
  {
    title: "Strategic Consulting",
    description:
      "Expert advisory services guiding your energy operations through complex regulatory landscapes and operational bottlenecks.",
    image: storageConsult,
    imageAlt: "Team reviewing data in an operations control room",
    reverse: true,
    features: [
      { icon: Scale, text: "Comprehensive regulatory compliance and risk assessment." },
      { icon: TrendingUp, text: "Operational workflow optimization for increased throughput." },
      { icon: LineChart, text: "Data-driven strategic planning and market analysis." },
    ],
  },
];

const ServiceBody = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 sm:space-y-24">
        {services.map((service, i) => (
          <ServiceSection key={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBody;
