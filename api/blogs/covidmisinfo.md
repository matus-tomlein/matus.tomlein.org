---
title: CovidMis.info
subtitle: Exploration of COVID-19 Fact Checks
authors: Matúš Tomlein
context: MISDEED, FIIT STU
link: https://covidmis.info
date: 2020-04-20
---

> **Abstract.**
> Misinformation during the COVID-19 pandemic poses a serious threat to public health as well as spreads stigma and fear.
> Recognizing this threat, numerous fact checking sites continuously monitor misinformation related to the disease and publish information fact-checked by experts.
> Exploring this knowledge base of fact checks provides potential for better understanding how misinformation regarding COVID-19 evolves and relates to other content.
> [CovidMis.info](https://covidmis.info) is a website that aims to support the exploration of fact checks and related Web articles.
> It builds on Monant, a platform for crawling and processing misinformation-related data from the Web.
> Based on the data, it provides visualizations of relations between fact checks and fact checks and Web articles.

## Introduction

The World Health Organization declared the COVID-19 coronavirus outbreak a pandemic.
Infectious diseases pose serious challenges due to the rapid spread of misinformation on the Web and social media as has previously been the case for the Zika outbreak [\[1\]](#Ghenai2018Zika).
The scale and magnitude of the COVID-19 outbreak makes it no exception.
Misinformation regarding the virus has already ranged from the effects of Vitamin C and Ibuprofen to various conspiracy theories regarding its origin.

Fact checking sites continuously publish articles responding to recent misinformation.
There are ongoing efforts (e.g, snopes.com, healthfeedback.org) to fact check misinformative claims by experts.
Crowd-sourcing platforms enable users to publicly ask health-related questions to be answered by domain experts (e.g., metafact.io).
These fact checks provide a useful source of verified information that reflects current trends and interests from across the Web and social media.

Fact checks may particularly be useful for detecting fake news or misinformation spread on the Web.
They enable algorithms that asses the veracity of textual content by mapping it to a knowledge base of verified fact checks [\[3\]](#Wang2018FactChecks).
In our ongoing efforts, we are building a platform and a set of algorithms that enable such classification of Web content using verified claims [\[2\]](#Srba2019Monant).

<a name="fig_page_screenshot"></a>
<input type="checkbox" id='mn-screenshot' checked className="margin-toggle" />
<span className="marginnote">
  <img src="/images/blogs/covidmisinfo/page-screenshot.png">
  **Figure 1:**
  The website aggregates and visualizes fact checks related to Covid-19 from various fact-checking sites (e.g., metafact.io, snopes.com).
  It groups fact checks based on their similarity and also presents identified Web articles that may contain the fact checks.
  Visitors are presented with a graph-visualization of links between fact checks and articles.
  They may also browse commonly asked and recent fact checks.
</span>

This article presents [CovidMis.info](https://covidmis.info), a website (shown in [Figure 1](#fig_page_screenshot)) that exposes fact checks related to COVID-19 from multiple fact checking sites and explores their dynamics and spread on the Web.
It visualizes links between similar fact checks and between fact checks and related articles on the Web using standard Web navigation as well as in a graph view.
Through visualization and navigation, it aims to provide a holistic picture of misinformation regarding the disease and support extraction of insights about the dynamics of the misinformation.
The rest of this article briefly introduces the Monant platform that [CovidMis.info](https://covidmis.info) builds on and presents the acquired data and data exploration approaches enabled by the website.

## Monant Platform
Monant is a platform designed to support characterization and detection of multiple types of antisocial behaviour [\[2\]](#Srba2019Monant).
By aggregating content from reliable and unreliable sources, Monant provides both the data and software architecture to support exploration of misinformation on the Web.
It provides adapters for crawling various websites such as news portals and blogs.
It can also crawl fact checking sites and extract rich metadata describing fact checks.

### Crawled Data
The crawled data consists of health-oriented articles from both reliable and unreliable sources.
At the time of writing, over 500 thousand articles were stored in Monant.
Fact checked claims are crawled from sites that fact check medical misinformation.
There were over 6000 such fact checks stored in Monant at the time of writing.

<a name="fig_factchecks"></a>
<input type="checkbox" id='mn-factchecks' checked className="margin-toggle" />
<span className="marginnote">
  <img src="/images/blogs/covidmisinfo/factchecks.png">
  **Figure 2:**
  Cumulative number of fact checks related to COVID-19 that are available at [CovidMis.info](https://covidmis.info).
</span>

<a name="fig_articles"></a>
<input type="checkbox" id='mn-articles' checked className="margin-toggle" />
<span className="marginnote">
  <img src="/images/blogs/covidmisinfo/articles.png">
  **Figure 3:**
  Cumulative number of fact checks related to COVID-19 that are available at [CovidMis.info](https://covidmis.info).
</span>

Out of this set of articles and fact checks, [CovidMis.info](https://covidmis.info) presents those related to COVID-19.
Relevant fact checks are filtered using keyword search with COVID-19 related keywords.
Only articles that contain the relevant claims are presented–the method for claim presence detection is discussed in the following Section.
[Figure 2](#fig_factchecks) shows the number of fact checks over time.
[Figure 3](#fig_articles) shows the number of articles containing the fact checked statements over time.
Up to date statistics and sources of fact checks are presented in the ["About" page](https://covidmis.info/about) at [CovidMis.info](https://covidmis.info).

## Data Transformations
Raw data consisting of Web articles and fact checks is processed and transformed in Monant to provide further insights into the data.
This section gives a brief overview of the transformation methods provided by the platform that [CovidMis.info](https://covidmis.info) makes use of.
Their full account will be the subject of a paper that is currently being prepared for submission.

### Similarity of fact checks
We observed that COVID-19 related fact checks often follow similar topics (e.g., “Can cats get coronavirus?” and “Can humans get coronavirus from cats?”).
In order to identify these related fact checks, we compare their similarity.
The applied method transforms sentences within each fact check to vector representations using an [ML-based sentence encoder](https://tfhub.dev/google/universal-sentence-encoder/1).
The vector representations are then compared using cosine similarity to identify related fact checks.

### Presence of fact checks in articles
We further aimed to identify instances of fact checked claims within articles crawled from the Web.
We proposed a method that is based on sentence encodings and information retrieval techniques.
The method extracts n-grams of terms from fact checked claims and searches for article sentences that contain them.
The identified article sentences are ranked using a combination of TF-IDF and a similarity score that compares them to the fact checked claims.
The similarity score is computed using vector encodings of sentences from articles and fact checked claims.
Individual scores are combined and normalized to acquire the final score used to judge presence of fact checked claims within articles.

## Data Exploration at CovidMis.info
The [CovidMis.info](https://covidmis.info) website shown in [Figure 1](#fig_page_screenshot) provides an interface for exploration of processed fact checks and articles.
It presents a timeline of fact checks as they were published by their sources.
It groups related fact checks and provides an aggregated view of common threads within them.
The website also presents Web articles that are relevant to the fact checks and are likely to contain statements similar to them.
Descriptive statistics of the extracted fact checks and articles are provided in the “About” section.

### Web of Misinfo
To enable exploration of relations between fact checks and articles, the website visualizes them using a graph-like view as shown in [Figure 4](#graph).
The user may zoom in on the graph and explore clusters of related information presented as nodes and links in the graph.
The graph consists of several elements:

1. *Fact checks* are shown as green, orange and red circles.
The color represents their veracity–green for true, red for false, and orange for other or non-binary veracity.
2. *Article nodes* are gray squares.
Hovering over them shows tooltips with their titles.
The number of article nodes is limited to 5 articles per fact check.
3. *Groups of related fact checks* are shown using text of one of the fact checks in the group.
4. *Blue links* connect fact check groups to fact checks within them and also similar fact check groups with each other.
5. *Gray links* connect fact checks and Web articles that are likely to contain them.

<a name="graph"></a>
<input type="checkbox" id="mn-graph" className="margin-toggle" checked />
<span className="marginnote">
  **Figure 4:**
  Visualization of links between related fact checks and Web articles using a graph.
</span>

![Visualization of links between related fact checks and Web articles using a graph.](/images/blogs/covidmisinfo/graph.png "")

## Discussion

We argue that the graph visualization can provide interesting insights into the dynamics of how COVID-19 related misinformation evolves and relates to other content.
It uncovers links between related fact checks such as conspiracy theories about the origin of the disease, or fact checks related to the effectiveness of various remedies against the virus (e.g., masks, hand sanitizers).
By automatically aggregating claims from multiple sources, it gives an overview of how claims evolve and relate to each other.

The visualization also exposes links between fact checked claims that are created through content in Web articles.
For instance, one article linked fact checks claiming 5G as the cause of the pandemic and fact checks pointing to Vitamin C as a remedy.
Although these claims are not individually related, links through Web articles uncover how producers of misinformation present and connect them.
However, due to the potential number of such links through articles, not all of them may be shown in the graph.

Further work is needed to enable a more interactive and guided traversal through the graph.
Such a guided traversal through the links between fact checks and articles would provide a better starting point for the exploration and a potentially more scalable representation of the graph as it grows.

Future work should also classify and visualize changes in fact checks and topics over time.
Through browsing the timeline of fact checks at [CovidMis.info](https://covidmis.info) one can observe how interests with respect to the disease changed.
While fact checks early in the pandemic doubted the seriousness of the virus and compared it to seasonal flu, more recent fact checks deal, for instance, with potential remedies.
There are also fact checks that regard certain events that happen in news and do not have a lasting occurrence.
Classifying these dynamics can give further insights into misinformation regarding the disease.

## References

1. <a name="Ghenai2018Zika"></a>Amira Ghenai and Yelena Mejova. 2017. Catching ZikaFever: Application of Crowdsourcing and Machine Learning for Tracking Health Misinformation on Twitter. CoRR abs/1707.03778 (2017). [http://arxiv.org/abs/1707.03778](http://arxiv.org/abs/1707.03778)
2. <a name="Srba2019Monant"></a>Ivan Srba, Róbert Móro, Jakub Simko, Jakub Sevcech, Daniela Chudá, Pavol Návrat, and Mária Bieliková. 2019. Monant: Universal and Extensible Platform for Monitoring, Detection and Mitigation of Antisocial Behaviour.
3. <a name="Wang2018FactChecks"></a>Xuezhi Wang, Cong Yu, Simon Baumgartner, and FlipKorn. 2018. Relevant Document Discovery for Fact-Checking Articles. In Companion Proceedings of the The Web Conference 2018 (WWW ’18). International World Wide Web Conferences Steering Committee, Republic and Canton of Geneva, CHE, 525–533. DOI: [http://dx.doi.org/10.1145/3184558.3188723](http://dx.doi.org/10.1145/3184558.3188723)

**Acknowledgment.**
This work was done as part of the MISDEED project (Misinformation Detection in Healthcare Domain) under the contract No. APVV SK-IL-RD-18-0004.
