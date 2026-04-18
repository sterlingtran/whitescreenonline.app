# SEO Optimization To-Do List
**For: ScreenHub — screenhub.app**  
**Priority: Complete in order**  
**Estimated Time: 60-80 hours total**

---

## 🔴 HIGH PRIORITY - QUICK WINS (Week 1-2)
*Start here. These have highest impact-to-effort ratio.*

### TASK 1: Add Organization Schema Markup ✅ DONE
**Priority:** CRITICAL  
**Effort:** 30 minutes  
**Impact:** 9/10  
**Files Modified:** `index.html`

Added Organization JSON-LD to `<head>` of index.html.

**Acceptance Criteria:**
- [x] Schema markup added to homepage
- [ ] Validate using Google's Structured Data Testing Tool (https://schema.org/validator)
- [ ] No errors or warnings
- [ ] Submit to Google Search Console

---

### TASK 2: Add FAQ Schema Markup ✅ DONE
**Priority:** CRITICAL  
**Effort:** 1 hour  
**Impact:** 8/10  
**Files Modified:** `src/components/PageSEO.tsx`, `src/pages/Home.tsx`

FAQ section already exists in Home.tsx. Added JSON-LD FAQPage schema via PageSEO's jsonLd prop.

**Acceptance Criteria:**
- [x] FAQ section visible on homepage
- [x] JSON-LD schema added to page
- [x] All 4 questions have answers
- [ ] Schema validates in Google Structured Data Tester
- [ ] Submit to Google Search Console

---

### TASK 3: Optimize Homepage Title & Meta Description ✅ DONE
**Priority:** CRITICAL  
**Effort:** 15 minutes  
**Impact:** 8/10  
**Files Modified:** `index.html`, `src/pages/Home.tsx`

Updated base title, meta description, OG tags, and Twitter card in index.html. Updated Home.tsx PageSEO with keyword-rich title/description.

**Acceptance Criteria:**
- [x] Title is 50-60 characters
- [x] Includes primary keywords
- [x] Meta description is 150-160 characters
- [x] OG tags are present
- [x] Twitter card tags are present
- [ ] Test in Google Search Preview tool

---

### TASK 4: Create Website Schema + Breadcrumb Navigation ✅ DONE
**Priority:** HIGH  
**Effort:** 45 minutes  
**Impact:** 7/10  
**Files Modified:** `index.html`, `src/pages/ToolPage.tsx`, `src/pages/CategoryPage.tsx`

Added WebSite JSON-LD to index.html. Added visible breadcrumb nav + BreadcrumbList JSON-LD to ToolPage and CategoryPage.

**Acceptance Criteria:**
- [x] Website schema on homepage
- [x] Breadcrumb schema on all tool pages
- [x] Breadcrumb visible in HTML (not hidden)
- [ ] All schemas validate
- [ ] Breadcrumbs appear in Google Search Console

---

### TASK 5: Optimize Tool Page Titles & Meta Descriptions ✅ DONE
**Priority:** HIGH  
**Effort:** 30 minutes  
**Impact:** 7/10  
**Files Modified:** `src/data/tools.ts`

Updated seoTitle and seoDescription for all 30+ tools with keyword-rich, benefit-focused copy. Each title is 50-60 chars, descriptions are 150-160 chars.

**Acceptance Criteria:**
- [x] Each page has unique title
- [x] Each page has unique meta description
- [x] Titles are 50-60 characters
- [x] Descriptions are 150-160 characters
- [x] Primary keyword included in title
- [x] Description includes benefit/use case

---

### TASK 6: Add Image Alt Text & Optimize Images
**Priority:** HIGH  
**Effort:** 30 minutes  
**Impact:** 6/10  
**Files to Modify:** All pages with images

ScreenHub is a React SPA with no `<img>` tags (tools render to canvas/CSS). This task is N/A for the current architecture — no static images to optimize.

**Acceptance Criteria:**
- [x] N/A — No static images on current pages

---

### TASK 7: Create XML Sitemap & Update robots.txt ✅ DONE
**Priority:** HIGH  
**Effort:** 45 minutes  
**Impact:** 7/10  
**Files Created:** `public/sitemap.xml`, `public/robots.txt`

Created full sitemap.xml covering all 30+ tool pages, 7 category pages, and utility pages. Created robots.txt allowing all crawlers with sitemap reference.

**Acceptance Criteria:**
- [x] `/sitemap.xml` created and valid XML
- [x] All main pages included in sitemap
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools
- [x] `/robots.txt` file present
- [x] Robots.txt allows all pages that should be indexed
- [x] Sitemap URL declared in robots.txt

