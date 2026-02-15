# Calendly Buttons Implementation Plan

## Summary
Add Calendly link (`https://calendly.com/arqummalik1`) to all consultation buttons with proper error handling.

## Files to Modify

### 1. `src/components/sections/CTA.tsx`
**Changes needed:**
- Add state management for modal (`useState`)
- Import `PopupModal` from `react-calendly`
- Add onClick handlers to both buttons
- Add error handling with try/catch
- Add PopupModal component

**Buttons to update:**
- "Get a Free Consultation" (line 116)
- "Schedule a Call" (line 124)

### 2. `src/components/layout/ConsultationCard.tsx`
**Changes needed:**
- Update URL from `https://calendly.com/arqummalik1/new-meeting` to `https://calendly.com/arqummalik1`
- Add error handling for modal

### 3. `src/components/layout/StickyCTA.tsx`
**Changes needed:**
- Update URL from `https://calendly.com/arqummalik1/new-meeting` to `https://calendly.com/arqummalik1`
- Add error handling for modal

### 4. `src/components/layout/ConsultationBanner.tsx`
**Changes needed:**
- Update URL from `https://calendly.com/arqummalik1/new-meeting` to `https://calendly.com/arqummalik1`
- Add error handling for modal

## Error Handling Approach
1. Wrap Calendly modal operations in try/catch
2. Add fallback: if PopupModal fails, open Calendly in new tab
3. Add loading states for better UX
4. Handle root element not found gracefully

## Implementation Sequence
1. First update CTA.tsx (main task - add functionality to two buttons)
2. Then update ConsultationCard.tsx (fix URL)
3. Then update StickyCTA.tsx (fix URL)
4. Then update ConsultationBanner.tsx (fix URL)
5. Verify all changes

## Calendly URL Pattern
Base URL: `https://calendly.com/arqummalik1`
(Removed `/new-meeting` suffix from all components for consistency)
