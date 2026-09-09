# BMW Cinematic Drive

Create a premium BMW-inspired ONE-PAGE landing website using my uploaded BMW logo, car video, and images as the exact assets.

IMPORTANT:

Do not modify, replace, crop, recolor, regenerate, or redesign my uploaded car video. Use the original uploaded video exactly as provided. The car, animation, colors, lighting, camera movement, and video output must remain unchanged.

1. OPENING — BMW LOGO

- Start with the uploaded BMW logo on a premium black/dark navy background.

- Show the logo as broken/floating pieces.

- When the user scrolls 3 times, smoothly zoom toward the logo while the broken pieces gradually join together.

- After the BMW logo is completely assembled, smoothly zoom through/transition from the logo into the Home section.

- Keep this opening cinematic and minimal.

2. HOME — MAIN 3D CINEMATIC EXPERIENCE

This is the ONLY section that should have a strong 3D/cinematic experience.

- Start the uploaded BMW car video exactly from the beginning.

- Keep the video completely unchanged.

- Pin the Home/hero scene to the viewport.

- User scrolling should control the complete video timeline.

- Map the entire uploaded video from the first frame to the last frame to the Home scroll progress.

- The entire video MUST play from beginning to end through scrolling.

- Do not skip, cut, freeze, loop, restart, or jump over any part of the video.

- Scroll down → video progresses forward.

- Scroll up → video reverses naturally.

- Fast scrolling → video should progress quickly but remain smooth.

- Slow scrolling → video should move slowly and precisely.

- Use smooth interpolation between scroll progress and video time so rapid mouse-wheel scrolling does not cause frame skipping or sudden jumps.

- Use requestAnimationFrame for smooth video scrubbing.

- Preload the video and wait for video metadata before controlling currentTime.

- Each scroll should create a smooth cinematic ZOOM/FORWARD feeling while the video progresses.

- The zoom/forward effect must feel responsive, smooth, and cinematic even during fast scrolling.

- The video must remain synchronized with the scroll position at all times.

- Do not allow rapid scroll events to make the video freeze, skip frames, restart, or become desynchronized.

- Keep the BMW car as the main center focus.

- Add only subtle cinematic lighting/zoom effects around the video without modifying the video itself.

- Do not add new car animations that change the original video.

The Home section should feel like a premium BMW automotive advertisement.

3. VIDEO END → NORMAL WEBSITE SCROLL

When the complete car video reaches the end:

- Smoothly release the pinned cinematic Home section.

- Only release the Home section after the video reaches its final frame.

- Transition from the zoom/scroll-controlled experience into normal vertical website scrolling.

- From this point onward, the website should behave like a normal one-page website.

Show these sections in order:

ABOUT → CARS → TECHNOLOGY → CONTACT

IMPORTANT:

Do NOT make these sections full 3D environments.

Keep them clean, elegant, premium, and lightweight.

4. ABOUT SECTION

Create a premium clean About section using my uploaded BMW images.

- Large BMW image

- Short premium BMW-related content

- Clean typography

- Dark navy/black background

- Subtle glassmorphism

- Soft blue lighting

- Simple fade/slide animations

- Minimal image hover effect

Do not create a heavy 3D scene here.

5. CARS SECTION

Create a clean premium Cars section.

- Use my uploaded BMW images/assets.

- Display selected BMW cars using elegant cards.

- Add model name and short information.

- Use subtle hover/scale effects.

- Smooth entrance animations.

- Premium dark UI.

Keep it mostly 2D with only subtle 3D hover effects.

6. TECHNOLOGY SECTION

Create a modern premium Technology section.

Show BMW-related technology/features with:

- BMW technology images

- Short descriptions

- Minimal glass cards

- Subtle blue glow

- Smooth scroll animations

- Clean technical typography

Do not make this section a full 3D environment.

7. CONTACT SECTION

Create a minimal luxury Contact section.

Include:

- Premium BMW visual

- Short contact message

- Email/contact information area

- Social links

- Clean CTA button

