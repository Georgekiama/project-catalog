import { useState } from "react";

const PROJECTS = [
  {
    id: "creative-command",
    name: "Creative Command Center",
    short: "Creative Command Center",
    icon: "🎬",
    category: "marketing",
    catLabel: "Marketing & Creative",
    catColor: "#C75C2B",
    catBg: "#FDF0EB",
    status: "active",
    mergedFrom: ["CTD — Creative Technology Director", "Video-First Social Media Strategy"],
    audience: ["John (Marketing Director)", "Anthony", "Dominic", "Kolo", "Design Team", "Kenya Team"],
    purpose: "The unified creative leadership system for both Lit & More and College Produce. Combines AI-powered creative direction with video production guardrails in a single project. Six operational modes cover the full creative lifecycle from strategy through QA.",
    modes: [
      { name: "Brief Translator", desc: "Takes a business objective and produces detailed creative briefs — shot lists, design specs, platform-specific formats, mood/tone direction." },
      { name: "Tool Scout", desc: "Researches and recommends emerging creative tools, techniques, formats, and platform changes. Weekly creative intelligence briefing." },
      { name: "Creative QA", desc: "Reviews draft assets against brand standards, platform optimization, and the content guardrails. Catches problems before production." },
      { name: "Content Strategy", desc: "Maps content types, formats, cadence, and platform distribution against business goals and target audiences." },
      { name: "Workflow Optimizer", desc: "Analyzes the creative pipeline and recommends automation, templates, batch processing, or AI-assisted tools to scale output." },
      { name: "Guardrail Check", desc: "Validates any script or brief against the video content rules before production begins. Every piece of content must pass before the team starts work." },
    ],
    guardrails: [
      "Every Lit & More video does one thing: shows attorneys the problems we solve and the services we provide",
      "No legal education, no legal advice, no lead magnets — just what we do and why it matters",
      "All scripts must pass Guardrail Check (Mode 6) before entering production",
      "Platform targets: Instagram Reels + YouTube/Shorts",
      "Scale target: 8-12 videos/week across both brands",
    ],
    whenToUse: "Any time creative work is being planned, produced, or reviewed. Start with the appropriate mode — Brief Translator for new projects, Guardrail Check before any video enters production, Creative QA for draft review, Content Strategy for calendar planning.",
    connections: [
      { target: "pre-flight", what: "Pre-Flight has a Creative/Marketing variant that references this system's standards. If creative standards change here, update the Pre-Flight variant. Pre-Flight catches bad starts; Creative Command provides direction." },
      { target: "training", what: "Video guardrails and creative standards are required reading for all creative team onboarding. New hires must understand the six modes and when each applies." },
    ],
  },
  {
    id: "pre-flight",
    name: "Project Pre-Flight",
    short: "Project Pre-Flight",
    icon: "🛡️",
    category: "operations",
    catLabel: "Operations & QC",
    catColor: "#2D8659",
    catBg: "#E8F5EE",
    status: "active",
    mergedFrom: ["Lit HAL", "UUE — Unknown-Unknowns Engine"],
    audience: ["All Teams", "Department Leads", "Project Leads", "Kris"],
    purpose: "Two-phase validation system that prevents bad decisions and premature execution. Phase 1 (Discovery) surfaces what you don't know before you commit. Phase 2 (Validation) evaluates whether the proposed approach is safe, efficient, and aligned with how Kris would handle it. Produces a RED/YELLOW/GREEN verdict.",
    modes: [
      { name: "Discovery Mode", desc: "Formerly UUE. Prevents premature coding and separates discovery from delivery. Forces structured exploration — surfaces unknown unknowns, validates requirements, and produces a build/no-build decision before any work begins.", former: "UUE" },
      { name: "Validation Mode", desc: "Formerly Lit HAL. RED/YELLOW/GREEN system that evaluates a proposed approach for ambiguity, scope creep, process gaps, and alignment with established standards. Includes department-specific variants.", former: "Lit HAL" },
    ],
    variants: [
      { name: "E-Discovery", desc: "Checks for ambiguous redaction requests, out-of-order document sets, unclear processing instructions" },
      { name: "Development", desc: "Checks for undefined scope, missing requirements, premature architecture decisions" },
      { name: "Creative / Marketing", desc: "References Creative Command Center standards. Checks for missing briefs, undefined platform specs, brand alignment" },
    ],
    whenToUse: "At the START of any significant project or decision. Run Discovery Mode first when exploring something new ('should we build this?'). Run Validation Mode before executing ('are we building this right?'). If you're unsure which to use, start with Discovery.",
    connections: [
      { target: "creative-command", what: "The Creative/Marketing variant references Creative Command Center's guardrails and standards. If those change, this variant needs updating." },
      { target: "training", what: "All team members need to know when to run Pre-Flight. It should be part of standard operating procedure training — especially the trigger conditions for each mode." },
      { target: "m365", what: "The M365 separation guide uses a checkpoint philosophy that mirrors Pre-Flight's approach. M365 checkpoints are self-contained but follow the same stop-and-verify principle." },
    ],
  },
  {
    id: "m365",
    name: "M365 Separation Execution Guide",
    short: "M365 Separation",
    icon: "⚙️",
    category: "infrastructure",
    catLabel: "Infrastructure",
    catColor: "#4A6FA5",
    catBg: "#EBF0F7",
    status: "active",
    mergedFrom: null,
    audience: ["Tech Team", "Michael", "Kris"],
    purpose: "Step-by-step execution package for separating Microsoft 365 assets between Lit & More and College Produce. Includes identity categories, email migration batches, DNS/domain separation, shared mailbox creation, and rollback procedures. The Claude Project version lets the tech team submit screenshots for checkpoint verification.",
    identityCategories: [
      { name: "LM Primary", desc: "Client-facing staff. Primary mailbox @litnmore.com. No CP footprint.", example: "Mike Sooley, Melissa" },
      { name: "CP Primary + LM Persona", desc: "CP team members who touch LM client work. Primary mailbox @collegeproduce.com with named alias @litnmore.com.", example: "Rose, Rachel (~5-6 people)" },
      { name: "CP Only", desc: "Internal tools, dev, automation. Primary mailbox @collegeproduce.com only.", example: "Dev team, automation accounts" },
    ],
    whenToUse: "When executing any M365 configuration change between the two companies. Do not make email, domain, or identity changes without following this guide. The checkpoint system requires screenshot verification before proceeding between phases.",
    connections: [
      { target: "training", what: "New hires need to understand the three identity categories so they know which brand they operate under and which email identity applies to them." },
      { target: "pre-flight", what: "Shares the stop-and-verify philosophy. M365 checkpoints are self-contained within this guide." },
    ],
  },
  {
    id: "prospect-data",
    name: "Prospect Data Standardization",
    short: "Prospect Data",
    icon: "📊",
    category: "sales",
    catLabel: "Sales & Outreach",
    catColor: "#7B5EA7",
    catBg: "#F3EFF8",
    status: "active",
    mergedFrom: null,
    audience: ["Sales Team", "Kenya Team", "n8n Automation"],
    purpose: "CSV/data processing system that standardizes prospect information (law firm data) into Apollo-compatible format for enrichment. Part of the broader prospect intelligence pipeline that includes AI-powered outreach personalization via n8n workflows. Handles intake from multiple sources (CSV/XLSX), deduplication, AI enrichment through Claude, and routing to the prospect database.",
    dataFlow: [
      "Ingest prospect lists from multiple sources (CSV/XLSX uploads)",
      "Merge and standardize via n8n workflow",
      "AI enrichment through Claude (practice area classification, personalized outreach angles)",
      "Deduplication and confidence scoring",
      "Route to prospect database based on qualification criteria",
    ],
    whenToUse: "When ingesting new prospect lists from any source, cleaning existing data, preparing batches for Apollo enrichment, or building personalized outreach campaigns. Also when defining or updating the field hierarchy for what data points are collected on each prospect.",
    connections: [
      { target: "training", what: "Kenya team training must cover the field hierarchy, minimum viable data sets, and the standardization workflow for processing prospect lists." },
    ],
  },
  {
    id: "training",
    name: "CP Training — Onboarding System",
    short: "CP Training & Onboarding",
    icon: "📚",
    category: "people",
    catLabel: "People & Training",
    catColor: "#B8860B",
    catBg: "#FDF6E3",
    status: "active",
    mergedFrom: null,
    audience: ["All New Hires", "Irene", "Rachel", "Kenya Team"],
    purpose: "College Produce's master training and onboarding system. This is the consumer layer — it doesn't generate standards, it absorbs them from the other four projects. Covers foundational modules plus role-specific learning paths, delivered through TalentLMS with self-paced, auto-validated learning.",
    isConsumer: true,
    foundationModules: [
      "What is College Produce",
      "What is Lit & More (and our relationship to them)",
      "The litigation support industry",
      "What is a law firm / who are our clients",
      "Org structure and team",
      "Communication standards",
      "Confidentiality and data security",
      "HR and conduct",
    ],
    sourceReferences: [
      { source: "Creative Command Center", modules: "Creative team onboarding, video production guardrails, six operational modes" },
      { source: "Project Pre-Flight", modules: "Standard operating procedures, when to run Discovery vs Validation, trigger conditions" },
      { source: "M365 Separation", modules: "Identity categories, which brand/email identity applies to each role" },
      { source: "Prospect Data", modules: "Kenya team data handling, field hierarchies, standardization workflows" },
    ],
    whenToUse: "When onboarding any new team member. Also serves as the reference point for what every employee should know. If a knowledge gap appears on the team, check whether the training system covers it. Quarterly review: verify each source reference is still current.",
    connections: [],
  },
];

