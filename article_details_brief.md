# Brief: Article Details Page Redesign (v2.3)
**Page ID:** `article_template`

This document outlines the detailed layout, interactive components, and structural requirements requested by Ivona for the Article Details page template.

---

## 1. Key Annotations & Interactive Blocks

1. **TL;DR Block**
   * **Purpose:** A styled, highlighted card at the very beginning of the article.
   * **Function:** Lets busy founders scan the core value of the piece in seconds.
   * **Requirements:** Max 3 concise bullet points with a "Skip to full piece ↓" anchor link.

2. **Sticky Reading Progress Bar**
   * **Purpose:** A thin, interactive bar at the very top of the browser window.
   * **Function:** Fills horizontally as the reader scrolls down the page to visual represent completion.

3. **Founder Insight Callout ("From the Trenches")**
   * **Purpose:** A distinct block quoting direct experience.
   * **Function:** Provides peer-to-peer authority based on real agency operation.
   * **Requirements:** Positioned every 400–500 words of body copy. Contains a quote, label, and co-founder attribution.

4. **Numbers Callout Tile**
   * **Purpose:** An eye-catching graphic container highlighting a key statistic.
   * **Requirements:** Features a large, bold metric (e.g., "80%") and a detailed label explaining the context.

5. **Barrel Agency Sidebar**
   * **Purpose:** A small, right-aligned callout box highlighting Barrel's actual practice.
   * **Function:** Acts as a trust signal proving the advice is used in real life.
   * **Requirements:** Titled "FROM A BARREL AGENCY" and references internal workflows.

6. **Mid-Article Newsletter CTA**
   * **Purpose:** An inline conversion box (not a popup).
   * **Requirements:** Placed at approximately 50% scroll mark within the main content flow.

7. **Desktop-Only Sticky Sidebar (Right Rail)**
   * **Purpose:** Promoting relevant podcast episodes.
   * **Requirements:** Displays the corresponding podcast cover art, duration, title, and links to Spotify and YouTube.

8. **Contextual Upsell Card**
   * **Purpose:** Recommends paid tools or resources matched to the article's topic.
   * **Logic:** 
     * Business Development Article $\rightarrow$ Promotes *BD Collection* card.
     * Finance / M&A Article $\rightarrow$ Promotes *Exit-Readiness Checklist*.
     * Positioning / Strategy Article $\rightarrow$ Promotes *Free Positioning Audit*.

9. **Conversion Order Optimization**
   * **Rule:** The inline Newsletter CTA must appear **BEFORE** the "Read Next" links at the footer. The client requested this because the footer is the moment of highest user intent.

---

## 2. Page Hierarchy & Layout Structure

### Top of Page
* **Reading Progress Bar:** Thin indicator line at the top edge.
* **Category Tag:** Clickable tag (e.g., "BUSINESS DEVELOPMENT") linking back to the Articles Hub.
* **H1 Title:** E.g., *"How to Scale Agency BD Beyond the Founder"*.
* **Author Metadata Row:** Author photo, name, role ("Co-founder, Barrel Holdings"), publish date, and read time.
* **Hero Image:** A styled blue gradient cover block (or matching topic color gradient).

### Introductory Content
* **TL;DR Card:** 
  * Bullets:
    1. *"Most agency BD plateaus when it depends entirely on the founder's relationships"*
    2. *"The fix is building systems: ICP clarity, pipeline tracking, and team-led outreach"*
    3. *"Start with your last 10 clients — the pattern is already there"*
  * Anchor Link: `"Skip to full piece ↓"`

### Body Content (Two-Column Layout on Desktop)
* **Left Main Column (~700px):**
  * Intro paragraph.
  * **Founder Insight:** *"We spent three years taking every project... defined our ICP... close rate went from 20% to 65%."*
  * Section 1: `<h2>1. Why founder-led BD breaks</h2>` + body text.
  * **Numbers Callout Tile:** `"80%"` + *"of agency founders say BD is the highest-leverage thing they do..."*
  * Section 2: `<h2>2. The ICP clarity prerequisite</h2>` + body text.
  * **Barrel Agency Sidebar:** *"At Barrel, we rebuilt our new business process..."*
  * Section 3: `<h2>3. Building the pipeline without you</h2>` + body text.
  * **Mid-article Newsletter CTA:** Form to input email with `"Subscribe"` button.
  * Section 4: `<h2>4. The outreach system</h2>` + body text.
  * Section 5: `<h2>5. Measuring what matters</h2>` + closing paragraph.
* **Right Sidebar Column (Desktop Only - Sticky):**
  * Label: `"FROM THE PODCAST"`
  * Cover art + *"EP.07 — 10 Essential Habits for Running a Successful Agency"* (44 min).
  * Prominent buttons: `"Listen on Spotify →"` and `"Watch on YouTube →"`.

### Article Footer (Ordered List)
1. **Author Bio Box:** Photo, bio, and link `"More articles by Peter →"`.
2. **Share Strip:** `"Send this to a founder friend:"` + sharing buttons (LinkedIn, Twitter/X, Copy Link).
3. **Newsletter CTA:** Subscription block for founders running \$750K–\$3M agencies.
4. **Read Next Section:** 3 recommended article cards (e.g., *"The Client Pruning Framework"*, *"How to Define Your Agency's ICP"*, *"The Three Agency Ecosystem Archetypes"*).
5. **Contextual Upsell Card:** E.g., The *Business Development Collection* card showing price (\$599) and a link to `bizdev_collection`.