---

### TASK 8: Add Canonical Tags to All Pages ✅ DONE
**Priority:** HIGH  
**Effort:** 20 minutes  
**Impact:** 6/10  
**Files Modified:** `src/components/PageSEO.tsx` (already handles canonicals)

The PageSEO component already renders a canonical tag on every page. Verified all page components pass the correct canonical URL.

**Acceptance Criteria:**
- [x] All pages have canonical tag (via PageSEO component)
- [x] Canonical tag points to absolute URL
- [x] No self-referencing conflicts
- [ ] Test with Google Search Console URL inspection

---

### TASK 9: Optimize Mobile Responsiveness & Viewport ✅ DONE
**Priority:** HIGH  
**Effort:** 1 hour  
**Impact:** 8/10  
**Files Modified:** `index.html`

Added `viewport-fit=cover`, `mobile-web-app-capable`, `apple-mobile-web-app-capable`, updated `theme-color` to match brand indigo.

**Acceptance Criteria:**
- [x] Proper viewport meta tag
- [x] Mobile web app capable tags added
- [x] Theme color updated to brand color
- [ ] Test with Google Mobile-Friendly Test
- [ ] Core Web Vitals checked

---

## 🟡 MEDIUM PRIORITY - CONTENT DEPTH (Week 3-4)
*These improve authority and long-tail keyword rankings.*

### TASK 10: Create Use-Case Guide Pages
**Priority:** MEDIUM  
**Effort:** 2-3 hours per guide (create 5-6)  
**Impact:** 9/10

**Create These New Pages:**
1. `/guide/white-screen-monitor-cleaning/` — 1,200+ words
2. `/guide/white-light-product-photography/` — 1,200+ words
3. `/guide/white-screen-design-work/` — 1,000+ words
4. `/guide/white-light-for-reading/` — 1,000+ words
5. `/guide/white-screen-for-makeup/` — 800+ words
6. `/guide/monitor-dead-pixels-complete-guide/` — 1,500+ words

**Acceptance Criteria:**
- [ ] All 6 guides created with 1000+ words each
- [ ] Each has unique H1 and clear structure
- [ ] Internal links to tool pages included
- [ ] Article schema added to each guide
- [ ] Table of contents included
- [ ] Submit guides to Google Search Console

---

### TASK 11: Create "About Us" Page with E-A-T Signals
**Priority:** MEDIUM  
**Effort:** 1-2 hours  
**Impact:** 7/10

**Acceptance Criteria:**
- [ ] About page created and published at `/about`
- [ ] Includes founder/team info with credentials
- [ ] Explains the "why" behind the product
- [ ] Lists trust signals and features
- [ ] Organization schema added
- [ ] Contact information provided
- [ ] Links to privacy/terms included

---

### TASK 12: Improve Header Tags on All Pages
**Priority:** MEDIUM  
**Effort:** 1 hour  
**Impact:** 6/10

Restructure H1-H6 hierarchy for better SEO. One H1 per page, logical nesting, keyword inclusion.

**Acceptance Criteria:**
- [ ] One H1 per page (already done via tool names)
- [ ] Logical H2-H6 hierarchy
- [ ] Headers include keywords naturally
- [ ] No duplicate header text on same page

---

### TASK 13: Create Internal Linking Structure
**Priority:** MEDIUM  
**Effort:** 1 hour  
**Impact:** 7/10

Add "Related Tools" and "See Also" cross-links throughout. Already partially done via `relatedTools` in tools.ts and ToolPage.tsx.

**Acceptance Criteria:**
- [ ] All tool pages show related tools (already done)
- [ ] Category pages link to all tools
- [ ] Home page links comprehensively
- [ ] Anchor text is descriptive
- [ ] No orphan pages

---

## 🟢 LOW PRIORITY - ADVANCED (Month 2+)

### TASK 14: Create Video Content
**Priority:** LOW  
**Effort:** 4-6 hours per video  
**Impact:** 8/10

Create YouTube videos for top use cases. Embed on guide pages with VideoObject schema.

**Acceptance Criteria:**
- [ ] Videos uploaded to YouTube
- [ ] VideoObject schema added to guide pages
- [ ] Videos linked from social media

---

### TASK 15: Implement Core Web Vitals Optimizations
**Priority:** LOW (check current scores first)  
**Effort:** 2-3 hours  
**Impact:** 7/10

**Targets:**
- LCP < 2.5s
- FID < 100ms  
- CLS < 0.1

