---
layout: post
title: Our paper titled <b>Hallucination Detection in Large Language Models with Metamorphic Relations</b> has been accepted to FSE 2025.
date: 2025-01-14
inline: false
related_posts: false
---

## Paper Title: Hallucination Detection in Large Language Models with Metamorphic Relations

Authors: Borui Yang, [Md Afif Al Mamun](https://afif.me), [Jie Zhang](https://sites.google.com/view/jie-zhang/home), [Gias Uddin](https://giasuddin.ca/)

## Abstract

Large Language Models (LLMs) are prone to hallucinations, e.g., factually incorrect information, in their responses. These hallucinations present challenges for LLM-based applications that demand high factual accuracy. Existing hallucination detection methods primarily depend on external resources, which can suffer from issues such as low availability, incomplete coverage, privacy concerns, high latency, low reliability, and poor scalability. There are also methods depending on output probabilities, which are often inaccessible for closed-source LLMs like GPT models. This paper presents MetaQA, a self-contained hallucination detection approach that leverages metamorphic testing and prompt mutation. Unlike existing methods, MetaQA operates without any external resources and is compatible with both open-source and closed-source LLMs. MetaQA is based on the hypothesis that if an LLM's response is a hallucination, the designed metamorphic relations will be violated. We compare MetaQA with the state-of-the-art zero-resource hallucination detection method, SelfCheckGPT, across multiple datasets, and on two open-source and two closed-source LLMs. Our results reveal that MetaQA outperforms SelfCheckGPT in terms of precision, recall, and f1 score. For the four LLMs we study, MetaQA outperforms SelfCheckGPT with a superiority margin ranging from 0.041 - 0.113 (for precision), 0.143 - 0.430 (for recall), and 0.154 - 0.368 (for F1-score). For instance, with Mistral-7B, MetaQA achieves an average F1-score of 0.435, compared to SelfCheckGPT’s F1-score of 0.205, representing an improvement rate of 112.2%. MetaQA also demonstrates superiority across all different categories of questions.