const CATEGORIES = {
  marketing: { color: "#C75C2B", bg: "#FDF0EB" },
  operations: { color: "#2D8659", bg: "#E8F5EE" },
  infrastructure: { color: "#4A6FA5", bg: "#EBF0F7" },
  sales: { color: "#7B5EA7", bg: "#F3EFF8" },
  people: { color: "#B8860B", bg: "#FDF6E3" },
};

export default function ConsolidatedCatalog() {
  const [selectedId, setSelectedId] = useState(null);
  const [expandedMode, setExpandedMode] = useState(null);

  const selected = PROJECTS.find(p => p.id === selectedId);

  const connectedIds = selected
    ? [
        ...selected.connections.map(c => c.target),
        ...PROJECTS.filter(p => p.connections.some(c => c.target === selected.id)).map(p => p.id),
      ]
    : [];

  return (
    <div style={{
      fontFamily: "'Instrument Sans', 'DM Sans', system-ui, sans-serif",
      background: "#FAFAF7",
      minHeight: "100vh",
      color: "#1a1a1a",
    }}>
      {/* Header */}
      <div style={{
        padding: "28px 28px 22px",
        borderBottom: "1px solid #e5e3dc",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", margin: 0, color: "#111" }}>
            Project System
          </h1>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#2D8659",
            background: "#E8F5EE",
            padding: "3px 10px",
            borderRadius: 10,
          }}>
            v2 — Consolidated
          </span>
        </div>
        <p style={{ fontSize: 13, color: "#888", margin: "6px 0 0", lineHeight: 1.5, maxWidth: 560 }}>
          College Produce + Lit & More — 4 core systems + 1 training layer. Click any card to see full details, modes, and connections.
        </p>
      </div>

      <div style={{ padding: "24px 28px", display: "flex", gap: 20 }}>
        {/* Left — Card grid */}
        <div style={{
          flex: selected ? "0 0 340px" : "1",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          transition: "flex 0.2s ease",
        }}>
          {/* Architecture label */}
          <div style={{ fontSize: 11, fontWeight: 600, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>
            Core Systems
          </div>

          {PROJECTS.filter(p => !p.isConsumer).map(project => {
            const isSelected = selectedId === project.id;
            const isConnected = connectedIds.includes(project.id);
            const isDimmed = selectedId && !isSelected && !isConnected;

            return (
              <div
                key={project.id}
                onClick={() => { setSelectedId(isSelected ? null : project.id); setExpandedMode(null); }}
                style={{
                  padding: "16px 18px",
                  borderRadius: 10,
                  border: isSelected
                    ? `2px solid ${project.catColor}`
                    : isConnected
                      ? `2px dashed ${project.catColor}44`
                      : "1px solid #e5e3dc",
                  background: isSelected ? project.catBg : "#fff",
                  cursor: "pointer",
                  opacity: isDimmed ? 0.3 : 1,
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
              >
                {isConnected && !isSelected && (
                  <div style={{
                    position: "absolute",
                    top: -7,
                    right: 12,
                    background: "#2D8659",
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 8,
                    letterSpacing: "0.04em",
                  }}>
                    LINKED
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>{project.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{project.short}</div>
                    <div style={{ fontSize: 10, color: project.catColor, fontWeight: 500, marginTop: 1 }}>
                      {project.catLabel}
                    </div>
                  </div>
                </div>
                {project.mergedFrom && (
                  <div style={{
                    fontSize: 10,
                    color: "#999",
                    background: "#f5f4f0",
                    padding: "3px 8px",
                    borderRadius: 6,
                    display: "inline-block",
                    marginBottom: 6,
                  }}>
                    Merged from: {project.mergedFrom.join(" + ")}
                  </div>
                )}
                <p style={{
                  fontSize: 12,
                  color: "#777",
                  lineHeight: 1.5,
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {project.purpose}
                </p>
              </div>
            );
          })}

          {/* Training separator */}
          <div style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#bbb",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginTop: 8,
            marginBottom: 2,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            Consumer Layer
            <div style={{ flex: 1, height: 1, background: "#e5e3dc" }} />
          </div>

          {PROJECTS.filter(p => p.isConsumer).map(project => {
            const isSelected = selectedId === project.id;
            const isConnected = connectedIds.includes(project.id);
            const isDimmed = selectedId && !isSelected && !isConnected;

            return (
              <div
                key={project.id}
                onClick={() => { setSelectedId(isSelected ? null : project.id); setExpandedMode(null); }}
                style={{
                  padding: "16px 18px",
                  borderRadius: 10,
                  border: isSelected
                    ? `2px solid ${project.catColor}`
                    : isConnected
                      ? `2px dashed ${project.catColor}44`
                      : "1px solid #e5e3dc",
                  background: isSelected ? project.catBg : "#fff",
                  cursor: "pointer",
                  opacity: isDimmed ? 0.3 : 1,
                  transition: "all 0.2s ease",
                  position: "relative",
                }}
              >
                {isConnected && !isSelected && (
                  <div style={{
                    position: "absolute",
                    top: -7,
                    right: 12,
                    background: "#B8860B",
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 8,
                  }}>
                    RECEIVES FROM ALL
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 22 }}>{project.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>{project.short}</div>
                    <div style={{ fontSize: 10, color: project.catColor, fontWeight: 500, marginTop: 1 }}>
                      {project.catLabel} — Consumes from all core systems
                    </div>
                  </div>
                </div>
                <p style={{
                  fontSize: 12,
                  color: "#777",
                  lineHeight: 1.5,
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {project.purpose}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right — Detail panel */}
        {selected && (
          <div style={{
            flex: 1,
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e5e3dc",
            padding: "24px",
            alignSelf: "flex-start",
            position: "sticky",
            top: 20,
            maxHeight: "calc(100vh - 120px)",
            overflowY: "auto",
          }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 30 }}>{selected.icon}</span>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#111" }}>{selected.short}</h2>
                  <span style={{ fontSize: 12, color: selected.catColor, fontWeight: 500 }}>{selected.catLabel}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                style={{ background: "none", border: "none", fontSize: 18, color: "#bbb", cursor: "pointer", padding: "4px 8px" }}
              >
                ✕
              </button>
            </div>

            {selected.mergedFrom && (
              <div style={{
                fontSize: 11,
                color: "#888",
                background: "#f8f7f3",
                padding: "8px 12px",
                borderRadius: 8,
                marginBottom: 16,
                lineHeight: 1.5,
              }}>
                <strong style={{ color: "#666" }}>Consolidated from:</strong> {selected.mergedFrom.join(" and ")}
              </div>
            )}

            {/* Purpose */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                What It Does
              </div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7, margin: 0 }}>
                {selected.purpose}
              </p>
            </div>

            {/* When to use */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                When To Use
              </div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7, margin: 0 }}>
                {selected.whenToUse}
              </p>
            </div>

            {/* Modes */}
            {selected.modes && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Operational Modes
                </div>
                {selected.modes.map((mode, i) => (
                  <div
                    key={i}
                    onClick={() => setExpandedMode(expandedMode === i ? null : i)}
                    style={{
                      padding: "10px 14px",
                      background: expandedMode === i ? selected.catBg : "#FAFAF7",
                      border: `1px solid ${expandedMode === i ? selected.catColor + "33" : "#eee"}`,
                      borderRadius: 8,
                      marginBottom: 6,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: selected.catColor,
                          background: "#fff",
                          width: 22,
                          height: 22,
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `1px solid ${selected.catColor}22`,
                        }}>
                          {i + 1}
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{mode.name}</span>
                        {mode.former && (
                          <span style={{ fontSize: 10, color: "#bbb" }}>
                            (was {mode.former})
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: 12, color: "#ccc", transform: expandedMode === i ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}>▼</span>
                    </div>
                    {expandedMode === i && (
                      <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, margin: "8px 0 0", paddingLeft: 30 }}>
                        {mode.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Guardrails */}
            {selected.guardrails && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Content Guardrails
                </div>
                <div style={{
                  background: "#FFF8F0",
                  border: "1px solid #F0D8B8",
                  borderRadius: 8,
                  padding: "14px 16px",
                }}>
                  {selected.guardrails.map((g, i) => (
                    <div key={i} style={{
                      fontSize: 12,
                      color: "#6B5A3E",
                      lineHeight: 1.6,
                      padding: "3px 0",
                      display: "flex",
                      gap: 8,
                    }}>
                      <span style={{ flexShrink: 0, color: "#C75C2B" }}>•</span>
                      {g}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Variants */}
            {selected.variants && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Department Variants
                </div>
                {selected.variants.map((v, i) => (
                  <div key={i} style={{
                    padding: "8px 12px",
                    background: "#FAFAF7",
                    border: "1px solid #eee",
                    borderRadius: 6,
                    marginBottom: 4,
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#333" }}>{v.name}</span>
                    <span style={{ fontSize: 11, color: "#888", marginLeft: 8 }}>— {v.desc}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Identity Categories (M365) */}
            {selected.identityCategories && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Identity Categories
                </div>
                {selected.identityCategories.map((cat, i) => (
                  <div key={i} style={{
                    padding: "10px 14px",
                    background: "#FAFAF7",
                    border: "1px solid #eee",
                    borderRadius: 8,
                    marginBottom: 6,
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 3 }}>{cat.name}</div>
                    <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{cat.desc}</div>
                    <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>e.g. {cat.example}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Data Flow (Prospect) */}
            {selected.dataFlow && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Data Pipeline
                </div>
                <div style={{
                  background: "#F3EFF8",
                  border: "1px solid #DDD4EC",
                  borderRadius: 8,
                  padding: "14px 16px",
                }}>
                  {selected.dataFlow.map((step, i) => (
                    <div key={i} style={{
                      fontSize: 12,
                      color: "#5A4A7A",
                      lineHeight: 1.6,
                      padding: "2px 0",
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#7B5EA7",
                        background: "#fff",
                        width: 18,
                        height: 18,
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}>
                        {i + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Foundation Modules (Training) */}
            {selected.foundationModules && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Foundation Modules (8)
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {selected.foundationModules.map((mod, i) => (
                    <span key={i} style={{
                      fontSize: 12,
                      color: "#6B5A1E",
                      background: "#FDF6E3",
                      padding: "5px 12px",
                      borderRadius: 6,
                      border: "1px solid #F0DEB0",
                    }}>
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Source References (Training) */}
            {selected.sourceReferences && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Source References — What This System Pulls From
                </div>
                {selected.sourceReferences.map((ref, i) => {
                  const sourceProject = PROJECTS.find(p => p.short === ref.source || p.name.includes(ref.source));
                  return (
                    <div key={i} style={{
                      padding: "10px 14px",
                      background: "#FAFAF7",
                      border: "1px solid #eee",
                      borderRadius: 8,
                      marginBottom: 6,
                      cursor: sourceProject ? "pointer" : "default",
                    }}
                    onClick={() => { if (sourceProject) { setSelectedId(sourceProject.id); setExpandedMode(null); } }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                        {sourceProject && <span style={{ fontSize: 14 }}>{sourceProject.icon}</span>}
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{ref.source}</span>
                        {sourceProject && <span style={{ fontSize: 10, color: "#aaa", marginLeft: "auto" }}>→ click to view</span>}
                      </div>
                      <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>
                        {ref.modules}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Audience */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                Who Uses This
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {selected.audience.map(a => (
                  <span key={a} style={{
                    fontSize: 11,
                    color: "#666",
                    background: "#f5f4f0",
                    padding: "4px 10px",
                    borderRadius: 8,
                  }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Connections */}
            {connectedIds.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Connections
                </div>
                {connectedIds.map(id => {
                  const other = PROJECTS.find(p => p.id === id);
                  const outbound = selected.connections.find(c => c.target === id);
                  const inbound = other.connections.find(c => c.target === selected.id);
                  const explanation = outbound?.what || inbound?.what || "";

                  return (
                    <div
                      key={id}
                      onClick={() => { setSelectedId(id); setExpandedMode(null); }}
                      style={{
                        padding: "10px 14px",
                        background: "#FAFAF7",
                        border: "1px solid #e5e3dc",
                        borderRadius: 8,
                        marginBottom: 6,
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 16 }}>{other.icon}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{other.short}</span>
                        <span style={{ fontSize: 10, color: "#aaa", marginLeft: "auto" }}>→</span>
                      </div>
                      <p style={{ fontSize: 11, color: "#888", lineHeight: 1.5, margin: 0 }}>
                        {explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {selected.isConsumer && connectedIds.length === 0 && (
              <div style={{
                padding: "14px 16px",
                background: "#FDF6E3",
                border: "1px solid #F0DEB0",
                borderRadius: 8,
              }}>
                <p style={{ fontSize: 12, color: "#8B7425", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  📌 This system consumes from all four core projects. It doesn't generate standards — it absorbs them. When any core project updates, check whether the relevant training modules need revision. Quarterly review recommended.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
