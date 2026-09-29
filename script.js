const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

$("#year").textContent = new Date().getFullYear();

const menuBtn = $("#menuBtn"), nav = $("#nav");
menuBtn.addEventListener("click", ()=>nav.classList.toggle("open"));
$$(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add("visible"); observer.unobserve(e.target)} });
},{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

const skillDescriptions = {
  analytics: ["01", "Data Analytics", "Working with data to find patterns, answer questions and create reliable analysis."],
  bi: ["02", "BI & Visualisation", "Turning analysis into dashboards, KPIs and clear business insights."],
  business: ["03", "Business Analysis", "Understanding requirements, aligning stakeholders and shaping solutions that solve the right problem."],
  engineering: ["04", "Data Engineering", "Building reliable data foundations, transformations and analytical data workflows."],
  ml: ["05", "ML & AI", "Using machine learning and NLP techniques to model, match, evaluate and extract value from data."],
  cloud: ["06", "Cloud & Tools", "Deploying, integrating and collaborating across cloud, APIs, containers and development tools."]
};

function setSkillGroup(group){
  const meta = skillDescriptions[group];
  if(!meta) return;
  $$(".skill-tab").forEach(b=>{
    const active=b.dataset.skill===group;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", String(active));
  });
  $$(".skill-card").forEach(card=>card.classList.toggle("hide", card.dataset.group!==group));
  const num=$("#skillCategoryTitle");
  const desc=$("#skillCategoryDescription");
  const n=$(".skill-category-number");
  if(num) num.textContent=meta[1];
  if(desc) desc.textContent=meta[2];
  if(n) n.textContent=meta[0];
}

$$(".skill-tab").forEach(btn=>btn.addEventListener("click",()=>setSkillGroup(btn.dataset.skill)));
setSkillGroup("analytics");

$$(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $$(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    $$(".project-card").forEach(card=>{
      card.classList.toggle("hide", filter!=="show-all" && card.dataset.category!==filter);
    });
  });
});

