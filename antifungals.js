// ============================================================
//  ANTIFUNGALS — SECTIONS 1, 2 & 3
//  summaryHtml | refHtml | detailedNotesHtml
// ============================================================
// Paste this into your data.js file inside the full object.
// Sections 4–8 (flashcards, quizzes, NCLEX, SATA, Hard) coming next.
// ============================================================

window.PDF_TOPIC_DATA = window.PDF_TOPIC_DATA || {};

window.PDF_TOPIC_DATA["antifungals"] = {
  "title": "Antifungal Pharmacology",
  "desc": "Mechanisms, drug choices, adverse effects & pharmacokinetics",


  // ============================================================
  // SECTION 1 — SUMMARY HTML
  // ============================================================
  "summaryHtml": `

    <div class="glass-card">
      <h4>Why Antifungals Are Challenging</h4>
      <div class="row"><span class="lbl">Fungi are</span><span class="val"><span class="hl">Eukaryotes</span> — share fundamental biology with human cells, making selective toxicity difficult</span></div>
      <div class="row"><span class="lbl">Key exploit 1</span><span class="val">Fungi use <span class="hl">ergosterol</span> in cell membranes; humans use cholesterol</span></div>
      <div class="row"><span class="lbl">Key exploit 2</span><span class="val">Fungi have a <span class="hl">cell wall</span> (chitin + β-glucan); human cells have none</span></div>
      <div class="row"><span class="lbl">Key exploit 3</span><span class="val">Unique fungal enzymes: <span class="hl">CYP51</span>, squalene epoxidase, β-glucan synthase — absent in humans</span></div>
      <div class="row"><span class="lbl">Most antifungals are</span><span class="val"><span class="hl">Fungistatic</span> — stop growth; immune system clears infection. Immunocompromised patients are highest risk</span></div>
    </div>

    <div class="glass-card">
      <h4>Classification by Mechanism of Action</h4>
      <div class="row"><span class="lbl">Bind ergosterol → pores</span><span class="val"><span class="hl">Amphotericin B</span>, Nystatin, Hamycin — fungicidal; disrupt membrane integrity</span></div>
      <div class="row"><span class="lbl">Inhibit ergosterol synthesis (CYP51)</span><span class="val"><span class="hl">Azoles</span> — block 14α-demethylase → abnormal methylsterols accumulate → fungistatic</span></div>
      <div class="row"><span class="lbl">Inhibit squalene epoxidase</span><span class="val"><span class="hl">Terbinafine</span>, Naftifine, Butenafine — squalene accumulates (toxic) → fungicidal</span></div>
      <div class="row"><span class="lbl">Inhibit β-1,3-glucan synthase</span><span class="val"><span class="hl">Caspofungin</span> (Echinocandins) — disrupts cell wall → fungicidal</span></div>
      <div class="row"><span class="lbl">Inhibit nucleic acid synthesis</span><span class="val"><span class="hl">Flucytosine</span> — converted to 5-FU inside fungal cells → inhibits DNA/RNA synthesis</span></div>
      <div class="row"><span class="lbl">Disrupt mitotic spindle</span><span class="val"><span class="hl">Griseofulvin</span> — binds microtubules → arrests fungal mitosis → fungistatic</span></div>
    </div>

    <div class="glass-card">
      <h4>Classification by Structure</h4>
      <div class="row"><span class="lbl">Polyene Antibiotics</span><span class="val"><span class="hl">Amphotericin B</span>, Nystatin, Hamycin</span></div>
      <div class="row"><span class="lbl">Heterocyclic Benzofuran</span><span class="val"><span class="hl">Griseofulvin</span></span></div>
      <div class="row"><span class="lbl">Antimetabolite</span><span class="val"><span class="hl">Flucytosine</span></span></div>
      <div class="row"><span class="lbl">Azoles — Imidazoles (2 nitrogen)</span><span class="val"><span class="hl">Ketoconazole</span>, Clotrimazole, Miconazole, Oxiconazole — mostly topical</span></div>
      <div class="row"><span class="lbl">Azoles — Triazoles (3 nitrogen)</span><span class="val"><span class="hl">Fluconazole</span>, Itraconazole, Voriconazole — systemic use</span></div>
      <div class="row"><span class="lbl">Allylamines</span><span class="val"><span class="hl">Terbinafine</span>, Butenafine</span></div>
      <div class="row"><span class="lbl">Echinocandins</span><span class="val"><span class="hl">Caspofungin</span>, Anidulafungin, Micafungin</span></div>
      <div class="row"><span class="lbl">Other Topical Agents</span><span class="val">Tolnaftate, Undecylenic acid, Benzoic acid, Ciclopirox</span></div>
    </div>

    <div class="glass-card">
      <h4>Drug of Choice — Quick Reference</h4>
      <div class="row"><span class="lbl">Severe systemic (broadest spectrum)</span><span class="val"><span class="hl">Amphotericin B</span></span></div>
      <div class="row"><span class="lbl">Systemic candidiasis</span><span class="val"><span class="hl">Fluconazole</span> (oral or IV)</span></div>
      <div class="row"><span class="lbl">Cryptococcal meningitis</span><span class="val"><span class="hl">Fluconazole</span> — only azole crossing CSF with good concentration</span></div>
      <div class="row"><span class="lbl">Systemic blastomycosis</span><span class="val"><span class="hl">Itraconazole</span> (oral or IV)</span></div>
      <div class="row"><span class="lbl">Invasive aspergillosis</span><span class="val"><span class="hl">Voriconazole</span></span></div>
      <div class="row"><span class="lbl">Dermatophyte onychomycosis</span><span class="val"><span class="hl">Terbinafine</span> — shorter duration, better tolerated, more effective</span></div>
      <div class="row"><span class="lbl">Oral/vaginal candidiasis (topical)</span><span class="val"><span class="hl">Nystatin</span> / Clotrimazole / Miconazole</span></div>
      <div class="row"><span class="lbl">Esophageal candidiasis (failed Ampho B)</span><span class="val"><span class="hl">Caspofungin</span> (2nd line, IV)</span></div>
      <div class="row"><span class="lbl">Hair/nail dermatophytes (long-term oral)</span><span class="val"><span class="hl">Griseofulvin</span></span></div>
      <div class="row"><span class="lbl">Skin infections (tinea)</span><span class="val">Azoles topical or Terbinafine — 2–4 weeks</span></div>
      <div class="row"><span class="lbl">Hair infections</span><span class="val">Azoles or Griseofulvin — 6–8 weeks</span></div>
      <div class="row"><span class="lbl">Nail infections</span><span class="val">Azoles or Terbinafine — 3–6 months</span></div>
    </div>

    <div class="glass-card">
      <h4>Key Adverse Effects Summary</h4>
      <div class="row"><span class="lbl">Amphotericin B</span><span class="val"><span class="hl">Nephrotoxicity</span> (azotemia, ↓GFR, hypokalemia, acidosis), infusion reactions (chills, fever, dyspnea at 2–5 hrs), anemia, CNS toxicity if intrathecal</span></div>
      <div class="row"><span class="lbl">Azoles (all)</span><span class="val"><span class="hl">Hepatotoxicity</span>, ↑ serum transaminases, CYP450 inhibition → ↑ warfarin, cyclosporine, phenytoin, triazolam</span></div>
      <div class="row"><span class="lbl">Ketoconazole</span><span class="val"><span class="hl">Gynecomastia + impotence</span> (antiandrogenic — ↓ gonadal steroid synthesis)</span></div>
      <div class="row"><span class="lbl">Voriconazole</span><span class="val"><span class="hl">Transient visual disturbances</span> (V for Visual)</span></div>
      <div class="row"><span class="lbl">Flucytosine</span><span class="val"><span class="hl">Bone marrow depression</span> (at high doses), hair loss; rapid resistance when used alone</span></div>
      <div class="row"><span class="lbl">Griseofulvin</span><span class="val">Hepatotoxicity, hypersensitivity (skin rash), CNS effects: confusion, fatigue, vertigo</span></div>
      <div class="row"><span class="lbl">Terbinafine</span><span class="val"><span class="hl">Hepatotoxicity</span> — but better tolerated than itraconazole or griseofulvin; shorter therapy duration</span></div>
    </div>

    <div class="glass-card">
      <h4>Pharmacokinetics — High-Yield</h4>
      <div class="row"><span class="lbl">Amphotericin B</span><span class="val">Polar compound → <span class="hl">NOT oral</span>; given IV or intrathecal; cannot cross CSF; t½ = 15 days; 90% protein bound; dialysis INEFFECTIVE; liposomal form = less toxic</span></div>
      <div class="row"><span class="lbl">Fluconazole</span><span class="val"><span class="hl">Only azole with CSF penetration</span>; excreted unchanged in urine; least CYP450 inhibitor among azoles; requires renal dose adjustment</span></div>
      <div class="row"><span class="lbl">Other azoles</span><span class="val">Absorption affected by food and gastric HCl; cannot cross CSF</span></div>
      <div class="row"><span class="lbl">Griseofulvin</span><span class="val">Oral; irregular absorption; <span class="hl">enhanced by fatty food</span> and microfine particles; concentrates in keratinized tissue; t½ = 24 hrs</span></div>
      <div class="row"><span class="lbl">Flucytosine</span><span class="val">Good oral absorption; <span class="hl">penetrates CSF</span>; used with Amphotericin B for cryptococcal meningitis</span></div>
      <div class="row"><span class="lbl">Caspofungin</span><span class="val">Large cyclic peptide; <span class="hl">IV only</span>; cannot be given orally</span></div>
      <div class="row"><span class="lbl">Nystatin</span><span class="val"><span class="hl">Topical only</span> — too toxic for parenteral/systemic use</span></div>
    </div>

  `,


  // ============================================================
  // SECTION 2 — QUICK REFERENCE HTML
  // ============================================================
  "refHtml": `

    <div class="glass-card">
      <h4>High-Yield Exam Triggers & Memory Anchors</h4>
      <div class="trow"><b>Amphotericin B</b> → <span class="hl">"Ampho-TERRIBLE"</span> — kidney damage + infusion reactions; broadest spectrum; polar → no oral; dialysis useless; t½ = 15 days</div>
      <div class="trow"><b>Fluconazole</b> → <span class="hl">"Brain Azole"</span> — only azole crossing CSF → drug of choice for cryptococcal meningitis; least CYP450 inhibitor; renal dose adjustment needed</div>
      <div class="trow"><b>Voriconazole</b> → <span class="hl">"V = Vision"</span> — transient visual disturbances; drug of choice for invasive aspergillosis</div>
      <div class="trow"><b>Ketoconazole</b> → <span class="hl">"KETO KILLS androgens"</span> — gynecomastia + impotence (↓ gonadal steroid synthesis)</div>
      <div class="trow"><b>Caspofungin</b> → <span class="hl">"Cracks the WALL"</span> — only antifungal targeting cell wall (β-1,3-glucan synthase); IV only; human cells have no cell wall → highly selective</div>
      <div class="trow"><b>Griseofulvin</b> → <span class="hl">"Fat helps absorption"</span> — take with fatty meal; concentrates in keratin; treats hair and nail dermatophytes (long-term)</div>
      <div class="trow"><b>Terbinafine</b> → <span class="hl">"TERRibly effective for nails"</span> — drug of choice for onychomycosis; more effective + shorter course than griseofulvin</div>
      <div class="trow"><b>Flucytosine</b> → <span class="hl">"NEVER alone"</span> — always combine (rapid resistance); converted to 5-FU inside fungal cells; good CSF penetration; bone marrow depression</div>
      <div class="trow"><b>Nystatin</b> → <span class="hl">"Not for systemic"</span> — topical only; too toxic for IV; same mechanism as Amphotericin B (polyene)</div>
      <div class="trow"><b>Itraconazole</b> → <span class="hl">"ITRA = Blasto"</span> — drug of choice for systemic blastomycosis</div>
    </div>

    <div class="glass-card">
      <h4>Azole Nitrogen Count (Exam Favourite)</h4>
      <div class="trow"><b>Imidazoles (2 nitrogen)</b> → <span class="hl">Ketoconazole</span>, Clotrimazole, Miconazole, Oxiconazole — mostly TOPICAL use</div>
      <div class="trow"><b>Triazoles (3 nitrogen)</b> → <span class="hl">Fluconazole, Itraconazole, Voriconazole</span> — SYSTEMIC use</div>
      <div class="trow"><b>Memory trick:</b> ImIdazole = 2 I's → 2 nitrogens | TRIazole = TRI prefix → 3 nitrogens</div>
    </div>

    <div class="glass-card">
      <h4>Drug of Choice — Rapid Fire</h4>
      <div class="trow"><b>Cryptococcal meningitis</b> → <span class="hl">Fluconazole</span> (CSF penetration)</div>
      <div class="trow"><b>Invasive aspergillosis</b> → <span class="hl">Voriconazole</span></div>
      <div class="trow"><b>Systemic blastomycosis</b> → <span class="hl">Itraconazole</span></div>
      <div class="trow"><b>Dermatophyte onychomycosis</b> → <span class="hl">Terbinafine</span></div>
      <div class="trow"><b>Severe systemic / broadest spectrum</b> → <span class="hl">Amphotericin B</span></div>
      <div class="trow"><b>Cell wall target</b> → <span class="hl">Caspofungin</span></div>
      <div class="trow"><b>Topical candidiasis (oral/vaginal)</b> → <span class="hl">Nystatin / Clotrimazole / Miconazole</span></div>
      <div class="trow"><b>Esophageal candidiasis (failed Ampho B)</b> → <span class="hl">Caspofungin</span> (2nd line)</div>
      <div class="trow"><b>Hair and nail dermatophytes (long-term oral)</b> → <span class="hl">Griseofulvin</span></div>
    </div>

    <div class="glass-card">
      <h4>Adverse Effects — One Drug, One Fact</h4>
      <div class="trow"><b>Amphotericin B</b> → <span class="hl">Nephrotoxicity</span> (azotemia, ↓GFR, hypokalemia, acidosis) + infusion reactions (IL & TNF release, 2–5 hrs post-IV) + anemia</div>
      <div class="trow"><b>All Azoles</b> → <span class="hl">Hepatotoxicity</span> + CYP450 inhibition (↑ warfarin, cyclosporine, phenytoin, triazolam)</div>
      <div class="trow"><b>Ketoconazole</b> → <span class="hl">Gynecomastia + impotence</span> (antiandrogenic effects)</div>
      <div class="trow"><b>Voriconazole</b> → <span class="hl">Transient visual disturbances</span></div>
      <div class="trow"><b>Flucytosine</b> → <span class="hl">Bone marrow depression</span> at high doses + hair loss</div>
      <div class="trow"><b>Griseofulvin</b> → Hepatotoxicity + <span class="hl">skin rash</span> (hypersensitivity) + CNS: confusion, fatigue, vertigo</div>
      <div class="trow"><b>Terbinafine</b> → <span class="hl">Hepatotoxicity</span> (better tolerated than alternatives)</div>
    </div>

    <div class="glass-card">
      <h4>Must-Not-Forget Facts</h4>
      <div class="trow">✦ <b>Fluconazole</b> = ONLY azole that crosses CSF → DOC for cryptococcal meningitis</div>
      <div class="trow">✦ <b>Amphotericin B</b> cannot be given orally (polar, not absorbed from GIT) → IV or intrathecal only</div>
      <div class="trow">✦ <b>Dialysis is INEFFECTIVE</b> for Amphotericin B toxicity</div>
      <div class="trow">✦ <b>Nystatin</b> = topical ONLY — too toxic for parenteral or systemic use</div>
      <div class="trow">✦ <b>Flucytosine</b> = ALWAYS used in combination — rapid resistance when used alone</div>
      <div class="trow">✦ <b>Amphotericin B + Flucytosine</b> = synergistic (membrane disruption allows more drug entry)</div>
      <div class="trow">✦ Most antifungals are <b>fungistatic</b> — host immune response clears the organism</div>
      <div class="trow">✦ <b>Caspofungin</b> = targets cell WALL (β-glucan), not membrane — unique among all antifungals</div>
      <div class="trow">✦ <b>Liposomal Amphotericin B</b> = less nephrotoxic; lipid microspheres preferentially bind ergosterol</div>
      <div class="trow">✦ <b>Griseofulvin</b> absorption ↑ with fatty food and microfine particles</div>
      <div class="trow">✦ <b>Fluconazole</b> requires renal dose adjustment (excreted unchanged in urine)</div>
      <div class="trow">✦ Azoles + warfarin → <span class="hl">↑ INR, bleeding risk</span> | Azoles + cyclosporine → toxicity risk</div>
      <div class="trow">✦ <b>Amphotericin B</b> = broadest antifungal spectrum of all agents</div>
      <div class="trow">✦ <b>Terbinafine</b> = fungicidal; DOC for dermatophyte onychomycosis (shorter course, more effective)</div>
    </div>

    <div class="glass-card">
      <h4>Topical-Only Agents (Cannot Go Systemic)</h4>
      <div class="trow"><b>Nystatin</b> → too toxic for IV; treats oropharyngeal and vaginal candidiasis</div>
      <div class="trow"><b>Clotrimazole</b> → imidazole; topical candidiasis and tinea</div>
      <div class="trow"><b>Miconazole</b> → imidazole; topical candidiasis</div>
      <div class="trow"><b>Tolnaftate, Undecylenic acid, Benzoic acid, Ciclopirox</b> → other topical agents</div>
    </div>

    <div class="glass-card">
      <h4>Combination Therapy Rules</h4>
      <div class="trow"><b>Flucytosine</b> → NEVER alone (resistance develops rapidly) → always pair with <span class="hl">Amphotericin B</span></div>
      <div class="trow"><b>Why synergistic?</b> → Amphotericin B makes membrane leaky → more flucytosine enters fungal cell</div>
      <div class="trow"><b>Use case:</b> Amphotericin B + Flucytosine for <span class="hl">severe systemic infections</span> (e.g., cryptococcal meningitis)</div>
    </div>

  `,


  // ============================================================
  // SECTION 3 — DETAILED NOTES HTML
  // ============================================================
  "detailedNotesHtml": `

    <div class="glass-card">
      <h4>1. Big Picture Overview — Why Antifungals Are Unique</h4>
      <p>Fungi are <span class="hl">eukaryotes</span> — just like human cells. This makes them much harder to treat than bacteria, because most things that kill fungi could also harm the patient. The key to antifungal therapy is exploiting the differences between fungal and human cells.</p>
      <p style="margin-top:10px;">The three main differences antifungals exploit:</p>
      <p style="margin-top:6px;">① Fungi have <span class="hl">ergosterol</span> in their membranes — humans have cholesterol<br>
      ② Fungi have a <span class="hl">cell wall</span> made of chitin and β-glucan — humans have none<br>
      ③ Fungi have unique enzymes (<span class="hl">CYP51</span>, squalene epoxidase, β-glucan synthase) not found in human cells</p>
      <p style="margin-top:10px;">Clinical implication: Most antifungals are <span class="hl">fungistatic</span> — they stop growth but don't kill the organism outright. The immune system finishes the job. This is why <span class="hl">immunocompromised patients</span> (HIV, cancer, transplant) are at extreme risk — their immune system cannot clear the infection even with antifungal therapy.</p>
    </div>

    <div class="glass-card">
      <h4>2. Azoles — The Ergosterol Blockers</h4>
      <p><b>Mechanism:</b> Ergosterol is the essential sterol in the fungal cell membrane — the "glue" that holds it together. Azoles block <span class="hl">14α-demethylase (CYP51)</span>, the enzyme essential for making ergosterol. Without it, abnormal methylsterols accumulate on the fungal surface, arresting growth.</p>
      <p style="margin-top:8px;">Sequence: Azole → inhibits CYP51 → ergosterol synthesis blocked → abnormal methylsterols accumulate → <span class="hl">arrest of fungal growth</span></p>
      <p style="margin-top:8px;">Effect: Mostly <span class="hl">fungistatic</span>. At higher concentrations, can be fungicidal.</p>
      <p style="margin-top:10px;"><b>The CYP450 Drug Interaction Problem:</b> Azoles also inhibit <span class="hl">human hepatic CYP450</span> — the liver's drug-metabolizing enzyme. This slows breakdown of warfarin, cyclosporine, phenytoin, and triazolam, causing their levels to rise dangerously. Think of liver CYP450 as a garbage disposal for drugs. Azoles clog the disposal — other drugs accumulate to toxic levels.</p>
      <p style="margin-top:10px;"><b>Key differences between azoles:</b><br>
      • <span class="hl">Fluconazole</span>: CSF penetration ✓ (unique among all azoles); least CYP450 inhibition; excreted unchanged in urine; requires renal dose adjustment<br>
      • <span class="hl">Itraconazole</span>: Drug of choice for blastomycosis<br>
      • <span class="hl">Voriconazole</span>: Drug of choice for invasive aspergillosis; causes transient visual disturbances<br>
      • <span class="hl">Ketoconazole</span>: Antiandrogenic effects → gynecomastia and impotence (↓ gonadal steroid synthesis)</p>
      <p style="margin-top:10px;"><b>Azole Subclasses:</b><br>
      • <span class="hl">Imidazoles (2 nitrogen atoms)</span>: Ketoconazole, Clotrimazole, Miconazole — mostly topical<br>
      • <span class="hl">Triazoles (3 nitrogen atoms)</span>: Fluconazole, Itraconazole, Voriconazole — systemic use</p>
    </div>

    <div class="glass-card">
      <h4>3. Amphotericin B — The Pore Puncher</h4>
      <p><b>Mechanism:</b> Rather than blocking ergosterol production, Amphotericin B <span class="hl">physically binds to ergosterol</span> already present in the fungal membrane and punches pores through it. These pores allow cellular contents to leak out, destroying the cell. This is why it is often <span class="hl">fungicidal</span> — it directly destroys the membrane.</p>
      <p style="margin-top:8px;"><b>Why it is toxic:</b> Human membranes contain cholesterol, but Amphotericin B has some affinity for cholesterol too — particularly in <span class="hl">kidney cells</span>. This causes nephrotoxicity: azotemia, decreased GFR, hypokalemia, and acidosis.</p>
      <p style="margin-top:8px;"><b>The Liposomal Solution:</b> The drug is enclosed in <span class="hl">lipid microspheres (liposomes)</span> which preferentially bind ergosterol in fungal membranes with much lower affinity for mammalian membranes. This delivers the drug more selectively to fungi and greatly reduces kidney toxicity.</p>
      <p style="margin-top:10px;"><b>Key pharmacokinetic facts:</b><br>
      • Broadest spectrum of all antifungals<br>
      • Polar compound → <span class="hl">NOT absorbed from GIT</span> → must be given IV or intrathecally<br>
      • <span class="hl">Cannot cross CSF</span><br>
      • Half-life = <span class="hl">15 days</span><br>
      • 90% bound to plasma proteins<br>
      • <span class="hl">Dialysis is INEFFECTIVE</span> for managing its toxicity<br>
      • Infusion reactions (chills, fever, dyspnea) occur <span class="hl">2–5 hours</span> after IV administration due to IL and TNF release<br>
      • Minimal penetration into CNS, vitreous humor, amniotic fluid<br>
      • Some elimination via bile; part appears in urine over a long period</p>
    </div>

    <div class="glass-card">
      <h4>4. Flucytosine — The Trojan Horse</h4>
      <p><b>Mechanism:</b> Flucytosine is a <span class="hl">prodrug</span> — inactive until inside a fungal cell. The fungal enzyme <span class="hl">cytosine deaminase</span> converts flucytosine into <span class="hl">5-fluorouracil (5-FU)</span>, which inhibits nucleic acid synthesis and kills the cell.</p>
      <p style="margin-top:8px;"><b>Why it spares humans:</b> Human cells cannot convert significant amounts of flucytosine into 5-FU — this selectivity is what makes it useful. However, at very high doses, some conversion can occur in humans, explaining its dose-dependent toxicity (bone marrow depression, hair loss).</p>
      <p style="margin-top:8px;"><b>The resistance problem:</b> Fungi <span class="hl">rapidly develop resistance</span> to flucytosine when used alone. Therefore it is <span class="hl">ALWAYS used in combination</span> with another antifungal — most commonly Amphotericin B. The combination is synergistic: Amphotericin B makes the fungal membrane leaky, allowing more flucytosine to enter.</p>
      <p style="margin-top:8px;">Note: Flucytosine ≠ 5-FU. Flucytosine is the prodrug you administer. 5-FU is the <span class="hl">active metabolite</span> formed inside fungal cells.</p>
    </div>

    <div class="glass-card">
      <h4>5. Griseofulvin — The Spindle Wrecker</h4>
      <p><b>Mechanism:</b> Griseofulvin has a completely different mechanism from all other antifungals. It binds to <span class="hl">microtubules</span> inside the fungal cell. Microtubules form the mitotic spindle during cell division. When griseofulvin blocks them, the spindle cannot form, <span class="hl">mitosis is arrested</span>, and the fungus cannot replicate. Effect: Fungistatic.</p>
      <p style="margin-top:8px;"><b>Why it works for skin, hair, and nails:</b> After oral administration, griseofulvin <span class="hl">deposits in keratin-containing structures</span> — exactly where dermatophytes live. As new, griseofulvin-loaded keratin grows in, the infected old keratin grows out and is shed. This is why treatment takes so long: weeks for skin, months for nails.</p>
      <p style="margin-top:8px;"><b>Absorption:</b> Irregular, but significantly <span class="hl">enhanced by fatty food</span> and microfine particles. Always advise patient to take with a fatty meal.</p>
      <p style="margin-top:8px;"><b>Adverse effects:</b> Hepatotoxicity (monitor liver function), hypersensitivity reactions (skin rash), CNS effects: confusion, fatigue, vertigo. Half-life = 24 hours.</p>
    </div>

    <div class="glass-card">
      <h4>6. Terbinafine — The Squalene Trap</h4>
      <p><b>Mechanism:</b> Terbinafine inhibits <span class="hl">squalene epoxidase</span>, an enzyme earlier in the ergosterol synthesis pathway than the enzyme targeted by azoles. This causes <span class="hl">squalene to accumulate</span> inside the fungal cell at toxic concentrations, increasing membrane permeability and killing the cell. Effect: <span class="hl">Fungicidal</span>.</p>
      <p style="margin-top:8px;"><b>Why preferred for onychomycosis:</b> Terbinafine is better tolerated than both itraconazole and griseofulvin, requires a <span class="hl">shorter duration of therapy</span>, and is more effective. It is the drug of choice for <span class="hl">dermatophyte nail infections</span>.</p>
      <p style="margin-top:8px;"><b>Adverse effects:</b> Hepatotoxicity — but still better tolerated than alternatives.</p>
    </div>

    <div class="glass-card">
      <h4>7. Caspofungin — The Wall Demolisher</h4>
      <p><b>Mechanism:</b> Caspofungin is unique because it targets the <span class="hl">fungal cell wall</span> — not the membrane. It inhibits <span class="hl">β-1,3-glucan synthase</span>, the enzyme that builds the β-glucan component of the cell wall. Without a functional cell wall, the fungal cell cannot maintain its shape and ruptures. Effect: Fungicidal.</p>
      <p style="margin-top:8px;"><b>Why highly selective:</b> Human cells have <span class="hl">no cell wall whatsoever</span>. This makes caspofungin's mechanism extremely selective for fungi with minimal human toxicity.</p>
      <p style="margin-top:8px;"><b>Pharmacokinetics:</b> Large cyclic peptide; <span class="hl">IV only</span> (cannot be given orally). Used for: severe invasive aspergillosis; esophageal candidiasis that failed Amphotericin B (second-line).</p>
    </div>

    <div class="glass-card">
      <h4>8. Nystatin — Topical Twin of Amphotericin B</h4>
      <p>Same class (polyene macrolide), <span class="hl">same mechanism</span> as Amphotericin B — binds ergosterol, forms pores. However, it is far too toxic for systemic (parenteral) administration and is used <span class="hl">topically only</span>. It is not weaker — it simply cannot be safely given IV. Active mainly against <span class="hl">Candida</span>. Used for oropharyngeal and vaginal candidiasis.</p>
    </div>

    <div class="glass-card">
      <h4>9. How This Shows Up in Exams — Clinical Application</h4>
      <p><b>① Match adverse effect to drug:</b><br>
      Nephrotoxicity → <span class="hl">Amphotericin B</span> | Visual disturbances → <span class="hl">Voriconazole</span> | Gynecomastia/impotence → <span class="hl">Ketoconazole</span> | CYP450 interactions → All azoles (Fluconazole least, Ketoconazole most) | Bone marrow depression → <span class="hl">Flucytosine</span></p>
      <p style="margin-top:10px;"><b>② Drug of choice based on infection type AND patient factors:</b><br>
      Meningitis → <span class="hl">Fluconazole</span> (CSF penetration) | Invasive aspergillosis → <span class="hl">Voriconazole</span> | Oral therapy + nail infection → <span class="hl">Terbinafine</span> | Immunocompromised + severe systemic → <span class="hl">Amphotericin B</span></p>
      <p style="margin-top:10px;"><b>③ Why combinations?</b><br>
      Flucytosine alone → rapid resistance → always combine | Amphotericin B + Flucytosine = <span class="hl">synergistic</span> (membrane disruption allows more drug in)</p>
      <p style="margin-top:10px;"><b>④ Pharmacokinetics applied clinically:</b><br>
      Cannot give Amphotericin B orally (not absorbed) | Cannot use other azoles for meningitis (no CSF penetration) | <span class="hl">Dialysis will not help</span> Amphotericin B toxicity</p>
      <p style="margin-top:10px;"><b>⑤ Drug interaction questions:</b><br>
      Warfarin + azoles → <span class="hl">↑ INR, bleeding risk</span> | Azoles + cyclosporine → toxicity risk</p>
    </div>

    <div class="glass-card">
      <h4>10. Common Confusions — Clarified</h4>
      <p><b>Azoles vs Amphotericin B — same target?</b><br>
      No — completely different: Azoles <span class="hl">BLOCK SYNTHESIS</span> of ergosterol (upstream, before it's made). Amphotericin B <span class="hl">BINDS ergosterol DIRECTLY</span> in the membrane (after it's already there, punching pores). Same target molecule — completely different mechanisms.</p>
      <p style="margin-top:10px;"><b>Why not use Amphotericin B for everything?</b><br>
      Because its <span class="hl">nephrotoxicity is severe and dose-limiting</span> — azotemia, hypokalemia, decreased GFR can become life-threatening. Reserved for severe systemic infections when safer options are insufficient.</p>
      <p style="margin-top:10px;"><b>Fluconazole for both thrush AND meningitis?</b><br>
      Fluconazole is the only azole with the pharmacokinetic profile to cross the <span class="hl">blood-brain barrier</span> — due to its low molecular weight, high water solubility, and low protein binding compared to other azoles.</p>
      <p style="margin-top:10px;"><b>Is Flucytosine the same as 5-FU?</b><br>
      No — flucytosine is a <span class="hl">prodrug</span> converted TO 5-FU <span class="hl">inside fungal cells</span>. You administer flucytosine. 5-FU is the active metabolite formed intracellularly by fungal cytosine deaminase.</p>
      <p style="margin-top:10px;"><b>Nystatin vs Amphotericin B — is Nystatin just weaker?</b><br>
      Not exactly. Same drug class, same mechanism. The difference is <span class="hl">toxicity profile</span> — nystatin is too toxic for systemic/parenteral use. It is not weaker; it simply cannot be safely given IV.</p>
      <p style="margin-top:10px;"><b>Griseofulvin vs Terbinafine for nail infections?</b><br>
      <span class="hl">Terbinafine is preferred</span> — more effective, better tolerated, shorter duration. Griseofulvin is purely fungistatic and depends on keratin turnover (long-term).</p>
      <p style="margin-top:10px;"><b>What makes Caspofungin different from all others?</b><br>
      It is the only commonly tested antifungal that targets the <span class="hl">cell WALL</span> (not the membrane). All others target membrane components, ergosterol synthesis, nucleic acids, or mitosis. Human cells have no cell wall → highly selective with minimal human toxicity.</p>
    </div>

    <div class="glass-card">
      <h4>11. Memory Anchors — Exam Day Quick Reference</h4>
      <p><b>Drug of Choice Quick-Fire:</b><br>
      Cryptococcal meningitis → <span class="hl">Fluco-NAZOLE</span> (goes to the brain)<br>
      Blastomycosis → <span class="hl">ITRA</span>conazole<br>
      Invasive aspergillosis → <span class="hl">VORI</span>conazole (V for Very serious lung infection)<br>
      Onychomycosis → <span class="hl">TERB</span>inafine (TERRibly effective for nails)<br>
      Severe systemic → <span class="hl">AMPHO</span>tericin B (AMPle coverage)</p>
      <p style="margin-top:10px;"><b>Adverse Effect Anchors:</b><br>
      V for Voriconazole = <span class="hl">V for Visual</span> disturbances<br>
      KETO = <span class="hl">KILLS androgens</span> → gynecomastia + impotence<br>
      AMPHO-TERRIBLE = <span class="hl">nephrotoxicity</span>, rigors, fever, hypokalemia, anemia<br>
      FLUCYTO = FLU in the <span class="hl">bone marrow</span> (bone marrow depression)<br>
      GRISEO = skin <span class="hl">RASH</span> + liver (hepatotoxicity)</p>
      <p style="margin-top:10px;"><b>Amphotericin B in one sentence:</b><br>
      Polar compound → <span class="hl">no oral absorption</span> → IV only → 15-day half-life → nephrotoxicity → dialysis useless → <span class="hl">broadest spectrum</span> → liposomal form is safer.</p>
      <p style="margin-top:10px;"><b>Griseofulvin absorption tip:</b><br>
      Take with a <span class="hl">FATTY meal</span> → increased absorption → deposits in keratin → <span class="hl">long-term therapy</span> needed.</p>
    </div>

  `,


  // ============================================================
  // SECTION 4 — FLASHCARDS (60 cards)
  // ============================================================
  "flashcards": [
    { q: "What is the primary component of the fungal cell wall?", a: "Chitin — a rigid polysaccharide that gives the cell wall its structural integrity." },
    { q: "Which sterol is found in fungal cell membranes and is the primary target of many antifungals?", a: "Ergosterol — functionally equivalent to cholesterol in human cells." },
    { q: "Most antifungal agents are _____, meaning they inhibit growth rather than killing fungi directly.", a: "Fungistatic — the host immune system is required to clear the infection." },
    { q: "What are the two broad clinical categories of pathogenic fungal infections?", a: "Superficial mycosis (skin, hair, nails) and Deep (systemic) mycosis (internal organs)." },
    { q: "Name two examples of fungi classified as moulds.", a: "Aspergillus spp. and Dermatophytes." },
    { q: "What is the specific term for a fungal nail infection?", a: "Onychomycosis." },
    { q: "Which class of patients is primarily affected by systemic mycoses like aspergillosis?", a: "Immunocompromised patients (HIV, cancer, transplant)." },
    { q: "What is the mechanism of action of Caspofungin?", a: "Inhibition of β-(1,3)-glucan synthase → disrupts fungal cell wall synthesis → fungicidal." },
    { q: "How do Polyene macrolides (Amphotericin B, Nystatin) destroy fungal cells?", a: "They bind ergosterol in the fungal membrane and form pores → cellular contents leak out → cell death." },
    { q: "What enzyme do Azole antifungals inhibit?", a: "14α-demethylase (CYP51) — blocks ergosterol synthesis → abnormal methylsterols accumulate → fungistatic." },
    { q: "What is the mechanism of action of Terbinafine?", a: "Inhibits squalene epoxidase → squalene accumulates at toxic levels → membrane permeability ↑ → fungicidal." },
    { q: "Which antifungal acts as an antimetabolite to inhibit fungal nucleic acid synthesis?", a: "Flucytosine — converted to 5-FU inside fungal cells by cytosine deaminase." },
    { q: "What is the mechanism of action of Griseofulvin?", a: "Binds microtubules → prevents mitotic spindle formation → arrests fungal mitosis → fungistatic." },
    { q: "Which azole subclass contains three nitrogen atoms in its ring structure?", a: "Triazoles — Fluconazole, Itraconazole, Voriconazole." },
    { q: "List the three triazole antifungals used for systemic infections.", a: "Fluconazole, Itraconazole, and Voriconazole." },
    { q: "Which azole is the ONLY one capable of reaching therapeutic concentrations in the CSF?", a: "Fluconazole — due to its low molecular weight, high water solubility, and low protein binding." },
    { q: "How do food and gastric HCl affect Azole pharmacokinetics?", a: "They significantly influence absorption — gastric acid aids most azoles; fatty food aids Itraconazole; PPIs reduce absorption." },
    { q: "What is the drug of choice for systemic blastomycosis?", a: "Itraconazole (oral or IV)." },
    { q: "What is the drug of choice for invasive aspergillosis of the lung?", a: "Voriconazole." },
    { q: "What antiandrogenic adverse effects does Ketoconazole cause?", a: "Gynecomastia and impotence — due to decreased gonadal steroid synthesis (antiandrogenic effect)." },
    { q: "Which systemic antifungal causes transient visual disturbances?", a: "Voriconazole (V for Visual)." },
    { q: "What is the most serious long-term toxicity of Amphotericin B?", a: "Nephrotoxicity — azotemia, ↓GFR, hypokalemia, and metabolic acidosis." },
    { q: "From which organism is Amphotericin B derived?", a: "Streptomyces nodosus." },
    { q: "Why must Amphotericin B be prepared as a colloidal suspension with sodium deoxycholate?", a: "The drug is insoluble in water — the 1:1 complex with sodium deoxycholate allows IV administration." },
    { q: "What is the half-life of Amphotericin B?", a: "15 days." },
    { q: "What is the clinical advantage of liposomal Amphotericin B?", a: "Reduced toxicity — lipid microspheres bind preferentially to fungal ergosterol over mammalian membranes, sparing the kidneys." },
    { q: "What causes the acute infusion reactions (fever, chills) during Amphotericin B administration?", a: "Release of cytokines IL and TNF — occurs 2–5 hours after infusion ('shake and bake' reaction)." },
    { q: "Which electrolyte imbalance is a priority concern during Amphotericin B therapy?", a: "Hypokalemia — caused by nephrotoxicity and renal tubular damage." },
    { q: "Fungal cells convert Flucytosine into _____, which then inhibits nucleic acid synthesis.", a: "5-fluorouracil (5-FU) — via the fungal enzyme cytosine deaminase." },
    { q: "Why must Flucytosine always be used in combination with another antifungal?", a: "Fungi rapidly develop resistance when Flucytosine is used alone — always combine, typically with Amphotericin B." },
    { q: "What is the most significant adverse effect of high-dose Flucytosine?", a: "Bone marrow depression — also causes hair loss at high doses." },
    { q: "How can a patient improve the irregular oral absorption of Griseofulvin?", a: "Take with fatty foods — absorption is significantly enhanced by fat and microfine particle formulations." },
    { q: "In which body tissues does Griseofulvin primarily accumulate?", a: "Keratinized tissues — skin, hair, and nails (exactly where dermatophytes live)." },
    { q: "Which antifungal is the drug of choice for dermatophyte onychomycosis?", a: "Terbinafine — more effective, better tolerated, and requires shorter duration than Griseofulvin." },
    { q: "Why is Nystatin restricted to topical use rather than parenteral administration?", a: "It is too toxic for systemic (parenteral) administration — not that it is weaker, simply unsafe IV." },
    { q: "What is the primary therapeutic use for Nystatin?", a: "Topical treatment of Candida infections — oropharyngeal (thrush) and vaginal candidiasis." },
    { q: "Under what condition is Caspofungin used as a second-line drug for esophageal candidiasis?", a: "When the infection fails to respond to Amphotericin B (or azoles)." },
    { q: "What is the mechanism of Ciclopirox's antifungal activity?", a: "High affinity for trivalent metal cations (e.g., Fe³⁺) → chelation → inhibits essential enzyme co-factors." },
    { q: "What three drugs are used for premedication to reduce Amphotericin B infusion reactions?", a: "Acetaminophen, antihistamines, and meperidine." },
    { q: "How should Amphotericin B be administered IV to minimize risks?", a: "Slowly over 2–6 hours, with a test dose first to identify severe hypersensitivity reactions." },
    { q: "Why is monitoring INR crucial when a patient on Warfarin starts Azole therapy?", a: "Azoles inhibit CYP450 → ↓ warfarin metabolism → ↑ warfarin levels → ↑ INR → bleeding risk." },
    { q: "Which Azole has the least CYP450 drug interactions?", a: "Fluconazole — the safest azole regarding cytochrome P450 inhibition." },
    { q: "What nursing action is required regarding liver function when administering Griseofulvin?", a: "Check LFTs before initiating and during therapy — hepatotoxicity is a known risk." },
    { q: "What is the minimum treatment duration for skin tinea (ringworm) with fungistatic drugs?", a: "2 to 4 weeks." },
    { q: "What is the recommended treatment duration for fungal nail infections?", a: "3 to 6 months." },
    { q: "Why is dialysis ineffective for treating Amphotericin B toxicity?", a: "Amphotericin B is 90% bound to plasma proteins — dialysis cannot remove it." },
    { q: "Which enzyme converts Flucytosine to 5-FU within fungal cells?", a: "Cytosine deaminase — present in fungal cells but not significantly in human cells." },
    { q: "What substance is the immediate precursor to lanosterol in the ergosterol synthesis pathway?", a: "Squalene — inhibited by Terbinafine (squalene epoxidase) causing squalene accumulation." },
    { q: "What is the clinical term for athlete's foot?", a: "Tinea pedis." },
    { q: "Tinea cruris refers to a fungal infection of which body area?", a: "The groin." },
    { q: "Which antifungal is the drug of choice for cryptococcal meningitis?", a: "Fluconazole — only azole with adequate CSF penetration." },
    { q: "Which fungal cell wall component do Echinocandins specifically target?", a: "β-(1,3)-glucan — synthesized by β-glucan synthase, which Caspofungin inhibits." },
    { q: "Which cell wall layer sits directly outside the chitin layer in fungi?", a: "β-(1,3)-glucan and β-(1,6)-glucan layers." },
    { q: "List three common symptoms of an acute infusion reaction to Amphotericin B.", a: "Fever, chills, and rigors ('shake and bake') — plus possible dyspnea and headache." },
    { q: "Azoles block ergosterol synthesis, causing accumulation of what toxic substance on the fungal surface?", a: "14α-methylsterols — abnormal sterols that disrupt fungal membrane function and arrest growth." },
    { q: "What is the primary nursing education point for patients taking Griseofulvin regarding CNS effects?", a: "Assess for and report confusion, fatigue, or vertigo — CNS side effects are known adverse reactions." },
    { q: "Which fungal species most commonly causes oral and pharyngeal yeast infections?", a: "Candida albicans." },
    { q: "What effect do Azoles have on hepatic transaminases?", a: "They typically cause an increase in serum transaminase levels — a sign of hepatotoxicity requiring monitoring." },
    { q: "Amphotericin B has affinity for which human cell membrane component, causing toxicity?", a: "Cholesterol in human cell membranes — especially in renal tubular cells, causing nephrotoxicity." },
    { q: "Why does Amphotericin B + Flucytosine act synergistically?", a: "Amphotericin B disrupts the fungal membrane → more Flucytosine enters the cell → greater inhibition of nucleic acid synthesis." },
    { q: "What nursing intervention helps prevent Amphotericin B nephrotoxicity?", a: "IV sodium loading with 0.9% Normal Saline bolus before infusion — hydrates and protects the kidneys." }
  ],


  // ============================================================
  // SECTION 5 — QUIZ QUESTIONS (40 MCQs)
  // ============================================================
  "quizQuestions": [
    {
      type: "mcq",
      q: "A patient with fungal meningitis requires an azole antifungal. Which medication is most appropriate due to its ability to reach the CSF in high concentrations?",
      o: ["Itraconazole", "Ketoconazole", "Fluconazole", "Voriconazole"],
      c: 2,
      r: "<b>Fluconazole:</b> Unique among all azoles for its ability to cross the blood-brain barrier and achieve therapeutic CSF concentrations. It is the drug of choice for cryptococcal meningitis. All other azoles cannot penetrate the CSF adequately."
    },
    {
      type: "mcq",
      q: "What is the primary mechanism of action of Amphotericin B?",
      o: ["Inhibition of fungal mitosis by disrupting the mitotic spindle", "Binding to ergosterol to form pores that allow leakage of cellular contents", "Inhibition of β-1,3-glucan synthase to disrupt cell wall synthesis", "Inhibition of squalene epoxidase to block ergosterol biosynthesis"],
      c: 1,
      r: "<b>Binding ergosterol → pores:</b> Amphotericin B is a polyene macrolide that physically binds ergosterol in the fungal membrane, forming pores that allow cellular contents to leak out. This direct membrane destruction makes it fungicidal with the broadest antifungal spectrum."
    },
    {
      type: "mcq",
      q: "A patient receiving IV Amphotericin B experiences chills, fever, and dyspnea 3 hours into treatment. The nurse identifies this as:",
      o: ["Long-term nephrotoxicity", "A normal, non-threatening side effect of all antifungals", "An acute reaction caused by the release of IL and TNF", "A sign of immediate liver failure"],
      c: 2,
      r: "<b>Cytokine release (IL and TNF):</b> Acute 'shake and bake' reactions — fever, chills, rigors, dyspnea — occur 2–5 hours after IV Amphotericin B due to cytokine (IL and TNF) release. Premedication with acetaminophen, antihistamines, and meperidine can reduce severity."
    },
    {
      type: "mcq",
      q: "Which antifungal drug is classified as an antimetabolite and is converted to 5-fluorouracil (5-FU) within the fungal cell?",
      o: ["Caspofungin", "Flucytosine", "Griseofulvin", "Terbinafine"],
      c: 1,
      r: "<b>Flucytosine:</b> A fluorinated pyrimidine prodrug — inactive until fungal cytosine deaminase converts it to 5-FU inside the cell. 5-FU then inhibits nucleic acid synthesis. Human cells lack significant cytosine deaminase activity, providing selectivity."
    },
    {
      type: "mcq",
      q: "A patient is diagnosed with invasive aspergillosis of the lung. Which drug is the treatment of choice?",
      o: ["Nystatin", "Voriconazole", "Ketoconazole", "Flucytosine"],
      c: 1,
      r: "<b>Voriconazole:</b> The established drug of choice for invasive pulmonary aspergillosis. Remember 'V for Very serious lung infection.' Nystatin is topical only; Ketoconazole is not indicated; Flucytosine is never used alone."
    },
    {
      type: "mcq",
      q: "Which statement regarding the pharmacokinetics of Griseofulvin is correct?",
      o: ["It is administered topically for systemic infections", "Absorption is significantly decreased when taken with fatty foods", "It concentrates specifically in keratinized tissues like skin, hair, and nails", "It has a very short half-life of only 2 hours"],
      c: 2,
      r: "<b>Concentrates in keratinized tissue:</b> Griseofulvin accumulates in keratin structures (skin, hair, nails) — exactly where dermatophytes reside. Absorption is actually INCREASED by fatty food (not decreased). Half-life is 24 hours, not 2 hours."
    },
    {
      type: "mcq",
      q: "A male patient taking Ketoconazole reports new-onset breast enlargement and decreased libido. The nurse explains this is due to:",
      o: ["Hepatotoxicity increasing estrogen levels", "Antiandrogenic effects caused by decreased gonadal steroid synthesis", "Inhibition of the fungal cell wall synthesis", "Transient visual disturbances affecting hormones"],
      c: 1,
      r: "<b>Antiandrogenic effects:</b> Ketoconazole inhibits gonadal steroid synthesis (not just fungal CYP450 but also human steroidogenic pathways), causing gynecomastia and impotence. Memory anchor: 'KETO KILLS androgens.'"
    },
    {
      type: "mcq",
      q: "Caspofungin belongs to which class of antifungal drugs?",
      o: ["Allylamines", "Polyenes", "Echinocandins", "Triazoles"],
      c: 2,
      r: "<b>Echinocandins:</b> Caspofungin, Anidulafungin, and Micafungin are all Echinocandins. They inhibit β-1,3-glucan synthase, targeting the fungal cell wall — a mechanism unique among antifungals since human cells have no cell wall."
    },
    {
      type: "mcq",
      q: "What is the mechanism of action of Terbinafine?",
      o: ["Inhibits squalene epoxidase, leading to toxic squalene accumulation", "Binds to the mitotic spindle to stop fungal mitosis", "Inhibits fungal cytochrome P450 (14α-demethylase)", "Disrupts DNA synthesis by acting as a pyrimidine analog"],
      c: 0,
      r: "<b>Squalene epoxidase inhibition:</b> Terbinafine (an allylamine) inhibits squalene epoxidase, an enzyme in the ergosterol synthesis pathway. Squalene accumulates to toxic levels, increasing membrane permeability and killing the fungal cell (fungicidal)."
    },
    {
      type: "mcq",
      q: "Why is Flucytosine almost always used in combination with other antifungal agents?",
      o: ["To prevent hepatotoxicity", "Because it is too weak to work alone", "To prevent the rapid development of fungal resistance", "To increase its absorption in the GI tract"],
      c: 2,
      r: "<b>Prevent rapid resistance:</b> Fungi develop resistance to Flucytosine very quickly when it is used as monotherapy. Combining it with Amphotericin B is synergistic — Amphotericin B disrupts the membrane, allowing more Flucytosine to enter."
    },
    {
      type: "mcq",
      q: "Which antifungal medication is strictly limited to topical use because it is too toxic for systemic administration?",
      o: ["Fluconazole", "Amphotericin B", "Nystatin", "Itraconazole"],
      c: 2,
      r: "<b>Nystatin:</b> Same class and mechanism as Amphotericin B (polyene macrolide), but too toxic for parenteral use. It is NOT weaker — it simply cannot be safely given IV. Used topically for oropharyngeal and vaginal candidiasis."
    },
    {
      type: "mcq",
      q: "A nurse reviews lab results for a patient on long-term Amphotericin B therapy. Which finding is a priority concern?",
      o: ["Serum Potassium of 2.8 mEq/L (Hypokalemia)", "Transient blurry vision", "Red discoloration of urine", "Increased appetite"],
      c: 0,
      r: "<b>Hypokalemia:</b> Amphotericin B nephrotoxicity causes electrolyte wasting — particularly potassium. A K⁺ of 2.8 mEq/L (normal 3.5–5.0) is dangerously low and can cause fatal cardiac arrhythmias. This is the priority concern."
    },
    {
      type: "mcq",
      q: "Which drug works by inhibiting the synthesis of the fungal cell WALL rather than the cell membrane?",
      o: ["Amphotericin B", "Fluconazole", "Caspofungin", "Nystatin"],
      c: 2,
      r: "<b>Caspofungin:</b> The only commonly tested antifungal targeting the cell wall (β-1,3-glucan synthase). All others — Amphotericin B, Nystatin, and Azoles — target the cell membrane or ergosterol synthesis. Human cells have no cell wall → highly selective."
    },
    {
      type: "mcq",
      q: "A patient is prescribed Voriconazole. The nurse should instruct the patient to expect which unique, transient side effect?",
      o: ["Ringing in the ears (tinnitus)", "Visual disturbances", "Orange-colored sweat", "Extremity numbness"],
      c: 1,
      r: "<b>Visual disturbances:</b> Voriconazole is specifically associated with transient visual disturbances — blurred vision, altered color perception, photophobia. Remember: 'V for Voriconazole = V for Visual.'"
    },
    {
      type: "mcq",
      q: "Which drug is the preferred treatment for onychomycosis because it is more effective and better tolerated than Griseofulvin?",
      o: ["Terbinafine", "Flucytosine", "Ketoconazole", "Nystatin"],
      c: 0,
      r: "<b>Terbinafine:</b> Drug of choice for dermatophyte onychomycosis — more effective, better tolerated, and requires a shorter treatment course than Griseofulvin. Griseofulvin requires months of therapy due to its dependence on keratin turnover."
    },
    {
      type: "mcq",
      q: "Azole antifungals work by inhibiting which specific enzyme?",
      o: ["Squalene epoxidase", "14α-demethylase (CYP51)", "Thymidylate synthase", "Glucan synthase"],
      c: 1,
      r: "<b>14α-demethylase (CYP51):</b> Azoles inhibit this fungal CYP450 enzyme, blocking conversion of lanosterol to ergosterol. Without ergosterol, the fungal membrane loses integrity. They also inhibit human hepatic CYP450 — the basis for drug interactions."
    },
    {
      type: "mcq",
      q: "What is the primary reason for preparing Amphotericin B in a liposomal (lipid-enclosed) form?",
      o: ["To make the drug taste better for oral administration", "To reduce systemic toxicity and improve targeting to fungal cells", "To allow the drug to be excreted more quickly by the kidneys", "To prevent the drug from binding to plasma proteins"],
      c: 1,
      r: "<b>Reduce toxicity, improve targeting:</b> Lipid microspheres preferentially bind ergosterol in fungal membranes over cholesterol in mammalian membranes. This delivers the drug more selectively to fungi and greatly reduces nephrotoxicity compared to standard formulation."
    },
    {
      type: "mcq",
      q: "Which drug is a 'Heterocyclic Benzofuran' that disrupts fungal mitosis?",
      o: ["Griseofulvin", "Amphotericin B", "Clotrimazole", "Flucytosine"],
      c: 0,
      r: "<b>Griseofulvin:</b> Structurally classified as a heterocyclic benzofuran. It binds microtubules → prevents mitotic spindle formation → arrests fungal mitosis. It concentrates in keratin (skin, hair, nails) and requires long-term oral therapy."
    },
    {
      type: "mcq",
      q: "A patient is taking an azole antifungal alongside several other medications. Why is the nurse concerned about drug-drug interactions?",
      o: ["Azoles speed up the metabolism of all other drugs", "Azoles inhibit hepatic CYP450 enzymes, increasing serum concentration of other drugs", "Azoles prevent the absorption of all vitamins", "Azoles cause other drugs to become inactive in the stomach"],
      c: 1,
      r: "<b>CYP450 inhibition:</b> Azoles inhibit human hepatic CYP450 → slower drug metabolism → toxic accumulation of co-administered drugs (warfarin → bleeding; cyclosporine → toxicity; phenytoin → toxicity). Fluconazole has the least CYP450 inhibition; Ketoconazole the most."
    },
    {
      type: "mcq",
      q: "Which of the following is an example of an opportunistic systemic mycosis commonly seen in immunocompromised patients?",
      o: ["Tinea pedis (Athlete's foot)", "Tinea capitis (Scalp ringworm)", "Cryptococcosis", "Vulvovaginal candidiasis"],
      c: 2,
      r: "<b>Cryptococcosis:</b> A deep (systemic) mycosis caused by Cryptococcus neoformans — primarily in immunocompromised patients. Tinea pedis and capitis are superficial; vulvovaginal candidiasis is also superficial. Systemic mycoses affect internal organs."
    },
    {
      type: "mcq",
      q: "A patient is prescribed Itraconazole. The nurse should advise the patient to avoid taking which over-the-counter medication simultaneously?",
      o: ["Ibuprofen", "Omeprazole", "Diphenhydramine", "Guaifenesin"],
      c: 1,
      r: "<b>Omeprazole (PPI):</b> Itraconazole requires an acidic gastric environment for optimal absorption. Proton pump inhibitors raise gastric pH, significantly reducing Itraconazole absorption and therapeutic efficacy. Advise the patient to separate doses."
    },
    {
      type: "mcq",
      q: "Which antifungal agent inhibits the fungal enzyme squalene epoxidase similarly to Terbinafine?",
      o: ["Ketoconazole", "Naftifine", "Amphotericin B", "Anidulafungin"],
      c: 1,
      r: "<b>Naftifine:</b> Like Terbinafine, Naftifine is an allylamine that inhibits squalene epoxidase, leading to ergosterol deficiency and toxic squalene accumulation. Both are in the allylamine drug class."
    },
    {
      type: "mcq",
      q: "A patient with heart failure needs antifungal therapy. Which drug should be used with extreme caution due to potential negative inotropic effects?",
      o: ["Fluconazole", "Itraconazole", "Nystatin", "Clotrimazole"],
      c: 1,
      r: "<b>Itraconazole:</b> Has been associated with negative inotropic effects and should be avoided or used with extreme caution in patients with ventricular dysfunction or congestive heart failure. Fluconazole is generally safer in this context."
    },
    {
      type: "mcq",
      q: "What is the clinical significance of the 'test dose' administered before a full infusion of Amphotericin B?",
      o: ["To determine if the fungus is sensitive to the medication", "To assess the patient's renal clearance of the drug", "To identify potential severe anaphylactic or febrile reactions", "To prime the IV tubing to prevent air embolisms"],
      c: 2,
      r: "<b>Identify severe reactions:</b> A small test dose (e.g., 1mg IV) is given first to monitor for life-threatening hypersensitivity before the full therapeutic dose is administered. Amphotericin B can cause severe acute systemic reactions."
    },
    {
      type: "mcq",
      q: "Which antifungal is commonly used as a 'swish and swallow' or 'swish and spit' treatment for oral candidiasis (thrush)?",
      o: ["Griseofulvin", "Voriconazole", "Nystatin", "Flucytosine"],
      c: 2,
      r: "<b>Nystatin:</b> Not absorbed from the GI tract — making it ideal for local treatment of oral/esophageal fungal infections when held in contact with the mucosa. Safe for this use because it stays local and does not reach systemic circulation."
    },
    {
      type: "mcq",
      q: "A patient on Flucytosine develops a sore throat, fever, and bruising. Which laboratory test should the nurse anticipate immediately?",
      o: ["Serum Albumin", "Complete Blood Count (CBC) with differential", "Prothrombin Time (PT)", "Urinalysis"],
      c: 1,
      r: "<b>CBC with differential:</b> These symptoms suggest bone marrow suppression — Flucytosine's most serious side effect at high doses. Leukopenia causes infection risk/fever; thrombocytopenia causes bruising; anemia causes fatigue. Monitor trough levels to prevent toxicity."
    },
    {
      type: "mcq",
      q: "During Caspofungin administration, the patient develops localized swelling, pruritus, and facial flushing. The nurse recognizes this is likely due to:",
      o: ["A secondary bacterial infection", "Histamine release", "Rapid liver metabolism", "Overdose of the medication"],
      c: 1,
      r: "<b>Histamine release:</b> Echinocandins like Caspofungin can trigger histamine release during infusion, resulting in flushing, rash, and pruritus — similar to 'Red Man Syndrome.' Slowing the infusion rate can help manage this reaction."
    },
    {
      type: "mcq",
      q: "Which of the following best describes a key difference between fungal cells and human cells relevant to antifungal therapy?",
      o: ["Human cells contain chitin; fungal cells do not", "Fungal cells contain ergosterol; human cells contain cholesterol", "Fungal cells contain β-1,3-glucan; human cells do not have a cell wall", "Human cells have a rigid wall made of peptidoglycan"],
      c: 2,
      r: "<b>Fungal cell wall (β-1,3-glucan), no human cell wall:</b> Both B and C are true statements — but C is the basis for Echinocandin selectivity. Humans lack a cell wall entirely, making β-glucan synthesis an ideal selective target. Peptidoglycan is bacterial, not human."
    },
    {
      type: "mcq",
      q: "A patient with a tinea skin infection is being treated with a fungistatic agent. This infection represents which classification of mycosis?",
      o: ["Opportunistic infection", "Dermatomycosis", "Subcutaneous mycosis", "Systemic mycosis"],
      c: 1,
      r: "<b>Dermatomycosis:</b> Tinea/ringworm infections of the skin, hair, and nails are dermatomycoses — superficial fungal infections caused by dermatophytes. These are the most common superficial mycoses, distinct from systemic or subcutaneous infections."
    },
    {
      type: "mcq",
      q: "Which azole is available in a topical formulation for vulvovaginal candidiasis?",
      o: ["Miconazole", "Voriconazole", "Flucytosine", "Griseofulvin"],
      c: 0,
      r: "<b>Miconazole:</b> An imidazole azole widely available in creams and vaginal suppositories for local treatment of yeast infections. Voriconazole and Itraconazole are systemic triazoles; Flucytosine is an antimetabolite; Griseofulvin is for dermatophytes."
    },
    {
      type: "mcq",
      q: "What is the primary reason Amphotericin B is referred to as 'Ampho-terrible' in clinical practice?",
      o: ["It is ineffective against most molds", "High incidence of infusion-related reactions and nephrotoxicity", "It must be taken for at least two years to work", "It causes permanent loss of vision"],
      c: 1,
      r: "<b>Severe toxicity profile:</b> Nearly universal nephrotoxicity (azotemia, hypokalemia, ↓GFR) combined with acute infusion reactions (fever, chills, rigors, dyspnea) makes this drug notoriously difficult to tolerate — hence 'Ampho-terrible.' Despite this, it has the broadest antifungal spectrum."
    },
    {
      type: "mcq",
      q: "A patient is taking Griseofulvin for toenail onychomycosis. What duration of treatment should the nurse inform the patient to expect?",
      o: ["2 to 4 days", "1 to 2 weeks", "Several months (6–12 months)", "Exactly one year"],
      c: 2,
      r: "<b>Several months:</b> Griseofulvin works by incorporating into new keratin — treatment must continue until all infected nail is replaced by healthy, drug-containing new growth. Toenails grow slowly (3–6 months minimum, up to 12 months)."
    },
    {
      type: "mcq",
      q: "Which antifungal drug works by interfering with fungal mitosis?",
      o: ["Terbinafine", "Griseofulvin", "Fluconazole", "Nystatin"],
      c: 1,
      r: "<b>Griseofulvin:</b> The only antifungal that targets the mitotic spindle. It binds microtubules → prevents spindle formation → arrests fungal cell division. All others target membrane components, ergosterol synthesis, nucleic acids, or the cell wall."
    },
    {
      type: "mcq",
      q: "A nurse caring for a patient on Itraconazole should immediately report which symptom as a sign of potential liver injury?",
      o: ["Increased energy levels", "Dark urine and clay-colored stools", "Dry mouth and thirst", "Increased urination frequency"],
      c: 1,
      r: "<b>Dark urine and clay-colored stools:</b> Classic signs of obstructive jaundice and hepatic dysfunction — a known risk with systemic azoles. All azoles cause hepatotoxicity and raise serum transaminases. LFTs must be monitored during therapy."
    },
    {
      type: "mcq",
      q: "Which drug is categorized as an Allylamine antifungal?",
      o: ["Terbinafine", "Micafungin", "Clotrimazole", "Amphotericin B"],
      c: 0,
      r: "<b>Terbinafine:</b> An allylamine — along with Naftifine and Butenafine — that inhibits squalene epoxidase. Micafungin is an echinocandin; Clotrimazole is an imidazole azole; Amphotericin B is a polyene macrolide."
    },
    {
      type: "mcq",
      q: "A patient is receiving Amphotericin B. To minimize nephrotoxicity, the nurse should anticipate which intervention?",
      o: ["Restricting fluid intake to 1 liter per day", "Administering a 0.9% Normal Saline bolus before the infusion", "Giving the medication as a rapid IV push", "Ensuring the patient takes an antacid before the dose"],
      c: 1,
      r: "<b>IV sodium loading (saline bolus):</b> 'Sodium loading' with a 0.9% NS bolus before Amphotericin B is standard practice to hydrate the kidneys and reduce nephrotoxic injury. Rapid infusion INCREASES risk; fluid restriction would worsen kidney damage."
    },
    {
      type: "mcq",
      q: "Which antifungal is generally preferred for esophageal candidiasis resistant to Fluconazole?",
      o: ["Nystatin", "Caspofungin", "Griseofulvin", "Terbinafine"],
      c: 1,
      r: "<b>Caspofungin:</b> An echinocandin indicated for esophageal candidiasis that has failed azole or Amphotericin B therapy. Nystatin is topical only; Griseofulvin is for dermatophytes only; Terbinafine is for skin/nail dermatophytes."
    },
    {
      type: "mcq",
      q: "Flucytosine is chemically related to which class of drugs?",
      o: ["Antibiotics", "Fluorinated pyrimidines (Chemotherapy)", "Steroids", "Beta-blockers"],
      c: 1,
      r: "<b>Fluorinated pyrimidines:</b> Flucytosine is a fluorinated pyrimidine antimetabolite — structurally related to the chemotherapy drug 5-fluorouracil (5-FU). This explains its mechanism of action and its bone marrow suppression side effect at high doses."
    },
    {
      type: "mcq",
      q: "Why should a nurse monitor the trough levels of a patient on Flucytosine therapy?",
      o: ["To ensure the patient is not becoming addicted", "To minimize the risk of hematological and GI toxicity", "To assess if the drug is accumulating in fatty tissues", "To monitor for visual disturbances"],
      c: 1,
      r: "<b>Prevent hematological/GI toxicity:</b> Flucytosine has a narrow therapeutic window — high blood concentrations directly cause bone marrow depression (anemia, leukopenia, thrombocytopenia) and severe GI distress. Therapeutic drug monitoring prevents toxicity."
    },
    {
      type: "mcq",
      q: "A patient is using Ciclopirox nail lacquer. The nurse explains this medication works by:",
      o: ["Changing the nail color to hide the fungus", "Inhibiting enzymes by chelating trivalent metal cations", "Increasing the pH of the nail bed", "Directly dissolving the fungal cell wall on contact"],
      c: 1,
      r: "<b>Metal cation chelation:</b> Ciclopirox has a unique mechanism — it chelates trivalent metal cations (like Fe³⁺) that are essential co-factors for critical fungal enzymes. Without these co-factors, key metabolic enzymes are inhibited and the fungus cannot survive."
    }
  ],


  // ============================================================
  // SECTION 6 — NCLEX BOARDS (Prioritization & Nursing Action)
  // ============================================================
  "practiceNclex": [
    {
      type: "mcq",
      q: "A patient with cryptococcal meningitis requires antifungal therapy. Which drug is the most appropriate first-line agent?\n\nA. Amphotericin B — broadest spectrum of activity\nB. Itraconazole — drug of choice for systemic fungal infections\nC. Fluconazole — only azole that achieves good CSF concentration\nD. Voriconazole — best for CNS fungal infections",
      o: ["Amphotericin B — broadest spectrum of activity", "Itraconazole — drug of choice for systemic fungal infections", "Fluconazole — only azole that achieves good CSF concentration", "Voriconazole — best for CNS fungal infections"],
      c: 2,
      r: "<b>Fluconazole:</b> The only azole capable of crossing the blood-brain barrier and achieving adequate CSF concentrations → drug of choice for cryptococcal meningitis.<br><br>• A: Amphotericin B CANNOT cross the CSF — it is a polar compound with minimal CNS penetration.<br>• B: Itraconazole is the drug of choice for systemic blastomycosis, not meningitis.<br>• D: Voriconazole is preferred for invasive aspergillosis of the lung, not meningitis."
    },
    {
      type: "mcq",
      q: "A patient on long-term antifungal therapy develops gynecomastia and impotence. Which drug is most likely responsible?",
      o: ["Fluconazole", "Voriconazole", "Ketoconazole", "Itraconazole"],
      c: 2,
      r: "<b>Ketoconazole:</b> Uniquely causes antiandrogenic effects by inhibiting CYP450-dependent gonadal steroid synthesis → reduced testosterone → gynecomastia and impotence.<br><br>• A: Fluconazole causes hepatotoxicity and CYP interactions but NOT antiandrogenic effects.<br>• B: Voriconazole's unique adverse effect is transient visual disturbances (V = Visual).<br>• D: Itraconazole does not cause antiandrogenic effects."
    },
    {
      type: "mcq",
      q: "A nurse is preparing Amphotericin B for IV infusion. The patient asks why it cannot be given as an oral tablet. What is the correct pharmacokinetic explanation?",
      o: ["It is rapidly metabolized in the stomach before absorption", "It is a polar compound that cannot be absorbed from the GIT", "It is destroyed by gastric acid at low pH", "It requires active transport that is absent in the gut"],
      c: 1,
      r: "<b>Polar compound — not absorbed from GIT:</b> Amphotericin B is a polar compound and cannot be absorbed from the gastrointestinal tract. It is also insoluble in water and must be prepared as a colloidal suspension with sodium deoxycholate for IV administration.<br><br>• A, C, D: Incorrect — the issue is polarity, not gastric metabolism, acid destruction, or active transport.<br>• Additional note: half-life is 15 days and dialysis is INEFFECTIVE for toxicity management."
    },
    {
      type: "mcq",
      q: "Caspofungin differs from most other antifungals because it targets which structure?",
      o: ["Fungal cell membrane ergosterol", "The ergosterol synthesis pathway", "The fungal cell wall (β-1,3-glucan synthase)", "Fungal DNA/RNA synthesis"],
      c: 2,
      r: "<b>Fungal cell wall — β-1,3-glucan synthase:</b> Caspofungin is an echinocandin — a large cyclic peptide that inhibits β-1,3-glucan synthase, disrupting the fungal cell wall and causing cell death.<br><br>• A: Binding ergosterol in the membrane = mechanism of Amphotericin B and Nystatin.<br>• B: Inhibiting ergosterol synthesis = mechanism of Azoles (and Terbinafine).<br>• D: Inhibiting nucleic acid synthesis = mechanism of Flucytosine."
    }
  ],


  // ============================================================
  // SECTION 7 — SATA DRILLS (Select All That Apply)
  // ============================================================
  "practiceSata": [
    {
      type: "sata",
      q: "Which of the following statements about Amphotericin B are correct? Select all that apply.",
      o: [
        "It is obtained from Streptomyces Nodosus",
        "It can be given orally for systemic infections",
        "It has the broadest antifungal spectrum of activity",
        "It binds ergosterol and forms pores in the fungal cell membrane",
        "Dialysis is effective in managing its toxicity"
      ],
      c: [0, 2, 3],
      r: "<b>Correct: A, C, D</b><br><br>• A ✓ — Amphotericin B is derived from Streptomyces Nodosus (a soil bacterium).<br>• B ✗ — It CANNOT be given orally; it is a polar compound not absorbed from the GIT. Must be given IV or intrathecally.<br>• C ✓ — Broadest spectrum of antifungal activity; used for severe systemic infections.<br>• D ✓ — Mechanism: binds ergosterol → forms pores → cellular contents leak → cell death.<br>• E ✗ — Dialysis is INEFFECTIVE for Amphotericin B toxicity — high-yield exam trap (90% protein-bound)."
    },
    {
      type: "sata",
      q: "Which of the following antifungals are classified as triazoles? Select all that apply.",
      o: [
        "Ketoconazole",
        "Fluconazole",
        "Clotrimazole",
        "Itraconazole",
        "Voriconazole"
      ],
      c: [1, 3, 4],
      r: "<b>Correct: B, D, E</b><br><br>• B ✓ — Fluconazole is a triazole (3 nitrogen atoms).<br>• D ✓ — Itraconazole is a triazole (3 nitrogen atoms).<br>• E ✓ — Voriconazole is a triazole (3 nitrogen atoms).<br>• A ✗ — Ketoconazole is an imidazole (2 nitrogen atoms); used systemically.<br>• C ✗ — Clotrimazole is an imidazole (2 nitrogen atoms); used topically only."
    },
    {
      type: "sata",
      q: "A patient is receiving azole antifungal therapy. Which adverse effects should the nurse monitor for? Select all that apply.",
      o: [
        "Elevated liver enzymes (hepatotoxicity)",
        "Nephrotoxicity and decreased GFR",
        "Drug interactions due to CYP450 inhibition",
        "Transient visual disturbances (if on Voriconazole)",
        "Bone marrow depression"
      ],
      c: [0, 2, 3],
      r: "<b>Correct: A, C, D</b><br><br>• A ✓ — All azoles can cause hepatotoxicity and elevated serum transaminases.<br>• B ✗ — Nephrotoxicity (↓GFR, azotemia, hypokalemia) is the hallmark of Amphotericin B, NOT azoles.<br>• C ✓ — Azoles inhibit hepatic CYP450 → increased levels of warfarin, cyclosporine, phenytoin, triazolam. Fluconazole inhibits least; Ketoconazole inhibits most.<br>• D ✓ — Voriconazole specifically causes transient visual disturbances — a unique, high-yield adverse effect.<br>• E ✗ — Bone marrow depression at high doses is associated with Flucytosine, not azoles."
    },
    {
      type: "sata",
      q: "Which of the following correctly describe Griseofulvin? Select all that apply.",
      o: [
        "It is fungistatic",
        "It concentrates in keratinized tissue",
        "It binds ergosterol in the cell membrane",
        "Oral absorption is enhanced by fatty food",
        "It is the drug of choice for invasive aspergillosis"
      ],
      c: [0, 1, 3],
      r: "<b>Correct: A, B, D</b><br><br>• A ✓ — Griseofulvin is fungistatic; it requires long duration of therapy (months for nails).<br>• B ✓ — It binds to keratin structures and accumulates in skin, hair, and nails — exactly where dermatophytes live.<br>• C ✗ — Binding ergosterol is the mechanism of Amphotericin B and Nystatin. Griseofulvin binds MICROTUBULES and prevents spindle formation.<br>• D ✓ — Absorption is irregular but significantly enhanced by fatty food and microfine particle formulations.<br>• E ✗ — Voriconazole is the drug of choice for invasive aspergillosis of the lung. Griseofulvin is for dermatophyte skin/hair/nail infections."
    }
  ],


  // ============================================================
  // SECTION 8 — HARD PRACTICE (Complex Pharmacology Scenarios)
  // ============================================================
  "practiceHard": [
    {
      type: "mcq",
      q: "Azoles exert their antifungal effect by inhibiting which specific enzyme?",
      o: ["Squalene epoxidase", "14-α demethylase (CYP51)", "β-(1,3)-glucan synthase", "Cytosine deaminase"],
      c: 1,
      r: "<b>14-α demethylase (CYP51):</b> Azoles block CYP51, preventing lanosterol conversion to ergosterol. This depletes ergosterol and disrupts fungal membrane integrity.<br><br>• Squalene epoxidase = target of allylamines (Terbinafine, Naftifine)<br>• β-glucan synthase = targeted by echinocandins (Caspofungin)<br>• Cytosine deaminase = relevant to Flucytosine's mechanism (converts it to 5-FU inside fungal cells)"
    },
    {
      type: "mcq",
      q: "Amphotericin B's fungicidal activity is primarily due to which molecular event?",
      o: ["Inhibition of ergosterol biosynthesis", "Competitive binding to 14-α demethylase", "Direct binding to ergosterol forming transmembrane pores", "Disruption of β-glucan cross-linking in the cell wall"],
      c: 2,
      r: "<b>Direct binding to ergosterol → transmembrane pores:</b> Amphotericin B is a polyene that physically binds ergosterol already in the fungal membrane, forming pore complexes that cause leakage of intracellular ions and cell death.<br><br>• It does NOT inhibit ergosterol synthesis — that is the azole mechanism.<br>• Echinocandins target β-glucan.<br>• This direct membrane destruction is why Amphotericin B is fungicidal with the broadest spectrum."
    },
    {
      type: "mcq",
      q: "Flucytosine selectively harms fungal cells but spares human cells primarily because:",
      o: ["Human cells lack the permease needed to transport flucytosine", "Human cells cannot convert flucytosine to 5-fluorouracil in significant amounts", "Human cells have a higher concentration of cytosine deaminase", "Flucytosine is rapidly excreted before entering human cells"],
      c: 1,
      r: "<b>Human cells lack significant cytosine deaminase activity:</b> Flucytosine enters fungal cells via fungal-specific permease and is deaminated to 5-FU by fungal cytosine deaminase. Human cells lack appreciable cytosine deaminase activity, so they cannot generate cytotoxic 5-FU concentrations.<br><br>• Note: Option A (lack of permease) is also partially true, but the primary basis for selectivity is the inability to convert flucytosine to its active metabolite 5-FU in significant amounts."
    },
    {
      type: "mcq",
      q: "Terbinafine accumulates to toxic levels in fungal cells through which mechanism?",
      o: ["Inhibition of 14-α demethylase causing ergosterol depletion", "Inhibition of squalene epoxidase causing toxic squalene accumulation", "Direct intercalation into fungal DNA", "Binding to ergosterol and forming membrane channels"],
      c: 1,
      r: "<b>Squalene epoxidase inhibition → toxic squalene accumulation:</b> Terbinafine is an allylamine that inhibits squalene epoxidase early in the ergosterol pathway. This causes squalene to accumulate to fungitoxic levels while simultaneously depleting ergosterol.<br><br>• Unlike azoles, Terbinafine's toxicity stems from SQUALENE ACCUMULATION — not just ergosterol deficiency. This dual mechanism makes it fungicidal."
    },
    {
      type: "mcq",
      q: "Griseofulvin's antifungal action is best described as:",
      o: ["Ergosterol synthesis inhibition at the 14-α demethylase step", "Disruption of the fungal cell wall by inhibiting glucan synthase", "Binding to fungal tubulin, preventing mitotic spindle formation", "Inhibition of nucleic acid synthesis via a pyrimidine analog"],
      c: 2,
      r: "<b>Binding fungal tubulin → prevents mitotic spindle formation:</b> Griseofulvin binds microtubules and disrupts spindle formation, arresting fungal mitosis. It is fungistatic and requires prolonged treatment.<br><br>• Its action is entirely on the mitotic apparatus — it has NO effect on ergosterol, cell walls, or nucleic acid synthesis.<br>• Memory: Griseofulvin = Spindle Wrecker; requires fatty food for absorption; concentrates in keratin."
    },
    {
      type: "mcq",
      q: "Which of the following antifungal drug pairs both belong to the polyene class?",
      o: ["Fluconazole and Itraconazole", "Amphotericin B and Nystatin", "Caspofungin and Micafungin", "Terbinafine and Butenafine"],
      c: 1,
      r: "<b>Amphotericin B and Nystatin:</b> Both are polyene macrolides derived from Streptomyces species. They share the same mechanism of binding ergosterol and forming pores.<br><br>• Fluconazole and Itraconazole = triazoles<br>• Caspofungin and Micafungin = echinocandins<br>• Terbinafine and Butenafine = allylamines"
    },
    {
      type: "mcq",
      q: "A new antifungal drug is described as a cyclic lipopeptide that inhibits cell wall synthesis. To which class does it belong?",
      o: ["Polyene macrolide", "Triazole", "Echinocandin", "Allylamine"],
      c: 2,
      r: "<b>Echinocandin:</b> Echinocandins (Caspofungin, Micafungin, Anidulafungin) are large cyclic lipopeptides that inhibit β-(1,3)-glucan synthase, disrupting fungal cell wall integrity.<br><br>• This is the ONLY antifungal class targeting the cell wall rather than the membrane or biosynthetic pathways. Human cells have no cell wall → highly selective with minimal toxicity."
    },
    {
      type: "mcq",
      q: "Fluconazole and Itraconazole are both triazoles. What structural feature distinguishes triazoles from imidazoles?",
      o: ["Triazoles contain three nitrogen atoms in their ring structure", "Triazoles have a benzene ring fused to their azole ring", "Triazoles bind ergosterol directly, not the enzyme", "Triazoles are only available in topical formulations"],
      c: 0,
      r: "<b>Three nitrogen atoms in the ring structure:</b> The defining chemical difference is the number of nitrogen atoms in the azole ring:<br>• Imidazoles = 2 nitrogen atoms (Ketoconazole, Clotrimazole, Miconazole) — mostly topical<br>• Triazoles = 3 nitrogen atoms (Fluconazole, Itraconazole, Voriconazole) — systemic use<br><br>Both classes inhibit the same CYP51 enzyme. Memory: ImIdazole = 2 I's → 2 nitrogens; TRIazole = TRI → 3 nitrogens."
    },
    {
      type: "mcq",
      q: "Which antifungal is correctly classified as an antimetabolite?",
      o: ["Nystatin", "Griseofulvin", "Flucytosine", "Caspofungin"],
      c: 2,
      r: "<b>Flucytosine:</b> A fluorinated pyrimidine analog — a prodrug and antimetabolite that mimics a nucleic acid building block. After conversion to 5-FU inside fungal cells, it inhibits thymidylate synthase and disrupts RNA/DNA synthesis.<br><br>• Nystatin = polyene macrolide (binds ergosterol, forms pores)<br>• Griseofulvin = heterocyclic benzofuran (disrupts mitotic spindle)<br>• Caspofungin = echinocandin (inhibits cell wall β-glucan synthase)"
    },
    {
      type: "mcq",
      q: "A patient on long-term Amphotericin B IV develops decreased urine output, rising creatinine, and serum potassium of 2.9 mEq/L. Which mechanism explains the hypokalemia?",
      o: ["Amphotericin B directly inhibits aldosterone secretion", "Renal tubular damage from nephrotoxicity causes excessive potassium wasting", "Hypokalemia results from GI potassium loss due to vomiting", "Amphotericin B chelates potassium ions in the bloodstream"],
      c: 1,
      r: "<b>Renal tubular damage → potassium wasting:</b> Amphotericin B causes direct renal tubular toxicity, impairing tubular function and resulting in renal potassium wasting. This is a LONG-TERM toxicity, distinct from acute infusion reactions.<br><br>• The nephrotoxicity also causes azotemia and reduced GFR.<br>• Clinical action: IV sodium loading (saline bolus) before infusion helps reduce nephrotoxic injury. Dialysis is ineffective."
    },
    {
      type: "mcq",
      q: "Which adverse effect is uniquely associated with Voriconazole and not shared by other triazoles?",
      o: ["Hepatotoxicity", "Inhibition of CYP450 enzymes", "Transient visual disturbances", "Risk of drug-drug interactions with Warfarin"],
      c: 2,
      r: "<b>Transient visual disturbances:</b> Voriconazole characteristically causes altered color perception, photophobia, and blurred vision — thought to be related to its direct effect on retinal electrophysiology.<br><br>• Hepatotoxicity = class effect of ALL azoles<br>• CYP450 inhibition = class effect of ALL azoles<br>• Warfarin drug interaction = class effect of ALL azoles<br>• Only visual disturbances are UNIQUE to Voriconazole."
    },
    {
      type: "mcq",
      q: "A male patient on Ketoconazole develops gynecomastia and decreased libido. The nurse correctly attributes this to:",
      o: ["Ketoconazole blocking estrogen receptors", "Ketoconazole inhibiting adrenal corticosteroid synthesis only", "Ketoconazole inhibiting CYP450-dependent gonadal steroid synthesis, reducing testosterone", "Ketoconazole increasing prolactin secretion from the anterior pituitary"],
      c: 2,
      r: "<b>CYP450-dependent gonadal steroid synthesis inhibition:</b> Ketoconazole's CYP450 inhibition extends beyond fungal cells — it also inhibits human steroidogenic CYP enzymes, reducing gonadal testosterone synthesis. This antiandrogenic effect causes gynecomastia and impotence.<br><br>• Prolactin is NOT involved.<br>• This is why Ketoconazole is less preferred for systemic use compared to other azoles."
    },
    {
      type: "mcq",
      q: "Griseofulvin therapy requires regular monitoring of which organ system during prolonged use?",
      o: ["Kidneys — for nephrotoxicity and electrolyte imbalance", "Liver — for hepatotoxicity and elevated transaminases", "Bone marrow — for dose-dependent suppression", "Eyes — for retinal pigment changes"],
      c: 1,
      r: "<b>Liver — hepatotoxicity and elevated transaminases:</b> Griseofulvin is hepatotoxic with prolonged use, requiring periodic liver function tests. CNS effects (confusion, fatigue, vertigo) and hypersensitivity reactions are also documented.<br><br>• Nephrotoxicity + electrolyte imbalance = characteristic of Amphotericin B<br>• Bone marrow suppression at high doses = associated with Flucytosine<br>• Retinal changes = not a known Griseofulvin effect"
    },
    {
      type: "mcq",
      q: "Which statement about Flucytosine's toxicity profile is most accurate?",
      o: ["Flucytosine is highly nephrotoxic and must be dose-adjusted in all patients", "Flucytosine is relatively nontoxic but can cause bone marrow suppression at high doses", "Flucytosine consistently causes acute infusion reactions within the first hour", "Flucytosine causes irreversible hepatic fibrosis with prolonged use"],
      c: 1,
      r: "<b>Relatively nontoxic — bone marrow suppression at high doses:</b> Flucytosine has a favorable toxicity profile compared to other systemic antifungals. Bone marrow suppression and alopecia tend to occur only at high doses.<br><br>• It is NOT nephrotoxic itself — however, renal impairment from co-administered Amphotericin B can elevate Flucytosine levels, indirectly increasing toxicity risk. Monitor trough levels."
    },
    {
      type: "mcq",
      q: "A patient with AIDS develops cryptococcal meningitis. Which drug is preferred for maintenance therapy, and why?",
      o: ["Amphotericin B — broadest spectrum and penetrates CSF adequately", "Fluconazole — the only azole achieving therapeutic CSF concentrations", "Itraconazole — preferred due to its IV formulation for systemic use", "Voriconazole — drug of choice for all CNS fungal infections"],
      c: 1,
      r: "<b>Fluconazole — only azole with CSF penetration:</b> Fluconazole is the azole of choice for cryptococcal meningitis maintenance because it is the ONLY azole that reliably crosses the blood-brain barrier.<br><br>• Amphotericin B is used for INDUCTION therapy but not long-term maintenance — too toxic.<br>• Itraconazole has poor CSF penetration.<br>• Voriconazole is indicated specifically for aspergillosis, not cryptococcal meningitis."
    },
    {
      type: "mcq",
      q: "Voriconazole is preferred over other azoles for invasive pulmonary aspergillosis primarily because:",
      o: ["It is the only antifungal with any activity against Aspergillus species", "It is fungicidal against Aspergillus and achieves superior clinical outcomes", "It has no CYP450 interactions, making it safer than other azoles", "It can be administered intrathecally for CNS involvement"],
      c: 1,
      r: "<b>Superior fungicidal efficacy and clinical outcomes:</b> Voriconazole is the drug of choice for invasive aspergillosis due to superior efficacy compared to Amphotericin B in clinical trials.<br><br>• ALL azoles inhibit CYP450 — Voriconazole is NOT exempt from drug interactions.<br>• Intrathecal use is NOT a standard feature of Voriconazole therapy.<br>• Other antifungals (e.g., Amphotericin B, Caspofungin) also have activity against Aspergillus."
    },
    {
      type: "mcq",
      q: "A patient with dermatophyte nail infection failed a 6-month Griseofulvin course. Which drug is most appropriate next?",
      o: ["Fluconazole IV — systemic azole for deeper penetration", "Amphotericin B — broadest antifungal spectrum", "Terbinafine oral — drug of choice for dermatophyte onychomycosis", "Nystatin topical — polyene active against dermatophytes"],
      c: 2,
      r: "<b>Terbinafine oral:</b> The current drug of choice for dermatophyte onychomycosis — more effective, better tolerated, and requiring a shorter course than Griseofulvin or Itraconazole.<br><br>• Nystatin has NO activity against dermatophytes — it is active against Candida only.<br>• Amphotericin B is reserved for severe systemic infections.<br>• IV Fluconazole is not indicated for dermatophyte nail infections."
    },
    {
      type: "mcq",
      q: "Nystatin is active against Candida but is never used systemically. What is the primary reason?",
      o: ["Nystatin resistance develops within 48 hours of systemic exposure", "Nystatin is too toxic for parenteral administration", "Nystatin is inactivated by gastric acid when given orally", "Nystatin cannot reach therapeutic plasma concentrations at any dose"],
      c: 1,
      r: "<b>Too toxic for parenteral administration:</b> Nystatin shares Amphotericin B's mechanism (binds ergosterol, forms pores) but has a far too narrow therapeutic window for systemic IV use — it is NOT weaker, simply unsafe parenterally.<br><br>• Used topically for oropharyngeal ('swish and swallow') and vaginal candidiasis where local concentrations are effective and systemic absorption is minimal."
    },
    {
      type: "mcq",
      q: "Caspofungin is prescribed as second-line therapy for esophageal candidiasis after Amphotericin B failure. Which statement about Caspofungin is correct?",
      o: ["Caspofungin is effective orally and does not require IV administration", "Caspofungin works by binding ergosterol in the fungal cell membrane", "Caspofungin disrupts the fungal cell wall by inhibiting β-(1,3)-glucan synthase", "Caspofungin is the drug of choice for cryptococcal meningitis due to CSF penetration"],
      c: 2,
      r: "<b>Inhibits β-(1,3)-glucan synthase → disrupts fungal cell wall:</b> Caspofungin is an echinocandin — the only antifungal class targeting the cell wall. It must be given IV. It targets the cell wall, NOT the membrane.<br><br>• Binding ergosterol = Amphotericin B and Nystatin (polyenes)<br>• CSF penetration for meningitis = Fluconazole<br>• Oral administration is NOT possible with Caspofungin (large cyclic peptide)"
    },
    {
      type: "mcq",
      q: "A patient prescribed Itraconazole for systemic blastomycosis is also taking Warfarin. The nurse anticipates which pharmacokinetic interaction?",
      o: ["Itraconazole induces CYP3A4, accelerating Warfarin metabolism and reducing INR", "Itraconazole inhibits hepatic CYP450, increasing Warfarin plasma levels and INR", "Itraconazole displaces Warfarin from plasma proteins, causing renal clearance", "Itraconazole has no clinically significant interaction with Warfarin"],
      c: 1,
      r: "<b>CYP450 inhibition → ↑ Warfarin levels → ↑ INR → bleeding risk:</b> All azoles, including Itraconazole, are CYP450 INHIBITORS (not inducers). Warfarin is metabolized by CYP2C9/3A4, so co-administration elevates Warfarin concentrations and increases INR and bleeding risk.<br><br>• Monitor INR closely when any azole is added to Warfarin therapy.<br>• Fluconazole = least CYP450 inhibitor; Ketoconazole = most."
    }
  ]

};
