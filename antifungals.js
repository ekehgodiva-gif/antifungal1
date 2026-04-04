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
      r: [
        "Incorrect. Itraconazole cannot cross the blood-brain barrier — it has poor CSF penetration and is used for systemic blastomycosis instead.",
        "Incorrect. Ketoconazole does not penetrate the CSF and is primarily known for antiandrogenic side effects (gynecomastia, impotence).",
        "Correct! Fluconazole is the ONLY azole that crosses the blood-brain barrier and achieves therapeutic CSF concentrations — making it the drug of choice for cryptococcal meningitis.",
        "Incorrect. Voriconazole is the drug of choice for invasive aspergillosis, not meningitis — it lacks reliable CSF penetration."
      ]
    },
    {
      type: "mcq",
      q: "What is the primary mechanism of action of Amphotericin B?",
      o: ["Inhibition of fungal mitosis by disrupting the mitotic spindle", "Binding to ergosterol to form pores that allow leakage of cellular contents", "Inhibition of β-1,3-glucan synthase to disrupt cell wall synthesis", "Inhibition of squalene epoxidase to block ergosterol biosynthesis"],
      c: 1,
      r: [
        "Incorrect. Disrupting the mitotic spindle is the mechanism of Griseofulvin, not Amphotericin B.",
        "Correct! Amphotericin B is a polyene macrolide that physically binds ergosterol in the fungal membrane, forming pores that allow cellular contents to leak out — making it fungicidal with the broadest antifungal spectrum.",
        "Incorrect. Inhibiting β-1,3-glucan synthase is the mechanism of Caspofungin (an echinocandin), which targets the cell wall.",
        "Incorrect. Inhibiting squalene epoxidase is the mechanism of Terbinafine (an allylamine)."
      ]
    },
    {
      type: "mcq",
      q: "A patient receiving IV Amphotericin B experiences chills, fever, and dyspnea 3 hours into treatment. The nurse identifies this as:",
      o: ["Long-term nephrotoxicity", "A normal, non-threatening side effect of all antifungals", "An acute reaction caused by the release of IL and TNF", "A sign of immediate liver failure"],
      c: 2,
      r: [
        "Incorrect. Nephrotoxicity is a long-term complication (azotemia, ↓GFR, hypokalemia) — not an acute reaction occurring during infusion.",
        "Incorrect. This is NOT normal or non-threatening — it is a serious acute infusion reaction specific to Amphotericin B, not all antifungals.",
        "Correct! The 'shake and bake' reaction — fever, chills, rigors, dyspnea — occurs 2–5 hours after IV Amphotericin B due to cytokine release (IL and TNF). Premedicate with acetaminophen, antihistamines, and meperidine.",
        "Incorrect. Liver failure is not an acute reaction to Amphotericin B. Hepatotoxicity is associated with azoles, not polyenes."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal drug is classified as an antimetabolite and is converted to 5-fluorouracil (5-FU) within the fungal cell?",
      o: ["Caspofungin", "Flucytosine", "Griseofulvin", "Terbinafine"],
      c: 1,
      r: [
        "Incorrect. Caspofungin is an echinocandin that inhibits β-1,3-glucan synthase (cell wall target), not an antimetabolite.",
        "Correct! Flucytosine is a fluorinated pyrimidine prodrug — fungal cytosine deaminase converts it to 5-FU inside the cell, which then inhibits nucleic acid synthesis. Human cells lack significant cytosine deaminase activity.",
        "Incorrect. Griseofulvin is a heterocyclic benzofuran that disrupts the mitotic spindle — not an antimetabolite.",
        "Incorrect. Terbinafine is an allylamine that inhibits squalene epoxidase — not related to nucleic acid synthesis."
      ]
    },
    {
      type: "mcq",
      q: "A patient is diagnosed with invasive aspergillosis of the lung. Which drug is the treatment of choice?",
      o: ["Nystatin", "Voriconazole", "Ketoconazole", "Flucytosine"],
      c: 1,
      r: [
        "Incorrect. Nystatin is topical only — too toxic for systemic use. It treats oral/vaginal candidiasis, not deep lung infections.",
        "Correct! Voriconazole is the established drug of choice for invasive pulmonary aspergillosis. Remember: 'V for Very serious lung infection.'",
        "Incorrect. Ketoconazole is not indicated for aspergillosis and is mostly avoided systemically due to antiandrogenic side effects.",
        "Incorrect. Flucytosine is never used alone (rapid resistance) and is not a first-line agent for aspergillosis."
      ]
    },
    {
      type: "mcq",
      q: "Which statement regarding the pharmacokinetics of Griseofulvin is correct?",
      o: ["It is administered topically for systemic infections", "Absorption is significantly decreased when taken with fatty foods", "It concentrates specifically in keratinized tissues like skin, hair, and nails", "It has a very short half-life of only 2 hours"],
      c: 2,
      r: [
        "Incorrect. Griseofulvin is given ORALLY, not topically. It is absorbed from the GI tract and distributed to keratinized tissues.",
        "Incorrect. Absorption is actually INCREASED by fatty food, not decreased. Always advise patients to take it with a fatty meal.",
        "Correct! Griseofulvin accumulates in keratin structures (skin, hair, nails) — exactly where dermatophytes live. This is why treatment takes months for nails.",
        "Incorrect. Griseofulvin's half-life is 24 hours, not 2 hours."
      ]
    },
    {
      type: "mcq",
      q: "A male patient taking Ketoconazole reports new-onset breast enlargement and decreased libido. The nurse explains this is due to:",
      o: ["Hepatotoxicity increasing estrogen levels", "Antiandrogenic effects caused by decreased gonadal steroid synthesis", "Inhibition of the fungal cell wall synthesis", "Transient visual disturbances affecting hormones"],
      c: 1,
      r: [
        "Incorrect. While azoles can cause hepatotoxicity, liver damage does not directly cause gynecomastia through estrogen elevation.",
        "Correct! Ketoconazole inhibits CYP450-dependent gonadal steroid synthesis, reducing testosterone production → gynecomastia and impotence. Memory: 'KETO KILLS androgens.'",
        "Incorrect. Ketoconazole inhibits CYP51 (ergosterol synthesis), not cell wall synthesis. Cell wall inhibition is the mechanism of Caspofungin.",
        "Incorrect. Visual disturbances are associated with Voriconazole (V = Visual), not Ketoconazole, and are unrelated to hormonal effects."
      ]
    },
    {
      type: "mcq",
      q: "Caspofungin belongs to which class of antifungal drugs?",
      o: ["Allylamines", "Polyenes", "Echinocandins", "Triazoles"],
      c: 2,
      r: [
        "Incorrect. Allylamines include Terbinafine, Naftifine, and Butenafine — they inhibit squalene epoxidase.",
        "Incorrect. Polyenes include Amphotericin B and Nystatin — they bind ergosterol and form membrane pores.",
        "Correct! Caspofungin, Anidulafungin, and Micafungin are Echinocandins. They inhibit β-1,3-glucan synthase, targeting the fungal cell wall — unique among antifungals since human cells have no cell wall.",
        "Incorrect. Triazoles include Fluconazole, Itraconazole, and Voriconazole — they inhibit CYP51 (14α-demethylase)."
      ]
    },
    {
      type: "mcq",
      q: "What is the mechanism of action of Terbinafine?",
      o: ["Inhibits squalene epoxidase, leading to toxic squalene accumulation", "Binds to the mitotic spindle to stop fungal mitosis", "Inhibits fungal cytochrome P450 (14α-demethylase)", "Disrupts DNA synthesis by acting as a pyrimidine analog"],
      c: 0,
      r: [
        "Correct! Terbinafine (an allylamine) inhibits squalene epoxidase — squalene accumulates to toxic levels, increasing membrane permeability and killing the fungal cell. This makes it fungicidal.",
        "Incorrect. Binding microtubules to stop mitosis is the mechanism of Griseofulvin, not Terbinafine.",
        "Incorrect. Inhibiting CYP51 (14α-demethylase) is the mechanism of Azoles (Fluconazole, Ketoconazole, etc.).",
        "Incorrect. Acting as a pyrimidine analog is the mechanism of Flucytosine, which is converted to 5-FU inside fungal cells."
      ]
    },
    {
      type: "mcq",
      q: "Why is Flucytosine almost always used in combination with other antifungal agents?",
      o: ["To prevent hepatotoxicity", "Because it is too weak to work alone", "To prevent the rapid development of fungal resistance", "To increase its absorption in the GI tract"],
      c: 2,
      r: [
        "Incorrect. Combination therapy is not about preventing hepatotoxicity — Flucytosine's main toxicity is bone marrow suppression, not liver damage.",
        "Incorrect. Flucytosine is not weak — it is effective against fungi but resistance develops too rapidly when used alone.",
        "Correct! Fungi develop resistance to Flucytosine very quickly as monotherapy. Combining with Amphotericin B is synergistic — Ampho B disrupts the membrane, allowing more Flucytosine to enter the cell.",
        "Incorrect. Flucytosine already has good oral absorption — combination therapy is about preventing resistance, not improving absorption."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal medication is strictly limited to topical use because it is too toxic for systemic administration?",
      o: ["Fluconazole", "Amphotericin B", "Nystatin", "Itraconazole"],
      c: 2,
      r: [
        "Incorrect. Fluconazole is a systemic triazole given orally or IV — it is not limited to topical use.",
        "Incorrect. Amphotericin B IS given systemically (IV) despite its toxicity — it has the broadest spectrum and is essential for severe infections.",
        "Correct! Nystatin shares Amphotericin B's mechanism (polyene, binds ergosterol, forms pores) but is too toxic for parenteral use. It is NOT weaker — simply unsafe IV. Used topically for oral/vaginal candidiasis.",
        "Incorrect. Itraconazole is a systemic triazole used orally for blastomycosis and other deep infections."
      ]
    },
    {
      type: "mcq",
      q: "A nurse reviews lab results for a patient on long-term Amphotericin B therapy. Which finding is a priority concern?",
      o: ["Serum Potassium of 2.8 mEq/L (Hypokalemia)", "Transient blurry vision", "Red discoloration of urine", "Increased appetite"],
      c: 0,
      r: [
        "Correct! Amphotericin B nephrotoxicity causes electrolyte wasting — K⁺ of 2.8 mEq/L (normal 3.5–5.0) is dangerously low and can cause fatal cardiac arrhythmias. This is the priority concern.",
        "Incorrect. Transient visual disturbances are associated with Voriconazole, not Amphotericin B.",
        "Incorrect. Red urine discoloration is not a known effect of Amphotericin B — it is associated with rifampin and some other drugs.",
        "Incorrect. Increased appetite is not a documented adverse effect of Amphotericin B therapy."
      ]
    },
    {
      type: "mcq",
      q: "Which drug works by inhibiting the synthesis of the fungal cell WALL rather than the cell membrane?",
      o: ["Amphotericin B", "Fluconazole", "Caspofungin", "Nystatin"],
      c: 2,
      r: [
        "Incorrect. Amphotericin B targets the cell MEMBRANE by binding ergosterol and forming pores — not the cell wall.",
        "Incorrect. Fluconazole targets ergosterol SYNTHESIS by inhibiting CYP51 — it affects the membrane pathway, not the cell wall.",
        "Correct! Caspofungin is the only commonly tested antifungal targeting the cell WALL (β-1,3-glucan synthase). Human cells have no cell wall → highly selective.",
        "Incorrect. Nystatin targets the cell MEMBRANE (same mechanism as Amphotericin B — binds ergosterol, forms pores)."
      ]
    },
    {
      type: "mcq",
      q: "A patient is prescribed Voriconazole. The nurse should instruct the patient to expect which unique, transient side effect?",
      o: ["Ringing in the ears (tinnitus)", "Visual disturbances", "Orange-colored sweat", "Extremity numbness"],
      c: 1,
      r: [
        "Incorrect. Tinnitus is not a documented adverse effect of Voriconazole or other azoles.",
        "Correct! Voriconazole specifically causes transient visual disturbances — blurred vision, altered color perception, photophobia. Memory: 'V for Voriconazole = V for Visual.'",
        "Incorrect. Orange discoloration of body fluids is associated with rifampin, not Voriconazole.",
        "Incorrect. Peripheral neuropathy/numbness is not a characteristic adverse effect of Voriconazole."
      ]
    },
    {
      type: "mcq",
      q: "Which drug is the preferred treatment for onychomycosis because it is more effective and better tolerated than Griseofulvin?",
      o: ["Terbinafine", "Flucytosine", "Ketoconazole", "Nystatin"],
      c: 0,
      r: [
        "Correct! Terbinafine is the drug of choice for dermatophyte onychomycosis — more effective, better tolerated, and requires a shorter treatment course than Griseofulvin.",
        "Incorrect. Flucytosine is an antimetabolite used for systemic fungal infections (always in combination) — not for nail infections.",
        "Incorrect. Ketoconazole is not first-line for onychomycosis and has significant antiandrogenic and hepatotoxic side effects.",
        "Incorrect. Nystatin is topical only and active against Candida — it has no activity against dermatophytes that cause nail infections."
      ]
    },
    {
      type: "mcq",
      q: "Azole antifungals work by inhibiting which specific enzyme?",
      o: ["Squalene epoxidase", "14α-demethylase (CYP51)", "Thymidylate synthase", "Glucan synthase"],
      c: 1,
      r: [
        "Incorrect. Squalene epoxidase is the target of allylamines (Terbinafine, Naftifine), not azoles.",
        "Correct! Azoles inhibit 14α-demethylase (CYP51), blocking conversion of lanosterol to ergosterol. They also inhibit human hepatic CYP450 — the basis for drug interactions.",
        "Incorrect. Thymidylate synthase is involved in nucleic acid metabolism — it is relevant to Flucytosine's mechanism (via 5-FU), not azoles.",
        "Incorrect. Glucan synthase (β-1,3-glucan synthase) is the target of echinocandins (Caspofungin), not azoles."
      ]
    },
    {
      type: "mcq",
      q: "What is the primary reason for preparing Amphotericin B in a liposomal (lipid-enclosed) form?",
      o: ["To make the drug taste better for oral administration", "To reduce systemic toxicity and improve targeting to fungal cells", "To allow the drug to be excreted more quickly by the kidneys", "To prevent the drug from binding to plasma proteins"],
      c: 1,
      r: [
        "Incorrect. Amphotericin B cannot be given orally at all (polar compound, not absorbed from GIT) — liposomal form is still IV only.",
        "Correct! Lipid microspheres preferentially bind ergosterol in fungal membranes over cholesterol in human membranes. This delivers the drug more selectively to fungi and greatly reduces nephrotoxicity.",
        "Incorrect. The liposomal form does not speed up renal excretion — the drug still has a 15-day half-life and dialysis remains ineffective.",
        "Incorrect. Amphotericin B is 90% protein-bound regardless of formulation — the liposomal form reduces kidney toxicity, not protein binding."
      ]
    },
    {
      type: "mcq",
      q: "Which drug is a 'Heterocyclic Benzofuran' that disrupts fungal mitosis?",
      o: ["Griseofulvin", "Amphotericin B", "Clotrimazole", "Flucytosine"],
      c: 0,
      r: [
        "Correct! Griseofulvin is structurally a heterocyclic benzofuran. It binds microtubules → prevents mitotic spindle formation → arrests fungal mitosis. Concentrates in keratin and requires long-term oral therapy.",
        "Incorrect. Amphotericin B is a polyene macrolide — it binds ergosterol and forms membrane pores, not related to mitosis.",
        "Incorrect. Clotrimazole is an imidazole azole — it inhibits CYP51 (14α-demethylase), not mitosis.",
        "Incorrect. Flucytosine is a fluorinated pyrimidine antimetabolite — it inhibits nucleic acid synthesis, not mitosis."
      ]
    },
    {
      type: "mcq",
      q: "A patient is taking an azole antifungal alongside several other medications. Why is the nurse concerned about drug-drug interactions?",
      o: ["Azoles speed up the metabolism of all other drugs", "Azoles inhibit hepatic CYP450 enzymes, increasing serum concentration of other drugs", "Azoles prevent the absorption of all vitamins", "Azoles cause other drugs to become inactive in the stomach"],
      c: 1,
      r: [
        "Incorrect. Azoles SLOW DOWN metabolism — they are CYP450 INHIBITORS, not inducers.",
        "Correct! Azoles inhibit human hepatic CYP450 → slower drug metabolism → toxic accumulation of warfarin (→ bleeding), cyclosporine (→ toxicity), phenytoin (→ toxicity). Fluconazole inhibits least; Ketoconazole the most.",
        "Incorrect. Azoles do not affect vitamin absorption — the concern is about drug metabolism via CYP450.",
        "Incorrect. Azoles do not inactivate other drugs in the stomach — the interaction occurs at the hepatic level."
      ]
    },
    {
      type: "mcq",
      q: "Which of the following is an example of an opportunistic systemic mycosis commonly seen in immunocompromised patients?",
      o: ["Tinea pedis (Athlete's foot)", "Tinea capitis (Scalp ringworm)", "Cryptococcosis", "Vulvovaginal candidiasis"],
      c: 2,
      r: [
        "Incorrect. Tinea pedis is a superficial dermatophyte infection of the feet — not a systemic mycosis.",
        "Incorrect. Tinea capitis is a superficial dermatophyte infection of the scalp — not a systemic mycosis.",
        "Correct! Cryptococcosis is a deep (systemic) mycosis caused by Cryptococcus neoformans — primarily in immunocompromised patients (HIV, transplant). It can cause meningitis treated with Fluconazole.",
        "Incorrect. Vulvovaginal candidiasis is a superficial mucosal infection — not a systemic mycosis."
      ]
    },
    {
      type: "mcq",
      q: "A patient is prescribed Itraconazole. The nurse should advise the patient to avoid taking which over-the-counter medication simultaneously?",
      o: ["Ibuprofen", "Omeprazole", "Diphenhydramine", "Guaifenesin"],
      c: 1,
      r: [
        "Incorrect. Ibuprofen (an NSAID) does not significantly interfere with Itraconazole absorption or efficacy — no clinically significant interaction exists.",
        "Correct! Omeprazole is a proton pump inhibitor (PPI) that raises gastric pH. Itraconazole requires an acidic stomach for optimal absorption — PPIs significantly reduce its absorption and therapeutic efficacy.",
        "Incorrect. Diphenhydramine (an antihistamine) does not have a clinically significant interaction with Itraconazole absorption or metabolism.",
        "Incorrect. Guaifenesin (an expectorant) does not interact with Itraconazole absorption or metabolism — no clinical concern."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal agent inhibits the fungal enzyme squalene epoxidase similarly to Terbinafine?",
      o: ["Ketoconazole", "Naftifine", "Amphotericin B", "Anidulafungin"],
      c: 1,
      r: [
        "Incorrect. Ketoconazole is an imidazole azole that inhibits CYP51 (14α-demethylase) — a completely different enzyme and mechanism from squalene epoxidase.",
        "Correct! Naftifine is an allylamine, the same drug class as Terbinafine. Both inhibit squalene epoxidase, leading to toxic squalene accumulation and ergosterol deficiency.",
        "Incorrect. Amphotericin B is a polyene macrolide that directly binds ergosterol already in the membrane — it does not inhibit any biosynthetic enzyme.",
        "Incorrect. Anidulafungin is an echinocandin that inhibits β-1,3-glucan synthase (cell wall target) — completely unrelated to squalene epoxidase."
      ]
    },
    {
      type: "mcq",
      q: "A patient with heart failure needs antifungal therapy. Which drug should be used with extreme caution due to potential negative inotropic effects?",
      o: ["Fluconazole", "Itraconazole", "Nystatin", "Clotrimazole"],
      c: 1,
      r: [
        "Incorrect. Fluconazole does not have documented negative inotropic effects and is generally safer in patients with heart failure.",
        "Correct! Itraconazole has been associated with negative inotropic effects and should be avoided or used with extreme caution in patients with ventricular dysfunction or congestive heart failure.",
        "Incorrect. Nystatin is topical only — it has no systemic absorption and therefore no cardiac effects.",
        "Incorrect. Clotrimazole is used topically and does not reach systemic circulation — no cardiac effects."
      ]
    },
    {
      type: "mcq",
      q: "What is the clinical significance of the 'test dose' administered before a full infusion of Amphotericin B?",
      o: ["To determine if the fungus is sensitive to the medication", "To assess the patient's renal clearance of the drug", "To identify potential severe anaphylactic or febrile reactions", "To prime the IV tubing to prevent air embolisms"],
      c: 2,
      r: [
        "Incorrect. The test dose does NOT assess fungal sensitivity — that requires culture and sensitivity testing. The test dose monitors the PATIENT's reaction to the drug.",
        "Incorrect. Renal clearance is not assessed via a test dose. Nephrotoxicity is a long-term concern monitored with serum creatinine and BUN over time.",
        "Correct! A small test dose (e.g., 1 mg IV over 20–30 minutes) monitors for life-threatening hypersensitivity or severe febrile reactions before the full therapeutic dose is administered.",
        "Incorrect. Priming IV tubing is a standard nursing procedure for all IV medications — it has nothing to do with the pharmacological purpose of a test dose."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal is commonly used as a 'swish and swallow' or 'swish and spit' treatment for oral candidiasis (thrush)?",
      o: ["Griseofulvin", "Voriconazole", "Nystatin", "Flucytosine"],
      c: 2,
      r: [
        "Incorrect. Griseofulvin is given orally for dermatophyte infections of skin, hair, and nails — it is not used for Candida or local oral treatment.",
        "Incorrect. Voriconazole is a systemic triazole used IV or orally for invasive aspergillosis — not used as a topical 'swish and swallow' preparation.",
        "Correct! Nystatin is the classic 'swish and swallow/spit' treatment — not absorbed from the GI tract, providing direct contact with oral mucosa to treat thrush locally and safely.",
        "Incorrect. Flucytosine is a systemic antimetabolite used in combination with Amphotericin B for serious systemic infections — never used as a topical oral treatment."
      ]
    },
    {
      type: "mcq",
      q: "A patient on Flucytosine develops a sore throat, fever, and bruising. Which laboratory test should the nurse anticipate immediately?",
      o: ["Serum Albumin", "Complete Blood Count (CBC) with differential", "Prothrombin Time (PT)", "Urinalysis"],
      c: 1,
      r: [
        "Incorrect. Serum albumin assesses nutritional status and liver synthetic function — it is not relevant to the acute symptoms of bone marrow suppression.",
        "Correct! Sore throat + fever + bruising = classic triad of bone marrow suppression. CBC with differential confirms leukopenia (→ infection/fever), thrombocytopenia (→ bruising), and anemia — Flucytosine's most serious adverse effect at high doses.",
        "Incorrect. PT assesses the coagulation cascade (relevant for warfarin monitoring). The bruising here is from thrombocytopenia (low platelets), not a clotting factor deficiency.",
        "Incorrect. Urinalysis is not relevant to these symptoms. Nephrotoxicity monitoring would be relevant for Amphotericin B, not Flucytosine."
      ]
    },
    {
      type: "mcq",
      q: "During Caspofungin administration, the patient develops localized swelling, pruritus, and facial flushing. The nurse recognizes this is likely due to:",
      o: ["A secondary bacterial infection", "Histamine release", "Rapid liver metabolism", "Overdose of the medication"],
      c: 1,
      r: [
        "Incorrect. These are acute infusion-related symptoms (flushing, pruritus, swelling) — not signs of bacterial infection, which would present with systemic signs over time.",
        "Correct! Echinocandins like Caspofungin can trigger histamine release during IV infusion, causing flushing, rash, pruritus, and swelling — similar to 'Red Man Syndrome.' Slowing the infusion rate helps manage this.",
        "Incorrect. Liver metabolism does not cause acute infusion reactions like flushing and pruritus. Hepatic effects would present as elevated transaminases over time.",
        "Incorrect. These are histamine-mediated reactions that can occur at therapeutic doses — they are not dose-dependent overdose effects."
      ]
    },
    {
      type: "mcq",
      q: "Which of the following best describes a key difference between fungal cells and human cells relevant to antifungal therapy?",
      o: ["Human cells contain chitin; fungal cells do not", "Fungal cells contain ergosterol; human cells contain cholesterol", "Fungal cells contain β-1,3-glucan; human cells do not have a cell wall", "Human cells have a rigid wall made of peptidoglycan"],
      c: 2,
      r: [
        "Incorrect. This is reversed — FUNGI contain chitin in their cell walls. Human cells have no cell wall or chitin whatsoever.",
        "Partially correct but not the BEST answer. While ergosterol vs cholesterol is a real difference, option C describes the more therapeutically exploitable difference — the complete absence of a cell wall in human cells (basis for Echinocandin selectivity).",
        "Correct! Human cells have NO cell wall at all, while fungi have a β-1,3-glucan-containing cell wall. This absolute difference is the basis for Echinocandin selectivity — the most therapeutically exploitable distinction.",
        "Incorrect. Peptidoglycan is found in BACTERIAL cell walls, not human cells. Human cells have no cell wall of any kind."
      ]
    },
    {
      type: "mcq",
      q: "A patient with a tinea skin infection is being treated with a fungistatic agent. This infection represents which classification of mycosis?",
      o: ["Opportunistic infection", "Dermatomycosis", "Subcutaneous mycosis", "Systemic mycosis"],
      c: 1,
      r: [
        "Incorrect. Tinea infections can occur in immunocompetent individuals — they are not opportunistic. Opportunistic mycoses (like Cryptococcosis) primarily affect immunocompromised patients.",
        "Correct! Tinea infections (ringworm) of the skin, hair, and nails are dermatomycoses — superficial fungal infections caused by dermatophytes, the most common type of superficial mycosis.",
        "Incorrect. Subcutaneous mycoses involve deeper tissues beneath the skin (e.g., sporotrichosis) — tinea is a superficial dermatophyte infection limited to keratinized tissue.",
        "Incorrect. Systemic mycoses involve internal organs (e.g., blastomycosis, aspergillosis) — tinea is a superficial infection, not systemic."
      ]
    },
    {
      type: "mcq",
      q: "Which azole is available in a topical formulation for vulvovaginal candidiasis?",
      o: ["Miconazole", "Voriconazole", "Flucytosine", "Griseofulvin"],
      c: 0,
      r: [
        "Correct! Miconazole is an imidazole azole (2 nitrogen atoms) widely available in topical creams and vaginal suppositories for vulvovaginal candidiasis.",
        "Incorrect. Voriconazole is a systemic triazole used IV/orally for invasive aspergillosis — not available as a topical vaginal formulation.",
        "Incorrect. Flucytosine is NOT an azole — it is a fluorinated pyrimidine antimetabolite used systemically in combination therapy, never topically for vaginal infections.",
        "Incorrect. Griseofulvin is NOT an azole — it is a heterocyclic benzofuran used orally for dermatophyte infections. It has no activity against Candida."
      ]
    },
    {
      type: "mcq",
      q: "What is the primary reason Amphotericin B is referred to as 'Ampho-terrible' in clinical practice?",
      o: ["It is ineffective against most molds", "High incidence of infusion-related reactions and nephrotoxicity", "It must be taken for at least two years to work", "It causes permanent loss of vision"],
      c: 1,
      r: [
        "Incorrect. Amphotericin B actually has the BROADEST antifungal spectrum — it is highly effective against molds, yeasts, and dimorphic fungi. 'Terrible' refers to its toxicity, not its efficacy.",
        "Correct! 'Ampho-terrible' reflects nearly universal nephrotoxicity (azotemia, hypokalemia, ↓GFR) and acute infusion reactions (fever, chills, rigors — the 'shake and bake' reaction). Despite this, it remains essential for severe systemic infections.",
        "Incorrect. Treatment duration varies by infection but two years is not required. Amphotericin B courses typically last weeks to months, not years.",
        "Incorrect. Permanent vision loss is not associated with Amphotericin B. Transient visual disturbances are a side effect of Voriconazole (V = Visual), not Amphotericin B."
      ]
    },
    {
      type: "mcq",
      q: "A patient is taking Griseofulvin for toenail onychomycosis. What duration of treatment should the nurse inform the patient to expect?",
      o: ["2 to 4 days", "1 to 2 weeks", "Several months (6–12 months)", "Exactly one year"],
      c: 2,
      r: [
        "Incorrect. Days are far too short — antifungal nail infections require months of treatment. Griseofulvin works by incorporating into new keratin as it grows.",
        "Incorrect. 1–2 weeks is appropriate for superficial skin tinea, but nail infections require months due to the slow rate of nail growth and keratin turnover.",
        "Correct! Griseofulvin must be taken until all infected nail is replaced by healthy, drug-containing keratin. Toenails grow very slowly — requiring 6–12 months minimum.",
        "Incorrect. While some cases may approach a year, the duration is not exactly one year — it depends on infection severity and nail growth rate, typically 6–12 months."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal drug works by interfering with fungal mitosis?",
      o: ["Terbinafine", "Griseofulvin", "Fluconazole", "Nystatin"],
      c: 1,
      r: [
        "Incorrect. Terbinafine is an allylamine that inhibits squalene epoxidase — it affects the ergosterol synthesis pathway, not mitosis.",
        "Correct! Griseofulvin is the ONLY antifungal that targets mitosis — it binds microtubules → prevents spindle formation → arrests fungal cell division. All others target membranes, ergosterol synthesis, nucleic acids, or the cell wall.",
        "Incorrect. Fluconazole is a triazole that inhibits CYP51 (14α-demethylase), blocking ergosterol synthesis — unrelated to mitosis.",
        "Incorrect. Nystatin is a polyene macrolide that binds ergosterol and forms membrane pores — it targets the cell membrane, not mitotic machinery."
      ]
    },
    {
      type: "mcq",
      q: "A nurse caring for a patient on Itraconazole should immediately report which symptom as a sign of potential liver injury?",
      o: ["Increased energy levels", "Dark urine and clay-colored stools", "Dry mouth and thirst", "Increased urination frequency"],
      c: 1,
      r: [
        "Incorrect. Increased energy is not a sign of liver injury — hepatotoxicity presents with fatigue, malaise, and jaundice, not increased energy.",
        "Correct! Dark urine (excess conjugated bilirubin) and clay-colored (acholic) stools are classic signs of hepatic dysfunction and obstructive jaundice — all azoles carry hepatotoxicity risk requiring LFT monitoring.",
        "Incorrect. Dry mouth and thirst suggest dehydration or diabetes — not hepatotoxicity. These are not expected adverse effects of azole therapy.",
        "Incorrect. Polyuria is not associated with azole hepatotoxicity. Nephrotoxicity with urinary changes is characteristic of Amphotericin B, not azoles."
      ]
    },
    {
      type: "mcq",
      q: "Which drug is categorized as an Allylamine antifungal?",
      o: ["Terbinafine", "Micafungin", "Clotrimazole", "Amphotericin B"],
      c: 0,
      r: [
        "Correct! Terbinafine is an allylamine — along with Naftifine and Butenafine. Allylamines inhibit squalene epoxidase, causing toxic squalene accumulation. Terbinafine is the drug of choice for dermatophyte onychomycosis.",
        "Incorrect. Micafungin is an echinocandin (same class as Caspofungin and Anidulafungin) — it inhibits β-1,3-glucan synthase in the fungal cell wall.",
        "Incorrect. Clotrimazole is an imidazole azole (2 nitrogen atoms) — it inhibits CYP51 (14α-demethylase) and is used topically.",
        "Incorrect. Amphotericin B is a polyene macrolide — it binds ergosterol directly and forms membrane pores, a completely different mechanism from allylamines."
      ]
    },
    {
      type: "mcq",
      q: "A patient is receiving Amphotericin B. To minimize nephrotoxicity, the nurse should anticipate which intervention?",
      o: ["Restricting fluid intake to 1 liter per day", "Administering a 0.9% Normal Saline bolus before the infusion", "Giving the medication as a rapid IV push", "Ensuring the patient takes an antacid before the dose"],
      c: 1,
      r: [
        "Incorrect. Fluid RESTRICTION would WORSEN nephrotoxicity — adequate hydration is essential to protect the kidneys and maintain renal perfusion.",
        "Correct! 'Sodium loading' with a 0.9% NS bolus before Amphotericin B infusion is standard nephroprotective practice — it hydrates the kidneys and reduces tubular damage from the drug.",
        "Incorrect. Rapid IV push is DANGEROUS — Amphotericin B must be infused slowly over 2–6 hours to minimize infusion reactions and cardiac toxicity.",
        "Incorrect. Antacids are not relevant to Amphotericin B (IV drug). Antacids/PPIs are relevant for oral azoles like Itraconazole which need acidic pH for absorption."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal is generally preferred for esophageal candidiasis resistant to Fluconazole?",
      o: ["Nystatin", "Caspofungin", "Griseofulvin", "Terbinafine"],
      c: 1,
      r: [
        "Incorrect. Nystatin is topical only — poorly effective for esophageal infections as it cannot achieve adequate tissue concentrations in the esophageal wall.",
        "Correct! Caspofungin (an echinocandin) is indicated for esophageal candidiasis that has failed azole or Amphotericin B therapy. It inhibits β-1,3-glucan synthase and is given IV.",
        "Incorrect. Griseofulvin is effective only against dermatophytes (skin, hair, nails) — it has no activity against Candida species.",
        "Incorrect. Terbinafine is primarily effective against dermatophytes — it is not indicated for Candida esophageal infections."
      ]
    },
    {
      type: "mcq",
      q: "Flucytosine is chemically related to which class of drugs?",
      o: ["Antibiotics", "Fluorinated pyrimidines (Chemotherapy)", "Steroids", "Beta-blockers"],
      c: 1,
      r: [
        "Incorrect. While some antifungals are derived from bacteria (e.g., Amphotericin B from Streptomyces), Flucytosine is a synthetic antimetabolite — it is not classified as an antibiotic.",
        "Correct! Flucytosine is a fluorinated pyrimidine antimetabolite structurally related to 5-fluorouracil (5-FU). This explains both its mechanism (nucleic acid synthesis inhibition) and its bone marrow suppression side effect.",
        "Incorrect. Flucytosine has no structural or functional relationship to steroids. Steroids are relevant to Ketoconazole (which inhibits steroid synthesis, causing antiandrogenic effects).",
        "Incorrect. Beta-blockers are cardiovascular drugs with no relationship to antifungal therapy or Flucytosine's pyrimidine structure."
      ]
    },
    {
      type: "mcq",
      q: "Why should a nurse monitor the trough levels of a patient on Flucytosine therapy?",
      o: ["To ensure the patient is not becoming addicted", "To minimize the risk of hematological and GI toxicity", "To assess if the drug is accumulating in fatty tissues", "To monitor for visual disturbances"],
      c: 1,
      r: [
        "Incorrect. Flucytosine has no addictive potential — it is not a controlled substance. Trough monitoring is about preventing dose-dependent toxicity, not addiction.",
        "Correct! Flucytosine has a narrow therapeutic window — elevated trough levels correlate with bone marrow suppression (leukopenia, thrombocytopenia, anemia) and severe GI toxicity. Therapeutic drug monitoring prevents these complications.",
        "Incorrect. Flucytosine does not accumulate in fatty tissue. Fat-related issues are relevant to Griseofulvin (enhanced absorption with fatty food), not Flucytosine.",
        "Incorrect. Visual disturbances are associated with Voriconazole (V = Visual), not Flucytosine. Flucytosine's toxicity is hematological, not ophthalmological."
      ]
    },
    {
      type: "mcq",
      q: "A patient is using Ciclopirox nail lacquer. The nurse explains this medication works by:",
      o: ["Changing the nail color to hide the fungus", "Inhibiting enzymes by chelating trivalent metal cations", "Increasing the pH of the nail bed", "Directly dissolving the fungal cell wall on contact"],
      c: 1,
      r: [
        "Incorrect. Ciclopirox is a therapeutic antifungal — it does not merely mask the appearance of fungal infection. It has a specific mechanism of action targeting fungal enzymes.",
        "Correct! Ciclopirox chelates trivalent metal cations (like Fe³⁺) that are essential co-factors for critical fungal enzymes. Without these co-factors, key metabolic pathways are disrupted and the fungus cannot survive.",
        "Incorrect. Ciclopirox does not work by altering pH. Its mechanism involves metal ion chelation, not acid-base manipulation of the nail environment.",
        "Incorrect. Ciclopirox does not dissolve cell walls. Cell wall disruption is the mechanism of echinocandins (Caspofungin), which inhibit β-1,3-glucan synthase enzymatically."
      ]
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
      r: [
        "Incorrect. Amphotericin B has the broadest spectrum but CANNOT cross the blood-brain barrier — it is a polar compound with minimal CNS penetration. May be used for induction but not as the primary agent for meningitis.",
        "Incorrect. Itraconazole is the drug of choice for systemic blastomycosis, not cryptococcal meningitis. It has poor CSF penetration and cannot reach therapeutic concentrations in the CNS.",
        "Correct! Fluconazole is the ONLY azole capable of crossing the blood-brain barrier and achieving adequate CSF concentrations — making it the drug of choice for cryptococcal meningitis maintenance therapy.",
        "Incorrect. Voriconazole is preferred for invasive pulmonary aspergillosis, not cryptococcal meningitis. Fluconazole is the established standard for cryptococcal meningitis."
      ]
    },
    {
      type: "mcq",
      q: "A patient on long-term antifungal therapy develops gynecomastia and impotence. Which drug is most likely responsible?",
      o: ["Fluconazole", "Voriconazole", "Ketoconazole", "Itraconazole"],
      c: 2,
      r: [
        "Incorrect. Fluconazole can cause hepatotoxicity and CYP450 drug interactions, but it does NOT cause antiandrogenic effects like gynecomastia or impotence.",
        "Incorrect. Voriconazole's unique adverse effect is transient visual disturbances (V = Visual) — it does not cause hormonal or antiandrogenic side effects.",
        "Correct! Ketoconazole uniquely inhibits CYP450-dependent gonadal steroid synthesis, reducing testosterone production → gynecomastia and impotence. Memory: 'KETO KILLS androgens.'",
        "Incorrect. Itraconazole can cause hepatotoxicity and negative inotropic effects (caution in heart failure), but it does not cause antiandrogenic effects."
      ]
    },
    {
      type: "mcq",
      q: "A nurse is preparing Amphotericin B for IV infusion. The patient asks why it cannot be given as an oral tablet. What is the correct pharmacokinetic explanation?",
      o: ["It is rapidly metabolized in the stomach before absorption", "It is a polar compound that cannot be absorbed from the GIT", "It is destroyed by gastric acid at low pH", "It requires active transport that is absent in the gut"],
      c: 1,
      r: [
        "Incorrect. The issue is not gastric metabolism — Amphotericin B is not broken down by stomach enzymes. The problem is its polar molecular structure, which prevents absorption across the GI mucosa.",
        "Correct! Amphotericin B is a polar compound that cannot be absorbed from the gastrointestinal tract. It must be prepared as a colloidal suspension with sodium deoxycholate for IV administration. Half-life is 15 days; dialysis is ineffective for toxicity.",
        "Incorrect. Amphotericin B is not destroyed by gastric acid — its inability to be given orally is due to polarity preventing GI absorption, not acid instability.",
        "Incorrect. The limitation is not about active transport — Amphotericin B simply cannot cross the GI mucosa due to its polar molecular structure."
      ]
    },
    {
      type: "mcq",
      q: "Caspofungin differs from most other antifungals because it targets which structure?",
      o: ["Fungal cell membrane ergosterol", "The ergosterol synthesis pathway", "The fungal cell wall (β-1,3-glucan synthase)", "Fungal DNA/RNA synthesis"],
      c: 2,
      r: [
        "Incorrect. Binding ergosterol in the cell membrane is the mechanism of polyenes (Amphotericin B and Nystatin), not Caspofungin.",
        "Incorrect. Inhibiting the ergosterol synthesis pathway is the mechanism of azoles (CYP51 inhibition) and allylamines (squalene epoxidase inhibition), not Caspofungin.",
        "Correct! Caspofungin is an echinocandin — a large cyclic peptide that inhibits β-1,3-glucan synthase, disrupting the fungal cell wall. Human cells have NO cell wall → highly selective with minimal toxicity.",
        "Incorrect. Inhibiting nucleic acid synthesis is the mechanism of Flucytosine (converted to 5-FU inside fungal cells by cytosine deaminase), not Caspofungin."
      ]
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
      r: [
        "✓ Correct. Amphotericin B is derived from Streptomyces nodosus, a soil bacterium. It is a naturally occurring polyene macrolide antibiotic.",
        "✗ Incorrect. Amphotericin B CANNOT be given orally — it is a polar compound not absorbed from the GIT. It must be administered IV or intrathecally.",
        "✓ Correct. Amphotericin B has the broadest antifungal spectrum of all agents — effective against yeasts, molds, and dimorphic fungi. Reserved for severe systemic infections.",
        "✓ Correct. Mechanism: binds ergosterol in the fungal membrane → forms transmembrane pores → cellular contents leak out → cell death (fungicidal).",
        "✗ Incorrect. Dialysis is INEFFECTIVE for Amphotericin B toxicity — the drug is 90% bound to plasma proteins and cannot be removed by dialysis. This is a high-yield exam trap."
      ]
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
      r: [
        "✗ Incorrect. Ketoconazole is an IMIDAZOLE (2 nitrogen atoms in the ring), not a triazole. Known for antiandrogenic effects (gynecomastia, impotence).",
        "✓ Correct. Fluconazole is a triazole (3 nitrogen atoms). It is the only azole with CSF penetration — drug of choice for cryptococcal meningitis.",
        "✗ Incorrect. Clotrimazole is an IMIDAZOLE (2 nitrogen atoms), not a triazole. Used topically only for candidiasis and tinea.",
        "✓ Correct. Itraconazole is a triazole (3 nitrogen atoms). Drug of choice for systemic blastomycosis.",
        "✓ Correct. Voriconazole is a triazole (3 nitrogen atoms). Drug of choice for invasive aspergillosis. Memory: TRIazole = TRI = 3 nitrogens."
      ]
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
      r: [
        "✓ Correct. ALL azoles can cause hepatotoxicity with elevated serum transaminases. Monitor LFTs during therapy — report dark urine, clay-colored stools, jaundice.",
        "✗ Incorrect. Nephrotoxicity (azotemia, ↓GFR, hypokalemia) is the hallmark of Amphotericin B, NOT azoles. Azoles primarily cause liver damage, not kidney damage.",
        "✓ Correct. All azoles inhibit hepatic CYP450 → slower metabolism → increased levels of warfarin (bleeding risk), cyclosporine (toxicity), phenytoin, triazolam. Fluconazole inhibits least; Ketoconazole most.",
        "✓ Correct. Voriconazole specifically causes transient visual disturbances (altered color perception, photophobia, blurred vision) — unique among all azoles. Memory: V = Visual.",
        "✗ Incorrect. Bone marrow depression at high doses is associated with Flucytosine, not azoles. Flucytosine causes leukopenia, thrombocytopenia, and anemia."
      ]
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
      r: [
        "✓ Correct. Griseofulvin is fungistatic — it arrests fungal cell division but does not kill cells directly. The host immune system clears the infection.",
        "✓ Correct. Griseofulvin accumulates in keratinized tissues (skin, hair, nails) — exactly where dermatophytes live. Treatment continues until infected tissue is replaced by new drug-laden keratin.",
        "✗ Incorrect. Binding ergosterol to form membrane pores is the mechanism of polyenes (Amphotericin B, Nystatin). Griseofulvin acts by binding MICROTUBULES, preventing mitotic spindle formation.",
        "✓ Correct. Griseofulvin's oral absorption is irregular but significantly enhanced by fatty food and microfine particle formulations. Always advise taking with a fatty meal.",
        "✗ Incorrect. Voriconazole is the drug of choice for invasive aspergillosis. Griseofulvin is used for superficial dermatophyte infections of skin, hair, and nails — not deep/systemic infections."
      ]
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
      r: [
        "Incorrect. Squalene epoxidase is the target of allylamines (Terbinafine, Naftifine, Butenafine), not azoles. Allylamines cause toxic squalene accumulation.",
        "Correct! Azoles block 14-α demethylase (CYP51), preventing lanosterol conversion to ergosterol. This depletes ergosterol and disrupts fungal membrane integrity — the basis for all azole antifungal activity.",
        "Incorrect. β-(1,3)-glucan synthase is the target of echinocandins (Caspofungin, Micafungin, Anidulafungin), which disrupt the fungal cell wall.",
        "Incorrect. Cytosine deaminase is the fungal enzyme that converts Flucytosine to 5-FU — it is not a drug target but rather the activating enzyme for Flucytosine's mechanism."
      ]
    },
    {
      type: "mcq",
      q: "Amphotericin B's fungicidal activity is primarily due to which molecular event?",
      o: ["Inhibition of ergosterol biosynthesis", "Competitive binding to 14-α demethylase", "Direct binding to ergosterol forming transmembrane pores", "Disruption of β-glucan cross-linking in the cell wall"],
      c: 2,
      r: [
        "Incorrect. Inhibiting ergosterol biosynthesis is the mechanism of azoles (block CYP51) and allylamines (block squalene epoxidase). Amphotericin B does NOT inhibit synthesis — it binds ergosterol that already exists.",
        "Incorrect. Competitive binding to 14-α demethylase describes the azole mechanism. Amphotericin B has no interaction with biosynthetic enzymes — it acts directly on the membrane.",
        "Correct! Amphotericin B physically binds ergosterol already in the fungal membrane, forming pore complexes that cause leakage of intracellular ions (K⁺, Mg²⁺) and small molecules → cell death. This direct membrane destruction makes it fungicidal.",
        "Incorrect. Disrupting β-glucan in the cell wall is the mechanism of echinocandins (Caspofungin). Amphotericin B targets the cell MEMBRANE, not the cell wall."
      ]
    },
    {
      type: "mcq",
      q: "Flucytosine selectively harms fungal cells but spares human cells primarily because:",
      o: ["Human cells lack the permease needed to transport flucytosine", "Human cells cannot convert flucytosine to 5-fluorouracil in significant amounts", "Human cells have a higher concentration of cytosine deaminase", "Flucytosine is rapidly excreted before entering human cells"],
      c: 1,
      r: [
        "Partially true but not the PRIMARY reason. While fungal cells have specific permeases for flucytosine uptake, the key selectivity factor is the inability of human cells to convert flucytosine to its cytotoxic active form.",
        "Correct! Human cells lack significant cytosine deaminase activity — the enzyme that converts Flucytosine to 5-FU. Without this conversion, the drug remains in its inactive prodrug form in human cells, sparing them from toxicity.",
        "Incorrect. The opposite is true — FUNGAL cells have cytosine deaminase, while human cells lack significant activity. Higher human deaminase would mean MORE toxicity, not less.",
        "Incorrect. Flucytosine's selectivity is not about excretion speed — it has good oral absorption and tissue distribution. The selectivity is based on enzyme-mediated activation within fungal cells."
      ]
    },
    {
      type: "mcq",
      q: "Terbinafine accumulates to toxic levels in fungal cells through which mechanism?",
      o: ["Inhibition of 14-α demethylase causing ergosterol depletion", "Inhibition of squalene epoxidase causing toxic squalene accumulation", "Direct intercalation into fungal DNA", "Binding to ergosterol and forming membrane channels"],
      c: 1,
      r: [
        "Incorrect. Inhibiting 14-α demethylase (CYP51) is the mechanism of azoles, not Terbinafine. While both affect the ergosterol pathway, they target different enzymes at different steps.",
        "Correct! Terbinafine inhibits squalene epoxidase early in the ergosterol pathway. This causes squalene to accumulate to fungitoxic levels while simultaneously depleting ergosterol — a dual mechanism that makes Terbinafine fungicidal.",
        "Incorrect. DNA intercalation is not a mechanism of any common antifungal drug. Terbinafine's target is a membrane lipid synthesis enzyme, not nucleic acids.",
        "Incorrect. Binding ergosterol and forming membrane pores/channels is the mechanism of polyenes (Amphotericin B, Nystatin), not Terbinafine."
      ]
    },
    {
      type: "mcq",
      q: "Griseofulvin's antifungal action is best described as:",
      o: ["Ergosterol synthesis inhibition at the 14-α demethylase step", "Disruption of the fungal cell wall by inhibiting glucan synthase", "Binding to fungal tubulin, preventing mitotic spindle formation", "Inhibition of nucleic acid synthesis via a pyrimidine analog"],
      c: 2,
      r: [
        "Incorrect. Inhibiting 14-α demethylase is the mechanism of azoles (Fluconazole, Ketoconazole, etc.). Griseofulvin has no effect on ergosterol synthesis.",
        "Incorrect. Inhibiting glucan synthase to disrupt the cell wall is the mechanism of echinocandins (Caspofungin). Griseofulvin targets the mitotic apparatus, not the cell wall.",
        "Correct! Griseofulvin binds fungal tubulin (microtubules), preventing mitotic spindle formation and arresting cell division. It is the ONLY antifungal with this mechanism — fungistatic, concentrates in keratin, requires fatty food for absorption.",
        "Incorrect. Inhibiting nucleic acid synthesis via a pyrimidine analog describes Flucytosine (converted to 5-FU by fungal cytosine deaminase). Griseofulvin acts on the mitotic spindle, not nucleic acids."
      ]
    },
    {
      type: "mcq",
      q: "Which of the following antifungal drug pairs both belong to the polyene class?",
      o: ["Fluconazole and Itraconazole", "Amphotericin B and Nystatin", "Caspofungin and Micafungin", "Terbinafine and Butenafine"],
      c: 1,
      r: [
        "Incorrect. Fluconazole and Itraconazole are both triazoles (3 nitrogen atoms) — they inhibit CYP51 (14-α demethylase), not polyenes.",
        "Correct! Amphotericin B and Nystatin are both polyene macrolides derived from Streptomyces species. They share the same mechanism — binding ergosterol and forming transmembrane pores.",
        "Incorrect. Caspofungin and Micafungin are both echinocandins — they inhibit β-1,3-glucan synthase (cell wall target), not polyenes.",
        "Incorrect. Terbinafine and Butenafine are both allylamines — they inhibit squalene epoxidase (ergosterol synthesis pathway), not polyenes."
      ]
    },
    {
      type: "mcq",
      q: "A new antifungal drug is described as a cyclic lipopeptide that inhibits cell wall synthesis. To which class does it belong?",
      o: ["Polyene macrolide", "Triazole", "Echinocandin", "Allylamine"],
      c: 2,
      r: [
        "Incorrect. Polyene macrolides (Amphotericin B, Nystatin) bind ergosterol in the cell MEMBRANE and form pores — they do not target cell wall synthesis.",
        "Incorrect. Triazoles (Fluconazole, Itraconazole, Voriconazole) inhibit CYP51 to block ergosterol synthesis — they target the membrane pathway, not the cell wall.",
        "Correct! Echinocandins (Caspofungin, Micafungin, Anidulafungin) are large cyclic lipopeptides that inhibit β-1,3-glucan synthase — the ONLY antifungal class targeting the cell wall. Human cells have no cell wall → highly selective.",
        "Incorrect. Allylamines (Terbinafine, Naftifine) inhibit squalene epoxidase in the ergosterol synthesis pathway — they target membrane lipid formation, not the cell wall."
      ]
    },
    {
      type: "mcq",
      q: "Fluconazole and Itraconazole are both triazoles. What structural feature distinguishes triazoles from imidazoles?",
      o: ["Triazoles contain three nitrogen atoms in their ring structure", "Triazoles have a benzene ring fused to their azole ring", "Triazoles bind ergosterol directly, not the enzyme", "Triazoles are only available in topical formulations"],
      c: 0,
      r: [
        "Correct! The defining chemical difference is the number of nitrogen atoms: Imidazoles = 2 nitrogens (Ketoconazole, Clotrimazole, Miconazole) — mostly topical; Triazoles = 3 nitrogens (Fluconazole, Itraconazole, Voriconazole) — systemic. Memory: TRIazole = TRI = 3.",
        "Incorrect. A fused benzene ring is not the defining structural difference between triazoles and imidazoles. The distinction is solely based on the number of nitrogen atoms in the azole ring.",
        "Incorrect. Neither triazoles nor imidazoles bind ergosterol directly. ALL azoles (both subclasses) inhibit the enzyme CYP51. Direct ergosterol binding is the mechanism of polyenes.",
        "Incorrect. The opposite is true — triazoles are primarily used SYSTEMICALLY (Fluconazole, Itraconazole, Voriconazole), while imidazoles are mostly topical."
      ]
    },
    {
      type: "mcq",
      q: "Which antifungal is correctly classified as an antimetabolite?",
      o: ["Nystatin", "Griseofulvin", "Flucytosine", "Caspofungin"],
      c: 2,
      r: [
        "Incorrect. Nystatin is a polyene macrolide — same class as Amphotericin B. It binds ergosterol and forms membrane pores. Not an antimetabolite.",
        "Incorrect. Griseofulvin is a heterocyclic benzofuran that disrupts the mitotic spindle by binding microtubules. Not an antimetabolite.",
        "Correct! Flucytosine is a fluorinated pyrimidine analog — a classic antimetabolite and prodrug. After conversion to 5-FU inside fungal cells by cytosine deaminase, it inhibits thymidylate synthase and disrupts RNA/DNA synthesis.",
        "Incorrect. Caspofungin is an echinocandin — a cyclic lipopeptide that inhibits β-1,3-glucan synthase (cell wall target). Not an antimetabolite."
      ]
    },
    {
      type: "mcq",
      q: "A patient on long-term Amphotericin B IV develops decreased urine output, rising creatinine, and serum potassium of 2.9 mEq/L. Which mechanism explains the hypokalemia?",
      o: ["Amphotericin B directly inhibits aldosterone secretion", "Renal tubular damage from nephrotoxicity causes excessive potassium wasting", "Hypokalemia results from GI potassium loss due to vomiting", "Amphotericin B chelates potassium ions in the bloodstream"],
      c: 1,
      r: [
        "Incorrect. Amphotericin B does not directly affect aldosterone secretion. The hypokalemia results from direct renal tubular damage, not hormonal disruption of the RAAS.",
        "Correct! Amphotericin B causes direct nephrotoxicity with renal tubular damage, impairing the tubules' ability to reabsorb potassium → excessive urinary K⁺ wasting. IV sodium loading (saline bolus) before infusion reduces nephrotoxic injury. Dialysis is ineffective.",
        "Incorrect. While vomiting can cause electrolyte loss, Amphotericin B-induced hypokalemia is specifically due to RENAL tubular damage and potassium wasting, not GI losses.",
        "Incorrect. Amphotericin B does not chelate potassium ions. Metal chelation is the mechanism of Ciclopirox (chelates Fe³⁺). Amphotericin B's potassium depletion is renal, not chemical."
      ]
    },
    {
      type: "mcq",
      q: "Which adverse effect is uniquely associated with Voriconazole and not shared by other triazoles?",
      o: ["Hepatotoxicity", "Inhibition of CYP450 enzymes", "Transient visual disturbances", "Risk of drug-drug interactions with Warfarin"],
      c: 2,
      r: [
        "Incorrect. Hepatotoxicity is a CLASS effect shared by ALL azoles with elevated serum transaminases. Not unique to Voriconazole.",
        "Incorrect. CYP450 inhibition is a CLASS effect of ALL azoles — Fluconazole least, Ketoconazole most. Not unique to Voriconazole.",
        "Correct! Transient visual disturbances (altered color perception, photophobia, blurred vision) are UNIQUE to Voriconazole — thought to be related to its direct effect on retinal electrophysiology. Memory: V = Visual.",
        "Incorrect. Drug interactions with warfarin occur with ALL azoles due to CYP450 inhibition → increased warfarin levels → elevated INR → bleeding risk. This is a class effect."
      ]
    },
    {
      type: "mcq",
      q: "A male patient on Ketoconazole develops gynecomastia and decreased libido. The nurse correctly attributes this to:",
      o: ["Ketoconazole blocking estrogen receptors", "Ketoconazole inhibiting adrenal corticosteroid synthesis only", "Ketoconazole inhibiting CYP450-dependent gonadal steroid synthesis, reducing testosterone", "Ketoconazole increasing prolactin secretion from the anterior pituitary"],
      c: 2,
      r: [
        "Incorrect. Ketoconazole does NOT block estrogen receptors. The mechanism is inhibition of testosterone PRODUCTION (steroid synthesis). SERMs (like tamoxifen) block estrogen receptors.",
        "Incorrect. While Ketoconazole can inhibit adrenal steroid synthesis, the gynecomastia and decreased libido are primarily due to GONADAL steroid synthesis inhibition (testosterone), not just adrenal function.",
        "Correct! Ketoconazole's CYP450 inhibition extends to human steroidogenic CYP enzymes, reducing gonadal testosterone synthesis → antiandrogenic effects → gynecomastia and impotence. This is why Ketoconazole is less preferred for systemic use.",
        "Incorrect. Ketoconazole does not increase prolactin secretion. Hyperprolactinemia-induced gynecomastia is caused by drugs like antipsychotics (dopamine antagonists), not azole antifungals."
      ]
    },
    {
      type: "mcq",
      q: "Griseofulvin therapy requires regular monitoring of which organ system during prolonged use?",
      o: ["Kidneys — for nephrotoxicity and electrolyte imbalance", "Liver — for hepatotoxicity and elevated transaminases", "Bone marrow — for dose-dependent suppression", "Eyes — for retinal pigment changes"],
      c: 1,
      r: [
        "Incorrect. Nephrotoxicity and electrolyte imbalance are characteristic of Amphotericin B (renal tubular damage, hypokalemia), not Griseofulvin.",
        "Correct! Griseofulvin is hepatotoxic with prolonged use, requiring periodic LFTs to monitor for elevated transaminases. CNS effects (confusion, fatigue, vertigo) and hypersensitivity skin rash are also documented.",
        "Incorrect. Dose-dependent bone marrow suppression is associated with Flucytosine (at high doses), not Griseofulvin.",
        "Incorrect. Retinal changes are not a known adverse effect of Griseofulvin. Visual disturbances are associated with Voriconazole (transient, usually reversible)."
      ]
    },
    {
      type: "mcq",
      q: "Which statement about Flucytosine's toxicity profile is most accurate?",
      o: ["Flucytosine is highly nephrotoxic and must be dose-adjusted in all patients", "Flucytosine is relatively nontoxic but can cause bone marrow suppression at high doses", "Flucytosine consistently causes acute infusion reactions within the first hour", "Flucytosine causes irreversible hepatic fibrosis with prolonged use"],
      c: 1,
      r: [
        "Incorrect. Flucytosine is NOT nephrotoxic itself. However, co-administered Amphotericin B can impair renal function, elevating Flucytosine levels and indirectly increasing toxicity risk.",
        "Correct! Flucytosine has a favorable toxicity profile — bone marrow suppression (leukopenia, thrombocytopenia, anemia) and alopecia occur primarily at high doses. Monitor trough levels to prevent hematological toxicity.",
        "Incorrect. Acute infusion reactions (fever, chills, rigors) are characteristic of Amphotericin B, not Flucytosine. Flucytosine is given orally with good absorption.",
        "Incorrect. Irreversible hepatic fibrosis is not a documented effect of Flucytosine. Hepatotoxicity is more commonly associated with azoles and Griseofulvin."
      ]
    },
    {
      type: "mcq",
      q: "A patient with AIDS develops cryptococcal meningitis. Which drug is preferred for maintenance therapy, and why?",
      o: ["Amphotericin B — broadest spectrum and penetrates CSF adequately", "Fluconazole — the only azole achieving therapeutic CSF concentrations", "Itraconazole — preferred due to its IV formulation for systemic use", "Voriconazole — drug of choice for all CNS fungal infections"],
      c: 1,
      r: [
        "Incorrect. Amphotericin B is used for INDUCTION therapy (initial aggressive treatment) but not long-term maintenance — its nephrotoxicity makes chronic use too dangerous. It also has poor CSF penetration.",
        "Correct! Fluconazole is the ONLY azole that reliably crosses the blood-brain barrier to achieve therapeutic CSF concentrations. It is well-tolerated for long-term maintenance therapy in AIDS patients.",
        "Incorrect. Itraconazole has poor CSF penetration and is the drug of choice for systemic blastomycosis, not cryptococcal meningitis.",
        "Incorrect. Voriconazole is indicated specifically for invasive aspergillosis, not cryptococcal meningitis. Fluconazole is the established standard for this indication."
      ]
    },
    {
      type: "mcq",
      q: "Voriconazole is preferred over other azoles for invasive pulmonary aspergillosis primarily because:",
      o: ["It is the only antifungal with any activity against Aspergillus species", "It is fungicidal against Aspergillus and achieves superior clinical outcomes", "It has no CYP450 interactions, making it safer than other azoles", "It can be administered intrathecally for CNS involvement"],
      c: 1,
      r: [
        "Incorrect. Other antifungals (Amphotericin B, Caspofungin, Itraconazole) also have activity against Aspergillus — Voriconazole is not the only option, just the best.",
        "Correct! Voriconazole demonstrates superior fungicidal efficacy against Aspergillus with better clinical outcomes than Amphotericin B in clinical trials. It is the established first-line drug of choice.",
        "Incorrect. ALL azoles inhibit CYP450 — Voriconazole is NOT exempt from drug interactions. It still causes significant CYP450 inhibition and requires drug interaction monitoring.",
        "Incorrect. Intrathecal administration is NOT a standard feature of Voriconazole therapy. Intrathecal delivery is associated with Amphotericin B (for certain CNS infections)."
      ]
    },
    {
      type: "mcq",
      q: "A patient with dermatophyte nail infection failed a 6-month Griseofulvin course. Which drug is most appropriate next?",
      o: ["Fluconazole IV — systemic azole for deeper penetration", "Amphotericin B — broadest antifungal spectrum", "Terbinafine oral — drug of choice for dermatophyte onychomycosis", "Nystatin topical — polyene active against dermatophytes"],
      c: 2,
      r: [
        "Incorrect. IV Fluconazole is not indicated for dermatophyte nail infections — it is overkill and primarily used for systemic candidiasis and cryptococcal meningitis.",
        "Incorrect. Amphotericin B is reserved for severe, life-threatening systemic fungal infections — completely inappropriate for a nail infection due to its extreme nephrotoxicity.",
        "Correct! Terbinafine oral is the current drug of choice for dermatophyte onychomycosis — more effective, better tolerated, and requiring a shorter course than Griseofulvin or Itraconazole.",
        "Incorrect. Nystatin has NO activity against dermatophytes — it is active only against Candida species. Additionally, topical agents cannot penetrate deep into nail tissue effectively."
      ]
    },
    {
      type: "mcq",
      q: "Nystatin is active against Candida but is never used systemically. What is the primary reason?",
      o: ["Nystatin resistance develops within 48 hours of systemic exposure", "Nystatin is too toxic for parenteral administration", "Nystatin is inactivated by gastric acid when given orally", "Nystatin cannot reach therapeutic plasma concentrations at any dose"],
      c: 1,
      r: [
        "Incorrect. Rapid resistance is a characteristic of Flucytosine (when used alone), not Nystatin. Nystatin resistance is not the reason for topical-only use.",
        "Correct! Nystatin shares Amphotericin B's mechanism (binds ergosterol, forms pores) but has a far too narrow therapeutic window for systemic IV use — it is NOT weaker, simply unsafe parenterally. Used topically for oral/vaginal candidiasis.",
        "Incorrect. Nystatin is not significantly inactivated by gastric acid. It is not absorbed from the GI tract, which is actually WHY it works for oral thrush ('swish and swallow').",
        "Incorrect. The limitation is toxicity, not inability to achieve plasma levels. Nystatin is restricted to topical use because systemic administration would cause unacceptable damage to human cell membranes."
      ]
    },
    {
      type: "mcq",
      q: "Caspofungin is prescribed as second-line therapy for esophageal candidiasis after Amphotericin B failure. Which statement about Caspofungin is correct?",
      o: ["Caspofungin is effective orally and does not require IV administration", "Caspofungin works by binding ergosterol in the fungal cell membrane", "Caspofungin disrupts the fungal cell wall by inhibiting β-(1,3)-glucan synthase", "Caspofungin is the drug of choice for cryptococcal meningitis due to CSF penetration"],
      c: 2,
      r: [
        "Incorrect. Caspofungin CANNOT be given orally — it is a large cyclic peptide that must be administered IV. Oral absorption is not possible due to its molecular size and structure.",
        "Incorrect. Binding ergosterol in the cell membrane is the mechanism of polyenes (Amphotericin B and Nystatin). Caspofungin targets the cell WALL, not the membrane.",
        "Correct! Caspofungin is an echinocandin that inhibits β-(1,3)-glucan synthase, disrupting the fungal cell wall. This is the ONLY antifungal class targeting the cell wall — human cells have no cell wall → highly selective.",
        "Incorrect. Caspofungin does NOT have adequate CSF penetration for meningitis. Fluconazole is the drug of choice for cryptococcal meningitis (only azole crossing the blood-brain barrier)."
      ]
    },
    {
      type: "mcq",
      q: "A patient prescribed Itraconazole for systemic blastomycosis is also taking Warfarin. The nurse anticipates which pharmacokinetic interaction?",
      o: ["Itraconazole induces CYP3A4, accelerating Warfarin metabolism and reducing INR", "Itraconazole inhibits hepatic CYP450, increasing Warfarin plasma levels and INR", "Itraconazole displaces Warfarin from plasma proteins, causing renal clearance", "Itraconazole has no clinically significant interaction with Warfarin"],
      c: 1,
      r: [
        "Incorrect. Itraconazole is a CYP450 INHIBITOR, not an inducer. It SLOWS down Warfarin metabolism, causing drug accumulation — the opposite of this answer.",
        "Correct! All azoles, including Itraconazole, are CYP450 INHIBITORS. Warfarin is metabolized by CYP2C9/3A4, so co-administration → elevated Warfarin levels → increased INR → bleeding risk. Monitor INR closely. Fluconazole = least inhibitor; Ketoconazole = most.",
        "Incorrect. Protein displacement is not the primary interaction mechanism. Azoles' interaction with Warfarin is through hepatic CYP450 enzyme inhibition, slowing metabolism.",
        "Incorrect. There IS a clinically significant and potentially dangerous interaction — all azoles inhibit CYP450, increasing Warfarin levels and bleeding risk. This requires close INR monitoring."
      ]
    }
  ]

};