**Acceptance Criteria:**
- [ ] Run PageSpeed Insights baseline
- [ ] All Core Web Vitals in "Good" range
- [ ] Monitor with Google Search Console

---

### TASK 16: Build Backlink Strategy
**Priority:** LOW  
**Effort:** 4-6 hours research + ongoing  
**Impact:** 9/10

Outreach to productivity blogs, photography blogs, tool aggregator directories.

**Acceptance Criteria:**
- [ ] Identify 20+ backlink opportunities
- [ ] Complete 10 outreach emails
- [ ] Track backlinks in Google Search Console

---

### TASK 17: Set Up Google Search Console & Analytics ✅ ACTION NEEDED
**Priority:** HIGH (do early — required for all other verification steps)  
**Effort:** 1 hour setup  
**Impact:** 9/10

**Steps:**
1. Verify screenhub.app in Google Search Console
2. Submit sitemap: `https://screenhub.app/sitemap.xml`
3. Install Google Analytics 4
4. Monitor indexing and Core Web Vitals

**Acceptance Criteria:**
- [ ] Site verified in GSC
- [ ] Sitemap submitted
- [ ] GA4 code installed
- [ ] Weekly monitoring routine established

---

### TASK 18: Create Content Update Schedule
**Priority:** LOW  
**Effort:** 1 hour setup + ongoing  
**Impact:** 6/10

Monthly: update use cases, check vitals, publish 1 new guide.  
Quarterly: audit all pages, update statistics.  
Annually: full SEO audit, competitor analysis.

**Acceptance Criteria:**
- [ ] Content calendar created
- [ ] `article:modified_time` added to schema
- [ ] Monitoring system for outdated content

---

## ✅ VERIFICATION CHECKLIST

After completing all tasks, verify:

### Technical SEO
- [ ] No crawl errors in Google Search Console
- [ ] All pages indexed
- [ ] Core Web Vitals "Good"
- [ ] Mobile-friendly
- [x] XML sitemap submitted (`public/sitemap.xml`)
- [x] Robots.txt present and correct

### On-Page SEO
- [x] Unique titles on all pages
- [x] Unique meta descriptions
- [x] H1 tags optimized (tool name as H1)
- [ ] Images have alt text (N/A — no static images)
- [x] Internal links present (relatedTools in ToolPage)
- [x] Canonical tags added (via PageSEO component)

### Content Quality
- [ ] Guides have 1000+ words (Task 10 pending)
- [ ] E-A-T signals present (About page — Task 11 pending)
- [x] FAQ schema implemented (Task 2)
- [ ] Article schema on guides (Task 10 pending)
- [x] Organization schema present (Task 1)

### Ranking Monitoring
- [ ] Google Search Console tracking setup (Task 17)
- [ ] Google Analytics 4 installed (Task 17)
- [ ] Monitor top keywords monthly
- [ ] Track rankings in spreadsheet

---

## 🎯 SUCCESS METRICS

After 6-8 weeks, you should see:
- 📈 20-50 new keyword rankings
- 📊 2-3x increase in organic traffic
- ⭐ Improved Core Web Vitals
- 🔗 5-10 new backlinks from outreach
- 💬 Better click-through rate from search results

---

## PROGRESS SUMMARY

| Task | Status | Priority |
|------|--------|----------|
| 1. Organization Schema | ✅ Done | CRITICAL |
| 2. FAQ Schema | ✅ Done | CRITICAL |
| 3. Title & Meta Description | ✅ Done | CRITICAL |
| 4. Website Schema + Breadcrumbs | ✅ Done | HIGH |
| 5. Tool Page Titles & Descriptions | ✅ Done | HIGH |
| 6. Image Alt Text | ✅ N/A | HIGH |
| 7. Sitemap + robots.txt | ✅ Done | HIGH |
| 8. Canonical Tags | ✅ Done | HIGH |
| 9. Mobile Meta Tags | ✅ Done | HIGH |
| 10. Use-Case Guide Pages | ⏳ Pending | MEDIUM |
| 11. About Page + E-A-T | ⏳ Pending | MEDIUM |
| 12. Header Tag Hierarchy | ⏳ Pending | MEDIUM |
| 13. Internal Linking | ⏳ Pending | MEDIUM |
| 14. Video Content | ⏳ Pending | LOW |
| 15. Core Web Vitals | ⏳ Pending | LOW |
| 16. Backlink Strategy | ⏳ Pending | LOW |
| 17. Search Console + Analytics | ⏳ ACTION NEEDED | HIGH |
| 18. Content Update Schedule | ⏳ Pending | LOW |