Keep the design simple, elegant, and spacious.

8. BACKWARD SCROLL EXPERIENCE

When the user scrolls upward:

- Normal sections should reverse naturally.

- Return from Contact → Technology → Cars → About.

- Return to the Home cinematic video.

- The uploaded video should continue backward according to scroll position.

- The video must reverse smoothly without skipping or jumping.

- Continue scrolling upward → return to the BMW logo sequence.

- The logo assembly animation should reverse smoothly.

The entire page must feel continuous when scrolling in both directions.

9. DESIGN SYSTEM

Use a premium BMW-inspired luxury theme:

- Deep black

- Dark navy blue

- Subtle BMW-style blue lighting

- Premium glassmorphism

- Realistic shadows

- Soft gradients

- Elegant white typography

- Large cinematic headings

- Minimal navigation

- Smooth transitions

- Premium spacing

- Fully responsive

IMPORTANT:

Use strong 3D/cinematic effects ONLY for the Opening + Home hero experience.

Keep:

About → Cars → Technology → Contact

clean, premium, lightweight, and mostly 2D with subtle motion.

10. NAVIGATION

Create a minimal transparent/floating navbar.

Navigation:

BMW Logo | HOME | ABOUT | CARS | TECHNOLOGY | CONTACT

- Navbar should remain elegant and minimal.

- Use glass/transparent styling.

- Smoothly highlight the active section.

- Clicking navigation items should smoothly scroll to the corresponding section.

- Keep the navbar visible without covering important content.

11. ASSETS

Use my uploaded BMW logo, car video, and images as the primary assets.

Store all uploaded assets correctly inside the project's public/assets folder.

Use proper relative paths.

Do NOT use temporary external URLs for my uploaded assets.

The project must work correctly after:

Git clone → npm install → npm run dev

All BMW videos and images must load without broken paths.

12. TECHNICAL IMPLEMENTATION

Use:

- React

- Three.js only where necessary for the Home/hero cinematic experience

- GSAP

- GSAP ScrollTrigger

- Lenis smooth scrolling

- requestAnimationFrame for smooth video scrubbing

Use ScrollTrigger to:

- Pin the Home hero

- Connect the COMPLETE scroll progress to the COMPLETE uploaded video timeline

- Map 0% scroll to the first video frame

- Map 100% scroll to the final video frame

- Create smooth zoom/forward movement

- Make fast scrolling responsive while keeping video playback smooth

- Reverse the video when scrolling upward

- Prevent frame skipping and timeline jumps

- Release the pinned hero only when the video reaches the end

- Continue with normal vertical scrolling for About, Cars, Technology, and Contact

IMPORTANT VIDEO BEHAVIOR:

Fast scroll = fast but smooth video progression.

Slow scroll = slow and precise video progression.

0% Home scroll = first frame of the video.

100% Home scroll = last frame of the video.

Every frame of the uploaded video must remain reachable through scrolling.

Do not compress, skip, cut, loop, restart, or shorten the video timeline.

Optimize video loading and performance for mobile and desktop.

Avoid unnecessary heavy 3D elements in the normal sections.

FINAL EXPERIENCE:

Broken BMW Logo

↓

3 Scrolls → Logo Pieces Join

↓

Cinematic Zoom

↓

Home

↓

Uploaded BMW Video Starts From First Frame

↓

Fast/Slow Scroll → Smooth Video Progress + Cinematic Zoom

↓

Complete Video Plays Until Final Frame

↓

Normal Vertical Scroll

↓

ABOUT

↓

CARS

↓

TECHNOLOGY

↓

CONTACT

The final website should feel like a premium futuristic BMW automotive advertisement combined with a clean luxury one-page website.

MOST IMPORTANT:

The uploaded BMW video must remain completely unchanged. Only control its playback position through scroll. The scroll interaction must be fast, responsive, smooth, and continuous, with the entire video timeline playing from the first frame to the final frame.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/326573bf-2f39-4810-a09b-e428bf350847).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
