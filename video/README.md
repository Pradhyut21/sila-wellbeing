# SILA narrated demo source

Editable HyperFrames composition for the working SILA prototype. The film uses actual application screenshots, eight locally generated narration segments and burned-in English subtitles.

- Duration: **145.916 seconds** (under three minutes).
- Canvas: **1920 × 1080**, 24 fps.
- Narration: local Kokoro-82M, `af_heart`, speed `1.04`; no cloned personal voice and no music.
- Subtitles: estimated phrase timing, supplied as SRT and WebVTT as well as burned into the video.
- All participant data, referrals and outcomes shown are synthetic. No live clinical response or healthcare integration is represented.

## Preview and render

Use Node.js 22+ and FFmpeg on the PATH. Install the pinned renderer:

```sh
npm install
npm run check
npm run dev
# or: npx hyperframes@0.8.181 preview --background
npm run render -- --quality delivery --fps 24 --workers 1 --low-memory-mode --output SILA-demo.mp4
```

Open the Studio URL printed by the preview command. Its timeline supports editing text, media and clip timing. `index.html` mounts the eight editable scenes in `compositions/frames/`; each scene registers one seekable timeline. Audio and subtitle clips are owned by the root composition. `SCRIPT.md`, `STORYBOARD.md` and `frame.md` record the content and visual direction.

## Asset provenance and rights

- Screenshots in `assets/*.png`: captured from this project's SILA web interface using only synthetic session state. They contain WHO-5 instrument content, which retains the separate WHO content licence stated in the main project's notices.
- `assets/voice/*.wav`: generated locally with [Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M), voice `af_heart`; no source model weights are distributed here.
- [Inter](https://github.com/rsms/inter), [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono), and [Source Serif](https://github.com/adobe-fonts/source-serif): upstream Google Fonts files under the SIL Open Font License. Exact font notices are retained alongside the files in `assets/fonts/*-OFL.txt`.
- `assets/gsap.min.js`: GSAP 3.14.2; original copyright and licence header retained. Use is governed by the [GSAP standard licence](https://gsap.com/standard-license/).
- HyperFrames renderer: version 0.8.181, Apache-2.0 upstream package. The original SILA composition HTML/CSS/JavaScript is covered by the main project's MIT licence, excluding third-party assets and questionnaire content.

The composition was checked for lint, runtime, layout and contrast findings before rendering. These technical checks do not establish clinical effectiveness or regulatory readiness.
