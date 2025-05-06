// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in which I authored...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-timeline",
          title: "timeline",
          description: "My journey over the years...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/timeline/";
          },
        },{id: "post-debugging-python-programs-on-remote-servers-computing-clusters",
      
        title: 'Debugging Python Programs on Remote Servers/Computing Clusters <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@afifaniks/debugging-python-programs-on-remote-servers-computing-clusters-9553af8d8132?source=rss-79598b9b2199------2", "_blank");
        
      },
    },{id: "post-how-to-run-jupyter-notebooks-on-an-hpc-cluster",
      
        title: 'How to Run Jupyter Notebooks on an HPC Cluster <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@afifaniks/how-to-run-jupyter-notebook-on-an-hpc-cluster-40e21eda676a?source=rss-79598b9b2199------2", "_blank");
        
      },
    },{id: "post-dockerize-cuda-accelerated-applications",
      
        title: 'Dockerize CUDA-Accelerated Applications <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@afifaniks/dockerize-your-cuda-powered-application-aece76035ce3?source=rss-79598b9b2199------2", "_blank");
        
      },
    },{id: "news-our-poster-titled-neonatal-brain-mri-motion-correction-using-adult-mri-has-been-presented-to-ismrm-2024",
          title: 'Our poster titled Neonatal Brain MRI Motion Correction using Adult MRI has been...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ismrm24/";
            },},{id: "news-i-have-been-awarded-alberta-graduate-excellence-scholarship-2024",
          title: 'I have been awarded Alberta Graduate Excellence Scholarship 2024!',
          description: "",
          section: "News",},{id: "news-our-paper-hallucination-detection-in-large-language-models-with-metamorphic-relations-was-awarded-acm-distinguished-paper-award-at-fse-2025-layout-post-title-our-paper-titled-hallucination-detection-in-large-language-models-with-metamorphic-relations-has-been-accepted-to-fse-2025-date-2025-01-14-inline-false-related-posts-false-paper-title-hallucination-detection-in-large-language-models-with-metamorphic-relations-authors-borui-yang-md-afif-al-mamun-jie-zhang-gias-uddin-abstract-large-language-models-llms-are-prone-to-hallucinations-e-g-factually-incorrect-information-in-their-responses-these-hallucinations-present-challenges-for-llm-based-applications-that-demand-high-factual-accuracy-existing-hallucination-detection-methods-primarily-depend-on-external-resources-which-can-suffer-from-issues-such-as-low-availability-incomplete-coverage-privacy-concerns-high-latency-low-reliability-and-poor-scalability-there-are-also-methods-depending-on-output-probabilities-which-are-often-inaccessible-for-closed-source-llms-like-gpt-models-this-paper-presents-metaqa-a-self-contained-hallucination-detection-approach-that-leverages-metamorphic-testing-and-prompt-mutation-unlike-existing-methods-metaqa-operates-without-any-external-resources-and-is-compatible-with-both-open-source-and-closed-source-llms-metaqa-is-based-on-the-hypothesis-that-if-an-llm-s-response-is-a-hallucination-the-designed-metamorphic-relations-will-be-violated-we-compare-metaqa-with-the-state-of-the-art-zero-resource-hallucination-detection-method-selfcheckgpt-across-multiple-datasets-and-on-two-open-source-and-two-closed-source-llms-our-results-reveal-that-metaqa-outperforms-selfcheckgpt-in-terms-of-precision-recall-and-f1-score-for-the-four-llms-we-study-metaqa-outperforms-selfcheckgpt-with-a-superiority-margin-ranging-from-0-041-0-113-for-precision-0-143-0-430-for-recall-and-0-154-0-368-for-f1-score-for-instance-with-mistral-7b-metaqa-achieves-an-average-f1-score-of-0-435-compared-to-selfcheckgpt-s-f1-score-of-0-205-representing-an-improvement-rate-of-112-2-metaqa-also-demonstrates-superiority-across-all-different-categories-of-questions",
          title: 'Our paper Hallucination Detection in Large Language Models with Metamorphic Relations was awarded...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-project-intelligent-issue-analytics-assistant-for-ibm-runtime-systems-has-been-awarded-the-ibm-cas-project-of-the-year-2024",
          title: 'Excited to share that our project Intelligent Issue Analytics Assistant for IBM Runtime...',
          description: "",
          section: "News",},{id: "news-our-poster-titled-inspiring-ai-infused-innovations-in-adoptium-aqavit-and-openj9-has-been-presented-to-cascon-2024",
          title: 'Our poster titled Inspiring AI-Infused Innovations in Adoptium AQAvit and Openj9 has been...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/cascon24/";
            },},{id: "news-our-paper-titled-hallucination-detection-in-large-language-models-with-metamorphic-relations-has-been-accepted-to-fse-2025",
          title: 'Our paper titled Hallucination Detection in Large Language Models with Metamorphic Relations has...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/fse25-hallucination/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%66%69%66.%6D%61%6D%75%6E@%75%63%61%6C%67%61%72%79.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/afifaniks", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/afifaniks", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/afifaniks", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9319-3483", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Md-Afif-Al-Mamun/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XuauQRIAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/afifaniks", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
