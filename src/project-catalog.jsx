import { useState } from "react";

const PROJECTS = [
  {
    id: "m365",
    name: "M365 Separation Execution Guide",
    shortName: "M365 Separation",
    icon: "⚙️",
    status: "active",
    lastUpdated: "1 minute ago",
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    audience: ["Tech Team", "Michael", "Kris"],
    purpose: "Step-by-step execution package for separating Microsoft 365 assets between Lit & More and College Produce. Includes checkpoints, screenshot verification, rollback procedures, and escalation rules.",
    keyOutputs: ["Identity & Access Matrix", "Email migration batches", "DNS/domain separation", "Shared mailbox creation"],
    whenToUse: "When executing any M365 configuration change between the two companies. The Claude Project version lets the tech team submit screenshots for checkpoint verification.",
    touches: ["training", "video-strategy"],
    touchExplanations: {
      "training": "New hires need to understand the two-company email structure. The onboarding system should reference the identity categories (LM Primary, CP Primary + LM Persona, CP Only).",
      "video-strategy": "Brand separation affects which accounts post content and how internal communications flow for content approvals."
    }
  },
  {
    id: "video-strategy",
    name: "Video-First Social Media Strategy",
    shortName: "Video Strategy",
    icon: "🎬",
    status: "active",
    lastUpdated: "33 minutes ago",
    category: "marketing",
    categoryLabel: "Marketing & Creative",
    audience: ["Anthony", "Dominic", "Kolo", "John", "Kenya Team"],
    purpose: "Guardrails and production rules for all Lit & More video content. Governs scripting, formats, platform targeting (Instagram Reels, YouTube Shorts), and the scaling plan from 1-2 videos/week to 8-12.",
    keyOutputs: ["Content guardrails", "Script templates", "Platform specs", "Production pipeline SOPs"],
    whenToUse: "Before scripting, producing, or publishing ANY video content for either brand. Every script must pass these guardrails before production begins.",
    touches: ["ctd", "training"],
    touchExplanations: {
      "ctd": "The CTD provides creative direction and briefs that feed into the video pipeline. Video guardrails should be referenced in CTD's Mode 3 (Creative QA).",
      "training": "Video team onboarding needs to include these guardrails as required reading. New creative hires must understand the rules before producing content."
    }
  },
  {
    id: "ctd",
    name: "CTD — Creative Technology Director",
    shortName: "Creative Tech Director",
    icon: "🎨",
    status: "active",
    lastUpdated: "3 hours ago",
    category: "marketing",
    categoryLabel: "Marketing & Creative",
    audience: ["John", "Design Team", "Video Team", "Kris"],
    purpose: "AI-powered creative leadership system (Claude Project) that acts as the strategic brain between leadership and creative execution. Five modes: Brief Translator, Tool Scout, Creative QA, Content Strategy, and Workflow Optimizer.",
    keyOutputs: ["Creative briefs", "Tool recommendations", "Asset QA feedback", "Content calendars", "Workflow improvements"],
    whenToUse: "When you need creative direction, a brief for the design/video team, QA review of a draft asset, or strategic guidance on creative output. Trigger by mode.",
    touches: ["video-strategy", "lit-hal"],
    touchExplanations: {
      "video-strategy": "CTD generates the briefs and creative direction that the video team executes against. The video guardrails constrain what CTD can recommend.",
      "lit-hal": "CTD's Mode 5 (Workflow Optimizer) overlaps with Lit HAL's pre-flight checks. A Creative/Marketing department variant was added to Lit HAL to bridge the two."
    }
  },
  {
    id: "lit-hal",
    name: "Lit HAL",
    shortName: "Lit HAL",
    icon: "🛡️",
    status: "stable",
    lastUpdated: "1 month ago",
    category: "operations",
    categoryLabel: "Operations & QC",
    audience: ["All Teams", "Department Leads"],
    purpose: "Strategic Decision Validator — a RED/YELLOW/GREEN system that evaluates whether a proposed approach is safe, efficient, and aligned with how Kris would handle it. Catches ambiguity, scope creep, and process gaps before work begins.",
    keyOutputs: ["RED/YELLOW/GREEN verdicts", "Risk identification", "Escalation triggers", "Department-specific variants"],
    whenToUse: "Before starting any significant project, especially when scope is unclear, the client request is ambiguous, or the task involves something the team hasn't done before. Run it BEFORE you start working.",
    touches: ["ctd", "training", "m365"],
    touchExplanations: {
      "ctd": "Lit HAL has a Creative/Marketing department variant that references CTD standards. HAL catches you before you build the wrong thing; CTD tells you what to build.",
      "training": "New team members need to understand when and how to use Lit HAL. It should be part of the standard operating procedure training.",
      "m365": "M365 separation checkpoints function like Lit HAL's stop-and-verify system. The philosophy is the same — don't proceed without validation."
    }
  },
  {
    id: "prospect-data",
    name: "Prospect Data Standardization",
    shortName: "Prospect Data",
    icon: "📊",
    status: "active",
    lastUpdated: "5 days ago",
    category: "sales",
    categoryLabel: "Sales & Outreach",
    audience: ["Sales Team", "Kenya Team", "n8n Automation"],
    purpose: "CSV/data processing system that standardizes prospect information (law firm data) into Apollo-compatible format for enrichment. Part of the broader prospect intelligence pipeline that includes AI-powered outreach personalization.",
    keyOutputs: ["Standardized prospect CSVs", "Apollo-ready data formats", "Enriched attorney profiles", "Personalized outreach angles"],
    whenToUse: "When ingesting new prospect lists from any source, cleaning existing data, or preparing batches for Apollo enrichment. Also when building personalized outreach campaigns.",
    touches: ["training"],
    touchExplanations: {
      "training": "The Kenya team handles data processing tasks. Their training needs to cover the field hierarchy, minimum viable data sets, and the standardization workflow."
    }
  },
  {
    id: "uue",
    name: "UUE — Unknown-Unknowns Engine",
    shortName: "UUE",
    icon: "🔍",
    status: "stable",
    lastUpdated: "1 month ago",
    category: "operations",
    categoryLabel: "Operations & QC",
    audience: ["Kris", "Project Leads"],
    purpose: "Discovery assistant that prevents premature coding and separates discovery from delivery. Forces structured exploration before committing to a solution — surfaces what you don't know you don't know.",
    keyOutputs: ["Discovery frameworks", "Risk surfaces", "Requirement validation", "Build/no-build decisions"],
    whenToUse: "At the START of any new tool, product, or system build — before any code is written or any architecture is decided. If you're about to build something, run it through UUE first.",
    touches: ["lit-hal"],
    touchExplanations: {
      "lit-hal": "UUE and Lit HAL are philosophically related — both are pre-flight systems. UUE operates at the discovery/ideation phase; Lit HAL operates at the execution phase. UUE asks 'should we build this?' while HAL asks 'are we building this right?'"
    }
  },
  {
    id: "training",
    name: "CP Training — Onboarding System Guide",
    shortName: "CP Training / Onboarding",
    icon: "📚",
    status: "active",
    lastUpdated: "48 seconds ago",
    category: "people",
    categoryLabel: "People & Training",
    audience: ["All New Hires", "Irene", "Rachel", "Kenya Team"],
    purpose: "College Produce's master training and onboarding system. Covers foundational modules (What is CP, What is LM, litigation industry, org structure, communication standards, confidentiality, HR) plus role-specific paths. Designed for TalentLMS with self-paced, auto-validated learning.",
    keyOutputs: ["Foundation modules (8)", "Role-specific learning paths", "Certification tests", "TalentLMS course structure"],
    whenToUse: "When onboarding any new team member. Also serves as the reference point for what every employee should know — if a knowledge gap appears, check whether the training system covers it.",
    touches: ["m365", "video-strategy", "lit-hal", "prospect-data"],
    touchExplanations: {
      "m365": "Training must explain the two-company email/identity structure so new hires understand which brand they operate under.",
      "video-strategy": "Creative team onboarding includes video guardrails as required reading.",
      "lit-hal": "All team members should learn when to use Lit HAL as part of standard operating procedures.",
      "prospect-data": "Kenya team training includes prospect data handling, field hierarchies, and standardization workflows."
    }
  }
];

