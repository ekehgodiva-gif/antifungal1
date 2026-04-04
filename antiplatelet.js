// ============================================================
// TOPIC: HEMOSTASIS & ANTIPLATELET DRUGS
// ============================================================
if (!window.PDF_TOPIC_DATA) window.PDF_TOPIC_DATA = {};

window.PDF_TOPIC_DATA["antiplatelet"] = {

  "title": "Hemostasis & Antiplatelet Drugs",
  "desc": "Hemostasis stages, coagulation cascade, aspirin, P2Y12 antagonists, GP IIb/IIIa inhibitors & nursing care",


  // ============================================================
  // SECTION 1 — SUMMARY HTML
  // ============================================================
  "summaryHtml": `
    <div class="glass-card">
      <h4>Definitions</h4>
      <div class="row"><span class="lbl">Hemostasis</span><span class="val">The multi-step physiological mechanism that stops bleeding from a damaged blood vessel, relying on the vasculature, liver, and bone marrow. The four stages are: (1) Blood vessel constriction, (2) Temporary platelet plug formation, (3) Coagulation cascade activation, and (4) Final <span class="hl">fibrin plug</span> formation</span></div>
      <div class="row"><span class="lbl">Thrombosis / Hypercoagulability</span><span class="val">A pathological state where blood clots form inappropriately within vessels, potentially blocking normal blood flow</span></div>
    </div>

    <div class="glass-card">
      <h4>Classifications of Pharmacological Agents</h4>
      <div class="row"><span class="lbl">Antiplatelet Agents</span><span class="val">Inhibit <span class="hl">platelet aggregation</span></span></div>
      <div class="row"><span class="lbl">Anticoagulants</span><span class="val">Prevent or reduce the coagulability of blood (e.g., Heparin, Low-Molecular-Weight Heparins like Enoxaparin, and Fondaparinux)</span></div>
      <div class="row"><span class="lbl">Thrombolytic Agents</span><span class="val">Reverse or dissolve existing clots</span></div>
    </div>

    <div class="glass-card">
      <h4>Antiplatelet Drug Classes: Mechanisms & Uses</h4>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Drug Class</th><th>Key Examples</th><th>Mechanism of Action</th><th>Clinical Uses</th></tr>
          </thead>
          <tbody>
            <tr><td>Thromboxane (TXA2) Synthesis Inhibitors</td><td>Low-dose Aspirin</td><td>Covalently acetylates COX-1 enzyme, stopping arachidonic acid from converting to TXA2, which prevents localized vasoconstriction and platelet aggregation.</td><td>Prevents arterial thrombosis, ischemic attacks, strokes, and myocardial infarction (MI).</td></tr>
            <tr><td>Phosphodiesterase (PDE) Inhibitors</td><td>Dipyridamole, Cilostazol</td><td>Inhibits PDE, preventing cAMP degradation. High cAMP lowers intracellular calcium, preventing platelet aggregation.</td><td>Dipyridamole + Warfarin for prosthetic heart valves; Dipyridamole + Aspirin for thrombosis prevention.</td></tr>
            <tr><td>Purinergic (P2Y12) Receptor Antagonists</td><td>Clopidogrel, Prasugrel, Ticagrelor</td><td>Inhibit the ADP-dependent pathway of platelet activation by blocking P2Y12 receptors. <i>Note: Clopidogrel/Prasugrel are irreversible prodrugs; Ticagrelor is reversible</i>.</td><td>Secondary stroke prevention, acute coronary syndrome (ACS), and percutaneous coronary intervention (PCI).</td></tr>
            <tr><td>Glycoprotein (GP) IIb/IIIa Inhibitors</td><td>Abciximab, Eptifibatide, Tirofiban</td><td>Blocks the platelet-surface integrin receptor for fibrinogen and von Willebrand factor, preventing platelets from anchoring to each other.</td><td>Given IV during PCI, ST-segment elevation MI (STEMI), or non-STEMI ACS.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>Key Drugs & Side Effects</h4>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Drug / Class</th><th>Notable Side Effects</th></tr>
          </thead>
          <tbody>
            <tr><td>Aspirin</td><td>GI bleeding, gastritis, ulcers, bruising, epistaxis, and aspirin-induced asthma.</td></tr>
            <tr><td>Dipyridamole & Cilostazol</td><td>Headache, palpitations, hypotension (due to vasodilation), and GI upset.</td></tr>
            <tr><td>P2Y12 Antagonists (Clopidogrel, etc.)</td><td>Major/minor bleeding; Ticagrelor specifically causes dyspnea (15-20%) and bradycardia; Clopidogrel carries a very low risk of Thrombotic Thrombocytopenic Purpura (TTP).</td></tr>
            <tr><td>GP IIb/IIIa Inhibitors (Abciximab, etc.)</td><td>Highest risk for major bleeding (GI, access site, intracranial) and acute, severe thrombocytopenia. Abciximab carries a risk of anaphylaxis.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>Important Clinical Points for Nursing Students</h4>
      <div class="row"><span class="lbl">Bleeding Precautions</span><span class="val">Across all antiplatelet therapies, <span class="hl">bleeding is the predominant concern</span>. The risk additively increases if the patient is concurrently taking NSAIDs, anticoagulants (like warfarin or heparin), or alcohol</span></div>
      <div class="row"><span class="lbl">Clopidogrel Drug-Drug Interaction</span><span class="val">Avoid concurrent use of strong CYP2C19 inhibitors (like <span class="hl">omeprazole</span>) as they reduce the activation of clopidogrel into its active form, leading to decreased drug efficacy</span></div>
      <div class="row"><span class="lbl">BLACK BOX: Cilostazol</span><span class="val"><span class="hl">Contraindicated in severe heart failure</span> due to its inotropic effects</span></div>
      <div class="row"><span class="lbl">BLACK BOX: Prasugrel</span><span class="val">Elevated risk of <span class="hl">fatal bleeding</span> — avoid in patients with history of stroke/TIA, age ≥75, or low body weight</span></div>
      <div class="row"><span class="lbl">Laboratory Monitoring</span><span class="val">For GP IIb/IIIa inhibitors (especially abciximab), monitor platelet counts within <span class="hl">2-4 hours</span> of administration and daily thereafter due to risk of acute profound thrombocytopenia (&lt;50,000/μL)</span></div>
    </div>
  `,


  // ============================================================
  // SECTION 3 — DETAILED NOTES HTML
  // ============================================================
  "detailedNotesHtml": `
    <div class="glass-card">
      <h4>1. Hemostasis — The Basics</h4>
      <p>Hemostasis = the body's way of STOPPING bleeding from a damaged blood vessel. Think of it as the body's emergency repair crew that patches up a broken pipe.</p>
      <p style="margin-top:8px;"><b>Big Picture — Why It Matters Clinically</b><br>
      Without hemostasis: you bleed to death from even a small cut.<br>
      Too much hemostasis: dangerous blood clots form inside your vessels → stroke, heart attack, PE.<br>
      Antiplatelet drugs target one key part of this system to prevent dangerous clotting.</p>
      <p style="margin-top:8px;"><b>Organ Systems Involved</b><br>
      Three systems work together to make hemostasis possible:<br>
      • <span class="hl">Vasculature</span> (blood vessels) — constricts to reduce blood flow to the injured area<br>
      • <span class="hl">Liver</span> — manufactures most clotting factors (proteins that form the clot)<br>
      • <span class="hl">Bone marrow</span> — produces platelets, the tiny cell fragments at the heart of clot formation</p>
      <p style="margin-top:10px;"><b>The 4 Stages of Hemostasis</b></p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Stage</th><th>What Happens</th><th>Simple Analogy</th></tr></thead>
          <tbody>
            <tr><td>1. Vasoconstriction</td><td>The injured blood vessel squeezes tight to slow blood loss</td><td>Pinching a hose to slow the water</td></tr>
            <tr><td>2. Platelet Plug</td><td>Platelets rush to the site and stick together to form a soft temporary plug</td><td>Pressing a thumb over the leak</td></tr>
            <tr><td>3. Coagulation Cascade</td><td>A chain reaction of clotting proteins (factors) activates one after another</td><td>Dominoes falling in sequence</td></tr>
            <tr><td>4. Fibrin Clot</td><td>Fibrin threads weave into a firm, permanent mesh to seal the vessel</td><td>Stitching the wound closed with thread</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:10px;"><b>Key Clotting Factors (Quick Reference)</b></p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Factor #</th><th>Common Name</th><th>Key Function</th></tr></thead>
          <tbody>
            <tr><td>I</td><td>Fibrinogen</td><td>Converted into fibrin — the 'thread' that holds the clot together</td></tr>
            <tr><td>II</td><td>Prothrombin</td><td>Converted into thrombin, which activates fibrinogen → fibrin</td></tr>
            <tr><td>III</td><td>Tissue Factor</td><td>The 'alarm signal' released by injured tissue to start clotting</td></tr>
            <tr><td>IV</td><td>Calcium (Ca²⁺)</td><td>Required for almost every step of the cascade</td></tr>
            <tr><td>V</td><td>Proaccelerin</td><td>Speeds up thrombin production</td></tr>
            <tr><td>VII</td><td>Proconvertin</td><td>Works with Factor III to start the extrinsic pathway</td></tr>
            <tr><td>VIII</td><td>Antihemophilic A</td><td>Absent in Haemophilia A — cofactor for intrinsic pathway</td></tr>
            <tr><td>IX</td><td>Christmas Factor</td><td>Absent in Haemophilia B — enzyme in intrinsic pathway</td></tr>
            <tr><td>X</td><td>Stuart-Prower Factor</td><td>Where intrinsic & extrinsic pathways meet (common pathway)</td></tr>
            <tr><td>XII</td><td>Hageman Factor</td><td>Starts intrinsic pathway on contact with injured tissue/collagen</td></tr>
            <tr><td>XIII</td><td>Fibrin-Stabilizing</td><td>Cross-links fibrin to make the clot strong and permanent</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:10px;"><b>Pathology of Hemostasis — Two Directions of Failure</b><br>
      <span class="hl">HYPOCOAGULABILITY</span> — Too little clotting: you bleed or bruise too easily. Example: haemophilia, low platelets.<br>
      <span class="hl">HYPERCOAGULABILITY</span> — Too much clotting: clots form without injury. This is called THROMBOSIS.<br>
      → Repeated thrombosis = THROMBOPHILIA (a clotting disorder).<br>
      → Clots inside arteries/veins can cause: Stroke | Heart attack (MI) | DVT | Pulmonary Embolism (PE)</p>
    </div>

    <div class="glass-card">
      <h4>2. Antiplatelet Drugs — Overview</h4>
      <p>Antiplatelet drugs = medications that REDUCE platelet activity, making it harder for clots to form.<br>
      They target the <span class="hl">PLATELET PLUG stage (Stage 2)</span> of hemostasis.<br>
      They do NOT dissolve existing clots — they PREVENT new ones from forming.<br>
      Primary use: Prevent arterial clots (heart attacks, strokes) in at-risk patients.</p>
      <p style="margin-top:10px;"><b>The 4 Classes of Antiplatelet Drugs</b></p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Class</th><th>Drug(s)</th><th>Target / Mechanism Summary</th></tr></thead>
          <tbody>
            <tr><td>TXA₂ Synthesis Inhibitor</td><td>Low-dose Aspirin</td><td>Blocks COX enzyme → reduces TXA₂ → less platelet activation</td></tr>
            <tr><td>Phosphodiesterase Inhibitor</td><td>Dipyridamole</td><td>Prevents cAMP breakdown → keeps platelets calm</td></tr>
            <tr><td>P2Y₁₂ Receptor Antagonists</td><td>Ticlopidine, Clopidogrel, Prasugrel, Cangrelor, Ticagrelor</td><td>Block ADP receptor (P2Y₁₂) → inhibit ADP-induced aggregation</td></tr>
            <tr><td>GP IIb/IIIa Receptor Antagonists</td><td>Abciximab, Eptifibatide, Tirofiban</td><td>Block the final 'docking receptor' for fibrinogen → prevent platelet cross-linking</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>3. Class A — Thromboxane (TXA₂) Synthesis Inhibitor: Low-Dose Aspirin</h4>
      <p><b>Mechanism of Action — Step by Step</b><br>
      • Membrane phospholipids in platelets are broken down by Phospholipase A₂ → releases Arachidonic Acid<br>
      • Arachidonic Acid is converted by the <span class="hl">COX-1 enzyme</span> into PGH₂ (a cyclic endoperoxide)<br>
      • PGH₂ is converted by TX Synthase into <span class="hl">Thromboxane A₂ (TXA₂)</span><br>
      • TXA₂ → causes vasoconstriction AND stimulates platelet aggregation</p>
      <p style="margin-top:8px;"><b>Where Aspirin Acts:</b> Aspirin <span class="hl">COVALENTLY ACETYLATES</span> a serine residue near the active site of the COX-1 enzyme. This permanently destroys the enzyme's function. No COX-1 = No PGH₂ = No TXA₂ = No platelet activation.</p>
      <p style="margin-top:8px;">KEY WORD: <span class="hl">IRREVERSIBLE</span> — platelets have no nucleus and cannot make new COX enzymes. Effect lasts the ENTIRE LIFESPAN of the platelet (7–10 days). This is why even a single dose of aspirin has a prolonged antiplatelet effect.</p>
      <p style="margin-top:8px;"><b>Plain English Summary:</b> Normally: Damaged tissue → COX-1 enzyme makes TXA₂ → TXA₂ tells platelets 'come together, clot now!' With Aspirin: Aspirin superglues the COX-1 enzyme shut → no TXA₂ is made → platelets stay calm and don't clump.</p>
      <p style="margin-top:8px;"><b>Clinical Uses:</b><br>
      • Prevention of arterial thrombosis (clots in arteries)<br>
      • Ischemic stroke & transient ischemic attack (TIA) prevention<br>
      • Myocardial infarction (heart attack) prevention in at-risk patients<br>
      • Often combined with clopidogrel (<span class="hl">dual antiplatelet therapy</span>) after coronary stent placement</p>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Category</th><th>Specific Effects</th><th>Clinical Note</th></tr></thead>
          <tbody>
            <tr><td>Bleeding</td><td>Bruising, nosebleeds (epistaxis), GI bleed, blood in urine (hematuria)</td><td>Most common concern with all antiplatelet drugs</td></tr>
            <tr><td>Gastrointestinal</td><td>Gastritis, peptic ulcers, GI toxicity</td><td>Take with food or with a PPI to protect the stomach</td></tr>
            <tr><td>Respiratory/Allergic</td><td>Aspirin-induced asthma, nasal polyps</td><td>Avoid in asthmatic patients sensitive to NSAIDs</td></tr>
            <tr><td>Other</td><td>Hepatotoxicity (rare)</td><td>Monitor liver function in long-term use</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Interacting Drug</th><th>Effect + Management</th></tr></thead>
          <tbody>
            <tr><td>Warfarin / Heparin</td><td>↑ Bleeding risk (additive). Monitor closely; consider dose adjustment.</td></tr>
            <tr><td>Other NSAIDs (e.g., Ibuprofen)</td><td>Additive GI toxicity + ibuprofen can BLOCK aspirin's cardioprotective effect</td></tr>
            <tr><td>Clopidogrel</td><td>Additive bleeding risk — used intentionally for dual antiplatelet therapy</td></tr>
            <tr><td>Alcohol</td><td>↑↑ GI bleeding risk. Advise patients to limit or avoid alcohol.</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>4. Class B — Phosphodiesterase Inhibitor: Dipyridamole</h4>
      <p><b>Background: What is cAMP and why does it matter?</b><br>
      cAMP (cyclic AMP) = a chemical messenger that INHIBITS platelet activity.<br>
      High cAMP → platelets stay calm, don't aggregate.<br>
      Low cAMP → platelets become active and clump together.<br>
      Normal situation: An enzyme called <span class="hl">phosphodiesterase (PDE)</span> breaks down cAMP → reducing its calming effect.<br>
      Dipyridamole BLOCKS this enzyme → cAMP stays high → platelets stay calm.</p>
      <p style="margin-top:8px;"><b>Mechanism — Step by Step:</b><br>
      • Adenosine binds to A₂ receptors on platelets → stimulates adenylate cyclase → makes cAMP<br>
      • cAMP activates Protein Kinase A → reduces intracellular Ca²⁺<br>
      • Low Ca²⁺ = platelets cannot aggregate<br>
      • Normally, phosphodiesterase enzyme breaks cAMP down to AMP (cAMP is deactivated)<br>
      • Dipyridamole <span class="hl">INHIBITS phosphodiesterase</span> → cAMP is not broken down → remains high → platelet aggregation stays inhibited<br>
      • Dipyridamole also blocks adenosine reuptake → more adenosine available → even more cAMP production</p>
      <p style="margin-top:8px;"><b>Plain English Summary:</b> Normally, an enzyme 'mops up' the signal that keeps platelets calm. Dipyridamole stops that enzyme, so the calming signal stays switched ON and platelets don't clump together. It also has vasodilatory properties (widens blood vessels).</p>
      <p style="margin-top:8px;"><b>Clinical Uses:</b><br>
      • Dipyridamole + Warfarin → Prevent clots on prosthetic (artificial) heart valves<br>
      • Dipyridamole + Aspirin → Reduce likelihood of thrombosis in patients with thrombotic diathesis<br>
      • Also used as a vasodilator — it relaxes and widens blood vessels</p>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Category</th><th>Specific Effects</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Cardiovascular</td><td>Headache, palpitations, tachycardia, hypotension</td><td>Due to vasodilatory properties</td></tr>
            <tr><td>GI</td><td>Nausea, diarrhea, abdominal pain</td><td>Take with food to reduce GI upset</td></tr>
            <tr><td>Bleeding</td><td>Nosebleeds, GI bleed</td><td>Additive risk when combined with other antiplatelets</td></tr>
            <tr><td>Other</td><td>Dizziness, flushing</td><td>Cilostazol (related drug): black box warning — contraindicated in severe heart failure</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Interacting Drug</th><th>Effect</th><th>Management</th></tr></thead>
          <tbody>
            <tr><td>Other antiplatelets / anticoagulants</td><td>Additive bleeding risk</td><td>Monitor; often used in intentional combination</td></tr>
            <tr><td>CYP3A4/CYP2C19 inhibitors (ketoconazole, omeprazole)</td><td>↑ Drug levels → toxicity (headache, tachycardia)</td><td>Dose reduce or avoid strong inhibitors</td></tr>
            <tr><td>CYP inducers (rifampin)</td><td>↓ Drug efficacy</td><td>Monitor therapeutic response</td></tr>
            <tr><td>PDE5 inhibitors (sildenafil)</td><td>Additive vasodilation → severe hypotension</td><td>Use with caution — avoid combination if possible</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>5. Class C — P2Y₁₂ Receptor Antagonists</h4>
      <p><b>Drugs in this Class:</b> Ticlopidine | Clopidogrel | Prasugrel | Cangrelor | Ticagrelor<br>
      Ticlopidine, Clopidogrel, and Prasugrel = <span class="hl">Thienopyridines</span> (prodrugs — must be activated in the liver)<br>
      Ticagrelor = NOT a thienopyridine; orally active; <span class="hl">REVERSIBLE</span> inhibitor<br>
      Cangrelor = IV formulation; rapid onset; reversible</p>
      <p style="margin-top:8px;"><b>Background: What is the P2Y₁₂ Receptor?</b><br>
      ADP (adenosine diphosphate) is released from activated platelets. It binds to a receptor on neighbouring platelets called P2Y₁₂. This is like an amplifier — it signals more platelets to come, stick together, and release more ADP. P2Y₁₂ receptor antagonists block this amplifier.</p>
      <p style="margin-top:8px;"><b>Mechanism — Step by Step:</b><br>
      • Normally: ADP released from activated platelets binds P2Y₁₂ receptor → inhibits adenylyl cyclase → reduces cAMP → platelet activation continues<br>
      • These drugs (especially thienopyridines) <span class="hl">COVALENTLY MODIFY</span> and inactivate the P2Y₁₂ receptor<br>
      • With receptor blocked: ADP cannot amplify platelet aggregation → clot growth is limited<br>
      • Note: Ticagrelor binds reversibly (not permanent), so platelet function returns faster after stopping</p>
      <p style="margin-top:8px;"><b>Plain English Summary:</b> ADP is a 'rally call' for platelets. These drugs silently block the receiver (receptor) that picks up that call — so even though ADP is released, no more platelets respond to the signal and the clot stays small.</p>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Drug</th><th>Key Feature</th><th>Clinical Note</th></tr></thead>
          <tbody>
            <tr><td>Ticlopidine</td><td>First P2Y₁₂ blocker; irreversible</td><td>More side effects (TTP, neutropenia) — less commonly used now</td></tr>
            <tr><td>Clopidogrel</td><td>Irreversible; prodrug (CYP2C19 activation)</td><td>Most widely used; check for poor metabolisers (CYP2C19 variants)</td></tr>
            <tr><td>Prasugrel</td><td>Faster, stronger than clopidogrel; irreversible prodrug</td><td>Avoid in: prior stroke/TIA, age ≥75, low body weight (↑ bleeding)</td></tr>
            <tr><td>Ticagrelor</td><td>REVERSIBLE; faster offset; not a prodrug</td><td>Causes dyspnoea in ~15-20% (non-allergic); cannot use low-dose aspirin >100mg</td></tr>
            <tr><td>Cangrelor</td><td>IV only; rapid onset & offset; reversible</td><td>Used when oral drugs can't be given (e.g., perioperatively)</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:8px;"><b>Clinical Uses:</b><br>
      • Ticlopidine: Secondary prevention of thrombotic strokes (aspirin-intolerant patients); prevention of stent thrombosis<br>
      • Clopidogrel + Aspirin: Dual antiplatelet therapy after coronary stents; ACS; peripheral artery disease; secondary stroke prevention<br>
      • Prasugrel: Acute coronary syndrome (ACS) managed with PCI (percutaneous coronary intervention)<br>
      • Ticagrelor: ACS (more potent alternative to clopidogrel)</p>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Effect</th><th>Drug(s)</th><th>Important Detail</th></tr></thead>
          <tbody>
            <tr><td>Major bleeding (GI, intracranial)</td><td>All — especially prasugrel, ticagrelor</td><td>Fatal bleeding risk higher with prasugrel</td></tr>
            <tr><td>Dyspnoea (breathlessness)</td><td>Ticagrelor specifically</td><td>Occurs in 15-20%; NOT an allergic reaction; usually resolves</td></tr>
            <tr><td>Bradycardia / AV block</td><td>Ticagrelor</td><td>Monitor heart rate and ECG</td></tr>
            <tr><td>Hyperuricaemia / gout</td><td>Ticagrelor</td><td>Can precipitate gout attacks</td></tr>
            <tr><td>TTP (rare, serious)</td><td>Historical: Ticlopidine, rarely clopidogrel</td><td>Watch for fever, thrombocytopenia, haemolysis</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Interacting Drug</th><th>Effect</th><th>Management</th></tr></thead>
          <tbody>
            <tr><td>CYP2C19 inhibitors (e.g., omeprazole, esomeprazole)</td><td>↓ Clopidogrel activation → reduced efficacy</td><td>Avoid with clopidogrel; use pantoprazole instead</td></tr>
            <tr><td>CYP3A4 inhibitors/inducers (ketoconazole, rifampin)</td><td>Alters ticagrelor levels</td><td>Caution with strong modulators</td></tr>
            <tr><td>Opioids (e.g., morphine)</td><td>Delayed absorption of oral P2Y₁₂ inhibitors</td><td>Consider IV cangrelor in ACS if opioids needed</td></tr>
            <tr><td>Aspirin (high dose >100mg)</td><td>Reduces ticagrelor efficacy</td><td>Use low-dose aspirin (≤100mg) with ticagrelor</td></tr>
            <tr><td>Anticoagulants / other antiplatelets</td><td>Additive bleeding risk</td><td>Standard combination; heightened monitoring</td></tr>
            <tr><td>NSAIDs</td><td>↑ GI bleeding</td><td>Use gastric protection (PPI)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>6. Class D — Glycoprotein IIb/IIIa Inhibitors</h4>
      <p><b>Drugs in this Class:</b> Abciximab | Eptifibatide | Tirofiban<br>
      These are the <span class="hl">MOST POTENT</span> antiplatelet agents available.<br>
      They are given <span class="hl">INTRAVENOUSLY (IV)</span> — not oral.<br>
      They work at the very FINAL STEP of platelet aggregation.</p>
      <p style="margin-top:8px;"><b>Background: What is GP IIb/IIIa?</b><br>
      GP IIb/IIIa is an integrin receptor (a type of surface protein) found on platelets. When platelets become activated, GP IIb/IIIa changes shape and becomes a 'docking station' that binds FIBRINOGEN. Fibrinogen acts like a bridge, linking one platelet to another — this is what causes clumping (aggregation).</p>
      <p style="margin-top:8px;"><b>The Final Common Pathway:</b><br>
      ALL platelet activators (ADP, TXA₂, thrombin, collagen) ultimately lead to GP IIb/IIIa activation.<br>
      Blocking GP IIb/IIIa = blocking the <span class="hl">FINAL STEP</span> of aggregation regardless of what triggered it.<br>
      This makes these drugs extremely potent — but also high bleeding risk.</p>
      <p style="margin-top:8px;"><b>Mechanism — Step by Step:</b><br>
      • Vascular injury exposes collagen → von Willebrand factor (vWF) binds GP Ib on platelets → platelet adhesion<br>
      • Activated platelets express GP IIb/IIIa receptors on their surface<br>
      • Fibrinogen binds across two GP IIb/IIIa receptors (one on each platelet) → bridging → aggregation<br>
      • GP IIb/IIIa inhibitors BLOCK this receptor → fibrinogen cannot bridge platelets → no aggregation</p>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Drug</th><th>Primary Use</th><th>Key Notes</th></tr></thead>
          <tbody>
            <tr><td>Abciximab</td><td>PCI (percutaneous coronary intervention) — used with aspirin + heparin</td><td>Chimeric antibody (mouse + human) → risk of allergic reactions / anaphylaxis</td></tr>
            <tr><td>Eptifibatide</td><td>STEMI (ST-elevation MI) undergoing primary PCI; also unstable angina</td><td>Shorter half-life; easier to reverse effect</td></tr>
            <tr><td>Tirofiban</td><td>NSTE-ACS (Non-ST-elevation acute coronary syndrome)</td><td>Similar profile; may cause thrombocytopenia</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Effect</th><th>Details</th><th>Drug-Specific Notes</th></tr></thead>
          <tbody>
            <tr><td>Major Bleeding</td><td>Intracranial, GI, access site bleeds; fatal ICH ~0.1-0.5%</td><td>Risk ↑ with concurrent heparin/aspirin</td></tr>
            <tr><td>Thrombocytopenia</td><td>Platelet count drops dangerously low (&lt;50,000/μL)</td><td>Abciximab highest risk (~1-5%); monitor platelets 2-4h after starting</td></tr>
            <tr><td>Hypotension / Bradycardia</td><td>Infusion-related</td><td>Monitor vitals closely during infusion</td></tr>
            <tr><td>Anaphylaxis</td><td>Abciximab only (chimeric antibody)</td><td>Stop infusion immediately; emergency management</td></tr>
            <tr><td>Pseudothrombocytopenia</td><td>False low platelet count (lab artefact)</td><td>Recheck using citrate tube — not a true platelet drop</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Interacting Drug</th><th>Effect</th><th>Management</th></tr></thead>
          <tbody>
            <tr><td>Anticoagulants (heparin, LMWH, bivalirudin)</td><td>Additive bleeding (standard combination in protocols)</td><td>Monitor ACT/PTT; weight-adjusted dosing</td></tr>
            <tr><td>Other antiplatelets (aspirin, P2Y₁₂ inhibitors)</td><td>Additive bleeding</td><td>Standard combo; heightened vigilance</td></tr>
            <tr><td>Thrombolytics (fibrinolytics)</td><td>Markedly increased bleeding</td><td>Contraindicated in most cases</td></tr>
            <tr><td>NSAIDs / SSRIs</td><td>Increased bleeding risk</td><td>Avoid if possible</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>7. Common Confusions — Cleared Up</h4>
      <p><b>Confusion 1: 'All antiplatelets are the same — they all just prevent clotting'</b><br>
      FALSE. They work at DIFFERENT points in the platelet activation pathway.<br>
      Aspirin: blocks TXA₂ production upstream<br>
      Dipyridamole: prevents cAMP breakdown<br>
      P2Y₁₂ antagonists: block the ADP receptor<br>
      GP IIb/IIIa inhibitors: block the final aggregation step<br>
      Different mechanisms = different uses, interactions, and risks.</p>
      <p style="margin-top:8px;"><b>Confusion 2: 'Aspirin is irreversible, so it's the strongest antiplatelet'</b><br>
      Not quite. 'Irreversible' does not equal 'most potent'. GP IIb/IIIa inhibitors are the MOST POTENT — they block ALL aggregation pathways. Irreversible just means you cannot reverse the effect with an antidote — you must wait for new platelets (7-10 days).</p>
      <p style="margin-top:8px;"><b>Confusion 3: 'Clopidogrel is the same as Ticagrelor'</b><br>
      They both block P2Y₁₂, but they are different:<br>
      <span class="hl">Clopidogrel</span> = irreversible, prodrug (needs CYP2C19 activation), slower onset<br>
      <span class="hl">Ticagrelor</span> = reversible, not a prodrug, faster onset, causes dyspnoea</p>
      <p style="margin-top:8px;"><b>Confusion 4: 'Dipyridamole is used alone'</b><br>
      Dipyridamole is almost ALWAYS combined with another agent:<br>
      Dipyridamole + Warfarin = for prosthetic heart valves<br>
      Dipyridamole + Aspirin = for thrombotic diathesis</p>
      <p style="margin-top:8px;"><b>Confusion 5: 'Ticagrelor causes dyspnoea because of allergy'</b><br>
      Ticagrelor-induced dyspnoea is NOT allergic — it is a pharmacological effect (thought to be related to adenosine accumulation). It usually occurs in ~15-20% of patients and often resolves with continued use. Do NOT automatically stop the drug — manage it unless severe.</p>
      <p style="margin-top:8px;"><b>Confusion 6: 'A low platelet count with GP IIb/IIIa inhibitors always means true thrombocytopenia'</b><br>
      Not always — it can be PSEUDOTHROMBOCYTOPENIA (false low reading). Recheck using a citrate tube to confirm whether it is real. True thrombocytopenia = stop infusion. Pseudothrombocytopenia = no action needed.</p>
    </div>

    <div class="glass-card">
      <h4>8. Nursing Considerations</h4>
      <p><b>Assessment Before Starting Antiplatelet Therapy:</b><br>
      • Check baseline: platelet count, PT/INR, aPTT, haemoglobin, renal function<br>
      • Assess for history of bleeding disorders, peptic ulcers, recent surgery, stroke<br>
      • Document all current medications — especially other antiplatelets, anticoagulants, NSAIDs<br>
      • Assess for aspirin allergy or NSAID-induced asthma before starting aspirin</p>
      <div class="table-wrap" style="margin-top:8px;">
        <table>
          <thead><tr><th>Drug / Class</th><th>Key Monitoring</th><th>Frequency</th></tr></thead>
          <tbody>
            <tr><td>All antiplatelets</td><td>Signs of bleeding: bruising, black stool, blood in urine, prolonged oozing</td><td>Each encounter / daily if inpatient</td></tr>
            <tr><td>GP IIb/IIIa inhibitors</td><td>Platelet count (check within 2-4h of starting, then daily)</td><td>2-4h post-infusion then daily</td></tr>
            <tr><td>Clopidogrel</td><td>CYP2C19 genotype testing (if available) — poor metabolisers need alternative</td><td>At initiation</td></tr>
            <tr><td>Ticagrelor</td><td>Monitor respiratory rate and pattern for dyspnoea</td><td>Ongoing; usually first few weeks</td></tr>
            <tr><td>Dipyridamole</td><td>Blood pressure — watch for hypotension (vasodilatory effect)</td><td>At each administration</td></tr>
            <tr><td>All IV agents (GP IIb/IIIa)</td><td>IV access site for bleeding; vital signs during infusion</td><td>Continuous during infusion</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:10px;"><b>🔴 High-Priority Safety Points:</b><br>
      1. HOLD antiplatelet therapy before elective surgery (aspirin 7-10 days; clopidogrel/prasugrel 5-7 days; ticagrelor 5 days).<br>
      2. NEVER stop dual antiplatelet therapy after a coronary stent without consulting the cardiologist — risk of <span class="hl">stent thrombosis</span>.<br>
      3. Avoid IM injections in patients on antiplatelets — risk of haematoma.<br>
      4. Apply pressure to venepuncture sites for 5 minutes minimum.<br>
      5. Use soft-bristle toothbrush; electric razor to prevent cuts.<br>
      6. Teach patient to report: unusual bleeding, blood in stool (black/tarry), severe headache (possible intracranial bleed).</p>
      <p style="margin-top:8px;"><b>Administration Tips:</b><br>
      • Aspirin: Give with food or a full glass of water to reduce GI irritation; use enteric-coated if needed<br>
      • Dipyridamole: Often combined — confirm correct combination (warfarin or aspirin)<br>
      • Clopidogrel / Prasugrel / Ticagrelor: Oral — can be crushed for patients unable to swallow (check local guidance)<br>
      • GP IIb/IIIa inhibitors (IV): Use infusion pump; monitor access site continuously; have reversal agents ready<br>
      • Omeprazole and clopidogrel: <span class="hl">AVOID this combination</span> — use pantoprazole instead for gastric protection</p>
      <p style="margin-top:8px;"><b>Patient Education:</b><br>
      • Explain WHY they are on the medication and the importance of not missing doses<br>
      • Advise to carry a medication card / MedicAlert bracelet<br>
      • Tell ALL healthcare providers (dentists, surgeons) that they are on antiplatelet therapy<br>
      • Avoid over-the-counter NSAIDs (e.g., ibuprofen) without checking with their doctor<br>
      • Alcohol: avoid excess — increases GI bleeding risk<br>
      • Report any unusual bleeding immediately — gums, nose, urine, stool, coughing up blood</p>
    </div>

    <div class="glass-card">
      <h4>9. Exam Focus — High-Yield Facts to Memorise</h4>
      <p>1. Aspirin → irreversibly inhibits COX-1 → reduces TXA₂ → low dose used for cardiovascular prevention<br>
      2. Aspirin effect lasts 7-10 days (platelet lifespan) — cannot be reversed<br>
      3. Clopidogrel is a <span class="hl">PRODRUG</span> → activated by CYP2C19 in the liver → poor metabolisers (or omeprazole users) get reduced effect<br>
      4. Prasugrel is FASTER and STRONGER than clopidogrel — but higher bleeding risk; AVOID in: prior stroke/TIA, age ≥75, low body weight<br>
      5. Ticagrelor is <span class="hl">REVERSIBLE</span> and NOT a prodrug; causes dyspnoea (non-allergic, ~15-20%)<br>
      6. Dipyridamole = phosphodiesterase inhibitor; prevents cAMP breakdown; usually combined — NOT used alone<br>
      7. GP IIb/IIIa inhibitors = MOST POTENT; IV only; block FINAL step of aggregation<br>
      8. Abciximab = highest risk of thrombocytopenia (~1-5%); also risk of anaphylaxis (chimeric antibody)<br>
      9. Always monitor platelet count within 2-4h of starting GP IIb/IIIa inhibitors<br>
      10. Clopidogrel + omeprazole = <span class="hl">AVOID</span> (reduced activation); use pantoprazole instead</p>
    </div>
  `,

  // ============================================================
  // SECTION 2 — QUICK REFERENCE HTML
  // ============================================================
  "refHtml": `
    <div class="glass-card">
      <h4>Key Drug & Concept Associations</h4>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Drug / Class</th><th>Target / Mechanism</th></tr>
          </thead>
          <tbody>
            <tr><td>Aspirin (Low-dose)</td><td>COX-1 Inhibitor → blocks TXA2 synthesis.</td></tr>
            <tr><td>Clopidogrel, Prasugrel, Ticagrelor</td><td>Purinergic P2Y12 (ADP) Receptor Antagonists.</td></tr>
            <tr><td>Abciximab, Eptifibatide, Tirofiban</td><td>Glycoprotein (GP) IIb/IIIa Inhibitors → block fibrinogen/vWF.</td></tr>
            <tr><td>Dipyridamole, Cilostazol</td><td>Phosphodiesterase (PDE) Inhibitors → ↑ cAMP, ↓ Ca²⁺.</td></tr>
            <tr><td>Factor I / Factor II / Factor IV</td><td>Fibrinogen / Prothrombin / Calcium ions (Ca²⁺).</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="glass-card">
      <h4>"If You See This → Think This" Patterns</h4>
      <div class="trow">✦ <b>Patient on Clopidogrel + Omeprazole</b> → <span class="hl">Reduced clopidogrel efficacy</span> (CYP2C19 inhibition prevents prodrug activation)</div>
      <div class="trow">✦ <b>Cilostazol</b> → <span class="hl">Black Box Warning</span> for severe heart failure</div>
      <div class="trow">✦ <b>Prasugrel order</b> → <span class="hl">Avoid</span> in prior stroke/TIA, age ≥ 75, or low body weight</div>
      <div class="trow">✦ <b>Ticagrelor side effect</b> → <span class="hl">Dyspnea</span> (15-20%) or Bradycardia</div>
      <div class="trow">✦ <b>Abciximab administration</b> → Monitor for <span class="hl">acute profound thrombocytopenia</span> (&lt;50,000/μL) at 2-4 hours and anaphylaxis</div>
      <div class="trow">✦ <b>Opioids + Oral P2Y12 inhibitors</b> → <span class="hl">Delayed absorption</span>; consider IV cangrelor</div>
    </div>

    <div class="glass-card">
      <h4>Critical Key Facts</h4>
      <div class="trow">✦ <b>Clopidogrel & Prasugrel:</b> <span class="hl">Irreversible</span> prodrugs</div>
      <div class="trow">✦ <b>Ticagrelor:</b> <span class="hl">Reversible</span>, orally active (not a prodrug)</div>
      <div class="trow">✦ <b>Aspirin + Ibuprofen:</b> Ibuprofen <span class="hl">reduces aspirin's cardioprotective effects</span></div>
      <div class="trow">✦ <b>Abciximab:</b> Chimeric antibody; highest bleeding and thrombocytopenia risk in its class</div>
      <div class="trow">✦ <b>Hemostasis Stages:</b> (1) Vasoconstriction → (2) Platelet plug → (3) Coagulation cascade → (4) Fibrin plug</div>
    </div>

    <div class="glass-card">
      <h4>🚨 Commonly Tested Traps</h4>
      <div class="trow">✦ <b>TRAP:</b> Administering omeprazole/esomeprazole for GI protection with Clopidogrel (<span class="hl">decreases activation and efficacy</span>)</div>
      <div class="trow">✦ <b>TRAP:</b> Giving Cilostazol to treat claudication in a patient with heart failure (<span class="hl">fatal inotropic effects</span>)</div>
      <div class="trow">✦ <b>TRAP:</b> Assuming all P2Y12 inhibitors are irreversible prodrugs (<span class="hl">Ticagrelor is the reversible exception</span>)</div>
      <div class="trow">✦ <b>TRAP:</b> Missing profound thrombocytopenia with GP IIb/IIIa inhibitors; platelets <i>must</i> be checked within <span class="hl">2-4 hours</span> of starting Abciximab</div>
      <div class="trow">✦ <b>TRAP:</b> Combining Thrombolytics (fibrinolytics) with GP IIb/IIIa inhibitors (<span class="hl">contraindicated</span> due to markedly increased bleeding)</div>
    </div>
  `,


  // ============================================================
  // SECTION 4 — FLASHCARDS
  // ============================================================
  "flashcards": [
    { q: "What is the primary goal of hemostasis?", a: "To stop bleeding from a damaged blood vessel by forming a \"plug.\"" },
    { q: "Which three organ systems are essential for producing clotting factors and cells for hemostasis?", a: "The vasculature, liver, and bone marrow." },
    { q: "What is the first stage of hemostasis immediately following vessel injury?", a: "Constriction of the blood vessel (vasoconstriction)." },
    { q: "What is the difference between the second and fourth stages of hemostasis?", a: "Stage 2 forms a temporary \"platelet plug,\" while stage 4 forms a permanent \"fibrin plug.\"" },
    { q: "Common Name: Factor I", a: "Fibrinogen (the precursor to the fibrin mesh)." },
    { q: "Common Name: Factor II", a: "Prothrombin (the precursor to thrombin)." },
    { q: "Which clotting factor is known as Tissue Factor and triggers the extrinsic pathway?", a: "Factor III." },
    { q: "Which ion is designated as Factor IV and is required for almost all clotting steps?", a: "Calcium Ions (Ca²⁺)." },
    { q: "Which factor marks the beginning of the \"common pathway\" where intrinsic and extrinsic pathways meet?", a: "Factor X (Stuart-Prower Factor)." },
    { q: "What is the function of Factor XIII (Fibrin-Stabilizing Factor)?", a: "It cross-links fibrin strands to make the clot firm and permanent." },
    { q: "What is the clinical term for blood clotting spontaneously without an injury?", a: "Hypercoagulability (often leading to thrombosis)." },
    { q: "How does low-dose Aspirin inhibit platelet aggregation?", a: "It irreversibly inhibits the COX enzyme, preventing the synthesis of Thromboxane A₂ (TXA₂)." },
    { q: "In the context of Aspirin, what is the role of Thromboxane A₂ (TXA₂)?", a: "It causes vasoconstriction and induces platelet aggregation." },
    { q: "Why is Aspirin used prophylactically in patients at risk for MI or stroke?", a: "To prevent arterial thrombosis." },
    { q: "What respiratory side effect is specifically associated with Aspirin use?", a: "Aspirin-induced asthma (often seen with nasal polyps)." },
    { q: "Why should a patient avoid taking Ibuprofen immediately before Aspirin for heart protection?", a: "Ibuprofen can block Aspirin's access to the COX enzyme, reducing its cardioprotective effect." },
    { q: "Mechanism: Dipyridamole", a: "It inhibits phosphodiesterase to increase cAMP levels → meaning: less calcium is available for platelets to stick together." },
    { q: "Which drug is often combined with Warfarin to prevent clots on prosthetic heart valves?", a: "Dipyridamole." },
    { q: "What is the most common cardiovascular side effect of Dipyridamole due to its vasodilatory properties?", a: "Headache (also palpitations and tachycardia)." },
    { q: "Which antiplatelet drug carries a black box warning for heart failure?", a: "Cilostazol (a phosphodiesterase inhibitor)." },
    { q: "What is the mechanism of action for P2Y₁₂ receptor antagonists like Clopidogrel?", a: "They block the ADP-dependent pathway of platelet activation." },
    { q: "Which P2Y₁₂ inhibitors are prodrugs that must be activated by the liver?", a: "Ticlopidine, Clopidogrel, and Prasugrel." },
    { q: "How does Ticagrelor differ from Clopidogrel in its binding to the P2Y₁₂ receptor?", a: "Ticagrelor is a reversible inhibitor, while Clopidogrel is irreversible." },
    { q: "Why should a patient on Clopidogrel avoid strong CYP2C19 inhibitors like Omeprazole?", a: "They prevent the activation of Clopidogrel → meaning: the drug won't work to prevent clots." },
    { q: "Which P2Y₁₂ inhibitor is associated with a non-allergic, transient side effect of dyspnea (shortness of breath)?", a: "Ticagrelor." },
    { q: "Prasugrel is contraindicated in patients with a history of which condition?", a: "Prior stroke or Transient Ischemic Attack (TIA) due to high bleeding risk." },
    { q: "What rare but serious blood disorder is historically associated with Ticlopidine and Clopidogrel?", a: "Thrombotic Thrombocytopenic Purpura (TTP)." },
    { q: "Which drug combination is standard for preventing stent thrombosis after coronary stent placement?", a: "Clopidogrel plus Aspirin (Dual Antiplatelet Therapy)." },
    { q: "How do Glycoprotein IIb/IIIa inhibitors (e.g., Abciximab) prevent clotting?", a: "They block the receptor for fibrinogen and vWF → meaning: they stop the final step of platelets anchoring to each other." },
    { q: "Which GP IIb/IIIa inhibitor is a chimeric monoclonal antibody?", a: "Abciximab." },
    { q: "What is the most significant adverse effect of GP IIb/IIIa inhibitors?", a: "Major bleeding (intracranial, GI, or at the access site)." },
    { q: "Which GP IIb/IIIa inhibitor is most likely to cause profound thrombocytopenia (low platelet count)?", a: "Abciximab." },
    { q: "How frequently should platelets be monitored after starting Abciximab?", a: "Within 2 to 4 hours of the start and then daily." },
    { q: "What is the specific clinical use for Eptifibatide?", a: "Primary PCI for acute ST-segment elevation MI (STEMI)." },
    { q: "Tirofiban is primarily managed in which clinical scenario?", a: "Non-ST-segment elevation acute coronary syndrome (NSTE-ACS)." },
    { q: "Why are Thrombolytics generally contraindicated when a patient is on GP IIb/IIIa inhibitors?", a: "The combination markedly increases the risk of fatal bleeding." },
    { q: "What is the function of Sodium Citrate in a clinical setting?", a: "It is used in blood banks to prevent blood from clotting during storage (in vitro)." },
    { q: "Which anticoagulants are classified as Indirect Thrombin Inhibitors?", a: "Unfractionated Heparin (UFH), LMWHs (e.g., Enoxaparin), and Fondaparinux." },
    { q: "What are three examples of Low-Molecular-Weight Heparins (LMWHs)?", a: "Enoxaparin, Dalteparin, and Ardeparin." },
    { q: "The presence of blood in the urine, a potential side effect of antiplatelets, is called _____.", a: "Hematuria." },
    { q: "How does Opioid use (e.g., Morphine) interact with oral P2Y₁₂ inhibitors?", a: "Opioids slow gastric emptying, which delays the absorption and onset of the antiplatelet drug." },
    { q: "Mechanism: Phospholipase A₂ in the hemostasis pathway", a: "It converts membrane phospholipids into Arachidonic Acid." },
    { q: "What is the end product of the coagulation cascade that forms the actual \"mesh\" of a clot?", a: "Fibrin." },
    { q: "Which organ is responsible for the production of most clotting factors?", a: "The liver." },
    { q: "What does the term \"thrombophilia\" describe?", a: "A condition where thrombosis (clotting) happens repeatedly." },
    { q: "Which drug is an orally active, synthetic P2Y₁₂ antagonist that is NOT a prodrug?", a: "Ticagrelor." },
    { q: "Side Effect: Epistaxis", a: "Nosebleeds (a common minor bleeding complication of antiplatelets)." },
    { q: "Why is Prasugrel preferred over Clopidogrel in some Acute Coronary Syndrome (ACS) cases?", a: "It has a more rapid onset of action and provides greater inhibition of platelet aggregation." },
    { q: "What is ecchymosis?", a: "Skin discoloration caused by bleeding underneath the skin (bruising)." },
    { q: "Which enzyme converts Arachidonic Acid into Prostaglandin G₂ (PGG₂)?", a: "Cyclooxygenase (COX)." },
    { q: "True or False: Ticagrelor can cause bradycardia and AV block.", a: "True." },
    { q: "Which anticoagulant is used both in vitro (laboratory) and in vivo (patient)?", a: "Heparin." },
    { q: "What is the role of Protein Kinase A in platelet inhibition?", a: "It decreases the availability of intracellular calcium needed for platelets to aggregate." },
    { q: "Dipyridamole's effect on adenosine", a: "It blocks the reuptake of adenosine, increasing its concentration to inhibit platelets." },
    { q: "Management: GI upset with Cilostazol", a: "The patient should take the medication with food." },
    { q: "Which P2Y₁₂ inhibitor is administered intravenously?", a: "Cangrelor." },
    { q: "Which clotting factor activates Factor IX in the intrinsic pathway?", a: "Factor XI (Plasma Thromboplastin Antecedent)." },
    { q: "Common Trap: Is Clopidogrel more or less toxic than Ticlopidine?", a: "Less toxic; it rarely causes the severe bone marrow issues seen with Ticlopidine." },
    { q: "What happens if a GP IIb/IIIa inhibitor causes severe thrombocytopenia?", a: "The infusion must be stopped, and a platelet transfusion may be required." }
  ],


  // ============================================================
  // SECTION 5 — QUIZ QUESTIONS
  // ============================================================
  "quizQuestions": [
    {
      type: "mcq",
      q: "Which stage of hemostasis involves platelets sticking together to form a temporary seal?",
      o: ["Vasoconstriction", "Coagulation cascade", "Platelet plug formation", "Fibrin clot stabilization"],
      c: 2,
      r: ["Incorrect. This is Stage 1 where vessels squeeze tight to slow blood flow.", "Incorrect. This is Stage 3 involving a chain reaction of clotting proteins.", "Correct! Platelets rush to the site and stick together to form a soft temporary plug (Stage 2).", "Incorrect. This is the final Stage 4 where a firm, permanent mesh is formed."]
    },
    {
      type: "mcq",
      q: "Which organ is responsible for producing the platelets required for hemostasis?",
      o: ["Liver", "Bone marrow", "Spleen", "Vasculature"],
      c: 1,
      r: ["Incorrect. The liver manufactures most clotting factors (proteins).", "Correct! The bone marrow produces platelets, which are the cell fragments at the heart of clot formation.", "Incorrect. The spleen is not listed as a primary producer in this hemostasis system.", "Incorrect. The vasculature provides the blood vessels that constrict during injury."]
    },
    {
      type: "mcq",
      q: "What is the common name and role of Clotting Factor IV?",
      o: ["Calcium Ions; required for nearly all steps of the cascade", "Fibrinogen; the precursor to the fibrin mesh", "Prothrombin; the precursor to thrombin", "Tissue Factor; triggers the extrinsic pathway"],
      c: 0,
      r: ["Correct! Calcium (Ca\u00b2\u207a) is Factor IV and is essential for almost every step of the clotting cascade.", "Incorrect. Fibrinogen is Factor I.", "Incorrect. Prothrombin is Factor II.", "Incorrect. Tissue Factor is Factor III."]
    },
    {
      type: "mcq",
      q: "How does low-dose aspirin inhibit platelet activation?",
      o: ["By blocking the P2Y\u2081\u2082 ADP receptor", "By preventing the breakdown of cAMP", "By blocking GP IIb/IIIa receptors", "By irreversibly acetylating the COX-1 enzyme"],
      c: 3,
      r: ["Incorrect. This is the mechanism for drugs like clopidogrel.", "Incorrect. This is the mechanism for dipyridamole.", "Incorrect. This is the mechanism for abciximab and tirofiban.", "Correct! Aspirin covalently acetylates the COX-1 enzyme, permanently blocking the synthesis of Thromboxane A\u2082 (TXA\u2082)."]
    },
    {
      type: "mcq",
      q: "How long does the antiplatelet effect of a single dose of aspirin typically last?",
      o: ["24 hours", "7\u201310 days", "48 hours", "30 days"],
      c: 1,
      r: ["Incorrect. This is too short; the effect persists until new platelets are formed.", "Correct! Because aspirin's effect is irreversible and platelets cannot make new enzymes, the effect lasts for the entire 7\u201310 day lifespan of the platelet.", "Incorrect. Aspirin's covalent bond lasts longer than 48 hours.", "Incorrect. Platelets are replaced much sooner than 30 days."]
    },
    {
      type: "mcq",
      q: "Dipyridamole reduces platelet aggregability by which mechanism?",
      o: ["Directly blocking fibrinogen binding", "Inhibiting Thromboxane A\u2082 synthesis", "Inhibiting phosphodiesterase to keep cAMP levels high", "Covalently modifying the ADP receptor"],
      c: 2,
      r: ["Incorrect. This describes GP IIb/IIIa inhibitors.", "Incorrect. This describes aspirin's primary action.", "Correct! Dipyridamole blocks phosphodiesterase, preventing the breakdown of cAMP, which keeps platelets in a 'calm' or inactive state.", "Incorrect. This describes thienopyridines like clopidogrel."]
    },
    {
      type: "mcq",
      q: "Which drug combination is standard for preventing thrombus formation on prosthetic heart valves?",
      o: ["Dipyridamole + Warfarin", "Aspirin + Clopidogrel", "Abciximab + Heparin", "Ticagrelor + High-dose Aspirin"],
      c: 0,
      r: ["Correct! Dipyridamole is frequently administered with warfarin specifically to inhibit clots on artificial heart valves.", "Incorrect. This is dual antiplatelet therapy (DAPT) often used after stents.", "Incorrect. This is used during percutaneous coronary intervention (PCI).", "Incorrect. Ticagrelor should only be used with low-dose aspirin (<100mg)."]
    },
    {
      type: "mcq",
      q: "Why must clopidogrel be processed by the liver to be effective?",
      o: ["It is a reversible inhibitor", "It is a thienopyridine derivative", "It causes TTP if not processed", "It is a prodrug that requires activation by CYP2C19"],
      c: 3,
      r: ["Incorrect. Clopidogrel is actually an irreversible inhibitor.", "Incorrect. While it is a thienopyridine, being a prodrug is the specific reason it needs liver activation.", "Incorrect. TTP is a rare adverse effect, not the reason for liver metabolism.", "Correct! Clopidogrel is a prodrug that must be converted into its active form by the hepatic enzyme CYP2C19."]
    },
    {
      type: "mcq",
      q: "A patient taking clopidogrel should avoid which medication due to reduced drug efficacy?",
      o: ["Pantoprazole", "Omeprazole", "Ibuprofen", "Warfarin"],
      c: 1,
      r: ["Incorrect. Pantoprazole is the preferred alternative as it does not interfere significantly with clopidogrel.", "Correct! Omeprazole is a strong CYP2C19 inhibitor that prevents the activation of clopidogrel, making the antiplatelet therapy less effective.", "Incorrect. Ibuprofen increases GI bleeding risk but doesn't stop clopidogrel activation.", "Incorrect. Warfarin increases bleeding risk but doesn't reduce clopidogrel's efficacy."]
    },
    {
      type: "mcq",
      q: "Which unique adverse effect is associated with Ticagrelor in about 15-20% of patients?",
      o: ["Tinnitus", "Profound thrombocytopenia", "Dyspnea (shortness of breath)", "Hepatotoxicity"],
      c: 2,
      r: ["Incorrect. Tinnitus is more commonly associated with aspirin toxicity.", "Incorrect. This is most common with GP IIb/IIIa inhibitors like abciximab.", "Correct! Ticagrelor specifically causes a non-allergic, often transient dyspnea in a significant percentage of patients.", "Incorrect. This is a rare side effect mentioned for aspirin."]
    },
    {
      type: "mcq",
      q: "Prasugrel is contraindicated in which patient population due to high fatal bleeding risk?",
      o: ["Patients with a history of stroke or TIA", "Patients with asthma", "Patients with prosthetic heart valves", "Patients under age 65"],
      c: 0,
      r: ["Correct! Prasugrel should be avoided in patients with prior stroke or TIA, those over 75, or those with low body weight due to increased bleeding risk.", "Incorrect. Asthma is a precaution for aspirin, not specifically prasugrel.", "Incorrect. Heart valve patients often use dipyridamole/warfarin.", "Incorrect. High risk is associated with patients over 75, not under 65."]
    },
    {
      type: "mcq",
      q: "Which class of antiplatelet drugs is considered the most potent because they block the 'final common pathway'?",
      o: ["TXA\u2082 Synthesis Inhibitors", "Phosphodiesterase Inhibitors", "P2Y\u2081\u2082 Receptor Antagonists", "Glycoprotein (GP) IIb/IIIa Inhibitors"],
      c: 3,
      r: ["Incorrect. Aspirin is 'upstream' and less potent than GP inhibitors.", "Incorrect. Dipyridamole is relatively weak and usually combined with other drugs.", "Incorrect. These block the ADP pathway, but the final step is still GP IIb/IIIa.", "Correct! GP IIb/IIIa inhibitors block the final step of aggregation regardless of the trigger, making them the most potent antiplatelets."]
    },
    {
      type: "mcq",
      q: "What is a serious adverse effect specific to the chimeric antibody Abciximab?",
      o: ["Hyperuricemia", "Anaphylaxis and allergic reactions", "Aspirin-induced asthma", "Orange discoloration of body fluids"],
      c: 1,
      r: ["Incorrect. This is a side effect specifically noted for ticagrelor.", "Correct! Because abciximab is a chimeric (mouse/human) antibody, it carries a risk of allergic reactions and anaphylaxis.", "Incorrect. This is specific to aspirin sensitivity.", "Incorrect. This is noted as a rare effect with 'certain agents' in the aspirin table."]
    },
    {
      type: "mcq",
      q: "What is the primary function of Glycoprotein IIb/IIIa on the platelet surface?",
      o: ["To produce Thromboxane A\u2082", "To break down cAMP", "To act as a receptor for fibrinogen to link platelets together", "To initiate the intrinsic coagulation pathway"],
      c: 2,
      r: ["Incorrect. This is done by the COX-1 and TX Synthase enzymes.", "Incorrect. This is the role of the phosphodiesterase enzyme.", "Correct! When activated, GP IIb/IIIa binds fibrinogen, which acts as a bridge to anchor platelets to one another.", "Incorrect. The intrinsic pathway is initiated by Factor XII."]
    },
    {
      type: "mcq",
      q: "Which P2Y\u2081\u2082 inhibitor is reversible and has a faster offset than clopidogrel?",
      o: ["Ticagrelor", "Prasugrel", "Ticlopidine", "Cangrelor"],
      c: 0,
      r: ["Correct! Ticagrelor is an orally active, reversible inhibitor, meaning platelet function returns faster after stopping it compared to irreversible agents.", "Incorrect. Prasugrel is an irreversible inhibitor.", "Incorrect. Ticlopidine is an irreversible thienopyridine.", "Incorrect. While cangrelor is reversible, ticagrelor is the primary oral reversible agent mentioned."]
    },
    {
      type: "mcq",
      q: "When should aspirin typically be held before an elective surgery to prevent excessive bleeding?",
      o: ["24 hours", "2 days", "7\u201310 days", "15 days"],
      c: 2,
      r: ["Incorrect. This is too brief; most platelets will still be inhibited.", "Incorrect. Platelet turnover takes longer than 2 days.", "Correct! Aspirin should be held 7\u201310 days before elective surgery to allow for the production of new, functioning platelets.", "Incorrect. 15 days is longer than the standard 7-10 day clinical recommendation."]
    },
    {
      type: "mcq",
      q: "What is the management if a patient on GP IIb/IIIa inhibitors shows 'pseudothrombocytopenia'?",
      o: ["Stop the infusion immediately", "Administer a platelet transfusion", "Recheck the count using a citrate tube", "Switch the patient to aspirin"],
      c: 2,
      r: ["Incorrect. This is only necessary for true, severe thrombocytopenia.", "Incorrect. Transfusions are for true severe cases, not lab artifacts.", "Correct! Pseudothrombocytopenia is a lab artifact; the count should be rechecked using a citrate tube to confirm if it's a true drop.", "Incorrect. Switching drugs isn't indicated until the platelet drop is confirmed as real."]
    },
    {
      type: "mcq",
      q: "Factor VIII (Antihemophilic Factor A) is essential for which pathway?",
      o: ["Extrinsic pathway", "Common pathway", "Intrinsic pathway", "Fibrin stabilization"],
      c: 2,
      r: ["Incorrect. The extrinsic pathway is initiated by Factor III and VII.", "Incorrect. The common pathway begins at Factor X.", "Correct! Factor VIII is an essential cofactor for the intrinsic pathway and is the factor absent in Hemophilia A.", "Incorrect. Fibrin stabilization is the role of Factor XIII."]
    },
    {
      type: "mcq",
      q: "What is the clinical term for a blood clot that forms inside a blood vessel?",
      o: ["Thrombosis", "Hemostasis", "Epistaxis", "Ecchymosis"],
      c: 0,
      r: ["Correct! When blood clots form inside your blood vessels, it is called a thrombosis.", "Incorrect. Hemostasis is the normal mechanism that stops bleeding.", "Incorrect. Epistaxis is the medical term for a nosebleed.", "Incorrect. Ecchymosis refers to skin discoloration from bleeding (bruising)."]
    },
    {
      type: "mcq",
      q: "Which drug class does Cangrelor belong to, and how is it administered?",
      o: ["PDE inhibitor; Oral", "TXA\u2082 inhibitor; IV", "GP IIb/IIIa inhibitor; Oral", "P2Y\u2081\u2082 receptor antagonist; IV"],
      c: 3,
      r: ["Incorrect. Dipyridamole is the PDE inhibitor and is oral.", "Incorrect. Aspirin is the TXA\u2082 inhibitor and is oral.", "Incorrect. GP IIb/IIIa inhibitors are IV, but Cangrelor is not in that class.", "Correct! Cangrelor is a P2Y\u2081\u2082 receptor antagonist and is specifically the IV formulation of this class."]
    },
    {
      type: "mcq",
      q: "During Stage 1 of hemostasis, what is the primary purpose of vasoconstriction?",
      o: ["To slow blood loss by narrowing the injured vessel", "To activate the common pathway", "To trigger the release of platelets from bone marrow", "To convert fibrinogen into fibrin"],
      c: 0,
      r: ["Correct! Vasoconstriction is the immediate response where the blood vessel 'squeezes tight' to reduce blood flow to the injured site.", "Incorrect. This occurs later in the coagulation cascade (Stage 3).", "Incorrect. Bone marrow produces platelets continuously, not just during Stage 1.", "Incorrect. This is the final step of the coagulation cascade."]
    },
    {
      type: "mcq",
      q: "Which organ is primarily responsible for manufacturing the majority of the body's clotting factors?",
      o: ["Bone marrow", "Spleen", "Liver", "Vasculature"],
      c: 2,
      r: ["Incorrect. Bone marrow is responsible for producing cells like platelets.", "Incorrect. The spleen is not a primary manufacturer of clotting factors.", "Correct! The liver produces the proteins known as clotting factors that are essential for the coagulation cascade.", "Incorrect. The vasculature provides the physical structure and constriction response."]
    },
    {
      type: "mcq",
      q: "What is the common name and primary function of Clotting Factor I?",
      o: ["Prothrombin; activates fibrinogen", "Fibrinogen; acts as the precursor to the fibrin 'mesh'", "Calcium; facilitates nearly all steps of the cascade", "Hageman Factor; initiates the intrinsic pathway"],
      c: 1,
      r: ["Incorrect. Prothrombin is Factor II.", "Correct! Factor I is Fibrinogen, which is converted into the fibrin threads that hold a clot together.", "Incorrect. Calcium is Factor IV.", "Incorrect. Hageman Factor is Factor XII."]
    },
    {
      type: "mcq",
      q: "Which clotting factor serves as the meeting point where the intrinsic and extrinsic pathways merge into the 'common pathway'?",
      o: ["Factor I", "Factor VII", "Factor IX", "Factor X"],
      c: 3,
      r: ["Incorrect. Factor I is at the very end of the common pathway.", "Incorrect. Factor VII is specific to the extrinsic pathway.", "Incorrect. Factor IX is part of the intrinsic pathway.", "Correct! Factor X (Stuart-Prower Factor) is the specific point where both pathways meet to begin the final common pathway of clotting."]
    },
    {
      type: "mcq",
      q: "A patient who experiences repeated, spontaneous thrombosis even without injury is said to have which condition?",
      o: ["Thrombophilia", "Hypocoagulability", "Hemophilia", "Thrombocytopenia"],
      c: 0,
      r: ["Correct! Thrombophilia is a condition characterized by repeated or spontaneous blood clot formation within the vessels.", "Incorrect. Hypocoagulability refers to a state where the blood does not clot enough.", "Incorrect. Hemophilia is a bleeding disorder caused by missing clotting factors.", "Incorrect. Thrombocytopenia is a dangerously low platelet count."]
    },
    {
      type: "mcq",
      q: "Which of the following best describes the clinical goal of antiplatelet drugs?",
      o: ["To dissolve established blood clots in the arteries", "To prevent the formation of new arterial clots by reducing platelet activity", "To stimulate the bone marrow to produce more platelets", "To neutralize the effects of Factor X in the common pathway"],
      c: 1,
      r: ["Incorrect. Thrombolytic agents are used to dissolve existing clots.", "Correct! Antiplatelet drugs target the 'platelet plug' stage to prevent new clots from forming; they do not dissolve existing ones.", "Incorrect. Antiplatelet drugs reduce activity rather than increasing production.", "Incorrect. This is the role of certain anticoagulants, not antiplatelet agents."]
    },
    {
      type: "mcq",
      q: "Which P2Y\u2081\u2082 inhibitor is primarily used intravenously (IV) for rapid onset and offset?",
      o: ["Clopidogrel", "Prasugrel", "Cangrelor", "Ticlopidine"],
      c: 2,
      r: ["Incorrect. Clopidogrel is an oral medication.", "Incorrect. Prasugrel is also an oral prodrug.", "Correct! Cangrelor is the IV formulation of the P2Y\u2081\u2082 antagonists, providing rapid onset and offset of action.", "Incorrect. Ticlopidine is an oral thienopyridine."]
    },
    {
      type: "mcq",
      q: "A nurse is reviewing medications and finds a patient on aspirin is also taking high-dose ibuprofen. What is the concern?",
      o: ["Ibuprofen enhances aspirin's COX-2 action", "Ibuprofen is contraindicated with all antiplatelets", "Ibuprofen can reduce aspirin's cardioprotective effect", "The combination is entirely safe and requires no monitoring"],
      c: 2,
      r: ["Incorrect. Ibuprofen does not enhance aspirin's COX-2 action specifically.", "Incorrect. Ibuprofen is not absolutely contraindicated but does pose significant risks.", "Correct! Ibuprofen can competitively block aspirin's access to the COX-1 enzyme, reducing its cardioprotective antiplatelet effect.", "Incorrect. The combination increases GI toxicity and reduces aspirin's cardiac benefit."]
    },
    {
      type: "mcq",
      q: "Which GP IIb/IIIa inhibitor is classified as a chimeric monoclonal antibody?",
      o: ["Eptifibatide", "Tirofiban", "Abciximab", "Cangrelor"],
      c: 2,
      r: ["Incorrect. Eptifibatide is a synthetic peptide inhibitor.", "Incorrect. Tirofiban is a non-peptide inhibitor.", "Correct! Abciximab is a chimeric (mouse/human) monoclonal antibody, which confers a risk of allergic reactions and anaphylaxis.", "Incorrect. Cangrelor is a P2Y\u2081\u2082 receptor antagonist, not a GP IIb/IIIa inhibitor."]
    },
    {
      type: "mcq",
      q: "Which GP IIb/IIIa inhibitor is mainly used in the management of non-ST-elevation acute coronary syndrome (NSTE-ACS)?",
      o: ["Tirofiban", "Abciximab", "Eptifibatide", "Ticlopidine"],
      c: 0,
      r: ["Correct! Tirofiban is primarily managed for patients with non-ST-elevation ACS.", "Incorrect. Abciximab is standard for patients undergoing PCI.", "Incorrect. Eptifibatide is used mainly in STEMI patients undergoing PCI.", "Incorrect. Ticlopidine is an oral P2Y\u2081\u2082 inhibitor, not a GP inhibitor."]
    },
    {
      type: "mcq",
      q: "What nursing action is required if a patient on Abciximab develops a sudden, profound drop in platelets?",
      o: ["Continue the infusion but monitor closely", "Recheck with a heparinized tube", "Administer Vitamin K", "Stop the infusion immediately and notify the provider"],
      c: 3,
      r: ["Incorrect. Continuing the infusion during severe thrombocytopenia risks fatal bleeding.", "Incorrect. Rechecking with a citrate tube (not heparin) is used for 'pseudo' cases.", "Incorrect. Vitamin K is an antidote for warfarin, not GP inhibitors.", "Correct! True profound thrombocytopenia is a medical emergency that requires stopping the drug infusion immediately."]
    },
    {
      type: "mcq",
      q: "Which of the following is a high-priority safety point when educating a patient on antiplatelet therapy?",
      o: ["Use a firm-bristle toothbrush to improve gum health", "Take the medication only when you feel chest pain", "Report any black, tarry stools immediately", "Stop taking the drug three days before a major dental procedure"],
      c: 2,
      r: ["Incorrect. Patients should use soft-bristle toothbrushes to prevent gum bleeding.", "Incorrect. Antiplatelet therapy is a daily preventative measure, not a PRN drug.", "Correct! Black, tarry stools (melena) are a sign of internal GI bleeding and must be reported immediately.", "Incorrect. Aspirin usually requires 7\u201310 days of holding before surgery."]
    },
    {
      type: "mcq",
      q: "Why should IM (intramuscular) injections be avoided in patients receiving antiplatelet drugs?",
      o: ["Risk of developing a hematoma", "The drug will be absorbed too quickly", "IM injections neutralize the antiplatelet effect", "Risk of inducing anaphylaxis"],
      c: 0,
      r: ["Correct! Injections into the muscle carry a high risk of deep tissue bleeding and hematoma formation in anticoagulated patients.", "Incorrect. Absorption rate is not the primary safety concern here.", "Incorrect. Injections do not interfere with the chemical mechanism of the drugs.", "Incorrect. Anaphylaxis is a drug-specific allergic reaction, not an injection-site risk."]
    },
    {
      type: "mcq",
      q: "Which patient education point is most important for a patient prescribed Clopidogrel and a Proton Pump Inhibitor (PPI)?",
      o: ["Use Omeprazole to maximize the drug's effect", "Use Pantoprazole instead of Omeprazole", "Take both medications at the exact same time", "Avoid all PPIs as they cause total drug failure"],
      c: 1,
      r: ["Incorrect. Omeprazole actually reduces clopidogrel's effectiveness.", "Correct! Pantoprazole is the preferred PPI because it does not inhibit the CYP2C19 enzyme needed to activate clopidogrel.", "Incorrect. Timing does not fix the enzyme inhibition caused by omeprazole.", "Incorrect. Gastric protection is often still needed; the choice of PPI just matters."]
    },
    {
      type: "mcq",
      q: "What is the role of Clotting Factor XIII (Fibrin-Stabilizing Factor)?",
      o: ["To convert prothrombin to thrombin", "To initiate the extrinsic pathway", "To prevent the breakdown of cAMP", "To cross-link fibrin strands to make the clot firm and permanent"],
      c: 3,
      r: ["Incorrect. This is the role of Factor X and the prothrombinase complex.", "Incorrect. Factor III (Tissue Factor) initiates the extrinsic pathway.", "Incorrect. This describes the mechanism of Dipyridamole.", "Correct! Factor XIII acts at the very end of the process to strengthen the fibrin mesh into a solid clot."]
    },
    {
      type: "mcq",
      q: "A nurse is preparing to administer Dipyridamole. Which vital sign is most critical to monitor due to the drug's secondary properties?",
      o: ["Respiratory rate", "Oxygen saturation", "Blood pressure", "Temperature"],
      c: 2,
      r: ["Incorrect. Dyspnea is a concern for Ticagrelor, not Dipyridamole.", "Incorrect. While important, it is not the primary vital sign affected by Dipyridamole.", "Correct! Dipyridamole has vasodilatory properties that can cause hypotension, making blood pressure monitoring essential.", "Incorrect. Temperature is monitored for TTP or allergic reactions, not standard dosing."]
    },
    {
      type: "mcq",
      q: "How should the nurse manage a patient on dual antiplatelet therapy (DAPT) who wants to take Ibuprofen for a headache?",
      o: ["Advise the patient to avoid Ibuprofen due to increased bleeding risk and interference with aspirin", "Encourage taking it to help with the antiplatelet effect", "Suggest taking it 30 minutes before the aspirin", "Advise taking it with alcohol to reduce GI irritation"],
      c: 0,
      r: ["Correct! NSAIDs like ibuprofen can block aspirin's heart-protective benefits and significantly increase GI bleeding risk.", "Incorrect. NSAIDs add toxicity rather than beneficial antiplatelet effects.", "Incorrect. Ibuprofen can still interfere with aspirin regardless of minor timing changes.", "Incorrect. Alcohol combined with NSAIDs increases the risk of severe GI bleeding."]
    },
    {
      type: "mcq",
      q: "Which statement regarding the 'reversibility' of antiplatelet drugs is correct?",
      o: ["Aspirin is reversible with a Vitamin K injection", "Ticagrelor is a reversible inhibitor", "Clopidogrel can be reversed within 2 hours of administration", "All P2Y\u2081\u2082 inhibitors are irreversible thienopyridines"],
      c: 1,
      r: ["Incorrect. Aspirin is an irreversible inhibitor; no antidote exists.", "Correct! Ticagrelor is unique among the oral P2Y\u2081\u2082 inhibitors because it binds reversibly to the receptor.", "Incorrect. Clopidogrel is an irreversible inhibitor; effect lasts for the platelet's life.", "Incorrect. Ticagrelor is NOT a thienopyridine and is reversible."]
    },
    {
      type: "mcq",
      q: "For a patient undergoing primary PCI for an Acute MI, which drug is mainly used during the procedure?",
      o: ["Sodium Citrate", "Warfarin", "Reviparin", "Eptifibatide"],
      c: 3,
      r: ["Incorrect. This is used for blood storage in banks, not in patients.", "Incorrect. Warfarin is a long-term oral anticoagulant, not for acute PCI.", "Incorrect. Reviparin is a low-molecular-weight heparin, not an antiplatelet drug.", "Correct! Eptifibatide is specifically indicated for patients undergoing primary PCI for STEMI."]
    },
    {
      type: "mcq",
      q: "What should the nurse do if a patient with a coronary stent insists on stopping their dual antiplatelet therapy for a few days?",
      o: ["Allow the break as long as they stay in bed", "Switch them to a single dose of Ibuprofen during the break", "Stress that stopping can lead to sudden stent thrombosis and death", "Suggest they take an extra dose of Warfarin instead"],
      c: 2,
      r: ["Incorrect. Activity level does not prevent stent thrombosis.", "Incorrect. Ibuprofen is not a substitute for prescribed antiplatelet therapy.", "Correct! Stopping dual antiplatelet therapy after a stent without cardiology approval carries a high risk of the stent clogging (thrombosis).", "Incorrect. Warfarin is not an appropriate substitute for antiplatelet drugs in stent management."]
    }
  ],

  // ============================================================
  // SECTION 6 — NCLEX BOARDS
  // ============================================================
  "practiceNclex": [
    {
      type: "mcq",
      q: "A patient is prescribed low-dose aspirin for stroke prevention. The nurse knows that aspirin exerts its antiplatelet effect by:",
      o: ["Inhibiting the P2Y12 receptor.", "Covalently acetylating the COX enzyme.", "Blocking glycoprotein IIb/IIIa receptors.", "Inhibiting phosphodiesterase."],
      c: 1,
      r: ["Incorrect. P2Y12 inhibitors (like clopidogrel) block ADP receptors, not aspirin.", "Correct! Aspirin irreversibly prevents platelet aggregation by covalently acetylating a serine residue near the active site of the COX enzyme, inhibiting TxA2 synthesis.", "Incorrect. GP IIb/IIIa inhibitors (like abciximab) block glycoprotein receptors.", "Incorrect. Dipyridamole is a phosphodiesterase inhibitor."]
    },
    {
      type: "mcq",
      q: "A nurse is assessing a patient on daily low-dose aspirin. Which assessment finding should be reported to the provider immediately?",
      o: ["Mild bruising on the arms.", "Occasional dyspepsia.", "New-onset wheezing and nasal congestion.", "A heart rate of 88 bpm."],
      c: 2,
      r: ["Incorrect. Mild bruising is an expected minor bleeding-related side effect.", "Incorrect. Occasional dyspepsia is common due to GI toxicity, though manageable.", "Correct! Aspirin can cause severe respiratory/allergic reactions, specifically aspirin-induced asthma and nasal polyps, requiring immediate intervention.", "Incorrect. A heart rate of 88 bpm is normal and unrelated to aspirin."]
    },
    {
      type: "mcq",
      q: "A provider prescribes cilostazol. The nurse should withhold the medication and question the order if the patient's history includes:",
      o: ["Severe heart failure.", "Peptic ulcer disease.", "Asthma.", "Gout."],
      c: 0,
      r: ["Correct! Cilostazol carries a black box warning and is contraindicated in severe heart failure due to its inotropic effects.", "Incorrect. While it causes GI upset, PUD is not its specific black box warning.", "Incorrect. Asthma is a concern for aspirin, not cilostazol.", "Incorrect. Gout flares are associated with ticagrelor, not cilostazol."]
    },
    {
      type: "mcq",
      q: "A patient is taking clopidogrel. The nurse reviews the medication list and identifies a potential decrease in clopidogrel efficacy if taken concurrently with:",
      o: ["Ibuprofen.", "Warfarin.", "Morphine.", "Omeprazole."],
      c: 3,
      r: ["Incorrect. Ibuprofen causes additive GI bleeding risk but does not reduce clopidogrel activation.", "Incorrect. Warfarin increases bleeding risk additively but doesn't alter drug efficacy.", "Incorrect. Morphine delays absorption of oral P2Y12 inhibitors but omeprazole directly stops its necessary enzymatic activation.", "Correct! Strong CYP2C19 inhibitors like omeprazole reduce the activation of clopidogrel (a prodrug), leading to decreased efficacy."]
    },
    {
      type: "mcq",
      q: "A 78-year-old patient weighing 55 kg is diagnosed with ACS. Which antiplatelet medication should the nurse expect to be avoided due to a high risk of fatal bleeding?",
      o: ["Clopidogrel.", "Prasugrel.", "Ticagrelor.", "Aspirin."],
      c: 1,
      r: ["Incorrect. Clopidogrel, ticagrelor, and aspirin do not carry this specific age/weight-related fatal bleeding contraindication.", "Correct! Prasugrel has an elevated fatal bleeding risk and must be avoided in patients who are \u2265 75 years old, have low body weight, or a prior stroke/TIA.", "Incorrect. Clopidogrel, ticagrelor, and aspirin do not carry this specific age/weight-related fatal bleeding contraindication.", "Incorrect. Clopidogrel, ticagrelor, and aspirin do not carry this specific age/weight-related fatal bleeding contraindication."]
    },
    {
      type: "mcq",
      q: "A patient on ticagrelor reports feeling short of breath. Oxygen saturation is 98% on room air, and lungs are clear. The nurse should recognize this as:",
      o: ["A sign of anaphylaxis requiring epinephrine.", "Aspirin-induced asthma.", "A common, often transient, non-allergic side effect.", "A symptom of severe heart failure exacerbation."],
      c: 2,
      r: ["Incorrect. It is explicitly non-allergic, so it is not anaphylaxis.", "Incorrect. The patient is taking ticagrelor, not aspirin.", "Correct! Dyspnea is a specific, non-allergic adverse effect of ticagrelor occurring in 15-20% of patients; it is usually mild and resolves with continued use.", "Incorrect. Heart failure exacerbation is the black box warning for cilostazol, not ticagrelor."]
    },
    {
      type: "mcq",
      q: "A patient is receiving an abciximab infusion during a PCI. Which laboratory value is the priority for the nurse to monitor within 2-4 hours of administration?",
      o: ["Platelet count.", "White blood cell count.", "Potassium level.", "Liver function tests."],
      c: 0,
      r: ["Correct! Abciximab has the highest risk (1-5%) of causing acute, profound thrombocytopenia (<50,000/\u03bcL); platelets must be monitored within 2-4 hours.", "Incorrect. WBC count is not significantly impacted by abciximab.", "Incorrect. Electrolytes and LFTs are not acutely affected by GP IIb/IIIa inhibitors.", "Incorrect. Electrolytes and LFTs are not acutely affected by GP IIb/IIIa inhibitors."]
    },
    {
      type: "mcq",
      q: "While a patient is receiving abciximab, they develop sudden hypotension, tachycardia, and a rash. The nurse suspects:",
      o: ["Expected vasodilation.", "A fatal bleeding event.", "Thrombotic thrombocytopenic purpura.", "Anaphylaxis to the chimeric antibody."],
      c: 3,
      r: ["Incorrect. Expected vasodilation is a side effect of dipyridamole, not abciximab.", "Incorrect. While bleeding is a risk, a rash indicates an allergic pathway.", "Incorrect. TTP is a historical risk of ticlopidine and clopidogrel, not abciximab.", "Correct! Abciximab is a chimeric antibody, and rare but serious allergic reactions, including anaphylaxis, can occur, requiring immediate cessation of the infusion."]
    },
    {
      type: "mcq",
      q: "The nurse is teaching a patient about dipyridamole. The nurse explains that this medication prevents platelet aggregation by:",
      o: ["Inhibiting the ADP pathway.", "Inhibiting cAMP degradation.", "Converting fibrinogen to fibrin.", "Blocking the COX-1 enzyme."],
      c: 1,
      r: ["Incorrect. Inhibiting the ADP pathway is the mechanism for P2Y12 antagonists.", "Correct! Dipyridamole inhibits platelet phosphodiesterase, which inhibits cAMP degradation, leading to decreased intracellular calcium and inhibited aggregation.", "Incorrect. Fibrinogen conversion is part of the coagulation cascade.", "Incorrect. Blocking COX-1 is the mechanism of aspirin."]
    },
    {
      type: "mcq",
      q: "A patient scheduled for surgery is taking clopidogrel. The surgeon delays the surgery because clopidogrel acts by:",
      o: ["Reversibly inhibiting COX-1.", "Reversibly inhibiting P2Y12.", "Irreversibly inactivating the P2Y12 receptor.", "Irreversibly inactivating phosphodiesterase."],
      c: 2,
      r: ["Incorrect. Aspirin irreversibly inhibits COX-1.", "Incorrect. Ticagrelor, not clopidogrel, is the reversible P2Y12 inhibitor.", "Correct! Clopidogrel irreversibly (covalently) modifies and inactivates the platelet P2Y12 (ADP) receptor, meaning effects last for the lifespan of the platelet.", "Incorrect. Dipyridamole acts on phosphodiesterase."]
    },
    {
      type: "mcq",
      q: "A patient with an acute ST-segment elevation myocardial infarction (STEMI) is undergoing primary PCI. Which intravenous antiplatelet agent is most likely to be administered?",
      o: ["Eptifibatide.", "Ticlopidine.", "Dipyridamole.", "Cilostazol."],
      c: 0,
      r: ["Correct! Eptifibatide (a GP IIb/IIIa inhibitor) is mainly used in patients undergoing primary percutaneous coronary intervention for acute STEMI.", "Incorrect. Ticlopidine is an oral agent used for stroke prevention.", "Incorrect. Dipyridamole and cilostazol are oral PDE inhibitors, not used for acute STEMI PCI.", "Incorrect. Dipyridamole and cilostazol are oral PDE inhibitors, not used for acute STEMI PCI."]
    },
    {
      type: "mcq",
      q: "Which of the following statements indicates the nurse understands the pharmacology of ticagrelor?",
      o: ["\"It is an irreversible inhibitor of P2Y12.\"", "\"It is an orally active, reversible inhibitor of P2Y12.\"", "\"It requires CYP2C19 activation to work.\"", "\"It covalently acetylates the COX enzyme.\""],
      c: 1,
      r: ["Incorrect. Clopidogrel and prasugrel are the irreversible inhibitors.", "Correct! Ticagrelor is unique among its class as an orally active, reversible inhibitor of the P2Y12 receptor.", "Incorrect. Clopidogrel (a prodrug) requires CYP2C19 activation, ticagrelor does not.", "Incorrect. Aspirin covalently acetylates COX."]
    },
    {
      type: "mcq",
      q: "A patient is receiving a GP IIb/IIIa inhibitor. The nurse should recognize that combining this drug with which medication class is generally contraindicated due to markedly increased bleeding?",
      o: ["Beta-blockers.", "Statins.", "Proton pump inhibitors.", "Thrombolytics."],
      c: 3,
      r: ["Incorrect. Beta-blockers, statins, and PPIs do not profoundly impact the bleeding cascade, though PPIs affect clopidogrel activation.", "Incorrect. Beta-blockers, statins, and PPIs do not profoundly impact the bleeding cascade, though PPIs affect clopidogrel activation.", "Incorrect. Beta-blockers, statins, and PPIs do not profoundly impact the bleeding cascade, though PPIs affect clopidogrel activation.", "Correct! Routine combination of GP IIb/IIIa inhibitors with thrombolytics (fibrinolytics) is contraindicated in most cases due to a markedly increased bleeding risk."]
    },
    {
      type: "mcq",
      q: "A patient in the ED with ACS is given morphine for chest pain and oral clopidogrel. The nurse knows that morphine will:",
      o: ["Increase the risk of anaphylaxis.", "Enhance the absorption of clopidogrel.", "Delay the absorption of the oral P2Y12 inhibitor.", "Cause a rapid drop in platelet count."],
      c: 2,
      r: ["Incorrect. Morphine does not cause anaphylaxis in this context.", "Incorrect. It delays, rather than enhances, absorption.", "Correct! Opioids like morphine slow gastric emptying, which delays the absorption and onset of oral P2Y12 inhibitors like clopidogrel in ACS settings.", "Incorrect. GP IIb/IIIa inhibitors drop platelet counts, not morphine."]
    },
    {
      type: "mcq",
      q: "The nurse is reviewing the stages of hemostasis. Which physiological event occurs first following blood vessel injury?",
      o: ["Constriction of the blood vessel.", "Formation of a temporary platelet plug.", "Activation of the coagulation cascade.", "Formation of a fibrin plug."],
      c: 0,
      r: ["Correct! The first stage of the hemostasis mechanism is the constriction of the blood vessel, followed by plug formation and the cascade.", "Incorrect. Platelet plugs (stage 2), cascade activation (stage 3), and fibrin clot formation (stage 4) all occur sequentially after initial vasoconstriction.", "Incorrect. Platelet plugs (stage 2), cascade activation (stage 3), and fibrin clot formation (stage 4) all occur sequentially after initial vasoconstriction.", "Incorrect. Platelet plugs (stage 2), cascade activation (stage 3), and fibrin clot formation (stage 4) all occur sequentially after initial vasoconstriction."]
    },
    {
      type: "mcq",
      q: "Which clotting factor marks the start of the \"common pathway\" where the intrinsic and extrinsic pathways meet?",
      o: ["Factor XII.", "Factor VIII.", "Factor X.", "Factor I."],
      c: 2,
      r: ["Incorrect. Factor XII activates the intrinsic pathway upon contact with collagen.", "Incorrect. Factor VIII is an essential cofactor for the intrinsic pathway only.", "Correct! Factor X (Stuart-Prower Factor) marks the beginning of the common pathway where the intrinsic and extrinsic coagulation cascades converge.", "Incorrect. Factor I (Fibrinogen) is the precursor to the final fibrin mesh."]
    },
    {
      type: "mcq",
      q: "A patient taking dipyridamole complains of a new-onset headache and dizziness. The nurse identifies these symptoms are most likely due to:",
      o: ["Severe bleeding.", "Thrombocytopenia.", "Bronchoconstriction.", "Vasodilatory properties."],
      c: 3,
      r: ["Incorrect. Headache/dizziness from this drug is hemodynamic, not due to bleeding or low platelets.- Why C is wrong: Bronchoconstriction (asthma) is linked to aspirin.", "Incorrect. Headache/dizziness from this drug is hemodynamic, not due to bleeding or low platelets.- Why C is wrong: Bronchoconstriction (asthma) is linked to aspirin.", "Incorrect. Bronchoconstriction (asthma) is linked to aspirin.", "Correct! Dipyridamole has vasodilatory properties, which commonly cause adverse cardiovascular effects such as headache, dizziness, hypotension, and tachycardia."]
    },
    {
      type: "mcq",
      q: "A patient taking daily low-dose aspirin asks if they can take ibuprofen for joint pain. The nurse's best response is based on the knowledge that ibuprofen:",
      o: ["May reduce aspirin's cardioprotective effects.", "Prevents the absorption of aspirin in the gut.", "Reverses the bleeding risk of aspirin.", "Increases the activation of the P2Y12 receptor."],
      c: 0,
      r: ["Correct! Taking other NSAIDs like ibuprofen concurrently with aspirin can competitively block COX-1, which may reduce aspirin's cardioprotective effects and cause additive GI toxicity.", "Incorrect. It competes at the receptor site, it does not prevent gut absorption.", "Incorrect. NSAIDs actually increase, not reverse, additive bleeding risks.", "Incorrect. NSAIDs do not affect P2Y12 receptors."]
    },
    {
      type: "mcq",
      q: "Ticlopidine is prescribed for a patient. The nurse notes this medication is specifically approved for secondary prevention of strokes in patients who are:",
      o: ["Undergoing a PCI.", "Intolerant to aspirin.", "Older than 75 years.", "Experiencing heart failure."],
      c: 1,
      r: ["Incorrect. Clopidogrel or prasugrel is standard for PCI, not ticlopidine.", "Correct! Ticlopidine is specifically approved for the secondary prevention of thrombotic strokes in patients who are intolerant to aspirin.", "Incorrect. Age > 75 is a warning for prasugrel, not an indication for ticlopidine.", "Incorrect. It is not indicated for heart failure."]
    },
    {
      type: "mcq",
      q: "During a review of the coagulation cascade, the nurse notes that which ion is required for nearly all steps of the cascade?",
      o: ["Potassium.", "Sodium.", "Calcium.", "Magnesium."],
      c: 2,
      r: ["Incorrect. Potassium, sodium, and magnesium are essential electrolytes but are not the primary designated clotting factor (Factor IV) in the cascade.", "Incorrect. Potassium, sodium, and magnesium are essential electrolytes but are not the primary designated clotting factor (Factor IV) in the cascade.", "Correct! Calcium ions (Factor IV) are required for nearly all steps of the clotting cascade to properly function.", "Incorrect. Potassium, sodium, and magnesium are essential electrolytes but are not the primary designated clotting factor (Factor IV) in the cascade."]
    },
    {
      type: "mcq",
      q: "The nurse knows that glycoprotein IIb/IIIa inhibitors act as potent antiplatelet agents by blocking the receptor for:",
      o: ["Thromboxane A2.", "Adenosine diphosphate.", "Cyclic AMP.", "Fibrinogen and von Willebrand factor."],
      c: 3,
      r: ["Incorrect. Thromboxane A2 is blocked by aspirin.", "Incorrect. ADP receptors are blocked by P2Y12 inhibitors (clopidogrel).", "Incorrect. cAMP degradation is blocked by dipyridamole.", "Correct! GP IIb/IIIa is a platelet-surface integrin that serves as a receptor for fibrinogen and von Willebrand factor, anchoring platelets together."]
    },
    {
      type: "mcq",
      q: "A patient taking ticagrelor presents with a hot, swollen, and painful big toe. The nurse suspects which drug-specific adverse effect?",
      o: ["Hemarthrosis from severe bleeding.", "Hyperuricemia leading to a gout flare.", "A deep vein thrombosis.", "Anaphylactic joint effusion."],
      c: 1,
      r: ["Incorrect. While bleeding occurs, classic joint presentation (hot/swollen big toe) points to gout, a known ticagrelor specific side effect.", "Correct! Ticagrelor uniquely causes hyperuricemia, which can precipitate acute gout flares in susceptible patients.", "Incorrect. Ticagrelor _prevents_ clots, so DVT is unlikely.", "Incorrect. Ticagrelor does not cause anaphylactic joint effusion."]
    },
    {
      type: "mcq",
      q: "A patient on an abciximab infusion has a lab report showing a platelet count of 45,000/\u03bcL. The nurse anticipates which potential condition or action?",
      o: ["Acute profound thrombocytopenia or pseudothrombocytopenia.", "Expected therapeutic reduction in platelets.", "Immediate administration of a thrombolytic.", "Switching to eptifibatide immediately."],
      c: 0,
      r: ["Correct! Abciximab carries the highest risk among its class for acute profound thrombocytopenia (<50,000/\u03bcL) and pseudothrombocytopenia, requiring immediate medical evaluation.", "Incorrect. A platelet drop this low is an adverse effect, not a therapeutic goal.", "Incorrect. Thrombolytics are contraindicated as they markedly increase bleeding.", "Incorrect. You do not switch to another drug in the exact same class when this adverse effect occurs."]
    },
    {
      type: "mcq",
      q: "A patient with a history of ticlopidine use develops fever, hemolysis, and low platelets. The nurse recognizes these as signs of:",
      o: ["Aspirin-induced asthma.", "Heart failure exacerbation.", "Thrombotic thrombocytopenic purpura (TTP).", "Anaphylaxis."],
      c: 2,
      r: ["Incorrect. Aspirin causes asthma, not ticlopidine.", "Incorrect. Heart failure is a risk with cilostazol.", "Correct! TTP is a rare, serious historical adverse effect associated with ticlopidine and clopidogrel, characterized by fever, thrombocytopenia, and hemolysis.", "Incorrect. Fever and hemolysis indicate TTP, not immediate anaphylaxis."]
    },
    {
      type: "mcq",
      q: "Clopidogrel is often combined with aspirin because this combination is superior to aspirin alone for:",
      o: ["Preventing vasodilation.", "Decreasing heart rate in ACS.", "Reversing bleeding from heparin.", "Preventing recurrent ischemia in unstable angina."],
      c: 3,
      r: ["Incorrect. Neither drug targets vasodilation prevention or heart rate reduction.- Why C is wrong: This combination increases bleeding risk; it does not reverse heparin.", "Incorrect. Neither drug targets vasodilation prevention or heart rate reduction.- Why C is wrong: This combination increases bleeding risk; it does not reverse heparin.", "Incorrect. This combination increases bleeding risk; it does not reverse heparin.", "Correct! The combination of clopidogrel plus aspirin is therapeutically superior to aspirin alone for the prevention of recurrent ischemia in patients with unstable angina."]
    },
    {
      type: "mcq",
      q: "The final step of the coagulation cascade involves the formation of the clot \"mesh.\" Which factor is the direct precursor to fibrin?",
      o: ["Fibrinogen (Factor I).", "Prothrombin (Factor II).", "Tissue Factor (Factor III).", "Hageman Factor (Factor XII)."],
      c: 0,
      r: ["Correct! Fibrinogen (Factor I) is the direct precursor that converts into fibrin, creating the \"mesh\" of a clot.", "Incorrect. Prothrombin converts to thrombin, which then acts on fibrinogen.", "Incorrect. Tissue Factor triggers the extrinsic pathway.", "Incorrect. Hageman Factor activates the intrinsic pathway."]
    },
    {
      type: "mcq",
      q: "A patient with a prosthetic heart valve is prescribed dipyridamole in combination with another drug to inhibit thrombus formation. The nurse expects which drug to be co-administered?",
      o: ["Clopidogrel.", "Warfarin.", "Abciximab.", "Cilostazol."],
      c: 1,
      r: ["Incorrect. The standard protocol specifically identifies warfarin for prosthetic valves alongside dipyridamole; combining it with other potent antiplatelets lacks this specific indication.", "Correct! Dipyridamole is usually administered in combination with warfarin specifically to inhibit thrombus formation on prosthetic heart valves.", "Incorrect. The standard protocol specifically identifies warfarin for prosthetic valves alongside dipyridamole; combining it with other potent antiplatelets lacks this specific indication.", "Incorrect. The standard protocol specifically identifies warfarin for prosthetic valves alongside dipyridamole; combining it with other potent antiplatelets lacks this specific indication."]
    },
    {
      type: "mcq",
      q: "Which clotting factor is responsible for cross-linking fibrin strands to make the clot firm and permanent?",
      o: ["Factor VIII.", "Factor X.", "Factor XIII.", "Factor VII."],
      c: 2,
      r: ["Incorrect. Factor VIII is a cofactor for the intrinsic pathway.", "Incorrect. Factor X is the start of the common pathway.", "Correct! Factor XIII (Fibrin-Stabilizing Factor) is responsible for cross-linking fibrin strands, making the clot firm and permanent.", "Incorrect. Factor VII initiates the extrinsic pathway with Factor III."]
    },
    {
      type: "mcq",
      q: "A patient is diagnosed with repeated, spontaneous blood clots without injury. The nurse explains this condition is known as:",
      o: ["Hypocoagulability.", "TTP.", "Pseudothrombocytopenia.", "Thrombophilia."],
      c: 3,
      r: ["Incorrect. Hypocoagulability means bleeding or bruising too easily.", "Incorrect. TTP involves microthrombi but is an adverse drug reaction/disease, not the general term for hypercoagulability.", "Incorrect. Pseudothrombocytopenia is a false lab reading of low platelets.", "Correct! Thrombophilia is a condition characterized by hypercoagulability where thrombosis (spontaneous blood clots) happens repeatedly."]
    },
    {
      type: "mcq",
      q: "A patient taking daily aspirin reports a new onset of black, tarry stools. The nurse understands this is a manifestation of:",
      o: ["Rare hepatotoxicity.", "Gastrointestinal toxicity and bleeding.", "Red-orange discoloration of body fluids.", "Expected elimination of inactive metabolites."],
      c: 1,
      r: ["Incorrect. Hepatotoxicity would present with jaundice or elevated LFTs, not melena.", "Correct! Black, tarry stools (melena) are a classic clinical sign of gastrointestinal bleeding, which is a known adverse effect of aspirin's GI toxicity.", "Incorrect. Red-orange discoloration occurs with other agents (like rifampin), not aspirin.", "Incorrect. GI bleeding is never an expected elimination process."]
    }
  ],


  // ============================================================
  // SECTION 7 — SATA DRILLS
  // ============================================================
  "practiceSata": [
    {
      type: "sata",
      q: "Aspirin Pharmacodynamics and Adverse Effects Which of the following statements accurately describe the drug properties and side effects of low-dose aspirin? (Select all that apply)",
      o: ["Antagonizes P2Y12 receptors to prevent platelet activation.", "Acts by covalently acetylating a serine residue near the COX enzyme's active site.", "Can cause rare hepatotoxicity as a systemic side effect.", "Causes localized vasoconstriction upon administration.", "May induce asthma or nasal polyps in susceptible patients."],
      c: [1, 2, 4],
      r: ["\u2717 Incorrect. Option A is incorrect; aspirin inhibits COX-1, while drugs like clopidogrel and ticagrelor are P2Y12 antagonists.", "\u2713 Correct. Option B is correct because low-dose aspirin irreversibly inhibits the synthesis of cyclic endoperoxides by covalently acetylating a serine residue near the COX enzyme.", "\u2713 Correct. Option C is correct as rare hepatotoxicity is a documented systemic adverse effect.", "\u2717 Incorrect. Option D is incorrect because Thromboxane A2 (TxA2) is the potent inducer that causes localized vasoconstriction; aspirin prevents its formation, effectively inhibiting this vasoconstriction.", "\u2713 Correct. Option E is correct because respiratory and allergic reactions to aspirin include aspirin-induced asthma and nasal polyps."]
    },
    {
      type: "sata",
      q: "P2Y12 Inhibitors Interactions and Nursing Considerations A nurse is reviewing the medication list for a patient prescribed a P2Y12 inhibitor. Which of the following considerations are accurate regarding this class of drugs? (Select all that apply)",
      o: ["Omeprazole can reduce the activation and efficacy of clopidogrel.", "Ticagrelor is an irreversible inhibitor of the P2Y12 receptor.", "Prasugrel carries an elevated fatal bleeding risk in patients with low body weight.", "Ticlopidine use necessitates monitoring for a high risk of drug-induced dyspnea.", "Morphine can delay the absorption of oral P2Y12 inhibitors due to slowed gastric emptying."],
      c: [0, 2, 4],
      r: ["\u2713 Correct. Option A is correct because strong CYP2C19 inhibitors like omeprazole reduce clopidogrel activation, decreasing its efficacy.", "\u2717 Incorrect. Option B is incorrect because ticagrelor is unique among its class as an orally active, _reversible_ inhibitor of P2Y12, whereas clopidogrel and prasugrel are irreversible.", "\u2713 Correct. Option C is correct because fatal bleeding risk is elevated with prasugrel in specific populations, including those with low body weight, age \u226575, or a history of stroke/TIA.", "\u2717 Incorrect. Option D is incorrect because dyspnea is specifically a side effect associated with ticagrelor (occurring in ~15-20% of patients), not ticlopidine.", "\u2713 Correct. Option E is correct as opioids like morphine slow gastric emptying, which delays the absorption and onset of oral P2Y12 inhibitors in acute coronary syndrome."]
    },
    {
      type: "sata",
      q: "Glycoprotein IIb/IIIa Inhibitor Interventions A patient is receiving an infusion of a Glycoprotein (GP) IIb/IIIa inhibitor (e.g., abciximab) during a percutaneous coronary intervention. Which nursing interventions and observations are appropriate? (Select all that apply)",
      o: ["Monitor platelet counts within 2-4 hours of drug administration and daily thereafter.", "Be prepared to stop the infusion and manage anaphylaxis if administering abciximab.", "Administer routinely in combination with fibrinolytics (thrombolytics) for maximum efficacy.", "Monitor for hypotension and bradycardia as potential infusion-related reactions.", "Monitor for signs of pseudo-thrombocytopenia."],
      c: [0, 1, 3, 4],
      r: ["\u2713 Correct. Option A is critical because acute profound thrombocytopenia is a severe risk, requiring platelet monitoring within 2-4 hours of administration. Option B is correct because abciximab is a chimeric ant", "\u2713 Correct. Option B is correct because abciximab is a chimeric antibody that can cause rare, severe allergic reactions including anaphylaxis.", "\u2717 Incorrect. Option C is dangerously incorrect; using GP IIb/IIIa inhibitors routinely with thrombolytics is contraindicated as it markedly increases bleeding risk.", "\u2713 Correct. Option D is correct as hypotension, bradycardia, and nausea are known infusion-related adverse effects.", "\u2713 Correct. Option E is correct because pseudo-thrombocytopenia is a possible adverse effect of this drug class."]
    },
    {
      type: "sata",
      q: "Phosphodiesterase Inhibitor Properties When evaluating the pharmacology of phosphodiesterase inhibitors like dipyridamole and cilostazol, which properties and adverse effects must the nurse recognize? (Select all that apply)",
      o: ["Cilostazol carries a black box warning for heart failure exacerbation.", "Dipyridamole increases the availability of intracellular calcium necessary for aggregation.", "CYP3A4 inhibitors like ketoconazole decrease cilostazol levels, risking subtherapeutic dosing.", "Dipyridamole is commonly administered in combination with warfarin to inhibit thrombus formation on prosthetic heart valves.", "Headache, tachycardia, and hypotension are common side effects due to the drugs' vasodilatory properties."],
      c: [0, 3, 4],
      r: ["\u2713 Correct. Option A is correct because cilostazol has inotropic effects and is contraindicated in severe heart failure, carrying a black box warning.", "\u2717 Incorrect. Option B is incorrect because dipyridamole inhibits cAMP degradation, which actually _decreases_ (not increases) the availability of intracellular calcium necessary for platelet aggregation.", "\u2717 Incorrect. Option C is incorrect because CYP3A4 inhibitors _increase_ cilostazol levels, leading to toxicity, not subtherapeutic levels.", "\u2713 Correct. Option D is an accurate clinical use; dipyridamole paired with warfarin inhibits thrombus formation on prosthetic heart valves.", "\u2713 Correct. Option E reflects the correct adverse effects; up to 30-50% of patients experience headache, palpitations, or hypotension due to vasodilation."]
    },
    {
      type: "sata",
      q: "Ticagrelor Adverse Effect Profile Ticagrelor has several unique adverse effects compared to other antiplatelet agents. Which of the following should a nurse educate a patient to monitor for? (Select all that apply)",
      o: ["Acute, profound thrombocytopenia requiring immediate platelet transfusions.", "Dyspnea that is typically non-allergic and resolves with continued use.", "Bradycardia or AV block.", "Hyperuricemia or gout flares.", "Heart failure exacerbation due to strong inotropic effects."],
      c: [1, 2, 3],
      r: ["\u2717 Incorrect. Option A belongs to GP IIb/IIIa inhibitors (like abciximab), which cause profound acute thrombocytopenia.", "\u2713 Correct. Options B, C, and D are all correct specific side effects of ticagrelor. It can cause non-allergic dyspnea (in ~15-20% of patients), bradycardia/AV block, and hyperuricemia leading to gout flares.", "\u2713 Correct. Options B, C, and D are all correct specific side effects of ticagrelor. It can cause non-allergic dyspnea (in ~15-20% of patients), bradycardia/AV block, and hyperuricemia leading to gout flares.", "\u2713 Correct. Options B, C, and D are all correct specific side effects of ticagrelor. It can cause non-allergic dyspnea (in ~15-20% of patients), bradycardia/AV block, and hyperuricemia leading to gout flares.", "\u2717 Incorrect. Option E belongs to cilostazol, a phosphodiesterase inhibitor with a black box warning for heart failure."]
    },
    {
      type: "sata",
      q: "General Antiplatelet Drug-Drug Interactions A patient is prescribed multiple medications for cardiovascular disease. Which of the following drug-drug interactions involving antiplatelet agents are correct? (Select all that apply)",
      o: ["Ibuprofen may reduce the cardioprotective effects of low-dose aspirin.", "Co-administration of PDE5 inhibitors with dipyridamole increases the risk of systemic hypertension.", "Concurrent use of SSRIs with GP IIb/IIIa inhibitors decreases the patient's overall bleeding risk.", "Alcohol consumption enhances the risk of gastrointestinal bleeding when taking aspirin.", "Strong CYP inducers like rifampin can reduce the efficacy of cilostazol."],
      c: [0, 3, 4],
      r: ["\u2713 Correct. Option A is correct; other NSAIDs like ibuprofen have an additive GI toxicity effect and can competitively reduce aspirin's cardioprotective effects.", "\u2717 Incorrect. Option B is incorrect because combining PDE5 inhibitors (e.g., sildenafil) with dipyridamole causes additive vasodilation, leading to _hypotension_, not hypertension.", "\u2717 Incorrect. Option C is incorrect; SSRIs actually _increase_ the bleeding risk when used with GP IIb/IIIa inhibitors and should be avoided if possible.", "\u2713 Correct. Option A is correct; other NSAIDs like ibuprofen have an additive GI toxicity effect and can competitively reduce aspirin's cardioprotective effects. Option D is true, as alcohol enhances the GI bleed", "\u2713 Correct. Option E is correct because CYP inducers like rifampin reduce the efficacy of cilostazol."]
    },
    {
      type: "sata",
      q: "Mechanisms of Action Across Classes Match the mechanism of action principles to their correct drug class by identifying the accurate statements below. (Select all that apply)",
      o: ["Abciximab inhibits the ADP-dependent pathway of platelet activation.", "Dipyridamole inhibits platelet phosphodiesterase, thereby inhibiting cAMP degradation.", "Clopidogrel covalently modifies and inactivates the platelet P2Y12 receptor.", "Low-dose aspirin acts by acetylating a serine residue near the active site of the COX enzyme.", "Prasugrel prevents platelet aggregation by acting as a dimeric glycoprotein on the platelet surface."],
      c: [1, 2, 3],
      r: ["\u2717 Incorrect. Option A is incorrect because abciximab is a GP IIb/IIIa inhibitor (blocking fibrinogen binding), not an ADP-pathway inhibitor.", "\u2713 Correct. Option B accurately describes dipyridamole's mechanism of preventing cAMP degradation.", "\u2713 Correct. Option C is correct because clopidogrel irreversibly (covalently) inhibits the P2Y12 (ADP) receptor.", "\u2713 Correct. Option D accurately states aspirin's irreversible covalent acetylation of COX.", "\u2717 Incorrect. Option E is incorrect because prasugrel is a thienopyridine prodrug (P2Y12 antagonist), not a glycoprotein."]
    },
    {
      type: "sata",
      q: "Clinical Indications for Specific Antiplatelets Based on their specific therapeutic uses, which of the following statements are correct? (Select all that apply)",
      o: ["Ticlopidine is approved for secondary prevention of thrombotic strokes in patients who are intolerant to aspirin.", "Dipyridamole is generally utilized as a highly effective monotherapy for reducing thrombosis.", "Eptifibatide is primarily used in patients undergoing primary percutaneous coronary intervention for acute STEMI.", "Prasugrel should be strictly avoided in patients with acute coronary syndrome managed with percutaneous coronary intervention.", "The combination of clopidogrel plus aspirin is superior to aspirin alone for preventing recurrent ischemia in unstable angina."],
      c: [0, 2, 4],
      r: ["\u2713 Correct. Option A is correct; ticlopidine's specific indications include secondary stroke prevention in aspirin-intolerant patients.", "\u2717 Incorrect. Option B is incorrect because dipyridamole is usually administered in combination with warfarin or aspirin, rather than as monotherapy.", "\u2713 Correct. Option C correctly identifies that Eptifibatide is mainly indicated for primary PCI during ST-segment elevation myocardial infarction (STEMI).", "\u2717 Incorrect. Option D is incorrect because prasugrel is explicitly indicated to _reduce_ the rate of thrombotic events in ACS patients managed with PCI, not avoided.", "\u2713 Correct. Option A is correct; ticlopidine's specific indications include secondary stroke prevention in aspirin-intolerant patients. Option C correctly identifies that Eptifibatide is mainly indicated for prim"]
    },
    {
      type: "sata",
      q: "Physiology of Hemostasis and Clotting Cascade Understanding the baseline physiology of hemostasis is essential for pharmacology. Which statements regarding the hemostasis cascade and its pathology are correct? (Select all that apply)",
      o: ["Factor X serves as the direct trigger for the intrinsic pathway upon contact with collagen.", "Factor I, known as Fibrinogen, is the direct precursor to the \"mesh\" of a clot.", "Calcium Ions (Factor IV) are required for nearly all steps of the clotting cascade.", "Thrombophilia is a hypercoagulable state characterized by repeated blood clot formations.", "The very first stage of the hemostasis mechanism is the formation of a temporary platelet plug."],
      c: [1, 2, 3],
      r: ["\u2717 Incorrect. Option A is incorrect; Factor X is the start of the \"common pathway,\" while Factor XII activates the intrinsic pathway upon contact with collagen.", "\u2713 Correct. Option B is correct; Fibrinogen (Factor I) converts into fibrin to form the clot mesh.", "\u2713 Correct. Option C is correct; Factor IV (Calcium) is mandatory for almost all cascade steps.", "\u2713 Correct. Option D is correct; repeated spontaneous thrombosis characterizes thrombophilia.", "\u2717 Incorrect. Option E is incorrect; the very first stage is constriction of the blood vessel, followed _subsequently_ by the temporary platelet plug."]
    },
    {
      type: "sata",
      q: "Adverse Effects of Thienopyridines and Reversible P2Y12 Antagonists Which of the following clinical concerns accurately describe the adverse effect profiles of P2Y12 receptor antagonists? (Select all that apply)",
      o: ["Clopidogrel frequently causes severe leukopenia, requiring daily blood draws.", "Thienopyridine prodrugs (like prasugrel and clopidogrel) act as reversible inhibitors.", "Prasugrel carries an elevated risk of fatal bleeding, specifically prompting avoidance in patients 75 years or older.", "Ticlopidine and clopidogrel carry a historical risk of Thrombotic Thrombocytopenic Purpura (TTP).", "Minor bleeding, such as epistaxis and bruising, is an expected potential side effect across all P2Y12 inhibitors."],
      c: [2, 3, 4],
      r: ["\u2717 Incorrect. Option A is incorrect; clopidogrel is notably less toxic than earlier drugs, and leukopenia occurs only rarely.", "\u2717 Incorrect. Option B is incorrect; thienopyridines (clopidogrel, prasugrel, ticlopidine) are _irreversible_ inhibitors, while ticagrelor is the reversible one.", "\u2713 Correct. Option C is correct; prasugrel has an elevated fatal bleeding risk, leading to avoidance in patients \u2265 75 years old.", "\u2713 Correct. Option D is correct; TTP is a serious, historical adverse effect monitored with ticlopidine and clopidogrel.", "\u2713 Correct. Option E is correct because minor bleeds (epistaxis, bruising) are universal risks for antiplatelet drugs targeting P2Y12."]
    }
  ],


  // ============================================================
  // SECTION 8 — HARD PRACTICE
  // ============================================================
  "practiceHard": [
    {
      type: "mcq",
      q: "A 72-year-old woman is started on clopidogrel after a coronary stent placement. She also takes omeprazole for GERD. Six months later, she is re-hospitalized with in-stent thrombosis. What is the most likely pharmacological explanation?",
      o: ["Omeprazole induces P-glycoprotein, increasing clopidogrel elimination.", "Clopidogrel irreversibly inhibits omeprazole's metabolism.", "Omeprazole is a strong CYP2C19 inhibitor that reduces clopidogrel activation to its active metabolite.", "Omeprazole increases platelet aggregation through gastric acid reduction."],
      c: 2,
      r: ["Incorrect. P-glycoprotein is not the relevant pathway; CYP2C19 is.", "Incorrect. This is backwards \u2014 omeprazole inhibits clopidogrel's activation, not the reverse.", "Correct! Clopidogrel is a prodrug requiring hepatic CYP2C19 for conversion to its active thiol metabolite. Omeprazole is a strong CYP2C19 inhibitor, reducing this activation significantly \u2014 leaving the patient with inadequate P2Y12 receptor inhibition.", "Incorrect. Gastric acid has no direct relationship to platelet aggregation."]
    },
    {
      type: "mcq",
      q: "A patient with ACS on ticagrelor reports shortness of breath 3 days after starting the drug. Oxygen saturation is 98%, chest X-ray is clear, and ECG is unchanged. What is the most appropriate next step?",
      o: ["Start supplemental oxygen and admit for monitoring.", "Order a CT pulmonary angiogram to rule out pulmonary embolism.", "Discontinue ticagrelor immediately and switch to prasugrel.", "Reassure the patient \u2014 this is a known, non-allergic, non-pulmonary side effect of ticagrelor that is often transient."],
      c: 3,
      r: ["Incorrect. Supplemental oxygen does not address the mechanism, which is not hypoxia-related.", "Incorrect. CTA-PE is unnecessary when clinical picture points to a known drug side effect with normal oxygenation.", "Incorrect. Discontinuation is not the first-line response to mild expected ticagrelor-related dyspnea.", "Correct! Ticagrelor causes dyspnea in approximately 15\u201320% of patients \u2014 possibly related to adenosine accumulation (ticagrelor blocks adenosine reuptake). It is typically transient, mild, and resolves with continued use. Normal O2 sat and clear CXR confirm no true respiratory pathology."]
    },
    {
      type: "mcq",
      q: "A 45-year-old patient with a mechanical heart valve is prescribed dipyridamole + warfarin. Which BEST explains dipyridamole's mechanism of antiplatelet action?",
      o: ["Dipyridamole directly inhibits thrombin formation in the intrinsic pathway.", "Dipyridamole blocks ADP receptors (P2Y12), preventing fibrinogen binding.", "Dipyridamole irreversibly acetylates COX-1, providing longer-lasting platelet inhibition than aspirin.", "Dipyridamole inhibits platelet phosphodiesterase, increasing intracellular cAMP and reducing platelet activation, with additional vasodilatory effects."],
      c: 3,
      r: ["Incorrect. Dipyridamole has no direct effect on thrombin or intrinsic pathway factors.", "Incorrect. P2Y12 blockade describes clopidogrel/ticagrelor, not dipyridamole.", "Incorrect. This describes aspirin's mechanism \u2014 irreversible COX-1 acetylation.", "Correct! Dipyridamole inhibits platelet phosphodiesterase, preventing cAMP breakdown. Higher cAMP activates protein kinase A, which reduces intracellular Ca\u00b2\u207a availability \u2014 inhibiting platelet activation. It also blocks adenosine reuptake, potentiating vasodilation."]
    },
    {
      type: "mcq",
      q: "A 66-year-old patient on prasugrel post-PCI for ACS falls and experiences intracranial bleeding. Which prior history would have been a contraindication to using prasugrel in the first place?",
      o: ["Chronic kidney disease stage 3", "Type 2 diabetes mellitus", "Prior ischemic stroke or TIA", "Hypertension controlled on amlodipine"],
      c: 2,
      r: ["Incorrect. Stage 3 CKD requires caution but is not a listed absolute contraindication.", "Incorrect. Diabetes is not a contraindication; prasugrel may actually be preferred in diabetic ACS patients.", "Correct! Prasugrel carries a black box warning and is contraindicated in patients with prior stroke or TIA due to significantly elevated intracranial hemorrhage risk. Its potent, rapid, irreversible P2Y12 inhibition makes cerebrovascular bleeding catastrophic.", "Incorrect. Controlled hypertension alone is not a contraindication to prasugrel."]
    },
    {
      type: "mcq",
      q: "An emergency physician orders morphine for a STEMI patient also being initiated on oral ticagrelor. A pharmacology student flags this combination. What is the correct pharmacological concern?",
      o: ["Morphine delays gastric emptying, reducing absorption of oral ticagrelor and delaying its onset.", "Morphine activates COX-2, reversing ticagrelor's antiplatelet mechanism.", "The combination causes serotonin syndrome through shared receptor pathways.", "Morphine causes thrombocytopenia, counteracting ticagrelor's effect."],
      c: 0,
      r: ["Correct! Morphine delays gastric emptying via mu-opioid receptor activation, reducing the rate of oral P2Y12 inhibitor absorption \u2014 clinically dangerous in acute ACS. IV cangrelor may be preferred in this scenario.", "Incorrect. COX-2 activation is not part of ticagrelor's mechanism; morphine does not significantly activate COX-2.", "Incorrect. There is no serotonin syndrome risk with this combination.", "Incorrect. Morphine does not cause thrombocytopenia or directly affect ticagrelor's receptor mechanism."]
    },
    {
      type: "mcq",
      q: "A patient receiving abciximab post-PCI develops a platelet count of 18,000/\u03bcL four hours after infusion begins (prior count: 230,000/\u03bcL). What is the best next step?",
      o: ["Stop the abciximab infusion, rule out pseudothrombocytopenia, and consider platelet transfusion if truly low.", "Switch immediately to eptifibatide to avoid cross-reactivity.", "Administer fresh frozen plasma to replenish clotting factors.", "Administer platelet transfusion and continue abciximab."],
      c: 0,
      r: ["Correct! Abciximab has the highest risk of thrombocytopenia (~1\u20135%). First, rule out pseudothrombocytopenia (EDTA-induced platelet clumping). Once confirmed true thrombocytopenia, stop the infusion. Platelet transfusion may be needed but is less effective since abciximab binds to transfused platelets.", "Incorrect. There is no evidence eptifibatide prevents recurrence; switching does not address the acute emergency.", "Incorrect. FFP replaces clotting factors, not platelets \u2014 it does not treat thrombocytopenia.", "Incorrect. Continuing abciximab with severe thrombocytopenia risks fatal bleeding."]
    },
    {
      type: "mcq",
      q: "A 62-year-old is prescribed ticlopidine for secondary stroke prevention. After 3 weeks, labs show WBC 2,100/\u03bcL and platelets 68,000/\u03bcL. He has fever and jaundice. What is the most likely diagnosis?",
      o: ["Drug-induced lupus from ticlopidine", "Thrombotic thrombocytopenic purpura (TTP) associated with ticlopidine", "Aspirin-induced thrombocytopenia", "Heparin-induced thrombocytopenia (HIT)"],
      c: 1,
      r: ["Incorrect. Drug-induced lupus does not present with this hematological picture.", "Correct! Ticlopidine is historically linked to TTP \u2014 characterized by thrombocytopenia, microangiopathic hemolytic anemia, fever, renal dysfunction, and neurological changes. The combination of fever, thrombocytopenia, leukopenia, and jaundice (hemolysis) strongly suggests TTP. This is why ticlopidine has largely been replaced by clopidogrel.", "Incorrect. Aspirin does not cause thrombocytopenia, and this patient is not on aspirin.", "Incorrect. HIT requires prior heparin exposure; this patient is on ticlopidine."]
    },
    {
      type: "mcq",
      q: "A patient with NSTE-ACS is initiated on tirofiban in the cardiac ICU. Which statement BEST describes tirofiban's mechanism of action?",
      o: ["It acetylates COX-1 in platelets, blocking TXA2 synthesis.", "It irreversibly inhibits P2Y12 receptors, blocking ADP-mediated platelet aggregation.", "It inhibits phosphodiesterase, increasing cAMP and blocking platelet Ca\u00b2\u207a release.", "It blocks GP IIb/IIIa receptors, preventing fibrinogen and vWF from cross-linking activated platelets."],
      c: 3,
      r: ["Incorrect. COX-1 acetylation describes aspirin.", "Incorrect. P2Y12 inhibition describes clopidogrel, prasugrel, and ticagrelor.", "Incorrect. Phosphodiesterase inhibition describes dipyridamole.", "Correct! Tirofiban is a GP IIb/IIIa receptor antagonist. GP IIb/IIIa is a platelet surface integrin that, upon platelet activation, undergoes conformational change and binds fibrinogen and vWF \u2014 cross-linking platelets and mediating aggregation. Tirofiban blocks this final common pathway."]
    },
    {
      type: "mcq",
      q: "A patient received abciximab post-PCI with normal INR and PTT. Four hours later, the catheter site bleeds excessively. What is the MOST appropriate intervention?",
      o: ["Administer protamine sulfate to reverse abciximab.", "Administer vitamin K to reverse the anticoagulant effect.", "Start tranexamic acid and increase the heparin drip.", "Stop abciximab infusion, apply mechanical compression, and transfuse platelets if severely low."],
      c: 3,
      r: ["Incorrect. Protamine sulfate reverses heparin (UFH), not GP IIb/IIIa inhibitors.", "Incorrect. Vitamin K reverses vitamin K-dependent anticoagulants \u2014 irrelevant to abciximab.", "Incorrect. Increasing heparin would worsen bleeding; tranexamic acid is not first-line here.", "Correct! Primary management of abciximab-related bleeding is stopping the infusion plus mechanical compression. Platelet transfusion is indicated if severely needed, though partially less effective since abciximab binds transfused platelets. Protamine reverses heparin, not abciximab. Vitamin K reverses warfarin \u2014 irrelevant here."]
    },
    {
      type: "mcq",
      q: "A nurse is preparing aspirin (81 mg) for a patient also receiving warfarin for atrial fibrillation. The patient asks: 'Why am I getting two blood thinners?' What is the most accurate nursing response?",
      o: ["Aspirin inhibits platelet aggregation while warfarin reduces clotting factor synthesis \u2014 they target different stages of clot formation.", "Aspirin increases warfarin's efficacy by competing for the same receptor.", "Aspirin is only given to reduce the gastric side effects of warfarin.", "Aspirin is an anticoagulant that works synergistically with warfarin on clotting factors."],
      c: 0,
      r: ["Correct! Aspirin inhibits platelet plug formation (primary hemostasis) by blocking TXA2-mediated aggregation. Warfarin inhibits secondary hemostasis by reducing vitamin K-dependent clotting factor synthesis (II, VII, IX, X). These complementary mechanisms target different stages of thrombus formation.", "Incorrect. Aspirin and warfarin work through completely different mechanisms and do not share a receptor.", "Incorrect. Aspirin actually WORSENS GI side effects of warfarin.", "Incorrect. Aspirin is an antiplatelet agent, NOT an anticoagulant \u2014 it does not act on clotting factors."]
    },
    {
      type: "mcq",
      q: "Clopidogrel, prasugrel, and ticagrelor all target P2Y12. Which accurately distinguishes ticagrelor from the thienopyridines?",
      o: ["Ticagrelor is an orally active, reversible P2Y12 inhibitor that does not require hepatic conversion.", "Ticagrelor causes irreversible platelet inhibition, making its offset slower than prasugrel.", "Ticagrelor requires hepatic activation to a prodrug before acting on P2Y12 receptors.", "Ticagrelor uniquely inhibits COX-2 in addition to P2Y12 receptors."],
      c: 0,
      r: ["Correct! Unlike the thienopyridines (clopidogrel, prasugrel), which are prodrugs requiring CYP2C19 activation, ticagrelor is directly active and reversibly binds P2Y12. Platelet function recovers faster after stopping ticagrelor \u2014 clinically important for perioperative management.", "Incorrect. Ticagrelor produces REVERSIBLE inhibition; thienopyridines are irreversible.", "Incorrect. This describes the thienopyridines \u2014 ticagrelor is NOT a prodrug.", "Incorrect. Ticagrelor has no COX-2 inhibitory activity."]
    },
    {
      type: "mcq",
      q: "A patient on dipyridamole + warfarin (therapeutic INR) for a prosthetic heart valve develops a subarachnoid hemorrhage. Which adverse effect profile of dipyridamole is most relevant?",
      o: ["Dipyridamole causes direct cerebral vasoconstriction, leading to hemorrhagic conversion.", "Dipyridamole directly damages vascular endothelium, causing hemorrhagic stroke.", "Dipyridamole's vasodilatory properties and additive bleeding risk with warfarin contribute to hemorrhagic complications.", "Dipyridamole inhibits platelet COX-2, amplifying aspirin toxicity."],
      c: 2,
      r: ["Incorrect. Dipyridamole causes VASodilation, not vasoconstriction.", "Incorrect. There is no evidence dipyridamole directly damages vascular endothelium.", "Correct! Dipyridamole has vasodilatory properties (via adenosine potentiation and phosphodiesterase inhibition) and additive bleeding risk when combined with warfarin \u2014 raising hemorrhagic risk particularly in the cerebral vasculature. Headache is a known cardiovascular side effect.", "Incorrect. Dipyridamole does not inhibit COX-2; it is not combined with aspirin in this scenario."]
    },
    {
      type: "mcq",
      q: "A 70-year-old is admitted for unstable angina and started on eptifibatide. Which BEST distinguishes eptifibatide's primary clinical use from tirofiban?",
      o: ["Both agents are perfectly interchangeable for all ACS indications.", "Eptifibatide is mainly used for primary PCI in STEMI, while tirofiban is used for NSTE-ACS.", "Tirofiban is the preferred agent for mechanical heart valve thrombosis.", "Eptifibatide is used for NSTE-ACS only and is contraindicated in PCI."],
      c: 1,
      r: ["Incorrect. While similar in class, they are not perfectly interchangeable \u2014 indications differ based on trial evidence.", "Correct! Eptifibatide is mainly used in patients undergoing primary PCI for STEMI (also used in unstable angina). Tirofiban is primarily used for NSTE-ACS management. These distinctions reflect clinical trial evidence and approved indications.", "Incorrect. GP IIb/IIIa inhibitors are not used for mechanical valve thrombosis; anticoagulants \u00b1 thrombolytics are used.", "Incorrect. Eptifibatide IS used in PCI \u2014 this option incorrectly restricts its indication."]
    },
    {
      type: "mcq",
      q: "A patient on ticagrelor for ACS is brought to the OR for emergency CABG. The surgeon wants to delay surgery by 5 days. Which property of ticagrelor justifies this?",
      o: ["Ticagrelor's reversible P2Y12 binding means platelet function gradually recovers within 3\u20135 days of stopping.", "Ticagrelor's effect cannot be monitored, so surgery timing is based on weight alone.", "Ticagrelor's irreversible binding means platelet function will not recover even after stopping the drug.", "Ticagrelor must be stopped 14 days before surgery to allow new platelet synthesis."],
      c: 0,
      r: ["Correct! Because ticagrelor reversibly inhibits P2Y12, platelet function begins to recover after drug clearance \u2014 typically within 3\u20135 days. Guidelines recommend stopping ticagrelor 5 days before elective CABG to minimize surgical bleeding risk. Irreversible inhibitors (clopidogrel, prasugrel) require even longer windows.", "Incorrect. Validated platelet function tests (e.g., VerifyNow) can assess P2Y12 inhibition levels.", "Incorrect. Irreversible binding describes clopidogrel and prasugrel \u2014 NOT ticagrelor.", "Incorrect. 14 days is far too long; platelet recovery for ticagrelor is 3\u20135 days."]
    },
    {
      type: "mcq",
      q: "A patient asks why low-dose aspirin (81 mg) is used for heart protection but not high-dose aspirin. What is the best pharmacological explanation?",
      o: ["Low-dose aspirin only inhibits inactive TXB2, while high doses target PGI2.", "Low-dose aspirin selectively inhibits platelet COX-1 only; higher doses also inhibit endothelial COX-2, reducing PGI2 (prostacyclin) \u2014 which counteracts the antiplatelet benefit.", "High-dose aspirin reverses its own antiplatelet effect by stimulating COX-1 regeneration.", "Low-dose aspirin has greater bioavailability than high-dose aspirin due to first-pass metabolism."],
      c: 1,
      r: ["Incorrect. TXB2 is the inactive breakdown product; aspirin blocks TXA2 synthesis, not TXB2.", "Correct! At low doses, aspirin irreversibly inhibits COX-1 in platelets (which cannot regenerate it since they lack nuclei), blocking TXA2 synthesis. At higher doses, aspirin also inhibits endothelial COX-2, reducing prostacyclin (PGI2) \u2014 a natural inhibitor of platelet aggregation \u2014 partially counteracting the antiplatelet benefit.", "Incorrect. COX-1 regeneration cannot be stimulated by aspirin \u2014 aspirin irreversibly blocks it.", "Incorrect. Bioavailability differences exist but do not explain the dose-dependent mechanism difference."]
    },
    {
      type: "mcq",
      q: "A 78-year-old with a history of TIA is included in an ACS protocol with prasugrel. A pharmacist flags the order. Which THREE factors in this patient represent contraindications or major warnings for prasugrel?",
      o: ["Renal failure, liver failure, and anemia", "Hypertension, hyperlipidemia, and smoking history", "Age \u226575, low body weight (<60 kg), and prior stroke/TIA", "Diabetes mellitus, atrial fibrillation, and obesity"],
      c: 2,
      r: ["Incorrect. Severe hepatic impairment warrants caution, but these are not the labeled black box contraindications.", "Incorrect. Hypertension, hyperlipidemia, and smoking are cardiovascular risk factors, NOT prasugrel contraindications.", "Correct! Prasugrel has specific black box warnings: prior stroke/TIA (contraindicated due to net harm from intracranial hemorrhage), age \u226575 (generally not recommended), and low body weight <60 kg (increased bleeding). This patient has at least one absolute contraindication \u2014 prior TIA.", "Incorrect. Diabetes is NOT a contraindication \u2014 prasugrel may be preferred in diabetic ACS patients."]
    },
    {
      type: "mcq",
      q: "A patient on clopidogrel presents with fever, elevated creatinine, confusion, and a peripheral smear showing schistocytes. What is the most likely diagnosis, and which antiplatelet drug class is most commonly implicated?",
      o: ["Hemolytic uremic syndrome (HUS); GP IIb/IIIa inhibitors", "Disseminated intravascular coagulation (DIC); thienopyridines", "Thrombotic thrombocytopenic purpura (TTP); thienopyridines (especially ticlopidine, rarely clopidogrel)", "Immune thrombocytopenic purpura (ITP); phosphodiesterase inhibitors"],
      c: 2,
      r: ["Incorrect. HUS primarily causes renal failure with hemolysis but typically lacks the neurological component and multi-system TTP picture.", "Incorrect. DIC presents with widespread clotting AND bleeding \u2014 the schistocytes and drug history point to TTP.", "Correct! The TTP pentad: fever, thrombocytopenia, microangiopathic hemolytic anemia (schistocytes), renal dysfunction, and neurological changes. Ticlopidine has the highest TTP risk among antiplatelet drugs \u2014 a major reason it was replaced by clopidogrel. This is a life-threatening emergency requiring plasmapheresis.", "Incorrect. ITP causes isolated thrombocytopenia without hemolysis or schistocytes."]
    },
    {
      type: "mcq",
      q: "Which antiplatelet agent works by BOTH blocking reuptake of adenosine AND inhibiting phosphodiesterase to increase platelet cAMP?",
      o: ["Abciximab", "Dipyridamole", "Aspirin", "Cangrelor"],
      c: 1,
      r: ["Incorrect. Abciximab is a monoclonal antibody targeting GP IIb/IIIa \u2014 no interaction with adenosine or phosphodiesterase.", "Correct! Dipyridamole has a dual mechanism: it blocks adenosine reuptake (increasing extracellular adenosine \u2192 stimulates adenylate cyclase via A2 receptors \u2192 raises cAMP) AND inhibits phosphodiesterase (preventing cAMP degradation). Higher cAMP \u2192 protein kinase A activation \u2192 decreased intracellular Ca\u00b2\u207a \u2192 platelet inhibition.", "Incorrect. Aspirin inhibits COX-1 to block TXA2 synthesis \u2014 completely unrelated to adenosine or cAMP.", "Incorrect. Cangrelor is an IV reversible P2Y12 receptor antagonist \u2014 not related to adenosine reuptake or phosphodiesterase."]
    },
    {
      type: "mcq",
      q: "A post-PCI patient received abciximab, heparin, and aspirin. Labs now show platelets 22,000/\u03bcL (from 190,000/\u03bcL pre-procedure). What is MOST accurate about next steps?",
      o: ["Start fresh frozen plasma immediately \u2014 platelet count will normalize within 6 hours.", "Administer protamine to reverse all antiplatelet and anticoagulant effects.", "Stop heparin and aspirin; continue abciximab since thrombocytopenia is unrelated to GP IIb/IIIa inhibitors.", "Stop abciximab infusion, rule out pseudothrombocytopenia, evaluate for HIT if heparin-related, and consider platelet transfusion if critically low."],
      c: 3,
      r: ["Incorrect. FFP contains clotting factors, not platelets. It will not correct thrombocytopenia.", "Incorrect. Protamine reverses UFH, not abciximab. Using it as a universal reversal agent is incorrect.", "Incorrect. Continuing abciximab with platelets of 22,000 is dangerous \u2014 abciximab is the most likely cause.", "Correct! Abciximab is the most likely cause of acute profound thrombocytopenia here. Steps: stop abciximab, rule out pseudothrombocytopenia, assess for HIT from heparin (4T score), and transfuse platelets if critical. Protamine only reverses UFH \u2014 not abciximab. FFP replaces clotting factors, not platelets."]
    },
    {
      type: "mcq",
      q: "A 55-year-old man with atrial fibrillation and recent MI is on warfarin and aspirin. His physician wants to add clopidogrel for 'triple therapy.' The patient's CHA\u2082DS\u2082-VASc score is 4. Before prescribing, the pharmacist warns about the most dangerous consequence of this combination. What is it?",
      o: ["Warfarin inhibits clopidogrel's hepatic activation, making the triple therapy ineffective.", "Triple therapy causes serotonin syndrome through shared platelet receptor pathways.", "Clopidogrel will completely neutralize warfarin by competing for plasma protein binding sites.", "Increased risk of major bleeding, especially gastrointestinal hemorrhage, due to additive antiplatelet and anticoagulant effects."],
      c: 3,
      r: ["Incorrect. Warfarin acts on vitamin K-dependent clotting factor synthesis (liver), not CYP2C19 \u2014 the enzyme responsible for clopidogrel activation.", "Incorrect. Serotonin syndrome involves specific serotonergic drug combinations (e.g., SSRIs, MAOIs) \u2014 not antiplatelet or anticoagulant agents.", "Incorrect. Clopidogrel does not compete with warfarin for protein binding sites in a clinically significant way; the interaction is pharmacodynamic, not pharmacokinetic at this level.", "Correct! Triple therapy (warfarin + aspirin + clopidogrel) dramatically increases bleeding risk \u2014 particularly major GI hemorrhage. All three agents attack different stages of hemostasis, creating cumulative impairment. This is a recognized clinical dilemma in AF + ACS patients, and guidelines recommend minimizing the duration of triple therapy with concurrent gastroprotection (PPI)."]
    },
    {
      type: "mcq",
      q: "A 48-year-old woman undergoes elective PCI for stable angina and receives cangrelor IV intraoperatively. The cardiologist plans to transition her to oral clopidogrel immediately post-procedure. What is the critical timing consideration?",
      o: ["Clopidogrel should be given 30 minutes before cangrelor is stopped, so activation overlaps.", "Cangrelor should be stopped first, then clopidogrel loading dose given after a 1-hour washout.", "Clopidogrel should be administered at the time of cangrelor discontinuation or immediately after, since cangrelor's short half-life allows rapid platelet recovery.", "Both agents can be given simultaneously with no timing concerns because they bind different receptor subtypes."],
      c: 2,
      r: ["Incorrect. Giving clopidogrel 30 minutes BEFORE stopping cangrelor is incorrect \u2014 cangrelor's receptor occupancy will block clopidogrel's metabolite from binding effectively.", "Incorrect. A 1-hour washout is unnecessary given cangrelor's extremely short half-life; delaying clopidogrel creates a gap in P2Y12 protection.", "Correct! Cangrelor has a very short half-life (~3\u20135 minutes) and reversibly inhibits P2Y12. When transitioning to an irreversible oral agent like clopidogrel, the loading dose should be given at the time of cangrelor discontinuation or immediately after \u2014 so new platelets become irreversibly inhibited as cangrelor clears. Giving clopidogrel before cangrelor is stopped is counterproductive because cangrelor occupies the P2Y12 receptor and blocks clopidogrel's active metabolite from binding.", "Incorrect. Both cangrelor and clopidogrel bind the SAME P2Y12 receptor \u2014 there is no separate receptor subtype."]
    },
    {
      type: "mcq",
      q: "A 63-year-old with peripheral artery disease is prescribed clopidogrel. She is found to be a CYP2C19 poor metabolizer. Her cardiologist considers switching her antiplatelet therapy. Which agent would be LEAST affected by her CYP2C19 genotype?",
      o: ["Ticlopidine", "Prasugrel", "Higher-dose clopidogrel", "Aspirin"],
      c: 1,
      r: ["Incorrect. Ticlopidine is also a thienopyridine prodrug requiring hepatic activation via pathways that overlap with CYP2C19 \u2014 it would similarly be affected in poor metabolizers.", "Correct! Prasugrel's activation pathway relies primarily on CYP3A4 and CYP2B6, with only minimal involvement of CYP2C19. In CYP2C19 poor metabolizers, prasugrel maintains near-normal antiplatelet efficacy \u2014 unlike clopidogrel (heavily CYP2C19-dependent) or ticlopidine (also a thienopyridine prodrug). Ticagrelor is also CYP2C19-independent, but the question asks specifically about the listed options.", "Incorrect. Higher-dose clopidogrel partially compensates in intermediate metabolizers but is largely ineffective in true poor metabolizers since the enzyme is absent.", "Incorrect. Aspirin is unaffected by CYP2C19 status (it acts directly), but it inhibits TXA2, not P2Y12 \u2014 it is not an appropriate replacement for P2Y12 inhibition in this context."]
    },
    {
      type: "mcq",
      q: "A 70-year-old man with heart failure (EF 30%) and a history of thrombotic stroke is being evaluated for antiplatelet therapy. His cardiologist suggests dipyridamole monotherapy. The pharmacist raises a specific safety concern. What is it?",
      o: ["Dipyridamole causes irreversible platelet inhibition, making any future surgery extremely high-risk.", "Dipyridamole is absolutely contraindicated in all patients with a prior stroke.", "Dipyridamole induces cytochrome P450 enzymes, dangerously lowering warfarin levels.", "Dipyridamole's vasodilatory effects may worsen hypotension, and cilostazol (a related PDE inhibitor) carries a black box warning for heart failure \u2014 relevant context for this patient class."],
      c: 3,
      r: ["Incorrect. Dipyridamole does not cause irreversible platelet inhibition. Its effects are reversible when the drug is discontinued.", "Incorrect. Dipyridamole is NOT absolutely contraindicated in prior stroke \u2014 it is actually used COMBINED with aspirin for secondary stroke prevention (Aggrenox).", "Incorrect. Dipyridamole is not a significant CYP450 inducer and does not affect warfarin metabolism in this way.", "Correct! Dipyridamole causes vasodilation and can induce hypotension \u2014 a concern in heart failure patients with already compromised cardiac output. While dipyridamole itself does not carry a heart failure black box warning, cilostazol (another phosphodiesterase inhibitor in the same class) does \u2014 it is contraindicated in heart failure due to positive inotropic effects that worsen outcomes. This is a related drug-class safety concern the pharmacist would flag."]
    },
    {
      type: "mcq",
      q: "A 59-year-old woman with a mechanical aortic valve on warfarin (INR 2.8) develops a transient ischemic attack (TIA). Her neurologist wants to add an antiplatelet agent. Which combination is most supported by evidence and guidelines for this specific indication?",
      o: ["Warfarin + aspirin (low dose)", "Warfarin + dipyridamole", "Warfarin + ticagrelor", "Warfarin + clopidogrel"],
      c: 0,
      r: ["Correct! For patients with mechanical heart valves on warfarin who experience thromboembolic events (like TIA), adding low-dose aspirin (75\u2013100 mg) is the guideline-supported strategy to reduce further thromboembolism, with acceptable bleeding risk. This combination targets both platelet aggregation (aspirin) and coagulation (warfarin).", "Incorrect. Dipyridamole + warfarin is used for prosthetic valve thromboprophylaxis in some guidelines, but adding it after a TIA event is less supported than adding low-dose aspirin.", "Incorrect. Warfarin + ticagrelor lacks established evidence for mechanical valve patients and substantially increases bleeding risk without proven benefit over aspirin in this setting.", "Incorrect. Warfarin + clopidogrel increases bleeding risk substantially and lacks the same evidence base as warfarin + aspirin for mechanical valve TIA."]
    },
    {
      type: "mcq",
      q: "A nurse is monitoring a patient who received eptifibatide for STEMI management. Two hours post-infusion, the patient's platelet count drops from 185,000 to 41,000/\u03bcL. What is the PRIORITY nursing action?",
      o: ["Administer IV corticosteroids immediately to treat immune-mediated thrombocytopenia.", "Notify the physician, stop the eptifibatide infusion, and monitor closely for bleeding; check for pseudothrombocytopenia.", "Increase the heparin infusion rate to prevent platelet consumption.", "Administer protamine sulfate to reverse the thrombocytopenia."],
      c: 1,
      r: ["Incorrect. Corticosteroids are used for immune thrombocytopenic purpura (ITP), not acute drug-induced GP IIb/IIIa thrombocytopenia.", "Correct! Acute profound thrombocytopenia following GP IIb/IIIa inhibitor administration (eptifibatide, abciximab, tirofiban) requires immediate cessation of the offending agent, physician notification, and close bleeding monitoring. Pseudothrombocytopenia (EDTA-induced platelet clumping) must be ruled out first with a citrate tube. If true, platelet transfusion may be needed.", "Incorrect. Increasing heparin is contraindicated here \u2014 it would exacerbate bleeding risk in a thrombocytopenic patient.", "Incorrect. Protamine sulfate reverses unfractionated heparin \u2014 it has no effect on eptifibatide-related thrombocytopenia."]
    },
    {
      type: "mcq",
      q: "A pharmacology student argues that since thromboxane A2 (TXA2) causes vasoconstriction AND platelet aggregation, blocking TXA2 synthesis with aspirin should prevent both effects. An attending physician challenges this. What is the nuanced counterpoint?",
      o: ["Aspirin blocks both TXA2 and prostacyclin (PGI2) equally at low doses, so vasoconstriction is unaffected.", "Aspirin blocks TXA2 synthesis in platelets but cannot block TXA2 receptor signaling, so vasoconstriction may persist via other TXA2 sources.", "Aspirin blocks COX-2 in endothelial cells, which actually increases TXA2 production through an alternative pathway.", "Aspirin only blocks TXA2 effects during the first 24 hours; afterward, platelet COX-1 regenerates."],
      c: 1,
      r: ["Incorrect. At low doses, aspirin preferentially inhibits platelet COX-1 \u2014 prostacyclin (from endothelial COX-2) is largely preserved. The effects are NOT equal at low doses.", "Correct! Aspirin blocks COX-1 in platelets, preventing TXA2 synthesis from platelet arachidonic acid. However, aspirin does not block TXA2 receptors \u2014 if other cells (e.g., macrophages, smooth muscle) produce TXA2 via COX-2, those signals can still cause vasoconstriction. Additionally, aspirin does not eliminate all sources of TXA2 synthesis.", "Incorrect. Aspirin does not increase TXA2 production through any alternative pathway; this is pharmacologically incorrect.", "Incorrect. Platelets are anucleate \u2014 they CANNOT regenerate COX-1. New platelet production (from megakaryocytes) provides new COX-1, but this takes 7\u201310 days."]
    },
    {
      type: "mcq",
      q: "A 52-year-old man with stable angina and no prior MI is being started on aspirin 81 mg. He has a documented allergy to aspirin causing bronchospasm and nasal polyps. What is this clinical triad called, and what is the correct management?",
      o: ["Stevens-Johnson syndrome; aspirin is contraindicated lifelong and no alternative antiplatelet is available.", "Kounis syndrome; administer epinephrine and continue aspirin with antihistamine premedication.", "Samter's triad (aspirin-exacerbated respiratory disease); avoid aspirin and all NSAIDs, consider clopidogrel for antiplatelet therapy.", "Churg-Strauss syndrome; switch to high-dose corticosteroids and discontinue all antiplatelets."],
      c: 2,
      r: ["Incorrect. This is not Stevens-Johnson syndrome (which is a severe mucocutaneous reaction). Alternative antiplatelets exist \u2014 clopidogrel is appropriate.", "Incorrect. Kounis syndrome is allergic coronary artery spasm \u2014 unrelated to the described triad. Aspirin should not be continued in true AERD.", "Correct! The triad of aspirin sensitivity + bronchospasm + nasal polyps is called Samter's triad (aspirin-exacerbated respiratory disease, AERD). NSAIDs that inhibit COX-1 can trigger bronchoconstriction by shifting arachidonic acid metabolism toward leukotriene production. Clopidogrel (P2Y12 inhibitor, no COX activity) is the appropriate antiplatelet alternative.", "Incorrect. This is not Churg-Strauss syndrome (eosinophilic granulomatosis with polyangiitis), which has systemic vasculitis features. The described presentation is classic AERD."]
    },
    {
      type: "mcq",
      q: "Von Willebrand factor (vWF) plays a critical role in platelet adhesion. Which antiplatelet drug class works DOWNSTREAM of vWF-mediated platelet activation to block the final step of platelet aggregation?",
      o: ["P2Y12 receptor antagonists (clopidogrel)", "Phosphodiesterase inhibitors (dipyridamole)", "Thromboxane synthesis inhibitors (aspirin)", "Glycoprotein IIb/IIIa receptor antagonists (abciximab)"],
      c: 3,
      r: ["Incorrect. Clopidogrel blocks ADP-mediated (P2Y12) signaling \u2014 one of several activation pathways, but not the final receptor-fibrinogen cross-linking step.", "Incorrect. Dipyridamole works by increasing cAMP (reducing Ca\u00b2\u207a availability), which modulates platelet excitability \u2014 not directly blocking the final receptor-fibrinogen interaction.", "Incorrect. Aspirin works upstream by blocking TXA2 synthesis, which is one signal for platelet activation \u2014 not the final aggregation step.", "Correct! After vWF mediates platelet adhesion via GP Ib, activated platelets express GP IIb/IIIa on their surface. Fibrinogen and vWF then bind GP IIb/IIIa to cross-link platelets \u2014 the final step of aggregation. GP IIb/IIIa antagonists (abciximab, eptifibatide, tirofiban) directly block this final common pathway, making them the most potent antiplatelet agents."]
    },
    {
      type: "mcq",
      q: "A 67-year-old with a recent NSTEMI is on ticagrelor. He is scheduled for a colonoscopy and the gastroenterologist recommends stopping ticagrelor 7 days prior. His cardiologist disagrees. What pharmacological fact best supports the cardiologist's concern about stopping ticagrelor?",
      o: ["Stopping ticagrelor causes rebound hypercoagulability worse than the original thrombotic state.", "Ticagrelor must be tapered gradually; abrupt discontinuation causes severe withdrawal hypertension.", "Ticagrelor's reversible P2Y12 binding means stopping the drug allows platelet function to recover \u2014 creating a window of increased thrombotic risk, especially in recently stented patients.", "Ticagrelor irreversibly binds platelets, so stopping the drug has no effect on platelet function for 10 days."],
      c: 2,
      r: ["Incorrect. There is no proven 'rebound hypercoagulability' mechanistically \u2014 the risk is simply return to the patient's baseline thrombotic state, which is high post-ACS.", "Incorrect. Ticagrelor does not cause hypertension and requires no tapering \u2014 this is pharmacologically incorrect.", "Correct! Since ticagrelor reversibly inhibits P2Y12, stopping the drug allows platelet function to recover progressively over 3\u20135 days. In patients with recent ACS or coronary stent (especially within the first year), this creates a period of unprotected thrombotic risk \u2014 including stent thrombosis. A 7-day stoppage window is too long in such high-risk patients. Decisions to stop should be individualized and ideally discussed between both specialists.", "Incorrect. Ticagrelor is REVERSIBLE \u2014 not irreversible. Irreversible inhibition describes clopidogrel and prasugrel (thienopyridines)."]
    },
    {
      type: "mcq",
      q: "A nurse educator is teaching a student about the clotting cascade. The student asks: 'Which clotting factor begins the common pathway where intrinsic and extrinsic pathways converge?' What is the correct answer?",
      o: ["Factor VIII (Antihemophilic Factor A)", "Factor X (Stuart-Prower Factor)", "Factor XII (Hageman Factor)", "Factor VII (Proconvertin)"],
      c: 1,
      r: ["Incorrect. Factor VIII is an essential cofactor in the intrinsic pathway, helping activate Factor X \u2014 but it is not the start of the common pathway itself.", "Correct! Factor X (Stuart-Prower Factor) is the point of convergence of the intrinsic and extrinsic pathways \u2014 the start of the common pathway. Once activated (Xa), it combines with Factor Va to form the prothrombinase complex, which converts prothrombin (Factor II) to thrombin, ultimately leading to fibrin clot formation.", "Incorrect. Factor XII (Hageman Factor) initiates the intrinsic pathway upon contact with collagen or glass \u2014 it is at the beginning of the cascade, not the common pathway.", "Incorrect. Factor VII works with Factor III (Tissue Factor) to initiate the extrinsic pathway \u2014 it activates Factor X but is not itself the start of the common pathway."]
    },
    {
      type: "mcq",
      q: "A 61-year-old man with known hyperuricemia and gout is started on ticagrelor post-ACS. Two weeks later he presents with a gout flare. The rheumatologist asks whether the ticagrelor could be contributing. What is the pharmacological basis?",
      o: ["Ticagrelor blocks renal urate transporters directly, reducing uric acid excretion.", "Ticagrelor inhibits xanthine oxidase, increasing uric acid production from purine catabolism.", "Ticagrelor induces COX-2, increasing prostaglandin-mediated uric acid retention.", "Ticagrelor raises adenosine levels, which may impair renal uric acid excretion \u2014 a known mechanism associated with ticagrelor-induced hyperuricemia."],
      c: 3,
      r: ["Incorrect. Ticagrelor does not directly block renal urate transporters (e.g., URAT1). Its effect on uric acid is indirect, via adenosine.", "Incorrect. Ticagrelor does not inhibit xanthine oxidase \u2014 that is the mechanism of allopurinol and febuxostat.", "Incorrect. Ticagrelor has no COX-2 induction activity. COX-2 inhibition is associated with some renal uric acid retention (e.g., with NSAIDs), but ticagrelor has no COX involvement.", "Correct! Ticagrelor blocks adenosine reuptake (by inhibiting the nucleoside transporter ENT1), raising plasma adenosine. Elevated adenosine can reduce renal uric acid secretion, contributing to hyperuricemia and gout flares. This is a recognized, unique side effect of ticagrelor (not shared by clopidogrel or prasugrel), making pre-existing gout a relevant clinical consideration."]
    },
    {
      type: "mcq",
      q: "A 74-year-old woman post-stent placement cannot tolerate oral P2Y12 inhibitors due to severe GI dysmotility. The interventional cardiologist orders cangrelor IV for bridge therapy. Which of the following BEST describes cangrelor's pharmacological advantages in this clinical context?",
      o: ["Cangrelor is a direct-acting, reversible IV P2Y12 inhibitor with a very short half-life (~3\u20135 min), allowing precise, titratable platelet inhibition.", "Cangrelor activates cAMP via phosphodiesterase inhibition, providing dual antiplatelet effect.", "Cangrelor irreversibly inhibits P2Y12, providing sustained protection even after the infusion ends.", "Cangrelor is a prodrug requiring hepatic conversion, making it faster-acting than clopidogrel."],
      c: 0,
      r: ["Correct! Cangrelor is a direct-acting (not a prodrug), reversible IV P2Y12 inhibitor with an extremely short half-life of 3\u20135 minutes. Platelet function recovers within 60 minutes after stopping the infusion. This makes it ideal for patients requiring precise, rapidly adjustable platelet inhibition \u2014 such as those unable to take oral medications, patients with GI dysmotility, or those in the perioperative period.", "Incorrect. Cangrelor does not inhibit phosphodiesterase or activate cAMP \u2014 that mechanism belongs to dipyridamole.", "Incorrect. Cangrelor's inhibition is REVERSIBLE, not irreversible. Its brevity of effect is one of its key clinical advantages.", "Incorrect. Cangrelor is NOT a prodrug \u2014 it is directly active (unlike clopidogrel, ticlopidine, prasugrel which require hepatic conversion)."]
    },
    {
      type: "mcq",
      q: "A 68-year-old man undergoes coronary artery bypass grafting (CABG). Pre-operatively, the team notes he is on aspirin 81 mg daily. The surgeon asks nursing to hold aspirin for how long before surgery if elective? What is the guideline-recommended timeframe and rationale?",
      o: ["Hold aspirin 24 hours before surgery; aspirin's half-life is 24 hours, so effects clear within one day.", "Hold aspirin 5\u20137 days before elective surgery, allowing adequate platelet turnover to replace irreversibly inhibited platelets.", "Hold aspirin 14 days before surgery; platelet synthesis takes 2 weeks to fully restore function.", "No need to hold aspirin for CABG; aspirin actually reduces perioperative graft thrombosis."],
      c: 1,
      r: ["Incorrect. Aspirin's plasma half-life is only about 15\u201320 minutes, but its antiplatelet effect is IRREVERSIBLE and lasts the platelet's lifetime (~7\u201310 days) \u2014 not 24 hours.", "Correct! Aspirin irreversibly inhibits COX-1 in platelets (which cannot synthesize new COX-1 because they lack nuclei). Platelet lifespan is 7\u201310 days; holding aspirin for 5\u20137 days allows sufficient new platelet production to restore hemostasis. For most elective surgeries, 5 days is the recommended stop window \u2014 shorter than that for clopidogrel (5 days) or ticagrelor (5 days), similar for aspirin.", "Incorrect. 14 days is excessive; adequate platelet turnover for restored hemostasis occurs by 5\u20137 days.", "Incorrect. While aspirin reduces graft occlusion post-CABG and is often continued, the question asks about elective surgery timing \u2014 surgical bleeding risk is the concern here."]
    },
    {
      type: "mcq",
      q: "A patient with thrombotic thrombocytopenic purpura (TTP) is admitted. A medical student asks why antiplatelet drugs like clopidogrel should NOT be used to treat TTP, even though platelets are clumping. What is the correct explanation?",
      o: ["TTP is caused by a deficiency of ADAMTS13, leading to accumulation of ultra-large vWF multimers \u2014 not by ADP receptor activation or TXA2 synthesis, so P2Y12 or COX inhibitors do not address the pathophysiology.", "Clopidogrel is actually a first-line treatment for TTP because it reduces ADP-mediated platelet clumping.", "Antiplatelet drugs are effective in TTP but cause drug-induced TTP as a paradoxical side effect.", "Antiplatelet drugs would worsen TTP by activating ADAMTS13, increasing vWF cleavage."],
      c: 0,
      r: ["Correct! TTP results from ADAMTS13 deficiency (often autoimmune), causing accumulation of ultra-large vWF multimers that spontaneously capture and aggregate platelets in the microcirculation. This is a mechanical/protein-mediated process \u2014 not mediated by ADP receptor activation (P2Y12) or TXA2 synthesis. Standard antiplatelet drugs are not the correct treatment; plasmapheresis (to replace ADAMTS13 and remove antibodies) is first-line.", "Incorrect. Clopidogrel is NOT first-line for TTP \u2014 this is dangerously incorrect and also ironic given clopidogrel/ticlopidine can cause TTP themselves.", "Incorrect. While ticlopidine and clopidogrel can cause drug-induced TTP (a serious adverse effect), antiplatelet drugs are NOT effective treatments for TTP.", "Incorrect. Antiplatelet drugs do not activate ADAMTS13. This is pharmacologically incorrect."]
    },
    {
      type: "mcq",
      q: "A 57-year-old man receives abciximab during PCI. The infusion is complete. He now requires urgent non-cardiac surgery 4 hours later due to an abdominal emergency. The surgeon asks: 'How do we reverse abciximab if needed?' What is the most accurate answer?",
      o: ["Protamine sulfate reverses abciximab within 15 minutes.", "Vitamin K administered IV will normalize platelet function within 6 hours.", "Platelet transfusion can help because abciximab dissociates from inhibited platelets and redistributes onto fresh transfused platelets \u2014 reducing the concentration on existing platelets.", "Abciximab has no reversal agent; surgery must be delayed 48\u201372 hours."],
      c: 2,
      r: ["Incorrect. Protamine sulfate reverses unfractionated heparin (by ionic binding to heparin) \u2014 it has zero effect on abciximab, which is a monoclonal antibody.", "Incorrect. Vitamin K supports synthesis of vitamin K-dependent clotting factors (II, VII, IX, X) \u2014 it has no effect on platelet function or GP IIb/IIIa receptor blockade.", "Correct! Abciximab is a chimeric monoclonal antibody Fab fragment that binds GP IIb/IIIa with very high affinity but in a finite number per platelet. When new platelets are transfused, abciximab redistributes across the larger platelet pool \u2014 diluting its concentration per platelet and partially restoring function. This is the clinical rationale for platelet transfusion when reversing abciximab in emergencies.", "Incorrect. While abciximab lacks a specific pharmacological reversal agent, platelet transfusion is a practical approach \u2014 surgery does not necessarily need to be delayed 48\u201372 hours."]
    },
    {
      type: "mcq",
      q: "A patient is taking sildenafil for erectile dysfunction and is also prescribed dipyridamole for thromboprophylaxis after prosthetic valve surgery. A nurse flags a potential drug interaction. What is the concern?",
      o: ["Sildenafil reverses dipyridamole's antiplatelet effect by activating TXA2 synthesis.", "Dipyridamole inhibits CYP3A4, increasing sildenafil levels and causing toxicity.", "Dipyridamole activates sildenafil's platelet receptor, causing paradoxical thrombosis.", "Sildenafil inhibits phosphodiesterase type 5 (PDE5); dipyridamole inhibits platelet PDE3. Both cause vasodilation, and the combination can cause additive, potentially severe hypotension."],
      c: 3,
      r: ["Incorrect. Sildenafil has no effect on TXA2 synthesis; this is not a recognized interaction mechanism.", "Incorrect. Dipyridamole does not significantly inhibit CYP3A4; its interaction with sildenafil is pharmacodynamic (additive vasodilation), not pharmacokinetic.", "Incorrect. Dipyridamole does not activate any platelet receptor that causes thrombosis \u2014 this is pharmacologically incorrect.", "Correct! Both dipyridamole (PDE3 inhibitor \u2192 raises cAMP \u2192 vasodilation) and sildenafil (PDE5 inhibitor \u2192 raises cGMP \u2192 vasodilation) cause systemic vasodilation. The combination produces additive vasodilation and can cause significant hypotension \u2014 a clinically important drug-drug interaction. This is why the PDE5 inhibitors are used cautiously alongside dipyridamole."]
    },
    {
      type: "mcq",
      q: "A 65-year-old man with stable coronary artery disease is prescribed low-dose aspirin. He asks: 'Does aspirin protect me from clotting in my veins too \u2014 like deep vein thrombosis?' What is the most accurate response?",
      o: ["No \u2014 aspirin primarily targets arterial thrombi (platelet-rich, white clots). Venous thrombi (fibrin-rich, red clots) require anticoagulants like warfarin or LMWH for effective prevention.", "Yes \u2014 aspirin is the preferred agent for DVT prophylaxis over enoxaparin in all hospitalized patients.", "No \u2014 aspirin only works in the coronary arteries and has no systemic antiplatelet effect.", "Yes \u2014 aspirin fully prevents DVT and PE because it inhibits all pathways of thrombus formation."],
      c: 0,
      r: ["Correct! Arterial thrombi form under high shear stress and are platelet-rich ('white clots') \u2014 where aspirin's antiplatelet effect is most relevant. Venous thrombi form under low-flow conditions and are primarily fibrin-rich ('red clots') driven by the coagulation cascade \u2014 where anticoagulants (heparin, warfarin, DOACs) are the appropriate agents. Aspirin has limited role in primary VTE prevention.", "Incorrect. Enoxaparin (LMWH) is preferred over aspirin for DVT prophylaxis in hospitalized patients at risk for VTE. Aspirin is not equivalent in this context.", "Incorrect. Aspirin has systemic antiplatelet effects throughout the vasculature \u2014 not limited to coronary arteries.", "Incorrect. Aspirin does not inhibit all clotting pathways \u2014 it specifically targets TXA2-mediated platelet aggregation. It has very limited efficacy against fibrin-rich venous clots."]
    },
    {
      type: "mcq",
      q: "A 44-year-old woman with antiphospholipid syndrome (APS) and recurrent arterial thrombosis is on warfarin. Her physician adds low-dose aspirin. She asks: 'My warfarin already prevents clotting \u2014 why do I need aspirin too?' Which explanation BEST addresses her question?",
      o: ["Aspirin increases warfarin's INR, so lower warfarin doses are needed.", "Warfarin only works on venous clots; aspirin is added to prevent arterial clots through a different mechanism entirely unrelated to coagulation.", "Aspirin targets platelet aggregation at the primary hemostasis level, while warfarin reduces coagulation factor synthesis. In APS, both platelet activation and coagulation are dysregulated, so dual therapy addresses different pathogenic mechanisms.", "Aspirin is redundant when INR is therapeutic; it is added only to treat headaches from warfarin."],
      c: 2,
      r: ["Incorrect. Aspirin does not significantly alter the INR. While some aspirin-warfarin interactions exist (GI bleeding, minor protein binding), aspirin does not raise INR enough to require warfarin dose reduction.", "Incorrect. While warfarin is more effective against venous clots, it also has anticoagulant effects in arterial beds. The distinction here is platelet vs coagulation factor pathways.", "Correct! In antiphospholipid syndrome, antiphospholipid antibodies promote both platelet activation (primary hemostasis) and activation of the coagulation cascade (secondary hemostasis). Warfarin addresses the coagulation component, while aspirin prevents platelet aggregation. Dual therapy targets both dysregulated pathways \u2014 the same logic as combination therapy in high-risk cardiovascular patients.", "Incorrect. Aspirin is not added for headache treatment and is not redundant at therapeutic INR in APS \u2014 it targets a different mechanism."]
    },
    {
      type: "mcq",
      q: "A nursing student is reviewing hemostasis. She asks: 'Which clotting factor is described as the Hageman Factor, and what triggers its activation?' What is the correct answer?",
      o: ["Factor XII; activated upon contact with negatively charged surfaces such as exposed collagen or glass, initiating the intrinsic coagulation pathway.", "Factor XI; activated by Factor XII in the presence of thrombin.", "Factor IX; activated by Factor VIIa-Tissue Factor complex in the extrinsic pathway.", "Factor XIII; activated by thrombin to cross-link fibrin strands and stabilize the clot."],
      c: 0,
      r: ["Correct! Factor XII (Hageman Factor) is activated upon contact with negatively charged surfaces \u2014 classically exposed subendothelial collagen after vessel injury, or glass in vitro. This contact activation initiates the intrinsic coagulation pathway, ultimately activating Factor XI \u2192 Factor IX \u2192 Factor X (common pathway). This is also called the contact activation or contact pathway.", "Incorrect. Factor XI is activated BY Factor XII \u2014 it is downstream in the intrinsic pathway, not the Hageman Factor itself.", "Incorrect. Factor IX is activated by the Factor VIIa-Tissue Factor complex in the extrinsic pathway \u2014 it is not the Hageman Factor, and its activation in the extrinsic pathway is a different pathway entry point.", "Incorrect. Factor XIII (Fibrin-Stabilizing Factor) is activated by thrombin and cross-links fibrin strands \u2014 but it is not the Hageman Factor."]
    }
  ]


};