const projects = {
  ats:{
    kicker:"AI / NLP · END-TO-END APPLICATION",
    title:"AI-Powered ATS Resume Analyzer",
    lede:"An intelligent resume screening application that evaluates how closely a candidate's resume aligns with a job description using multiple matching strategies.",
    impact:"Automated a multi-stage screening workflow and combined keyword, TF-IDF and semantic signals into one evaluation.",
    problem:"Traditional keyword matching can miss synonyms and contextual relationships. This project combines exact skill matching, synonym expansion, fuzzy matching and semantic similarity to create a richer ATS-style evaluation.",
    approach:"PDF text extraction → skill extraction → synonym normalisation → exact/fuzzy matching → TF-IDF similarity → Sentence Transformer semantic similarity → final evaluation.",
    stack:["Python","FastAPI","Streamlit","PyMuPDF","Scikit-learn","Sentence Transformers","RapidFuzz","Docker","AWS EC2"],
    highlights:["Upload resume PDF or enter text manually","Matched and missing skills","Skill overlap, TF-IDF and semantic similarity metrics","Containerised frontend/backend architecture","Docker Hub images and AWS EC2 deployment"],
    repo:"https://github.com/juverianishath/resume-screening-ai"
  },
  housing:{
    kicker:"MACHINE LEARNING · ANALYTICS",
    title:"Melbourne Housing Market Analysis & Price Prediction",
    lede:"A two-level analysis of Victoria's housing market combining macro trends, property-level modelling and Power BI storytelling.",
    impact:"XGBoost achieved an R² of approximately 0.79 among the tested models, with the analysis translated into an interactive Power BI view.",
    problem:"The project asks what factors influence Melbourne property prices and how housing behaviour changed across pre-COVID, COVID and post-COVID periods.",
    approach:"Clean ABS dwelling data and Melbourne property data → macro trend analysis → property-level feature engineering → model comparison → Power BI dashboard.",
    stack:["Python","Pandas","NumPy","Scikit-learn","XGBoost","Matplotlib","Power BI"],
    highlights:["Pre-COVID / COVID / post-COVID analysis","Missing-value handling and outlier treatment","Categorical encoding and feature engineering","Linear, Ridge, Decision Tree, Random Forest and XGBoost comparison","Dashboard covering trends, model results and feature importance"],
    repo:"https://github.com/juverianishath/melbourne-housing-price-analysis"
  },
  jobs:{
    kicker:"ANALYTICS · POWER BI",
    title:"AI Job Market Analysis",
    lede:"An interactive Power BI dashboard exploring how the AI job market varies by location, role, experience, salary and working arrangement.",
    impact:"Turned 10,345 job records into an interactive dashboard for comparing demand, salary, experience and work model patterns.",
    problem:"AI roles span countries, experience levels and work models. The dashboard turns a large job-market dataset into an interactive view for exploring demand and compensation patterns.",
    approach:"Data preparation → KPI and dimension design → DAX measures → interactive dashboard → country-level drill-through.",
    stack:["Power BI","DAX","Data Visualisation","Dashboard Design"],
    highlights:["Country-level job demand","Top in-demand roles","Experience-level distribution","Average salary analysis","Remote / hybrid / onsite work analysis","Dynamic titles and drill-through"],
    repo:"https://github.com/juverianishath/AI-Job-Market-Analysis"
  },
  reels:{
    kicker:"DATA COLLECTION · STATISTICS",
    title:"Instagram Reels Engagement Analysis",
    lede:"An analysis of 800+ Instagram Reels investigating creators, genres, timing, captions, hashtags, video duration and engagement.",
    impact:"Built a structured dataset of 800+ Reels and tested measurable content features against engagement using OLS regression.",
    problem:"The project explores whether simple measurable Reel features can explain engagement — and where those features fail to explain unpredictable viral behaviour.",
    approach:"Instaloader collection → cleaning and feature creation → creator/genre analysis → timing analysis → caption/hashtag analysis → OLS regression → conclusions.",
    stack:["Python","Instaloader","Pandas","NumPy","Matplotlib","OLS Regression"],
    highlights:["Collected username, genre, followers, likes, comments, plays and metadata","Created engagement rate, caption length, hashtag count and time features","Compared micro, mid, macro and mega creators","Identified top 5% viral reels","Tested measurable features with OLS regression"],
    repo:"https://github.com/juverianishath/Instagram-Reels-Engagement-Analysis"
  },
  vicmart:{
    kicker:"DATA ENGINEERING · BI",
    title:"VicMart Retail Analytics Platform",
    lede:"An end-to-end synthetic retail analytics platform taking raw CSV data through Databricks medallion layers into a dimensional model, SQL analytics and Tableau.",
    impact:"Created a full Landing → Bronze → Silver → Gold → SQL → Tableau workflow supporting retail analytics across stores, products, suppliers and transactions.",
    problem:"Retail data often lives across stores, products, suppliers, inventory, promotions and transactions. The project creates a consistent analytical foundation for business reporting.",
    approach:"Synthetic source data → Landing → Bronze → Silver → Gold → SQL analytics → Tableau dashboards.",
    stack:["Databricks","PySpark","Spark SQL","Delta Lake","SQL","Tableau","ETL/ELT","Dimensional Modelling"],
    highlights:["20 stores, 50 suppliers, 500 products and 34,759 order-item records","Bronze raw layer and Silver standardisation","Gold star schema with fact_sales and fact_inventory","Business dimensions for date, store, product, supplier and promotion","SQL analysis for business questions and Tableau reporting"],
    repo:"https://github.com/juverianishath/VicMart_Retail_Analytics"
  }
};

const modal=$("#projectModal"), content=$("#modalContent");
function openProject(key){
  const p=projects[key]; if(!p) return;
  content.innerHTML = `
    <div class="modal-kicker">${p.kicker}</div>
    <h2>${p.title}</h2>
    <p class="modal-lede">${p.lede}</p>
    <div class="modal-tags">${p.stack.map(x=>`<span>${x}</span>`).join("")}</div>
    <div class="modal-impact"><span>IMPACT &amp; RESULT</span><strong>${p.impact}</strong></div>
    <div class="modal-block"><h4>THE PROBLEM</h4><p>${p.problem}</p></div>
    <div class="modal-block"><h4>APPROACH</h4><p>${p.approach}</p></div>
    <div class="modal-block"><h4>WHAT I BUILT / ANALYSED</h4><ul>${p.highlights.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="modal-actions"><a href="${p.repo}" target="_blank" rel="noreferrer">Open GitHub ↗</a><a class="secondary" href="#contact" data-close>Discuss this project</a></div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
$$("[data-open]").forEach(b=>b.addEventListener("click",()=>openProject(b.dataset.open)));
$$("[data-close]").forEach(b=>b.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.addEventListener("click",e=>{if(e.target.matches(".modal .secondary"))closeModal()});
