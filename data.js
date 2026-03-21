// data.js - External Data Storage for Edubamo Study Portal

const PDF_TOPIC_DATA = {
  "antifungals": {
    
    // 1. SUMMARY SECTION
    "summaryHtml": `
      <div class="card">
        <div class="dname">Classification by Mechanism of Action</div>
        <div class="row"><span class="lbl">Azoles</span><span class="val">Inhibit ergosterol synthesis (14a-demethylase/CYP51)</span></div>
        <div class="row"><span class="lbl">Ampho B/Nystatin</span><span class="val">Bind ergosterol → form pores in cell membrane</span></div>
        <div class="row"><span class="lbl">Terbinafine</span><span class="val">Inhibit squalene epoxidase → ↓ ergosterol</span></div>
        <div class="row"><span class="lbl">Caspofungin</span><span class="val">Inhibit B-1,3-glucan synthase → disrupt cell wall</span></div>
        <div class="row"><span class="lbl">Flucytosine</span><span class="val">Inhibit nucleic acid synthesis (converted to 5-FU)</span></div>
        <div class="row"><span class="lbl">Griseofulvin</span><span class="val">Disrupt mitotic spindle → arrest fungal mitosis</span></div>
      </div>
      <div class="card">
        <div class="dname">Classification by Structure</div>
        <div class="row"><span class="lbl">Polyenes</span><span class="val">Amphotericin B, Nystatin, Hamycin</span></div>
        <div class="row"><span class="lbl">Triazoles</span><span class="val">Fluconazole, Itraconazole, Voriconazole (3 nitrogen atoms)</span></div>
        <div class="row"><span class="lbl">Imidazoles</span><span class="val">Ketoconazole, Clotrimazole, Miconazole, Oxiconazole (2 nitrogen atoms)</span></div>
        <div class="row"><span class="lbl">Echinocandins</span><span class="val">Caspofungin, Anidulafungin, Micafungin</span></div>
        <div class="row"><span class="lbl">Allylamines</span><span class="val">Terbinafine, Butenafine</span></div>
        <div class="row"><span class="lbl">Other</span><span class="val">Flucytosine (Antimetabolite), Griseofulvin (Heterocyclic benzofuran)</span></div>
      </div>
    `,

    // 2. QUICK REFERENCE SECTION
    "refHtml": `
      <div class="tip"><div class="tit">High-Yield Exam Triggers</div><div class="trow">
          <b>Amphotericin B</b> → "Ampho-Terrible" (kidney + infusion reactions)<br>
          <b>Fluconazole</b> → "Brain azole" (CSF penetration)<br>
          <b>Voriconazole</b> → "V = Vision"<br>
          <b>Ketoconazole</b> → "Kills testosterone" (Gynecomastia)<br>
          <b>Caspofungin</b> → "Cracks the wall" (Cell wall inhibitor)<br>
          <b>Griseofulvin</b> → "Fat helps absorption"
      </div></div>
      <div class="tip"><div class="tit">Adverse Effects</div><div class="trow">
          <b>Amphotericin B</b> → Nephrotoxicity, hypokalemia, infusion reactions<br>
          <b>Azoles</b> → Hepatotoxicity, CYP interactions<br>
          <b>Ketoconazole</b> → Gynecomastia, impotence<br>
          <b>Voriconazole</b> → Visual disturbances<br>
          <b>Flucytosine</b> → Bone marrow suppression<br>
          <b>Terbinafine</b> → Hepatotoxicity
      </div></div>
      <div class="tip"><div class="tit">Must-Not-Forget Facts</div><div class="trow">
          • <b>Fluconazole:</b> Renal dose adjustment required.<br>
          • <b>Amphotericin B:</b> Poor CSF penetration, NOT oral, Dialysis is INEFFECTIVE.<br>
          • <b>Nystatin:</b> Topical only (too toxic systemically).<br>
          • <b>Flucytosine:</b> ALWAYS in combination to prevent rapid resistance.<br>
          • <b>Griseofulvin:</b> ↑ absorption with fatty food.<br>
          • <b>Azoles:</b> CYP450 inhibition → drug interactions.<br>
          • <b>Amphotericin B:</b> Fungicidal (most others fungistatic).
      </div></div>
      <div class="tip"><div class="tit">Drug of Choice</div><div class="trow">
          Cryptococcal meningitis → <b>Fluconazole</b><br>
          Aspergillosis → <b>Voriconazole</b><br>
          Blastomycosis → <b>Itraconazole</b><br>
          Nail infection → <b>Terbinafine</b><br>
          Broadest spectrum → <b>Amphotericin B</b><br>
          Cell wall target → <b>Caspofungin</b>
      </div></div>
    `,

    // 3. DETAILED NOTES SECTION
    "detailedNotesHtml": `
      <div class="card">
        <div class="dname">1. Big Picture Overview</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          Fungi are eukaryotes - just like human cells. This makes them much harder to treat than bacteria. Most antifungals are <b>fungistatic</b> and rely on the host's immune system to finish the job. This is why systemic fungal infections are extremely dangerous in immunocompromised patients (HIV, cancer, transplant) because their weakened immune system cannot clear the infection effectively.
        </p>
      </div>
      <div class="card">
        <div class="dname">2. Azoles (The Ergosterol Blockers)</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          Azoles block <b>14a-demethylase (CYP51)</b>, essential for making ergosterol. Because they inhibit human hepatic CYP450 as well, they slow the breakdown of other drugs (warfarin, cyclosporine, phenytoin), causing toxicity. <b>Fluconazole</b> is unique for crossing the BBB into the CSF. <b>Ketoconazole</b> uniquely causes antiandrogenic effects (impotence, gynecomastia).
        </p>
      </div>
      <div class="card">
        <div class="dname">3. Amphotericin B (The Pore Puncher)</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          Binds directly to ergosterol to punch pores in the membrane. It has the broadest spectrum, but is highly <b>nephrotoxic</b> (decreased GFR, hypokalemia). Infusion reactions (chills, fever, dyspnea) occur 2-5 hours post-infusion due to IL and TNF release. Dialysis is completely <b>ineffective</b> for managing its toxicity. Liposomal forms are used to deliver the drug selectively to fungi and reduce kidney damage.
        </p>
      </div>
      <div class="card">
        <div class="dname">4. Flucytosine (The Trojan Horse)</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          A prodrug converted by cytosine deaminase into <b>5-FU</b> inside the fungal cell, inhibiting nucleic acid synthesis. Fungi rapidly develop resistance, so it is ALWAYS used in combination (usually with Amphotericin B, which makes the membrane leaky so more flucytosine can enter).
        </p>
      </div>
      <div class="card">
        <div class="dname">5. Griseofulvin (The Spindle Wrecker)</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          Binds to microtubules and arrests fungal mitosis. Highly lipophilic, so absorption is drastically enhanced by <b>fatty foods</b> and microfine particles. It concentrates in keratin (skin, hair, nails) so treatment takes weeks for skin and months for nails.
        </p>
      </div>
      <div class="card">
        <div class="dname">6. Caspofungin (The Wall Demolisher)</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          Unique because it targets the fungal <b>cell wall</b> (not membrane) by inhibiting B-1,3-glucan synthase. Because human cells lack a cell wall, it is highly selective with minimal human toxicity. It is administered IV only for severe invasive aspergillosis or 2nd-line esophageal candidiasis.
        </p>
      </div>
      <div class="card">
        <div class="dname">7. Terbinafine (The Squalene Trap)</div>
        <p style="font-size:13px; color:#555; line-height:1.6; margin-top:10px;">
          Inhibits squalene epoxidase, an enzyme earlier in the ergosterol synthesis pathway. This causes toxic squalene to accumulate. It is the drug of choice for dermatophyte nail infections because it is more effective and requires a shorter duration than itraconazole or griseofulvin.
        </p>
      </div>
    `,

    // 4. FLASHCARDS
    "flashcards": [
      {q:"What is the MOA of Azoles?", a:"Inhibit fungal CYP450 (14a-demethylase) → block ergosterol synthesis.\nFungistatic."},
      {q:"Which azole is the ONLY one that crosses the CSF?", a:"Fluconazole\n(Drug of choice for cryptococcal meningitis)."},
      {q:"What is the unique adverse effect of Voriconazole?", a:"Transient visual disturbances (Remember: V = Vision)."},
      {q:"Why is Flucytosine never used alone?", a:"Fungi rapidly develop resistance to it. It is always used in combination (usually with Amphotericin B)."},
      {q:"What enhances the oral absorption of Griseofulvin?", a:"Fatty foods and microfine particles."},
      {q:"What is the MOA of Caspofungin?", a:"Inhibits B-1,3-glucan synthase, destroying the fungal cell WALL."},
      {q:"What are the unique adverse effects of Ketoconazole?", a:"Gynecomastia and impotence (antiandrogenic effects)."},
      {q:"What is the MOA of Amphotericin B?", a:"Binds directly to ergosterol → forms pores in the membrane → cellular contents leak out."},
      {q:"Why is dialysis ineffective for Amphotericin B toxicity?", a:"It is a highly polar compound that is heavily bound, making dialysis useless. (High-yield exam trap)."},
      {q:"What is the drug of choice for invasive pulmonary aspergillosis?", a:"Voriconazole."},
      {q:"What is the MOA of Terbinafine?", a:"Inhibits squalene epoxidase → toxic squalene accumulation."},
      {q:"Why is Nystatin strictly limited to topical use?", a:"It is too toxic for parenteral (systemic) administration."}
    ],

    // 5. QUIZ QUESTIONS
    "quizQuestions": [
      { 
        type: "mcq", 
        q: "A patient with cryptococcal meningitis requires antifungal therapy. Which drug is the most appropriate first-line agent?", 
        o: ["Amphotericin B", "Itraconazole", "Fluconazole", "Voriconazole"], 
        c: 2, 
        r: "<b>Fluconazole</b> is the only azole capable of crossing the blood-brain barrier and achieving adequate CSF concentrations, making it the drug of choice for cryptococcal meningitis." 
      },
      { 
        type: "mcq", 
        q: "A patient on long-term antifungal therapy develops gynecomastia and impotence. Which drug is most likely responsible?", 
        o: ["Fluconazole", "Voriconazole", "Ketoconazole", "Itraconazole"], 
        c: 2, 
        r: "<b>Ketoconazole</b> uniquely causes antiandrogenic effects by inhibiting gonadal steroid synthesis, resulting in decreased testosterone levels, gynecomastia, and impotence." 
      },
      { 
        type: "mcq", 
        q: "A nurse is preparing amphotericin B for IV infusion. The patient asks why it cannot be given as an oral tablet. What is the correct pharmacokinetic explanation?", 
        o: ["It is rapidly metabolized in the stomach before absorption", "It is a polar compound that cannot be absorbed from the GIT", "It is destroyed by gastric acid at low pH", "It requires active transport that is absent in the gut"], 
        c: 1, 
        r: "<b>Amphotericin B</b> is a polar compound and cannot be absorbed from the gastrointestinal tract. It must be prepared as a colloidal suspension for IV administration." 
      },
      { 
        type: "mcq", 
        q: "Caspofungin differs from most other antifungals because it targets which structure?", 
        o: ["Fungal cell membrane ergosterol", "The ergosterol synthesis pathway", "The fungal cell wall (β-1,3-glucan synthase)", "Fungal DNA/RNA synthesis"], 
        c: 2, 
        r: "<b>Caspofungin</b> is an echinocandin that inhibits β-1,3-glucan synthase, disrupting the fungal cell wall rather than the membrane." 
      }
    ],

    // 6. PRACTICE HUB: NCLEX STYLE
    "practiceNclex": [
      { 
        type: "mcq", 
        q: "A nurse is caring for four patients on antifungal therapy. Which patient should be assessed FIRST?", 
        o: ["A patient on fluconazole who reports mild nausea and decreased appetite", "A patient on IV amphotericin B who has developed rigors, a temperature of 38.9°C, and difficulty breathing 3 hours into the infusion", "A patient on griseofulvin who reports a mild skin rash", "A patient on terbinafine who is asking when it is safe to stop the medication"], 
        c: 1, 
        r: "Patient B is experiencing an acute infusion reaction to <b>amphotericin B</b>. Infusion reactions with dyspnea require immediate nursing assessment, possible slowing of the infusion rate, and physician notification." 
      },
      { 
        type: "mcq", 
        q: "A nurse receives an order for amphotericin B for a patient admitted with severe systemic candidiasis who also has a history of chronic kidney disease. What is the PRIORITY nursing action before starting therapy?", 
        o: ["Administer amphotericin B immediately as it has the broadest antifungal spectrum", "Obtain baseline renal function labs (BUN, creatinine, electrolytes) before starting amphotericin B", "Request a dietary consult for the patient", "Teach the patient about oral antifungal alternatives"], 
        c: 1, 
        r: "<b>Amphotericin B</b> causes significant nephrotoxicity. Baseline renal function must be established before therapy begins to detect deterioration and guide dosing decisions." 
      },
      { 
        type: "mcq", 
        q: "The charge nurse is delegating tasks to the care team. A patient on flucytosine for a systemic fungal infection requires routine care. Which task is APPROPRIATE to delegate to an unlicensed assistive personnel (UAP)?", 
        o: ["Monitoring for signs of bone marrow depression and reporting findings", "Assessing the patient for hair loss related to medication", "Recording the patient's daily fluid intake and output", "Explaining to the patient why flucytosine must be given in combination with another antifungal"], 
        c: 2, 
        r: "Recording intake and output is a routine, non-clinical task that falls within the <b>UAP's scope of practice</b>. Assessment and education are nursing responsibilities." 
      },
      { 
        type: "mcq", 
        q: "A patient with onychomycosis is prescribed terbinafine. Upon reviewing the medication administration record, the nurse notes the patient is also taking warfarin. What is the PRIORITY nursing action?", 
        o: ["Administer terbinafine and monitor the patient for signs of bleeding", "Hold terbinafine and notify the physician immediately about a drug interaction", "Administer both medications as ordered and educate the patient about bruising risks", "Check the patient's current INR level and notify the prescriber about the potential interaction"], 
        c: 3, 
        r: "Antifungals that inhibit hepatic CYP450 can increase <b>warfarin</b> levels significantly. The priority is to gather objective data (current INR) and notify the prescriber so a dosage adjustment decision can be made." 
      }
    ],
    
    // 7. PRACTICE HUB: SATA
    "practiceSata": [
      { 
        type: "sata", 
        q: "Which of the following statements about Amphotericin B are correct? Select all that apply.", 
        o: ["It is obtained from Streptomyces Nodosus", "It can be given orally for systemic infections", "It has the broadest antifungal spectrum of activity", "It binds ergosterol and forms pores in the fungal cell membrane", "Dialysis is effective in managing its toxicity"], 
        c: [0, 2, 3], 
        r: "Amphotericin B is derived from <b>Streptomyces Nodosus</b>, has the broadest spectrum, and forms pores in the membrane. It CANNOT be given orally, and dialysis is INEFFECTIVE." 
      },
      { 
        type: "sata", 
        q: "Which of the following are classified as triazoles? Select all that apply.", 
        o: ["Ketoconazole", "Fluconazole", "Clotrimazole", "Itraconazole", "Voriconazole"], 
        c: [1, 3, 4], 
        r: "<b>Fluconazole, Itraconazole, and Voriconazole</b> are triazoles (3 nitrogen atoms). Ketoconazole and Clotrimazole are imidazoles." 
      },
      { 
        type: "sata", 
        q: "A patient is receiving azole antifungal therapy. Which adverse effects should the nurse monitor for? Select all that apply.", 
        o: ["Elevated liver enzymes (hepatotoxicity)", "Nephrotoxicity and decreased GFR", "Drug interactions due to CYP450 inhibition", "Transient visual disturbances (if on voriconazole)", "Bone marrow depression"], 
        c: [0, 2, 3], 
        r: "Azoles cause <b>hepatotoxicity and profound CYP450 drug interactions</b>. Voriconazole specifically causes transient visual disturbances. Nephrotoxicity is Ampho B; bone marrow depression is Flucytosine." 
      },
      { 
        type: "sata", 
        q: "Which of the following correctly describe griseofulvin? Select all that apply.", 
        o: ["It is fungistatic", "It concentrates in keratinized tissue", "It binds ergosterol in the cell membrane", "Oral absorption is enhanced by fatty food", "It is the drug of choice for invasive aspergillosis"], 
        c: [0, 1, 3], 
        r: "<b>Griseofulvin</b> is fungistatic, accumulates in keratin structures (skin/hair/nails), and has its absorption significantly enhanced by fatty food. It binds microtubules, not ergosterol." 
      }
    ],
    
    // 8. PRACTICE HUB: HARD QUESTIONS (30 Questions)
    "practiceHard": [
      {
        type: "mcq",
        q: "Azoles exert their antifungal effect by inhibiting which specific enzyme?",
        o: ["Squalene epoxidase", "14-α demethylase (CYP51)", "β-(1,3)-glucan synthase", "Cytosine deaminase"],
        c: 1,
        r: "Azoles block <b>CYP51 (14-α demethylase)</b>, preventing lanosterol conversion to ergosterol. Squalene epoxidase is targeted by allylamines; β-glucan synthase by echinocandins; cytosine deaminase is relevant to flucytosine's mechanism."
      },
      {
        type: "mcq",
        q: "Amphotericin B's fungicidal activity is primarily due to which molecular event?",
        o: ["Inhibition of ergosterol biosynthesis", "Competitive binding to 14-α demethylase", "Direct binding to ergosterol forming transmembrane pores", "Disruption of β-glucan cross-linking in the cell wall"],
        c: 2,
        r: "<b>Amphotericin B</b> is a polyene that binds ergosterol in the fungal membrane, forming pore complexes that cause leakage of intracellular ions and cell death. It does not inhibit ergosterol synthesis — that is the azole mechanism."
      },
      {
        type: "mcq",
        q: "Flucytosine selectively harms fungal cells but spares human cells primarily because:",
        o: ["Human cells lack the permease needed to transport flucytosine", "Human cells cannot convert flucytosine to 5-fluorouracil in significant amounts", "Human cells have a higher concentration of cytosine deaminase", "Flucytosine is rapidly excreted before entering human cells"],
        c: 1,
        r: "Flucytosine enters fungal cells via fungal-specific permease and is deaminated to <b>5-FU</b> by fungal cytosine deaminase. Human cells lack appreciable cytosine deaminase activity, so they cannot generate cytotoxic 5-FU concentrations."
      },
      {
        type: "mcq",
        q: "Terbinafine accumulates to toxic levels in fungal cells through which mechanism?",
        o: ["Inhibition of 14-α demethylase causing ergosterol depletion", "Inhibition of squalene epoxidase causing toxic squalene accumulation", "Direct intercalation into fungal DNA", "Binding to ergosterol and forming membrane channels"],
        c: 1,
        r: "<b>Terbinafine</b> is an allylamine that inhibits squalene epoxidase early in the ergosterol pathway, causing squalene to accumulate to fungitoxic levels. Unlike azoles, its toxicity stems from squalene accumulation, not just ergosterol deficiency."
      },
      {
        type: "mcq",
        q: "Griseofulvin's antifungal action is best described as:",
        o: ["Ergosterol synthesis inhibition at the 14-α demethylase step", "Disruption of the fungal cell wall by inhibiting glucan synthase", "Binding to fungal tubulin, preventing mitotic spindle formation", "Inhibition of nucleic acid synthesis via a pyrimidine analog"],
        c: 2,
        r: "<b>Griseofulvin</b> binds to microtubules and disrupts spindle formation, arresting fungal mitosis. It is fungistatic and requires prolonged treatment. It has no effect on ergosterol, cell walls, or nucleic acid synthesis."
      },
      {
        type: "mcq",
        q: "Which of the following antifungal drug pairs both belong to the polyene class?",
        o: ["Fluconazole and itraconazole", "Amphotericin B and nystatin", "Caspofungin and micafungin", "Terbinafine and butenafine"],
        c: 1,
        r: "<b>Amphotericin B and nystatin</b> are both polyene macrolides derived from Streptomyces species, sharing the same mechanism of binding ergosterol. Fluconazole/itraconazole are triazoles; caspofungin/micafungin are echinocandins; terbinafine/butenafine are allylamines."
      },
      {
        type: "mcq",
        q: "A new antifungal drug is described as a cyclic lipopeptide that inhibits cell wall synthesis. To which class does it belong?",
        o: ["Polyene macrolide", "Triazole", "Echinocandin", "Allylamine"],
        c: 2,
        r: "<b>Echinocandins</b> (caspofungin, micafungin, anidulafungin) are large cyclic lipopeptides that inhibit β-(1,3)-glucan synthase, disrupting fungal cell wall integrity — the only antifungal class targeting the cell wall."
      },
      {
        type: "mcq",
        q: "Fluconazole and itraconazole are both triazoles. What structural feature distinguishes triazoles from imidazoles?",
        o: ["Triazoles contain three nitrogen atoms in their ring structure", "Triazoles have a benzene ring fused to their azole ring", "Triazoles bind ergosterol directly, not the enzyme", "Triazoles are only available in topical formulations"],
        c: 0,
        r: "The defining chemical difference is the number of nitrogen atoms in the azole ring: <b>imidazoles have two</b> (ketoconazole, clotrimazole), while <b>triazoles have three</b> (fluconazole, itraconazole, voriconazole). Both classes inhibit the same CYP51 enzyme."
      },
      {
        type: "mcq",
        q: "Which antifungal is correctly classified as an antimetabolite?",
        o: ["Nystatin", "Griseofulvin", "Flucytosine", "Caspofungin"],
        c: 2,
        r: "<b>Flucytosine</b> is a fluorinated pyrimidine analog — a prodrug and antimetabolite. After conversion to 5-FU inside fungal cells, it inhibits thymidylate synthase and disrupts RNA/DNA synthesis."
      },
      {
        type: "mcq",
        q: "A patient on long-term amphotericin B IV develops decreased urine output, rising creatinine, and serum potassium of 2.9 mEq/L. Which mechanism explains the hypokalemia?",
        o: ["Amphotericin B directly inhibits aldosterone secretion", "Renal tubular damage from nephrotoxicity causes excessive potassium wasting", "Hypokalemia results from GI potassium loss due to vomiting", "Amphotericin B chelates potassium ions in the bloodstream"],
        c: 1,
        r: "<b>Amphotericin B</b> causes direct renal tubular toxicity, impairing tubular function and resulting in renal potassium wasting. This long-term toxicity is distinct from acute infusion reactions and can also cause azotemia and reduced GFR."
      },
      {
        type: "mcq",
        q: "Which adverse effect is uniquely associated with voriconazole and not shared by other triazoles?",
        o: ["Hepatotoxicity", "Inhibition of CYP450 enzymes", "Transient visual disturbances", "Risk of drug-drug interactions with warfarin"],
        c: 2,
        r: "<b>Voriconazole</b> characteristically causes transient visual disturbances — altered color perception, photophobia, and blurring — related to its direct effect on retinal electrophysiology. All azoles share hepatotoxicity and CYP450 inhibition."
      },
      {
        type: "mcq",
        q: "A male patient on ketoconazole therapy develops gynecomastia and decreased libido. The nurse correctly attributes this to:",
        o: ["Ketoconazole blocking estrogen receptors", "Ketoconazole inhibiting adrenal corticosteroid synthesis only", "Ketoconazole inhibiting CYP450-dependent gonadal steroid synthesis, reducing testosterone", "Ketoconazole increasing prolactin secretion from the anterior pituitary"],
        c: 2,
        r: "<b>Ketoconazole's</b> CYP450 inhibition extends to human steroidogenic CYP enzymes, reducing gonadal testosterone synthesis. This antiandrogenic effect leads to gynecomastia and impotence, making ketoconazole less preferred for systemic use."
      },
      {
        type: "mcq",
        q: "Griseofulvin therapy requires regular monitoring of which organ system during prolonged use?",
        o: ["Kidneys — for nephrotoxicity and electrolyte imbalance", "Liver — for hepatotoxicity and elevated transaminases", "Bone marrow — for dose-dependent suppression", "Eyes — for retinal pigment changes"],
        c: 1,
        r: "<b>Griseofulvin</b> is hepatotoxic with prolonged use, requiring periodic liver function tests. Nephrotoxicity is characteristic of amphotericin B; bone marrow suppression is associated with flucytosine."
      },
      {
        type: "mcq",
        q: "Which statement about flucytosine's toxicity profile is most accurate?",
        o: ["Flucytosine is highly nephrotoxic and must be dose-adjusted in all patients", "Flucytosine is relatively nontoxic but can cause bone marrow suppression at high doses", "Flucytosine consistently causes acute infusion reactions within the first hour", "Flucytosine causes irreversible hepatic fibrosis with prolonged use"],
        c: 1,
        r: "<b>Flucytosine</b> has a favorable toxicity profile. Its most significant adverse effects — bone marrow suppression and alopecia — occur at high doses. It is not nephrotoxic itself, though renal impairment from co-administered amphotericin B can elevate flucytosine levels."
      },
      {
        type: "mcq",
        q: "A patient with AIDS develops cryptococcal meningitis. Which drug is preferred for maintenance therapy, and why?",
        o: ["Amphotericin B — broadest spectrum and penetrates CSF adequately", "Fluconazole — the only azole achieving therapeutic CSF concentrations", "Itraconazole — preferred due to its IV formulation for systemic use", "Voriconazole — drug of choice for all CNS fungal infections"],
        c: 1,
        r: "<b>Fluconazole</b> is the azole of choice for cryptococcal meningitis maintenance because it is the only azole that reliably crosses the blood-brain barrier. Amphotericin B is used for induction but not long-term. Itraconazole has poor CSF penetration."
      },
      {
        type: "mcq",
        q: "Voriconazole is preferred over other azoles for invasive pulmonary aspergillosis primarily because:",
        o: ["It is the only antifungal with any activity against Aspergillus species", "It is fungicidal against Aspergillus and achieves superior clinical outcomes", "It has no CYP450 interactions, making it safer than other azoles", "It can be administered intrathecally for CNS involvement"],
        c: 1,
        r: "<b>Voriconazole</b> is the drug of choice for invasive aspergillosis due to superior efficacy and clinical outcomes compared to amphotericin B in clinical trials. All azoles inhibit CYP450 — voriconazole is not exempt."
      },
      {
        type: "mcq",
        q: "A patient with dermatophyte nail infection (onychomycosis) failed a 6-month griseofulvin course. Which drug is most appropriate next?",
        o: ["Fluconazole IV — systemic azole for deeper penetration", "Amphotericin B — broadest antifungal spectrum", "Terbinafine oral — drug of choice for dermatophyte onychomycosis", "Nystatin topical — polyene active against dermatophytes"],
        c: 2,
        r: "<b>Terbinafine</b> is the current drug of choice for dermatophyte onychomycosis — more effective, better tolerated, and requiring a shorter course than griseofulvin or itraconazole. Nystatin has no activity against dermatophytes."
      },
      {
        type: "mcq",
        q: "Nystatin is active against Candida but is never used systemically. What is the primary reason?",
        o: ["Nystatin resistance develops within 48 hours of systemic exposure", "Nystatin is too toxic for parenteral administration", "Nystatin is inactivated by gastric acid when given orally", "Nystatin cannot reach therapeutic plasma concentrations at any dose"],
        c: 1,
        r: "<b>Nystatin</b> shares amphotericin B's mechanism but is far too toxic for systemic administration — its therapeutic window is too narrow for IV use. It is used topically for oropharyngeal and vaginal candidiasis."
      },
      {
        type: "mcq",
        q: "Caspofungin is prescribed as second-line therapy for esophageal candidiasis after amphotericin B failure. Which statement about caspofungin is correct?",
        o: ["Caspofungin is effective orally and does not require IV administration", "Caspofungin works by binding ergosterol in the fungal cell membrane", "Caspofungin disrupts the fungal cell wall by inhibiting β-(1,3)-glucan synthase", "Caspofungin is the drug of choice for cryptococcal meningitis due to CSF penetration"],
        c: 2,
        r: "<b>Caspofungin</b> is an echinocandin that inhibits β-(1,3)-glucan synthase, impairing fungal cell wall integrity. It must be given IV. It targets the cell wall, not the membrane, and has no role in cryptococcal meningitis."
      },
      {
        type: "mcq",
        q: "A patient prescribed itraconazole for systemic blastomycosis is also taking warfarin. The nurse anticipates which pharmacokinetic interaction?",
        o: ["Itraconazole induces CYP3A4, accelerating warfarin metabolism and reducing INR", "Itraconazole inhibits hepatic CYP450, increasing warfarin plasma levels and INR", "Itraconazole displaces warfarin from plasma proteins, causing renal clearance", "Itraconazole has no clinically significant interaction with warfarin"],
        c: 1,
        r: "All azoles, including itraconazole, are <b>CYP450 inhibitors</b>. Warfarin is metabolized by CYP2C9/3A4, so co-administration elevates warfarin concentrations, increasing INR and bleeding risk."
      },
      {
        type: "mcq",
        q: "Which antifungal drug is obtained from the bacterium Streptomyces nodosus?",
        o: ["Griseofulvin", "Flucytosine", "Amphotericin B", "Caspofungin"],
        c: 2,
        r: "<b>Amphotericin B</b> is a naturally occurring polyene macrolide antibiotic isolated from Streptomyces nodosus. Griseofulvin is derived from Penicillium griseofulvum; flucytosine is a synthetic fluorinated pyrimidine; caspofungin is a semi-synthetic echinocandin."
      },
      {
        type: "mcq",
        q: "A patient taking fluconazole for vaginal candidiasis is also on phenytoin. Which outcome is most likely?",
        o: ["Fluconazole levels drop due to phenytoin enzyme induction", "Phenytoin levels rise due to fluconazole CYP450 inhibition", "Both drugs are inactivated by competitive CYP binding", "No clinically significant interaction occurs between these two drugs"],
        c: 1,
        r: "<b>Fluconazole</b> inhibits hepatic CYP2C9, the primary enzyme responsible for phenytoin metabolism. This raises phenytoin plasma levels, increasing the risk of toxicity (nystagmus, ataxia, confusion)."
      },
      {
        type: "mcq",
        q: "Why must amphotericin B be formulated as a colloidal suspension with sodium deoxycholate for IV administration?",
        o: ["Sodium deoxycholate enhances CNS penetration of amphotericin B", "Amphotericin B is insoluble in water and requires a solubilizing agent", "The complex reduces amphotericin B's affinity for ergosterol", "Deoxycholate prevents amphotericin B from binding plasma proteins"],
        c: 1,
        r: "<b>Amphotericin B</b> is highly polar and water-insoluble. Sodium deoxycholate acts as a surfactant to form a colloidal suspension suitable for IV infusion. Liposomal formulations were developed for the same solubility/toxicity reasons."
      },
      {
        type: "mcq",
        q: "Liposomal amphotericin B was developed primarily to address which limitation of conventional amphotericin B?",
        o: ["Poor oral bioavailability", "Lack of activity against Candida species", "Significant systemic toxicity, particularly nephrotoxicity", "Rapid development of fungal resistance"],
        c: 2,
        r: "<b>Liposomal amphotericin B</b> encloses the drug in lipid microspheres that preferentially bind fungal ergosterol over mammalian cholesterol, significantly reducing nephrotoxicity while preserving antifungal efficacy. Both forms are IV only."
      },
      {
        type: "mcq",
        q: "A patient on amphotericin B therapy undergoes dialysis after developing severe toxicity. The nurse should anticipate which outcome?",
        o: ["Dialysis will rapidly clear amphotericin B and reverse toxicity", "Dialysis is ineffective because amphotericin B is 90% protein-bound", "Dialysis will normalize potassium but not creatinine levels", "Dialysis accelerates renal recovery by removing fungal metabolites"],
        c: 1,
        r: "<b>Amphotericin B</b> is approximately 90% bound to plasma proteins, making it non-dialyzable. Dialysis cannot effectively remove it from circulation, and its 15-day half-life means it persists in the body for an extended period."
      },
      {
        type: "mcq",
        q: "Which azole is considered the least potent inhibitor of hepatic CYP450 enzymes among its class?",
        o: ["Ketoconazole", "Itraconazole", "Voriconazole", "Fluconazole"],
        c: 3,
        r: "While all azoles inhibit CYP450, <b>fluconazole</b> produces the least hepatic CYP450 inhibition. Ketoconazole is the strongest inhibitor. This partly explains why fluconazole is preferred in many systemic infections."
      },
      {
        type: "mcq",
        q: "Griseofulvin absorption is described as irregular but can be significantly enhanced by which factor?",
        o: ["Co-administration with antacids", "Taking the drug on an empty stomach", "Co-administration with a fatty meal or microfine particle formulation", "Alkalinizing the urine before administration"],
        c: 2,
        r: "<b>Griseofulvin</b> is lipophilic and its GI absorption is enhanced by fatty food, which promotes bile secretion and solubilizes the drug. Microfine (ultramicrosize) particle formulations also dramatically improve absorption by increasing surface area."
      },
      {
        type: "mcq",
        q: "A patient with tinea capitis is prescribed griseofulvin. How long should treatment typically continue?",
        o: ["3–5 days", "1–2 weeks", "6–8 weeks", "6–12 months"],
        c: 2,
        r: "Hair infections with dermatophytes require <b>6–8 weeks</b> of griseofulvin therapy because the drug must accumulate in newly growing keratinized hair until infected hair is fully replaced. Skin infections need 2–4 weeks; nail infections require 3–6 months."
      },
      {
        type: "mcq",
        q: "Flucytosine is rarely used as monotherapy for systemic fungal infections. What is the primary clinical reason?",
        o: ["Flucytosine cannot penetrate the blood-brain barrier", "Rapid development of resistance occurs when used alone", "Flucytosine is too nephrotoxic for prolonged monotherapy", "It is only active against molds, not yeasts"],
        c: 1,
        r: "Fungi rapidly develop <b>resistance</b> to flucytosine when used alone, due to mutations in cytosine permease or deaminase. It is always combined — classically with amphotericin B for cryptococcal meningitis — where synergy allows lower doses of each drug."
      },
      {
        type: "mcq",
        q: "Which antifungal drug concentrates specifically in keratinized tissue, making it uniquely suited for infections of the hair, skin, and nails?",
        o: ["Fluconazole", "Flucytosine", "Griseofulvin", "Amphotericin B"],
        c: 2,
        r: "<b>Griseofulvin</b> binds keratin precursor cells and accumulates in keratinized structures as they form. This selective distribution explains both its therapeutic target (dermatophytes in keratin) and the long treatment durations required for nails."
      }
    ]
  }
};