const CATEGORIES = {
  infrastructure: { color: "#4A6FA5", bg: "#EBF0F7" },
  marketing: { color: "#C75C2B", bg: "#FDF0EB" },
  operations: { color: "#2D8659", bg: "#E8F5EE" },
  sales: { color: "#7B5EA7", bg: "#F3EFF8" },
  people: { color: "#B8860B", bg: "#FDF6E3" },
};

function ConnectionLine({ from, to, isHighlighted }) {
  return null; // connections shown via interaction, not drawn lines
}

export default function ProjectCatalog() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState("catalog"); // catalog | overlaps | timeline
  const [filterCategory, setFilterCategory] = useState("all");

  const selected = PROJECTS.find(p => p.id === selectedProject);
  
  const connectedIds = selected 
    ? [...selected.touches, ...PROJECTS.filter(p => p.touches.includes(selected.id)).map(p => p.id)]
    : [];

  const filteredProjects = filterCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filterCategory);

  // Build overlap matrix
  const overlapPairs = [];
  for (let i = 0; i < PROJECTS.length; i++) {
    for (let j = i + 1; j < PROJECTS.length; j++) {
      const a = PROJECTS[i];
      const b = PROJECTS[j];
      const aToB = a.touches.includes(b.id);
      const bToA = b.touches.includes(a.id);
      if (aToB || bToA) {
        const explanations = [];
        if (a.touchExplanations?.[b.id]) explanations.push(a.touchExplanations[b.id]);
        if (b.touchExplanations?.[a.id]) explanations.push(b.touchExplanations[a.id]);
        overlapPairs.push({ a, b, explanations, bidirectional: aToB && bToA });
      }
    }
  }

  return (
    <div style={{
      fontFamily: "'Instrument Sans', 'DM Sans', system-ui, sans-serif",
      background: "#FAFAF7",
      minHeight: "100vh",
      color: "#1a1a1a",
    }}>
      {/* Header */}
      <div style={{
        padding: "32px 32px 24px",
        borderBottom: "1px solid #e5e3dc",
        background: "#FAFAF7",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 4 }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "#111",
          }}>
            Project Catalog
          </h1>
          <span style={{ fontSize: 14, color: "#888", fontWeight: 400 }}>
            College Produce + Lit & More
          </span>
        </div>
        <p style={{ fontSize: 14, color: "#666", margin: "8px 0 20px", maxWidth: 600, lineHeight: 1.5 }}>
          What each project does, who it's for, and where they connect. Click any card to see dependencies.
        </p>
        
        {/* View tabs */}
        <div style={{ display: "flex", gap: 4, background: "#EEEEE8", borderRadius: 8, padding: 3, width: "fit-content" }}>
          {[
            { key: "catalog", label: "Catalog" },
            { key: "overlaps", label: "Overlaps & Gaps" },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { setView(tab.key); setSelectedProject(null); }}
              style={{
                padding: "7px 16px",
                borderRadius: 6,
                border: "none",
                background: view === tab.key ? "#fff" : "transparent",
                color: view === tab.key ? "#111" : "#777",
                fontWeight: view === tab.key ? 600 : 400,
                fontSize: 13,
                cursor: "pointer",
                boxShadow: view === tab.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {view === "catalog" && (
        <div style={{ padding: "24px 32px" }}>
          {/* Category filters */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            <button
              onClick={() => { setFilterCategory("all"); setSelectedProject(null); }}
              style={{
                padding: "5px 14px",
                borderRadius: 20,
                border: filterCategory === "all" ? "2px solid #333" : "1px solid #ddd",
                background: filterCategory === "all" ? "#333" : "#fff",
                color: filterCategory === "all" ? "#fff" : "#666",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              All ({PROJECTS.length})
            </button>
            {Object.entries(CATEGORIES).map(([key, cat]) => {
              const count = PROJECTS.filter(p => p.category === key).length;
              return (
                <button
                  key={key}
                  onClick={() => { setFilterCategory(key); setSelectedProject(null); }}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 20,
                    border: filterCategory === key ? `2px solid ${cat.color}` : "1px solid #ddd",
                    background: filterCategory === key ? cat.bg : "#fff",
                    color: filterCategory === key ? cat.color : "#888",
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)} ({count})
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {/* Card grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12,
              flex: selected ? "0 0 55%" : "1",
              transition: "flex 0.2s ease",
            }}>
              {filteredProjects.map(project => {
                const cat = CATEGORIES[project.category];
                const isSelected = selectedProject === project.id;
                const isConnected = connectedIds.includes(project.id);
                const isDimmed = selectedProject && !isSelected && !isConnected;
                
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(isSelected ? null : project.id)}
                    style={{
                      padding: "18px 20px",
                      borderRadius: 10,
                      border: isSelected 
                        ? `2px solid ${cat.color}` 
                        : isConnected 
                          ? `2px dashed ${cat.color}55`
                          : "1px solid #e5e3dc",
                      background: isSelected ? cat.bg : "#fff",
                      cursor: "pointer",
                      opacity: isDimmed ? 0.35 : 1,
                      transition: "all 0.2s ease",
                      position: "relative",
                    }}
                  >
                    {isConnected && !isSelected && (
                      <div style={{
                        position: "absolute",
                        top: -6,
                        right: 12,
                        background: "#2D8659",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: 10,
                        letterSpacing: "0.03em",
                      }}>
                        CONNECTED
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 22 }}>{project.icon}</span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#111", lineHeight: 1.3 }}>
                          {project.shortName}
                        </div>
                        <div style={{
                          fontSize: 11,
                          color: cat.color,
                          fontWeight: 500,
                          marginTop: 2,
                        }}>
                          {project.categoryLabel}
                        </div>
                      </div>
                    </div>
                    <p style={{
                      fontSize: 12,
                      color: "#666",
                      lineHeight: 1.5,
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {project.purpose}
                    </p>
                    <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                      {project.audience.slice(0, 3).map(a => (
                        <span key={a} style={{
                          fontSize: 10,
                          color: "#888",
                          background: "#f5f4f0",
                          padding: "2px 8px",
                          borderRadius: 10,
                          fontWeight: 500,
                        }}>
                          {a}
                        </span>
                      ))}
                      {project.audience.length > 3 && (
                        <span style={{ fontSize: 10, color: "#aaa" }}>
                          +{project.audience.length - 3}
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontSize: 10,
                      color: "#bbb",
                      marginTop: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}>
                      <span style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: project.status === "active" ? "#2D8659" : "#B8860B",
                        display: "inline-block",
                      }} />
                      {project.status === "active" ? "Active" : "Stable"} · Updated {project.lastUpdated}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detail panel */}
            {selected && (
              <div style={{
                flex: "0 0 42%",
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #e5e3dc",
                padding: "24px",
                position: "sticky",
                top: 24,
                alignSelf: "flex-start",
                maxHeight: "calc(100vh - 200px)",
                overflowY: "auto",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 28 }}>{selected.icon}</span>
                    <div>
                      <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#111" }}>{selected.shortName}</h2>
                      <span style={{
                        fontSize: 12,
                        color: CATEGORIES[selected.category].color,
                        fontWeight: 500,
                      }}>
                        {selected.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: 18,
                      color: "#999",
                      cursor: "pointer",
                      padding: "4px 8px",
                    }}
                  >
                    ✕
                  </button>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                    What It Does
                  </div>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>
                    {selected.purpose}
                  </p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                    When To Use
                  </div>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>
                    {selected.whenToUse}
                  </p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                    Key Outputs
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {selected.keyOutputs.map(o => (
                      <span key={o} style={{
                        fontSize: 12,
                        color: "#555",
                        background: CATEGORIES[selected.category].bg,
                        padding: "4px 10px",
                        borderRadius: 6,
                        fontWeight: 500,
                      }}>
                        {o}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                    Audience
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {selected.audience.map(a => (
                      <span key={a} style={{
                        fontSize: 12,
                        color: "#666",
                        background: "#f5f4f0",
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                {connectedIds.length > 0 && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                      Connections
                    </div>
                    {connectedIds.map(id => {
                      const p = PROJECTS.find(pp => pp.id === id);
                      const explanation = selected.touchExplanations?.[id] 
                        || p.touchExplanations?.[selected.id] 
                        || "These projects are related.";
                      return (
                        <div
                          key={id}
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(id); }}
                          style={{
                            padding: "10px 14px",
                            background: "#FAFAF7",
                            borderRadius: 8,
                            marginBottom: 8,
                            cursor: "pointer",
                            border: "1px solid #e5e3dc",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                            <span style={{ fontSize: 16 }}>{p.icon}</span>
                            <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{p.shortName}</span>
                            <span style={{ fontSize: 10, color: "#aaa", marginLeft: "auto" }}>→</span>
                          </div>
                          <p style={{ fontSize: 11, color: "#777", lineHeight: 1.5, margin: 0 }}>
                            {explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {view === "overlaps" && (
        <div style={{ padding: "24px 32px", maxWidth: 900 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4, color: "#111" }}>
            Overlaps & Sync Risks
          </h2>
          <p style={{ fontSize: 13, color: "#777", marginBottom: 24, lineHeight: 1.5 }}>
            Where projects reference each other and need coordinated updates. If you change one, check the connected project.
          </p>

          {/* Overlap pairs */}
          {overlapPairs.map((pair, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid #e5e3dc",
              borderRadius: 10,
              padding: "18px 22px",
              marginBottom: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: CATEGORIES[pair.a.category].bg,
                  padding: "4px 12px",
                  borderRadius: 6,
                }}>
                  <span>{pair.a.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: CATEGORIES[pair.a.category].color }}>
                    {pair.a.shortName}
                  </span>
                </div>
                <span style={{ fontSize: 14, color: "#ccc" }}>
                  {pair.bidirectional ? "⟷" : "→"}
                </span>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: CATEGORIES[pair.b.category].bg,
                  padding: "4px 12px",
                  borderRadius: 6,
                }}>
                  <span>{pair.b.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: CATEGORIES[pair.b.category].color }}>
                    {pair.b.shortName}
                  </span>
                </div>
              </div>
              {pair.explanations.map((exp, j) => (
                <p key={j} style={{ fontSize: 12, color: "#666", lineHeight: 1.6, margin: "6px 0 0", paddingLeft: 4 }}>
                  {exp}
                </p>
              ))}
            </div>
          ))}

          {/* Sync risk callout */}
          <div style={{
            background: "#FFF8F0",
            border: "1px solid #F0D8B8",
            borderRadius: 10,
            padding: "20px 24px",
            marginTop: 28,
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#B8860B", marginBottom: 8 }}>
              ⚠️ Highest Sync Risk
            </div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: "0 0 12px" }}>
              <strong>CP Training / Onboarding</strong> is the most connected project (4 connections). When any other project's processes or standards change, training content may become stale without anyone noticing. Consider adding a "Last Verified" date to each training module and a quarterly review trigger.
            </p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>
              <strong>CTD ↔ Video Strategy</strong> is the tightest coupling. These two are effectively one system split across two projects. If the video guardrails change, CTD's Creative QA mode needs to know. If CTD generates a brief that violates a guardrail, nothing currently catches it automatically.
            </p>
          </div>

          {/* Missing connections */}
          <div style={{
            background: "#F0F7F3",
            border: "1px solid #C8DFD0",
            borderRadius: 10,
            padding: "20px 24px",
            marginTop: 16,
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#2D8659", marginBottom: 8 }}>
              🔎 Potential Gaps
            </div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: "0 0 12px" }}>
              <strong>UUE → Prospect Data:</strong> When building new prospect intelligence features, the UUE discovery process should be run first. Currently no formal link exists between these two.
            </p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: "0 0 12px" }}>
              <strong>Lit HAL → M365 Separation:</strong> The M365 guide has its own checkpoint system that mirrors Lit HAL's philosophy. Consider whether M365 checkpoints should formally route through Lit HAL or remain self-contained.
            </p>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>
              <strong>Prospect Data → Video Strategy:</strong> Prospect data reveals which practice areas and pain points are most common among targets. This should inform video content priorities — but currently there's no feedback loop from sales data into the content calendar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
